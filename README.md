# Smoother Image Barber Salon — Website

Static site. No build step, no dependencies, no framework. Five pages plus a 404.

---

## 1. What to fill in before launch

| # | File | What to replace |
|---|------|-----------------|
| 1 | `assets/js/config.js` | **All booking links** and the Instagram / Facebook / TikTok / Google URLs. This is the only file you edit to change links site-wide. |
| 2 | `barbers.html` | Five placeholder bios. Real headshots too — currently every barber except one uses a general shop photo. |
| 3 | `services.html` | Service *names and descriptions* (prices and durations are real, pulled from Booksy). Also decide whether to keep or delete the "Proposed premium tier" section. |
| 4 | `about.html` | Shop history and founding details. |
| 5 | `robots.txt`, `sitemap.xml` | Replace `REPLACE-WITH-YOUR-DOMAIN` with your real URL. |
| 6 | `index.html` | The `<link rel="canonical">` URL. |
| 7 | `assets/img/shop-4.jpg` | **Currently a duplicate of shop-3.jpg.** Only four real shop photos were supplied (shop-1, shop-2, shop-3, shop-5) — a real fifth photo is needed here, since the site references five image slots (Jordan's chair, the home page collage, and the About page gallery). |

---

## 2. What's new in this pass

- **New logo** applied as the nav mark, footer mark, and all favicons (32×32, 16×16, apple-touch-icon). Background was removed and the mark was auto-cropped from the uploaded logo file.
- **New social preview image** (`assets/img/og-image.jpg`, 1200×630) — this is what shows up when the site link is shared on iMessage, Slack, X, Facebook, etc. It's now wired into `og:image` / `twitter:image` on every page, not just the home page.
- **Popular Services carousel** added to the home page, just below the hero. Auto-advances every 6 seconds, pauses on hover, with arrow and dot navigation. Uses the four real shop photos supplied, each paired with a service name, price, and the shop's address/phone.
- **Real shop photography** replaces the old placeholder image references across the home, barbers, and about pages.
- **`assets/js/config.js`** and **`assets/js/app.js`** were rebuilt from scratch (they were referenced in the HTML but not included in earlier files). `config.js` is the single file to edit for every booking and social link; `app.js` handles the mobile menu, scroll reveals, the Chair Rail draw-in animation, and the new carousel.
- **404.html** now uses the same relative asset paths as every other page (it previously used absolute `/assets/...` paths, which only work if the site is deployed at a domain root rather than a subpath like `username.github.io/smoother-image/`).

---

## 3. Deploy to GitHub Pages

**Route A — deploy from a branch. Simplest. Use this one.**

1. Create a GitHub account at github.com if you don't have one.
2. Click **+** (top right) → **New repository**.
   - Name it `smoother-image` (or anything).
   - Set it to **Public**. Pages requires public on free accounts.
   - Do *not* add a README, .gitignore, or license — the repo must start empty.
   - Click **Create repository**.
3. Upload the files. Two options:

   **Drag and drop (no command line):**
   - On the empty repo page, click **uploading an existing file**.
   - Unzip this project on your computer, select *everything inside* the folder (not the folder itself), and drag it into the browser.
   - Important: `.nojekyll` is a hidden file. On Mac press `Cmd + Shift + .` in Finder to reveal hidden files before selecting; on Windows enable "Hidden items" in File Explorer's View tab.
   - Scroll down, click **Commit changes**.

   **Or via command line:**
   ```bash
   cd path/to/smoother-image-website
   git init
   git add -A
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/smoother-image.git
   git push -u origin main
   ```
4. In the repo, go to **Settings** → **Pages** (left sidebar).
5. Under **Build and deployment** → **Source**, choose **Deploy from a branch**.
6. Set branch to **main** and folder to **/ (root)**. Click **Save**.
7. Wait 1–3 minutes. Refresh the Pages settings screen and your live URL appears at the top:
   `https://YOUR-USERNAME.github.io/smoother-image/`

### Updating the site later
Edit a file directly on github.com (click the file, then the pencil icon, then Commit), or push a new commit. Changes go live in about a minute. Hard-refresh with `Ctrl/Cmd + Shift + R` if you still see the old version.

---

## 4. Custom domain (optional)

1. Buy a domain (Namecheap, Cloudflare, Porkbun — roughly $10–15/year).
2. Rename `CNAME.example` to exactly `CNAME` (no extension) and put your bare domain inside it, one line, e.g. `smootherimagebarbersalon.com`.
3. At your domain registrar, add these DNS records:

   | Type | Host | Value |
   |------|------|-------|
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |
   | CNAME | www | YOUR-USERNAME.github.io |

4. In Settings → Pages → **Custom domain**, enter the domain and Save.
5. Once it validates (can take up to 24 hours), tick **Enforce HTTPS**.

---

## 5. File structure

```
index.html          Home — Popular Services carousel + Chair Rail availability graph
barbers.html        Five barbers, individual booking links
services.html       Current menu + proposed premium tier
about.html          Shop story
new-here.html       First-time guest guide: booking, what to expect, policy summary
policy.html         Cancellation, no-show, and arrival policy
contact.html        Address, hours, map, link tree
404.html            Custom not-found page

.nojekyll           Serves files as-is (do not delete)
robots.txt          Search engine directives
sitemap.xml         Page index for search engines
site.webmanifest    Mobile "add to home screen" metadata

assets/
  css/app.css       Entire design system + carousel styles, one file
  js/config.js      >>> ALL booking + social links live here <<<
  js/app.js         Nav, scroll reveals, Chair Rail animation, carousel
  img/
    icon-mark.png         Nav + footer logo mark (from new logo)
    favicon-32.png        32×32 favicon
    favicon-16.png        16×16 favicon
    apple-touch-icon.png  180×180 home-screen icon
    og-image.jpg          1200×630 social link-preview image
    shop-1.jpg .. shop-5.jpg   Real shop photography (shop-4.jpg is a placeholder duplicate — see section 1)
```

---

## 6. Design notes

- **Palette** is drawn from lounge materials — brass, oxblood, smoked charcoal, bone — rather than traditional barber-pole primaries. The red/white/blue survives only as the 3px hairline under the header, and again as a subtle nod in the social preview image.
- **Type** is Archivo (display), Instrument Sans (body), JetBrains Mono (labels, times, prices).
- **Signature elements** are the Chair Rail on the home page (the real two-block daily schedule drawn to scale) and the new Popular Services carousel, both built from real, shop-specific content rather than generic stock imagery.
- Responsive to mobile, keyboard-focus visible, `prefers-reduced-motion` respected.
