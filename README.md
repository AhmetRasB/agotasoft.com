# AgotaSoft.com

Public marketing site for AgotaSoft, plus a PHP + MySQL admin CMS that publishes JSON the site reads at runtime.

**Do not change the visual design from the admin.** The CMS only edits copy, lists, and settings. New public pages or sections are not part of this stack.

## Stack

| Layer | What it is |
| --- | --- |
| Public site | Next.js 14 App Router in `web/` (Turkish AgotaSoft copy). **Static export is enabled** (`output: "export"` in `web/next.config.mjs`) so shared hosting does **not** need Node. |
| Admin CMS | PHP 8.1+ in `admin/` (login, dashboard, settings, account, messages, generic CRUD, publish JSON) |
| Public APIs | `api/content.php` (JSON), `api/contact.php` (demo form) |
| Database | MySQL / MariaDB — schema + default admin in `database/install.sql` |
| Published content | `web/public/data/site.json` locally; `data/site.json` on the live document root after Publish |

The Next app already falls back to `web/lib/cms/defaults.json` if live JSON is missing, so an empty CMS still looks like the current site.

## Default admin login

After importing `database/install.sql`:

- Email: `admin@agotasoft.com`
- Password: `ChangeMeNow!2026`

**Change this immediately** at `/admin/account`.

## Local development

You need **two processes**: Next.js for the public site, PHP for admin + APIs.

### 1. MySQL

Create a database (example name `agotasoft_web`) and import `database/install.sql` in phpMyAdmin or:

```bash
mysql -u root -p agotasoft_web < database/install.sql
```

### 2. PHP CMS env

```bash
cp .env.example .env
```

Set `DB_*` to match your local MySQL. Leave `APP_DEBUG=true` and `SESSION_SECURE=false` locally.

```bash
cd /Users/ahmetrasb/Projects/agotasoft.com
cd admin && composer install && cd ..
./start-cms.sh
```

`cms-router.php` lives in **this repo**, not in AgotaSoftPA. If the terminal cwd is `AgotaSoftPA` (Cursor’s default), `php -S 127.0.0.1:8080 cms-router.php` fails with `Failed opening required 'cms-router.php'`. Always `cd` here first, or use `./start-cms.sh` (absolute path). Equivalent:

```bash
cd /Users/ahmetrasb/Projects/agotasoft.com
php -S 127.0.0.1:8080 "$(pwd)/cms-router.php"
```

