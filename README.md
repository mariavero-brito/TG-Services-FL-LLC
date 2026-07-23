# TG Services FL

A responsive marketing website for TG Services FL, a landscaping and garden design business serving Central Florida.

**Live site:** [https://www.tgservicesfl.com](https://www.tgservicesfl.com)

## Overview

Five-page marketing site covering the business's services, process, portfolio, and contact/quote request flow, built with plain HTML, CSS, and JavaScript. Deployed automatically to GitHub Pages via GitHub Actions on every push to `main`, and served on a custom domain (`tgservicesfl.com`, registered through Porkbun with DNS managed via Cloudflare).

## Pages

- `index.html` — Home
- `services.html` — Services offered (garden design, maintenance, plant replacement)
- `process.html` — Step-by-step client process
- `portfolio.html` — Project photo carousel
- `contact.html` — Contact info and quote request form
- `404.html` — Custom not-found page

## Features

- **Fully responsive layout** with a custom mobile hamburger menu (no framework, vanilla JS toggle)
- **Working contact form** powered by [EmailJS](https://www.emailjs.com/), sending quote requests directly to the business inbox with no backend required
- **Accessible markup**: descriptive `alt` text on all images, `aria-label`s on icon-only buttons, `aria-current="page"` on the active nav link, tap-to-call/tap-to-email links
- **SEO**: per-page meta descriptions, Open Graph and Twitter Card tags for link previews, `sitemap.xml` and `robots.txt`, and `LandscapingBusiness` JSON-LD structured data for local search
- **Custom domain + DNS** configured for both apex (`tgservicesfl.com`) and `www` subdomains

## Tech stack

- HTML5 / CSS3 (custom properties for theming)
- Vanilla JavaScript (`index.js`) — mobile nav toggle, portfolio carousel, EmailJS form submission
- [EmailJS](https://www.emailjs.com/) for contact form delivery
- Jekyll (via GitHub's `actions/jekyll-build-pages`) for the GitHub Pages build step
- GitHub Actions for CI/CD deployment

## Project structure

```
├── index.html
├── services.html
├── process.html
├── portfolio.html
├── contact.html
├── 404.html
├── style.css
├── index.js
├── style-guide.md          # color palette, typography reference
├── CNAME                   # custom domain config for GitHub Pages
├── robots.txt
├── sitemap.xml
├── images/
│   ├── icons/               # logo, nav/contact icons
│   └── images/               # project & content photos
└── .github/workflows/       # GitHub Actions deploy config
```

## Local development

Since this site deploys through a custom GitHub Actions workflow (rather than GitHub's default Pages build), Jekyll's `{% include %}`/Liquid templating isn't currently used in the page source, pages are plain static HTML, so any local static server (e.g. VS Code's Live Server extension, or `python3 -m http.server`) will render them accurately. No build step is required for local preview.

## Deployment

Pushing to `main` triggers `.github/workflows/jekyll-gh-pages.yml`, which builds the site with Jekyll and publishes it to GitHub Pages. DNS is configured at the registrar (Porkbun) with A/AAAA records pointing to GitHub Pages' IPs for the apex domain, and a CNAME record for `www` pointing to the GitHub Pages hostname.

## Credits

Designed and built by Maria Brito Noguera for TG Services FL LLC.
