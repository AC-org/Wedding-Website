# Wedding-Website 💒

En interaktiv bröllopwebbplats för Arthur & Amandas bröllop den **8 augusti 2026**.

**Live Site:** https://ac-org.github.io/Wedding-Website/

## Om projektet

Denna webbplats tillhandahåller gäster med:
- 📅 Countdown timer till bröllopet
- 📝 OSA-formulär för gästanmälan
- 🗺️ Väginstruktioner och Google Maps till ceremoni- och festplatsen
- 📱 Fullt responsiv design för mobil, tablet och desktop

## Teknisk stack

- **Frontend:** React 18, React Router
- **Backend:** Supabase (PostgreSQL + Storage)
- **Deployment:** GitHub Pages
- **Build:** Create React App

## Quick Start

### Installation
```bash
npm install
```

### Utveckling
```bash
npm start
```
Öppnar appen på http://localhost:3000

### Build för produktion
```bash
npm run build
```

### Deploy till GitHub Pages
```bash
npm run deploy
```

## Projektstruktur

```
src/
├── pages/
│   ├── Home.js          # Hemsida med countdown
│   ├── RSVP.js          # OSA-formulär
│   └── HITTAHIT.js      # Väginstruktioner
├── App.js               # Routing & navigation
├── supabaseClient.js    # Databaskonfiguration
└── styles/              # CSS-filer
```

## Sidor

### 🏠 Home
- Hero-sektion med bakgrundsvideo
- Animerad countdown timer
- Huvudinformation om bröllopsdagen
- Navigation till andra sidor

### 📝 RSVP
- Gästanmälanformulär
- Sparar svar i Supabase-databas
- Felhantering och bekräftelse

### 🗺️ Hitta hit
- Google Maps till både ceremoni- och festplats
- Information om Örbyhus slott och Vendels kyrka
- Väginstruktioner och fun facts

## Supabase Setup

Databasen använder Supabase för:
- Lagring av RSVP-svar (tabell: `RSVP`)
- Lagring av media (videos, bilder)

**Miljövariabler** är konfigurerade i `src/supabaseClient.js`

## För mer information

Se **CLAUDE.md** för detaljerad teknisk dokumentation, arkitektur och framtida improvements.

---

*Denna webbplats är skapad med React och deployad på GitHub Pages.*