Open [http://127.0.0.1:8080/admin](http://127.0.0.1:8080/admin), log in, then click **Yayınla** so `web/public/data/site.json` is written.

### 3. Next.js public site

```bash
cd web
cp .env.example .env.local
npm install
npm run dev
```

`.env.local` should contain:

```
NEXT_PUBLIC_CMS_API=http://127.0.0.1:8080
```

That points the contact form and live JSON fallback at the PHP server. Open [http://localhost:3000](http://localhost:3000).

Without `NEXT_PUBLIC_CMS_API`, the site still renders from `defaults.json` / `/data/site.json`; the contact form will not reach PHP until the API origin is set (or until both sit on the same domain in production).

## What the CMS drives

Homepage (already wired): hero, header/nav, footer, services, testimonials, partners/logo slider, why-choose, CTA.

Also CMS-driven (same markup, fallbacks to current copy):

- Hakkımızda `/about-us`
- Çözümler `/service`
- ERP `/erp`, CRM `/crm`, Ön Muhasebe `/pre-accounting`, LMS `/lms`
- Fiyat `/pricing`
- Ekip `/team`
- Portföy `/portfolio` and `/single-portfolio`
- Blog `/blog` and `/single-blog`
- FAQ `/faq`
- Kariyer `/career` and `/single-career`
- Kullanım şartları `/terms-and-condition`
- İletişim `/contact-us` (copy, map, Calendly, form → `api/contact.php`)

Admin CRUD types: nav, partner, service, testimonial, pricing, team, portfolio, blog, faq, career, page.

Template-only demos (`/one-page/*`, `/multi-page/*`, auth, coming-soon, error-page) are unchanged leftovers and are not part of the AgotaSoft sitemap.

## cPanel / Plesk shared hosting

Shared hosting has **no Node**. Build the public site on your laptop, then upload static files + PHP.

### 1. Build Next locally

```bash
cd web
npm install
npm run build
```

`output: "export"` writes **`web/out/`**. That folder is the public site (HTML, `_next/`, `images/`, `data/site.json`, …). Trailing slashes are on (`/about-us/index.html`).

### 2. Upload list (document root, usually `public_html/`)

Upload **the contents of** `web/out/` into the document root (so `index.html` is at `/`).

Then also upload these from the repo root (do not put them inside `_next`):

1. `admin/` (including `admin/vendor/` after `composer install --no-dev` on a machine with PHP)
2. `api/`
3. `database/` (optional after import; keep it off the web if you can)
4. `.htaccess` from this repo root
5. `storage/` (empty `sessions/` and `logs/` with `.gitkeep`)
6. `.env` created **on the server** from `.env.example` — **never upload a git-tracked secrets file**

Do **not** upload: `web/` source, `node_modules/`, `.git/`, local `.env`.

After upload the document root should look like:

```
public_html/
  index.html          ← Next export
  about-us/
  erp/
  _next/
  data/site.json      ← published CMS JSON (create/update via admin Publish)
  images/
  admin/              ← PHP CMS
  api/
  storage/
  .env                ← created on the server
  .htaccess
```

### 3. Import SQL

In phpMyAdmin: import `database/install.sql` into a MySQL database. Note host, name, user, password.

### 4. Create `.env` on the server

Copy `.env.example` values. Production must include:

```
APP_ENV=production
APP_DEBUG=false
APP_URL=https://agotasoft.com
SESSION_SECURE=true
CMS_JSON_PATHS=data/site.json
```

Plus real `DB_*` and SMTP vars.

### 5. Document root and rewrites

- Document root = folder that contains Next `index.html` **and** `admin/`.
- `.htaccess` sends `/admin/*` to `admin/index.php` and maps clean URLs to Next `index.html` files.
- Confirm `public_html/admin/.htaccess` is present (pretty admin URLs).

If the panel forces a subdirectory (e.g. `public_html/site/`), set `APP_URL` and `RewriteBase` accordingly.

### 6. Writable paths

Make these writable by the PHP user (755 or 775, not 777 unless the host requires it):

- `storage/`
- `storage/sessions/`
- `storage/logs/`
- `data/` (so Publish can write `data/site.json`)

Optional: `SESSION_SAVE_PATH=/home/USER/public_html/storage/sessions`

### 7. SMTP

Set in `.env`:

```
MAIL_HOST=...
MAIL_PORT=587
MAIL_USERNAME=...
MAIL_PASSWORD=...
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=noreply@agotasoft.com
MAIL_ADMIN_TO=info@agotasoft.com
```

Contact submissions are **always stored** in `contact_messages`. Email is extra; if SMTP is empty, the row is still saved.

On production, leave `NEXT_PUBLIC_CMS_API` unset in the Next build so the form posts to same-origin `/api/contact.php`.

### 8. Production hardening

- `APP_DEBUG=false`
- `SESSION_SECURE=true`
- Change the default admin password
- Keep `.env` unreadable (`.htaccess` denies it)
- `storage/` is denied from HTTP

### 9. First publish on the server

1. Open `https://agotasoft.com/admin`
2. Log in, change password
3. Confirm CRUD types have seed content (first login seeds from `defaults.json` if `entries` is empty — this requires `web/lib/cms/defaults.json` **or** you already imported content). On shared hosting the site source is not uploaded, so **publish once locally** and upload `data/site.json`, **or** copy `web/lib/cms/defaults.json` next to the CMS if you want server-side seed.
   - Practical path: after local admin publish, upload `web/public/data/site.json` as `public_html/data/site.json`. First login can also seed from `database/site-seed.json` (uploaded with `database/`).
4. Click **Yayınla** whenever content changes so `/data/site.json` updates. The static site fetches that file in the browser; you do not need to rebuild Next for copy edits.

## Composer on the server

If the host has no SSH Composer, run locally and upload `admin/vendor/`:

```bash
cd admin
composer install --no-dev --optimize-autoloader
```

PHPMailer is required for SMTP.

## Rebuild vs CMS publish

| Change | What to do |
| --- | --- |
| Text, menus, prices, team, blog posts | Admin → save / Yayınla (updates `site.json` only) |
| Layout, CSS, new Next components | `npm run build` in `web/`, re-upload `out/` |

## Security notes

Admin uses prepared statements, CSRF tokens, `htmlspecialchars` escaping, and `password_hash`. Keep it that way.
