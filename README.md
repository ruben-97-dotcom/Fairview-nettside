# Fairview – nettside

Salgsside for Fairview: kamera og app for blinde golfhull, rettet mot norske golfklubber. Leveres av Syntriq AS.

`index.html` er hele nettsiden i én fil – all CSS, JavaScript, bilder og 3D-biblioteket (three.js) er bakt inn. Den kan åpnes direkte i nettleseren eller legges ut på hvilken som helst statisk hosting (GitHub Pages, Vercel, Netlify).

## Struktur

| Sti | Innhold |
| --- | --- |
| `index.html` | Den ferdige siden (generert – ikke rediger direkte) |
| `kilde/fairview.src.html` | Kildefila som redigeres |
| `kilde/bygg.cjs` | Byggeskript som baker inn bilder og skript |
| `kilde/vendor/three.min.js` | three.js r128 (MIT-lisens) |
| `bilder/` | Skjermbilder fra live-demoen (`.webp` brukes på siden, `.png` er originalene) |
| `bilder/kamerapunkt.*` | Foto av kamerapunktet (`.png` er originalen, `.webp` er beskåret til høydeformat og brukes på siden) |
| `bilder/kameravisning.png`, `bilder/hulloversikt.png`, `bilder/app-hero-light.*` | Kamerabilde av gruppa og oversiktsbilde av hullet, satt inn i app-skjermbildet i toppen (`app-hero-light`) |

## Endre siden

1. Rediger `kilde/fairview.src.html`.
2. Bygg på nytt:

   ```bash
   node kilde/bygg.cjs
   ```

3. Commit både kildefila og den nye `index.html`.

Krever bare Node.js – ingen pakker å installere.

## Å gjøre før lansering

- E-postadressen `post@syntriq.no` i kontaktseksjonen er en plassholder og må byttes ut.
- Kontaktskjemaet åpner besøkendes e-postprogram (`mailto:`). Ekte innsending krever en skjematjeneste eller et eget endepunkt.

## Kilder brukt på siden

- Pål Melbye, anleggssjef i Norges Golfforbund, til Norsk Golf, 3. juli 2025: [Ropet som redder liv](https://www.norskgolf.no/spesialer/ropet-som-redder-liv/302463)
- Norges Golfforbund: [Sikkerhet på golfbanen](https://www.golfforbundet.no/klubb/anlegg/sikkerhet-pa-golfbanen)
