# web-technics.com redirects

`web-technics.com` is a legacy mirror of the canonical site at
`web-technics.services`. The live host identifies itself as Nginx, while this
repository contains no deployment workflow or server configuration. The
primary redirect configuration is therefore provided as
`nginx/web-technics.com.conf`.

## Install on Nginx

1. Copy `nginx/web-technics.com.conf` into the server's Nginx `http` context,
   commonly `/etc/nginx/conf.d/web-technics.com.conf`.
2. Confirm the two TLS certificate paths match the existing certificate.
3. Run `nginx -t`.
4. Reload Nginx.
5. Verify the apex, `www`, and a nested path all return `301` with the same path
   and query string on `https://web-technics.services`.

The key directive is:

```nginx
return 301 https://web-technics.services$request_uri;
```

Do not redirect to a fixed home page: `$request_uri` preserves both the path
and query string.

## Apache alternative

If deployment later moves behind Apache, place this `.htaccess` content in the
document root:

```apache
RewriteEngine On
RewriteCond %{HTTP_HOST} ^(?:www\.)?web-technics\.com$ [NC]
RewriteRule ^ https://web-technics.services%{REQUEST_URI} [R=301,L,NE]
```

## Static fallback

The HTML files remain in place because this repository cannot activate the
server configuration by itself. They retain cross-domain canonicals and now
include consent-gated GA4 measurement as an interim measure. Analytics runs
only while a fallback page is served; after the Nginx redirect is deployed,
the browser will leave before any page script executes.
