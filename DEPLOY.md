# Manual VPS deployment

`web-technics.com` is updated manually. Upload the files below to the existing
document root while preserving their relative paths.

## Runtime files to upload

```text
about.html
analytics.js
app.js
consent.js
contact.html
ecommerce-development-cambodia.html
index.html
kampot-landing-page.html
ngo-web-design-cambodia.html
portfolio.html
privacy.html
robots.txt
seo-services-cambodia.html
server-status.html
server-status.php
services.html
sitemap.xml
styles.css
web-design-cambodia.html
assets/media/          (whole directory, 19 files, ~1.9 MB)
```

`assets/media/` is new and does not yet exist on the VPS. Every image on the
site is now self-hosted from that directory, so if it is not uploaded the pages
will render with broken images. Upload the directory as a whole rather than
picking individual files.

Do not deploy `REDIRECTS.md` or `nginx/web-technics.com.conf`; both were
removed. Do not install a blanket domain redirect. Every public `.com` route
must continue returning its own `200` response.

The `seo/` directory and `nginx/moved-routes.conf` are repository build tools,
not runtime files. `nginx/moved-routes.conf` intentionally contains no redirect
directives because `.com` has no moved routes.

## Post-upload checks

1. Confirm `/`, `/services.html`, `/kampot-landing-page.html`, and
   `/privacy.html` return `200`.
2. Confirm each page canonical and `og:url` use `https://web-technics.com`.
3. Confirm `/robots.txt` references
   `https://web-technics.com/sitemap.xml`.
4. Confirm the sitemap contains eleven indexable `.com` URLs and no
   `.services` URLs.
5. Reject analytics and confirm no Google Analytics request is made; then
   accept and confirm property `G-G65WTVT0JR` loads.
