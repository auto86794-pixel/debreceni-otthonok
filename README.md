# Debreceni Otthonok – Vercel build javítás

Ez a változat kifejezetten **statikus HTML landing oldal**, nem Next.js.

## Feltöltés
A GitHub repository gyökerébe töltsd fel a ZIP **kicsomagolt tartalmát**, beleértve a `package.json`, `vercel.json`, `scripts/`, `api/`, `assets/` mappákat és az `index.html` fájlt. A korábbi fájlokat frissítsd.

## Vercel
Settings → Build and Deployment → Framework Preset: **Other**.
Root Directory: `./`.
Build Command: `npm run build` (a `vercel.json` is ezt írja elő).
Output Directory: `public` (a `vercel.json` is ezt írja elő).
A GitHubra történő új commit automatikusan új telepítést indít; ne a régi hibás deploymentet indítsd újra.

## E-mail
A kapcsolatfelvételi API megmaradt az `api/lead.js` fájlban. Éles küldéshez a Vercel Environment Variables alatt szükséges:
- `RESEND_API_KEY` – titkos Resend API-kulcs
- `LEAD_TO_EMAIL` – `infohomesdebrecen@gmail.com`
- `LEAD_FROM_EMAIL` – a Resendben igazolt küldődomain címe

A beállítás után új telepítés és valódi próbaküldés szükséges. Az adatkezelési tájékoztató véglegesítése is hátravan.
