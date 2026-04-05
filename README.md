# unwindGTM — Website

**Live site:** https://unwindgtm.com  
**Hosted on:** GitHub Pages  
**Domain:** unwindgtm.com

---

## 📁 File Structure

```
unwindgtm/
├── index.html                  ← Homepage
├── README.md                   ← This file
│
├── pages/                      ← All site pages
│   ├── about.html              ← About Us / Founder profiles
│   ├── gtm-offerings.html      ← GTM Offerings (7 offerings)
│   ├── ai-offerings.html       ← AI Offerings page
│   ├── resources.html          ← Resources (blog, downloads, webinars, community)
│   └── work-with-us.html       ← Work With Us / Contact page
│
└── assets/
    ├── css/
    │   └── main.css            ← Global styles — brand colors, fonts, layout
    ├── js/
    │   ├── nav-root.js         ← Navigation & footer for index.html (root)
    │   └── nav.js              ← Navigation & footer for pages/ directory
    └── images/                 ← ✏️ ADD FOUNDER PHOTOS HERE
        ├── debasish.jpg
        ├── vaibhav.jpg
        └── aishwarya.jpg
```

---

## 🎨 Brand Colors

| Color  | Hex       | Usage                              |
|--------|-----------|------------------------------------|
| Blue   | `#1A56DB` | Primary — nav, links, buttons, tags|
| Orange | `#F97316` | Accent — CTAs, highlights, borders |
| White  | `#FFFFFF` | Background, cards, text on dark    |
| Navy   | `#0F1C3F` | Dark sections, hero backgrounds    |

---

## ✏️ How to Update Content

### Add Founder Photos
Drop photos named `debasish.jpg`, `vaibhav.jpg`, and `aishwarya.jpg` into `assets/images/`. The site will automatically display them in the About page and consultation pages.

### Add Calendar Links
Search for `<!-- CALENDAR EMBED -->` (or `Embed Calendly link`) in the `pages/work-with-us.html` file and replace with your Calendly/Cal.com embed.

### Update LinkedIn URLs
In `pages/about.html` and `pages/work-with-us.html`, replace `https://www.linkedin.com/in/` with each founder's actual LinkedIn profile URL.

### Update Email
Replace `founders@unwindgtm.com` with your actual email address throughout all pages if needed.

### Change Colors or Fonts
Edit `assets/css/main.css` — all design tokens are at the top in `:root { ... }`.  
Key variables:
- `--color-primary` → Blue (#1A56DB)
- `--color-accent` → Orange (#F97316)
- `--font-display` → Sora (headings)
- `--font-body` → DM Sans (body copy)

---

## 🚀 GitHub Pages Deployment

### Initial Setup
1. Push this repository to GitHub
2. Go to **Settings → Pages**
3. Set source to **Deploy from branch: main, / (root)**
4. Your site will be live at `https://YOUR_USERNAME.github.io/REPO_NAME`

### Custom Domain (unwindgtm.com)
1. In **Settings → Pages → Custom domain**, enter `unwindgtm.com`
2. Add a `CNAME` file at the root with content: `unwindgtm.com`
3. Update your domain DNS:
   - Add `A` records pointing to GitHub Pages IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Add `CNAME` record: `www` → `YOUR_USERNAME.github.io`
4. Enable **Enforce HTTPS** in Pages settings

### Deploy Command (if using CLI)
```bash
git add .
git commit -m "Update website content and brand colors"
git push origin main
```

---

## 📋 Pages Checklist

- [x] Home (`index.html`) — Hero, Pain points, How We Work, 9 Pillars, Offerings preview, CTA
- [x] About Us (`pages/about.html`) — Three founder bios, What Makes Us Different, Operating Principles
- [x] GTM Offerings (`pages/gtm-offerings.html`) — 7 offerings with pain hooks and deliverables
- [x] AI Offerings (`pages/ai-offerings.html`) — 3 AI offerings, philosophy, engagement options
- [x] Resources (`pages/resources.html`) — Blog previews, downloadables, webinars, community
- [x] Work With Us (`pages/work-with-us.html`) — 3 engagement models, contact form, FAQ

### TODO
- [ ] Add founder photos to `assets/images/`
- [ ] Update LinkedIn profile URLs for all three founders
- [ ] Add Calendly/Cal.com embed links
- [ ] Publish initial blog posts
- [ ] Launch downloadable resources (Revenue Engine Scorecard, etc.)
