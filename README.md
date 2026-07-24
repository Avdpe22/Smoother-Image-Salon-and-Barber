# Smoother Image Barber Salon — Website

Static site. No build step, no dependencies, no framework. Five pages plus a 404.

---

## 1. What to fill in before launch

Everything below is a placeholder. Nothing here is fake-but-presented-as-real; each item is also flagged visibly on the page itself.

| # | File | What to replace |
|---|------|-----------------|
| 1 | `assets/js/config.js` | **All booking links** and the Instagram / Facebook / TikTok / Google URLs. This is the only file you edit to change links site-wide. |
| 2 | `barbers.html` | Five placeholder bios. Real headshots too — currently every barber uses a general shop photo. |
| 3 | `services.html` | Service *names and descriptions* (prices and durations are real, pulled from Booksy). Also decide whether to keep or delete the "Proposed premium tier" section. |
| 4 | `about.html` | Shop history and founding details. |
| 5 | `robots.txt`, `sitemap.xml` | Replace `REPLACE-WITH-YOUR-DOMAIN` with your real URL. |
| 6 | `index.html` | The `<link rel="canonical">` and `og:image` URL. |

---

## 2. Deploy to GitHub Pages

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

**Route B — GitHub Actions.** Only if you prefer it. `.github/workflows/deploy.yml` is included and ready. In Settings → Pages, set Source to **GitHub Actions** instead. Every push to `main` then redeploys automatically.

### Updating the site later
Edit a file directly on github.com (click the file, then the pencil icon, then Commit), or push a new commit. Changes go live in about a minute. Hard-refresh with `Ctrl/Cmd + Shift + R` if you still see the old version.

---

## 3. Custom domain (optional)

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

## 4. File structure

```
index.html          Home — includes the Chair Rail availability graph
barbers.html        Five barbers, individual booking links
services.html       Current menu + proposed premium tier
about.html          Shop story
contact.html        Address, hours, map, link tree
404.html            Custom not-found page

.nojekyll           Serves files as-is (do not delete)
robots.txt          Search engine directives
sitemap.xml         Page index for search engines
site.webmanifest    Mobile "add to home screen" metadata
CNAME.example       Rename to CNAME when using a custom domain

.github/workflows/deploy.yml   Optional Actions deploy

assets/
  css/app.css       Entire design system, one file
  js/config.js      >>> ALL booking + social links live here <<<
  js/app.js         Nav, scroll reveals, Chair Rail animation
  img/              Logo, favicons, shop photos
```

---

## 5. Design notes

- **Palette** is drawn from lounge materials — brass, oxblood, smoked charcoal, bone — rather than traditional barber-pole primaries. The red/white/blue survives only as the 3px hairline under the header.
- **Type** is Archivo (display), Instrument Sans (body), JetBrains Mono (labels, times, prices).
- **Signature element** is the Chair Rail on the home page: the shop's real two-block daily schedule drawn to scale across the week. It doubles as the booking entry point.
- Responsive to mobile, keyboard-focus visible, `prefers-reduced-motion` respected.
