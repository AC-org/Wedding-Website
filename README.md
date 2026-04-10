# Arthur & Amanda — Bröllopssida

Interaktiv bröllopssida för Arthur & Amandas bröllop **8 augusti 2026**.

**Live:** https://arthuramanda.se

---

## Snabbstart

```bash
npm install
npm start
```

Öppnar appen på http://localhost:3000

---

## Kommandon

| Kommando | Beskrivning |
|---|---|
| `npm start` | Startar dev-server på localhost:3000 |
| `npm run build` | Bygger produktionsbundle till `/build` |
| `npm run deploy` | Bygger + deployer till GitHub Pages |

### Deploy

```bash
npm run deploy
```

Kör `build` automatiskt (via `predeploy`), sen pushar `gh-pages -d build` till branchen `gh-pages`. GitHub Pages servar sidan på `arthuramanda.se` via `public/CNAME`.

---

## Stack

- **React 18** + React Router 6
- **Supabase** – PostgreSQL (RSVP-svar) + Storage (video) + Edge Function (AI-chatbot)
- **Gemini 2.5 Flash** – via Supabase Edge Function `gemini-chat`
- **GitHub Pages** – hosting med custom domain

---

## Sidor

| Route | Sida |
|---|---|
| `/` | Hemsida med hero-video och countdown |
| `/info` | Praktisk info: klädkod, transport, boende |
| `/rsvp` | OSA-formulär (sparas i Supabase) |
| `/hitta-hit` | Google Maps till kyrka & orangeri |
| `/schema` | Tidplan lördag & söndag |
| `/overnattning` | Boendealternativ med priser |
| `/foton` | Instruktioner för Google Drive-fotodeling |

---

## Miljövariabler

Inga `.env`-variabler krävs för att köra lokalt — Supabase anon key är hårdkodad i `src/supabaseClient.js` (publik nyckel, OK för frontend). Gemini API-nyckeln hanteras enbart i Supabase Edge Function och exponeras aldrig i frontend.

---

Se **CLAUDE.md** för fullständig teknisk dokumentation.
