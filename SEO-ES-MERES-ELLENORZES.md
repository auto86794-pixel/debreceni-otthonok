# Debreceni Otthonok – SEO és mérés ellenőrzése (2026-10-28)

## Ebben a verzióban
- Debrecenre célzott, pontosított HTML title és meta description.
- Canonical URL a www-s éles domainre.
- Open Graph (Facebook) és Twitter megosztási metaadatok.
- A korábbi űrlap, API, Resend és megjelenés változatlan.
- Sitemap és robots.txt változatlan.

## Kötelezően tisztázandó az Analytics / Facebook-kampány előtt
1. Az érdeklődői űrlapon van adatkezelési jelölőnégyzet, de nincs kattintható adatkezelési tájékoztató. Az adatkezelő valós adatai, cél, jogalap, megőrzési idő, érintetti jogok és elérhetőségek szükségesek; ezek nem találhatók meg a projektben. Nem helyettesítettük kitalált jogi szöveggel.
2. A GA4 mérési azonosító még nincs megadva. GA4 / Meta Pixel csak megfelelő tájékoztatás és hozzájáruláskezelés után kapcsolható be.
3. A sikeres űrlapbeküldéshez később `generate_lead` eseményt érdemes kapcsolni, kizárólag sikeres API-válasz után. E-mailt, nevet, telefonszámot nem szabad analitikai eseménybe küldeni.
4. Facebook-kampány indításakor az ingatlanokkal kapcsolatos hirdetésekre érvényes Meta-korlátozásokat ellenőrizni kell.

## Telepítés és teszt
`npm run build` majd Git push és Vercel deployment. Ellenőrizd az oldal megjelenését, az űrlap tesztbeküldését, a sitemapet és a forráskódban a canonical/og metaadatokat.
