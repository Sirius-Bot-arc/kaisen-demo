# Kaisen Arcane Systems (demo target)

Kaisen Arcane Systems is a **fictional**, anime-inspired cyber defense company. This project is a **safe target for passive security assessment**, intended to be scanned by RiskOpt once deployed over HTTPS. It has no database, authentication, API keys or real data. Login and Contact forms process nothing.

## Intentional findings (configuration gaps only, none exploitable)

1. No Content-Security-Policy header
2. No Permissions-Policy header
3. No X-Content-Type-Options header
4. Weak `Referrer-Policy: unsafe-url`
5. HSTS not set by the app (Vercel may add it on `*.vercel.app`; a custom domain will show the gap)
6. Demo cookie `ka_demo_pref=demo-value` without Secure, HttpOnly or SameSite
7. `X-Powered-By: Next.js` and `X-Demo-Stack` headers (technology disclosure)
8. No `/.well-known/security.txt`
9. `robots.txt` lists `/demo-console`, `/api/`, `/staging-demo/`, `/internal-demo/`
10. Public `/health` and `/api/status` JSON endpoints

## Run locally

```bash
npm install
npm run dev      # http://localhost:4000
```

## Build and start

```bash
npm run build
npm start        # http://localhost:4000
```

## Deploy to Vercel

Push to GitHub, import in Vercel with default Next.js settings, deploy. No environment variables or extra infrastructure needed.

## Routes

`/`, `/about`, `/defense-systems`, `/security`, `/contact`, `/login`, `/demo-console`, `/health`, `/api/status`, `/robots.txt`

## Character image (Yuji Itadori)

No third-party artwork is bundled. Place a supplied or licensed image at:

`public/images/yuji.png`

(transparent PNG, portrait, roughly 4:5, ideally under 1 MB). Until it exists, an original neutral silhouette placeholder is shown. The image is sized to a fixed aspect-ratio box with `object-contain`, so it cannot overflow or cover text on mobile. The character is presented only as a fictional "Field Operator" visual element.
