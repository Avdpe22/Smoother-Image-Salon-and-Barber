# Smoother Image Barber Salon — Website

Static site. No build step, no dependencies, no framework. Seven pages plus a 404.

---

## 1. What changed in this pass

**Booking is now wired to real, live Booksy books.** It was placeholder URLs before.

- `assets/js/config.js` now points at the two verified Booksy listings. One file still controls every booking and social link site-wide.
- **Mike Neal** → Booksy `387165` (5.0, 251 reviews, full menu). This is also the `general` fallback.
- **Twuan Looney** → Booksy `1658389` (5.0, 26 reviews). His profile says he cuts **after 4pm only**, which is now reflected on his barber card and in the Chair Rail note.
- **Jordan, Shenique, Creshawn** have no Booksy book. Their buttons fall through to the main shop page. Add their URLs to `config.js` when they have one.

**Two dead Booksy listings were found. Do not link them.**

| ID | Name | Problem |
|----|------|---------|
| `1562002` | Smoother Image Barber & Beauty | No services, wrong address ("blue ridge hwy"), photo file is named `leyvas-barber-shop` — recycled from a previous tenant |
| `1423642` | Smoother image | No services, city field says Kansas City, name lowercase |

Both still rank in Booksy's Grandview directory, so customers can land on an empty page. **Claim and delete them, or ask Booksy support to merge them into `387165`.** Highest-value 20 minutes on this list.

**The no-show fee is gone.** `policy.html` previously advertised a 100% no-show charge that nothing enforced. That's now a short page that asks rather than threatens, with matching copy on `new-here.html`. If you later turn on Booksy Deposits or Cancellation Fees, the fee language can come back.

**Real pricing replaced the placeholder menu.** `services.html`, the homepage carousel, and the New Here favorites now use the actual service names and prices from Mike's Booksy listing. A note on the menu makes clear each barber prices their own chair (Twuan's haircut + beard is $40, not $35).

**Spelling:** the site said "Twaun"; his own Booksy profile says **Twuan Looney**. Changed everywhere including the `data-book` key.

**Social links** are real for Instagram (`@smootherimage95`), Facebook, and Snapchat. TikTok and Google Business have no URL yet — `app.js` now **hides** unconfigured social links instead of rendering a dead `#`.

---

## 2. What still needs you

| # | File | What to do |
|---|------|-----------|
| 1 | — | Delete/merge the two dead Booksy listings (see table above) |
| 2 | `assets/img/barber-*.jpg` | **AI-generated stand-ins.** The five barber cards do not show these barbers. Replace with real headshots — customers pick a chair by the face. Any 3:4 portrait crop works |
| 3 | `assets/js/config.js` | Booking URLs for Jordan, Shenique, Creshawn. TikTok and Google Business URLs |
| 4 | `barbers.html` | Five real bios (currently marked placeholder) and individual headshots |
| 5 | `about.html` | Real shop history and founding year |
| 6 | `robots.txt`, `sitemap.xml` | Replace `REPLACE-WITH-YOUR-DOMAIN` |
| 7 | `index.html` | The `<link rel="canonical">` URL |
| 8 | `services.html` | Decide whether to keep or delete the "Proposed premium tier" section — it's a proposal, not a live menu |

Also worth fixing **on Booksy, not here**: Mike's listing stores the Instagram URL malformed (`https://smootherimage95` with no domain).

---

## 3. Deploy to GitHub Pages

1. Create a repo at github.com — **Public**, empty (no README, no .gitignore).
2. Upload everything *inside* this folder, not the folder itself.
   - `.nojekyll` is hidden. Mac: `Cmd + Shift + .` in Finder. Windows: enable "Hidden items" in File Explorer's View tab.
   - Or by command line:
     ```bash
     cd path/to/smoother-image-website
     git init && git add -A && git commit -m "Initial site"
     git branch -M main
     git remote add origin https://github.com/YOUR-USERNAME/smoother-image.git
     git push -u origin main
     ```
3. **Settings → Pages → Source → Deploy from a branch**, branch `main`, folder `/ (root)`, Save.
4. Wait 1–3 minutes. Live at `https://YOUR-USERNAME.github.io/smoother-image/`.

To update later: edit the file on github.com (pencil icon → Commit), or push. Hard-refresh with `Ctrl/Cmd + Shift + R`.

### Custom domain (optional)

Rename `CNAME.example` to exactly `CNAME` and put your bare domain inside, one line. Then at your registrar:

| Type | Host | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | YOUR-USERNAME.github.io |

Settings → Pages → Custom domain, enter it, Save. Tick **Enforce HTTPS** once it validates (can take 24 hours).

---

## 4. File structure

```
index.html          Home — services carousel + Chair Rail availability graph
barbers.html        Five barbers, individual booking links
services.html       Live menu (Mike's chair) + proposed premium tier
about.html          Shop story
new-here.html       First-time guest guide
policy.html         Arrival policy — short, no fees
contact.html        Address, hours, map, link tree
404.html            Custom not-found page

.nojekyll           Serves files as-is (do not delete)
CNAME.example       Rename to CNAME for a custom domain
robots.txt          Search engine directives
sitemap.xml         Page index for search engines
site.webmanifest    Mobile "add to home screen" metadata

assets/
  css/app.css       Entire design system, one file
  js/config.js      >>> ALL booking + social links live here <<<
  js/app.js         Nav, scroll reveals, Chair Rail animation, carousel
  img/
    icon-mark.png         Nav + footer logo mark
    favicon-32.png        favicon-16.png
    apple-touch-icon.png  180×180 home-screen icon
    icon-192.png          icon-512.png  (PWA manifest icons)
    og-image.jpg          1200×630 social link-preview image

    shop-1.jpg   REAL — loc trim with shears      (carousel 4, collage, about)
    shop-2.jpg   REAL — beard + hairline shape-up (hero, carousel 2, about)
    shop-3.jpg   REAL — comb and clipper work     (carousel 1, collage)
    shop-5.jpg   REAL — fade and neckline finish  (carousel 3, collage, about)

    shop-4.jpg   AI  — wide shot of the floor     (about gallery)
    room-1.jpg   AI  — chair lit for filming      (about gallery)
    room-2.jpg   AI  — neckline detail            (home collage)
    barber-mike.jpg / -twuan / -jordan / -creshawn   AI portrait stand-ins
    barber-shenique.jpg   AI work sample — no portrait was available
```

### Which photos are real

Four images are genuine shop photography: `shop-1`, `shop-2`, `shop-3`, `shop-5`. They carry the hero,
the whole services carousel, and most of the collages — the site leads with real work everywhere it matters.

Everything prefixed `barber-`, plus `shop-4`, `room-1` and `room-2`, is AI-generated. It fills the layout
so nothing looks broken, and the barbers and About pages both say so on the page. The barber portraits are
the ones to replace first: showing a customer a face that isn't the barber they're booking is the one
placeholder here with a real cost attached.

---

## 5. Design notes

- **Palette** from lounge materials — brass, oxblood, smoked charcoal, bone — rather than barber-pole primaries. The red/white/blue survives as the 3px hairline under the header and a band on the social preview.
- **Type** is Archivo (display), Instrument Sans (body), JetBrains Mono (labels, times, prices).
- **Signature element** is the Chair Rail on the home page: the real two-block daily schedule drawn to scale.
- Responsive, keyboard-focus visible, `prefers-reduced-motion` respected.
