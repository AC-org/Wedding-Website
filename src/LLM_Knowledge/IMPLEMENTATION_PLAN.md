# Implementationsplan: WeddingChatBot — Kärlekspoeten

## Sammanfattning av bröllopsfakta (på svenska)

### Brudparet
- **Namn:** Arthur & Amanda Carp
- **Jubileum:** Firar 10 år tillsammans
- **Efternamn efter bröllopet:** Mr & Mrs Carp

### Datum & Tid
- **Datum:** Lördag 8 augusti 2026
- **Ceremonitid:** 15:00
- **Samling:** 14:00 på Gammel Tammens grusgård i Österbybruk

### Platser
- **Ceremoni:** Vendels kyrka (äldsta delen från sent 1200-talet)
- **Fest/Middag:** Orangeriet på Örbyhus slott, 748 95 Örbyhus
- **Söndag:** Örbyhus slottsträdgård (dag-efter-samling)

### Schema — Lördag 8 aug
| Tid | Händelse |
|-----|----------|
| 14:00 | Samling på Gammel Tammens grusgård i Österbybruk |
| 14:15 | Busshämtning från Gammel Tammens grusgård |
| 14:40 | Ankomst till Vendels kyrka |
| 15:00 | Ceremoni börjar |
| 16:00 | Busshämtning från Vendels kyrka |
| 16:30 | Ankomst & mingel med bubbel & tårta |
| 18:00 | Middag serveras, tal och underhållning |
| 22:00 | Dans och fest! |
| Sent | Vickning |
| Senare | Bussar kör hem till övernattningsboenden |

### Schema — Söndag 9 aug
| Tid | Händelse |
|-----|----------|
| 10:30 | Checkout från övernattningsboenden, åk till Orangeriet |
| 11:00 | Brunch utanför Orangeriet |
| 13:00 | Hemresor |

### Transport
- Bussar ordnas från boendena till Vendels kyrka och sedan till Orangeriet
- Sent på natten kör bussarna tillbaka till boendena
- **OBS:** Gäster som bor på Örbyhus Golfklubb kör själva till kyrkan och tillbaka
- Söndag: ingen buss — ta sig till Örbyhus slottsträdgård på egen hand

### Klädkod
- **Herrar:** Hel kostym eller smoking, gärna i fin somrig ton
- **Damer:** Eleganta klänningar, gärna med färg och känsla
- **Mål:** Alla ska känna sig riktigt festklädda!

### Boende
| Boende | Pris/gäst/natt | Detaljer |
|--------|----------------|----------|
| Vandrarhemmet Annexet, Österbybruk | 400 kr | 10 standardrum á 2 gäster + 2 attefallshus. Lakan & handduk ingår. Budget-vänligt. |
| Wärdshuset Gammel Tammen, Österbybruks Herrgård | 850–1000 kr | Historisk herrgård från 1700-talet. 14 dubbelrum + 1 trippelrum. Eget badrum. Restaurant på plats. |
| Örbyhus Golfklubb, Örbyhus Slott | 795 kr | 10 tvåbäddsrum (vissa med extrabädd). Eget badrum, delad dusch. OBS: kör själva till kyrkan. |

Kontakt för bokning: via bröllopsparet.

### OSA
- **Deadline:** 1 maj 2026
- **Metod:** Formulär på webbplatsen (/rsvp)
- **En OSA per person**
- Vegetariska alternativ och specialdietkost bokas via OSA:n

### Toastmasters
- **Namn:** Ebba Rovig & Sixten Roström
- **Mail:** carparnastoastmasters@gmail.com
- Kontakta dem för tal, musik, framträdanden

### Kontakt (brudparet)
- Arthur: arthur.ohman@gmail.com
- Amanda: amanda.carp97@gmail.com

---

## Komponentarkitektur

### Filstruktur
```
src/
├── LLM_Knowledge/
│   ├── IMPLEMENTATION_PLAN.md   ← denna fil
│   └── wedding-info.md          ← skapas i steg 1
│
└── components/
    ├── WeddingChatBot/
    │   ├── WeddingChatBot.js    ← huvud-komponent
    │   └── WeddingChatBot.css   ← styling + animationer
    ├── Navbar.js
    ├── CountdownFooter.js
    └── EnvelopeIntro.js
```

### Pages som ska inkludera chatboten
Alla sidor **utom Home** (`/`):

| Sida | Fil |
|------|-----|
| /info | `src/pages/Info.js` |
| /rsvp | `src/pages/RSVP.js` |
| /hitta-hit | `src/pages/HITTAHIT.js` |
| /schema | `src/pages/Schema.js` |
| /overnattning | `src/pages/Overnattning.js` |
| /foton | `src/pages/Foton.js` |

### Import + JSX-placering (samma mönster för alla sidor)
```jsx
// Överst i filen, efter befintliga imports:
import WeddingChatBot from '../components/WeddingChatBot/WeddingChatBot';

// Inuti return(), precis före sista </div>:
      <WeddingChatBot />
    </div>
```

---

## Gemini API Integration

### .env-fil (skapa i projektets rot)
```
REACT_APP_GEMINI_API_KEY=din_nyckel_här
```

> **Viktigt:** Create React App kräver `REACT_APP_`-prefix för att env-variabler ska vara tillgängliga i frontend-kod. Variabeln nås via `process.env.REACT_APP_GEMINI_API_KEY`.

### Gemini-modell
- Använd: `gemini-1.5-flash` (snabb, gratis tier tillgänglig, bra för chat)
- API endpoint (REST): `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=API_KEY`
- Ingen extra SDK behövs — använd `fetch()`

### System-prompt (exakt, redo att kopia-klistra)

Denna prompt injiceras som `systemInstruction` i Gemini API-anropet.

```
Du är Kärlekspoeten — en charmig, romantisk och lätt skämtsam bröllopsgäst-assistent på Arthur & Amandas bröllopssida.

REGLER DU ALLTID MÅSTE FÖLJA:
1. Svara ALLTID på svenska.
2. VARJE svar måste vara ett rimmat poem eller ha poetisk rytm. Inget svar utan rim.
3. Du får BARA prata om bröllopsrelaterade ämnen: detaljer om detta bröllop, kärlek, bröllop i allmänhet, romantik.
4. Om någon frågar om något utanför bröllop och kärlek, svara artigt på rim att du bara kan hjälpa med bröllopsrelaterade frågor.
5. Håll svaren korta och kärnfulla — max 6–8 rader poem.
6. Använd gärna hjärtsymboler (❤, 💕) sparsamt.

INFORMATION OM BRÖLLOPET:
[HÄR INJICERAS wedding-info.md INNEHÅLLET]
```

> Notera: `[HÄR INJICERAS wedding-info.md INNEHÅLLET]` ersätts dynamiskt i koden med hela innehållet från `wedding-info.md`.

---

## Design & Färgschema

### Befintliga färger i projektet
| Syfte | Färg |
|-------|------|
| Primär blå (Home) | `#1d94dd` |
| Saddle Brown (RSVP) | `#8b4513` |
| Dark Chocolate | `#6f4e37` |
| Sienna hover | `#a0522d` |
| Warm brown | `#a7846b` |
| Dark footer | `#333` |
| Card bakgrund | `rgba(255,255,255,0.9)` |

### Chatbot-färgschema (Rose Gold)
| Syfte | Färg |
|-------|------|
| Primär rose gold | `#b76e79` |
| Ljus rose gold (hover, bakgrund AI-bubbla) | `#e8c4c8` |
| Djup rose gold (skuggor, border) | `#8b4a53` |
| Vit (användares bubbla bakgrund) | `#fff8f8` |
| Chat-fönster bakgrund | `#fdf5f5` |

### Typografi
- **Rubrik/namn:** `'Dancing Script', cursive` (matchar navbar)
- **Chattbubblor:** `'Cormorant Garamond', serif` (matchar RSVP)

---

## Komponent — Detaljerad spec

### Floatknapp (alltid synlig, bottom-right)
- Position: `fixed; bottom: 24px; right: 24px; z-index: 1000`
- Storlek: 60×60px cirkel
- Bakgrundsfärg: `#b76e79` (rose gold)
- Ikon: ❤ eller hjärtikon (Unicode `\u2665`)
- Animation: pulserande "heartbeat" med `@keyframes`
- Hover: scale 1.1 + ljusare bakgrund

### Chat-fönster (popup, öppnas vid klick)
- Storlek: 360px bred × 500px hög (desktop), 90vw × 70vh (mobil)
- Position: `fixed; bottom: 96px; right: 24px`
- Border-radius: 20px
- Box-shadow: `0 8px 32px rgba(183, 110, 121, 0.25)`
- Bakgrund: `#fdf5f5`
- Öppningsanimation: `transform: scale(0) → scale(1)` med `transform-origin: bottom right`
- Stängningsanimation: omvänd

#### Header
- Bakgrund: `#b76e79`
- Text: "Kärlekspoeten 💕" i Dancing Script
- Stäng-knapp (×) i vit

#### Meddelandelista
- Overflow-y: auto
- AI-bubblor: vänster, bakgrund `#e8c4c8`, border-radius `18px 18px 18px 4px`
- Användarbubblor: höger, bakgrund `#8b4513` (matchar RSVP), vit text, border-radius `18px 18px 4px 18px`
- Välkomstmeddelande visas direkt när fönstret öppnas

#### Typing-indikator
- Tre punkter som animeras upp och ned i sekvens
- Visas medan Gemini svarar

#### Input-rad
- Input field + skicka-knapp bredvid
- Skicka-knapp: rose gold, hover darker
- Enter-tangent skickar meddelandet

### Mikro-animationer
1. **Floatknapp heartbeat:**
```css
@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  14% { transform: scale(1.12); }
  28% { transform: scale(1); }
  42% { transform: scale(1.08); }
  70% { transform: scale(1); }
}
animation: heartbeat 2s ease-in-out infinite;
```

2. **Chat-fönster öppning:**
```css
@keyframes chatOpen {
  from { transform: scale(0); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
animation: chatOpen 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
```

3. **Typing-indikator:**
```css
@keyframes typingDot {
  0%, 60%, 100% { transform: translateY(0); }
  30% { transform: translateY(-8px); }
}
/* Tre span med animation-delay: 0s, 0.15s, 0.3s */
```

4. **Ny bubbla fade-in:**
```css
@keyframes bubbleIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
animation: bubbleIn 0.2s ease-out;
```

---

## Implementationsordning (steg-för-steg)

### Steg 1: Kunskapsfil
- Skapa `src/LLM_Knowledge/wedding-info.md`
- Innehåller all bröllopsinformation på svenska (se faktasammanfattning ovan)
- Denna fil importeras som en raw string i WeddingChatBot.js

### Steg 2: .env-fil
- Skapa `.env` i projektets rot
- Lägg till: `REACT_APP_GEMINI_API_KEY=din_nyckel_här`
- Kontrollera att `.env` finns i `.gitignore` (skydda nyckeln)

### Steg 3: WeddingChatBot.css
- Skapa `src/components/WeddingChatBot/WeddingChatBot.css`
- Implementera alla klasser och animationer enligt spec ovan

### Steg 4: WeddingChatBot.js
- Skapa `src/components/WeddingChatBot/WeddingChatBot.js`
- State: `isOpen`, `messages`, `inputValue`, `isLoading`
- Importera wedding-info.md med: `import weddingInfo from '../../LLM_Knowledge/wedding-info.md'`
  - **OBS:** CRA stöder inte import av .md-filer direkt. Istället ska innehållet läggas som en JS-konstant i en separat fil: `src/LLM_Knowledge/weddingInfoText.js` som exporterar en template literal med all info.
- Gemini API-anrop med `fetch()`:
```js
const response = await fetch(
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.REACT_APP_GEMINI_API_KEY}`,
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
      contents: conversationHistory,
      generationConfig: { maxOutputTokens: 512, temperature: 0.9 }
    })
  }
);
```
- Conversational history: spara `[{role: 'user', parts: [{text}]}, {role: 'model', parts: [{text}]}]`
- Auto-scroll till senaste meddelande med `useRef` + `scrollIntoView`
- Välkomstmeddelande visas automatiskt (hårdkodat, inget API-anrop)

### Steg 5: Lägg till i sidor
Lägg till `<WeddingChatBot />` i dessa 6 filer (se "Import + JSX-placering" ovan):
1. `src/pages/Info.js`
2. `src/pages/RSVP.js`
3. `src/pages/HITTAHIT.js`
4. `src/pages/Schema.js`
5. `src/pages/Overnattning.js`
6. `src/pages/Foton.js`

---

## Antaganden & Oklarheter

### Antaganden gjorda
1. **Gemini vs OpenAI:** Planen specificerade Gemini. Ingen existerande AI SDK i projektet — Gemini REST API används direkt med `fetch()`.
2. **Markdown-import:** CRA stöder inte raw `.md`-import. Lösning: bröllopsinformationen skrivs som en exporterad JS-strängkonstant i `weddingInfoText.js`.
3. **Conversational history:** Hela samtalshistoriken skickas med vid varje anrop för att Kärlekspoeten ska ha kontext. Begränsas till senaste 10 meddelanden för att hålla nere API-kostnad.
4. **Inte på Home:** Home-sidan har envelope-animationen och hero-video — chatbot-knappen skulle krocka visuellt. Läggs bara till på inre sidor.
5. **Responsive:** Chatfönstret anpassas till mobilskärmar (<600px).

### Saknad information
- **Google Drive-länken** i Foton.js är en placeholder (`1234567890abcdefghijk`) — chatboten bör inte referera till foton-sidan som fungerande.
- **Exakt adress Vendels kyrka:** Koordinaterna finns i Maps embed men ingen explicit adress. Chatboten kan säga "Vendels kyrka, nås med buss från Österbybruk".
- **Buss-detaljer för Golfklubb-gästerna:** De kör själva till kyrkan. Chatboten informerar om detta.

---

## Exakt system-prompt att använda (svenska, kopia-klistra)

```
Du är Kärlekspoeten — en charmig, romantisk och lätt skämtsam assistent på Arthur & Amandas bröllopssida.

REGLER DU ALLTID MÅSTE FÖLJA:
1. Svara ALLTID på svenska, aldrig på något annat språk.
2. VARJE svar måste vara ett rimmat poem med minst 4 rader. Inga undantag.
3. Du får BARA prata om bröllopsrelaterade ämnen: detta specifika bröllop, kärlek, bröllop i allmänhet, romantik.
4. Om någon frågar om något utanför bröllop och kärlek (t.ex. politik, teknik, recept), svara artigt på rim att du bara kan hjälpa med bröllopsrelaterade frågor.
5. Håll svaren korta och kärnfulla — max 6–8 rader poem.
6. Var alltid positiv, varm och festlig i tonen. Du är ett celebrerande poem-orakel!
7. Använd hjärtsymboler (❤, 💕) sparsamt, max ett per svar.

HÄR FÖLJER ALL INFORMATION OM BRÖLLOPET:

Brudparet heter Arthur och Amanda Carp, de firar 10 år tillsammans.
Bröllopet äger rum lördagen den 8 augusti 2026.
Ceremonin börjar klockan 15:00 i Vendels kyrka.
Gäster samlas klockan 14:00 på Gammel Tammens grusgård i Österbybruk, därifrån avgår bussar klockan 14:15.
Bussarna anländer till Vendels kyrka klockan 14:40.
Efter ceremonin (ca 16:00) tar bussarna gästerna till Orangeriet på Örbyhus slott.
Klockan 16:30 är det mingel med bubbel och tårta.
Middagen serveras klockan 18:00 med tal och underhållning.
Klockan 22:00 börjar dans och fest!
Sent på kvällen (vickning) kör bussar gästerna tillbaka till övernattningsboendena.

Söndagen den 9 augusti:
Klockan 10:30 checkar gästerna ut från boendena och åker till Orangeriet.
Klockan 11:00 är det brunch utanför Orangeriet.
Klockan 13:00 börjar hemresorna.
OBS: Till söndagens brunch finns ingen buss — gästerna tar sig dit på egen hand.

Klädkod:
Herrar: hel kostym eller smoking, gärna i somrig ton.
Damer: eleganta klänningar, gärna med färg och känsla.
Alla ska känna sig riktigt festklädda!

Boende (tre alternativ, bokas via brudparet):
1. Vandrarhemmet Annexet i Österbybruk — 400 kr/gäst/natt. Budget-vänligt, eget badrum, lakan ingår.
2. Wärdshuset Gammel Tammen, Österbybruks Herrgård — 850–1000 kr/gäst/natt. Historisk herrgård från 1700-talet, eget badrum, restaurant på plats.
3. Örbyhus Golfklubb vid Örbyhus slott — 795 kr/gäst/natt. OBS: dessa gäster kör själva till kyrkan, de ingår inte i bussystemet.

OSA (RSVP):
Deadline 1 maj 2026. En OSA per person. Formulär på webbsidan.
Vegetariska alternativ och specialdiet bokas via OSA-formuläret.

Toastmasters:
Ebba Rovig och Sixten Roström hanterar tal och underhållning.
Kontakta dem på: carparnastoastmasters@gmail.com

Kontakt med brudparet:
Arthur: arthur.ohman@gmail.com
Amanda: amanda.carp97@gmail.com

Kul fakta:
Vendels kyrkas äldsta del är från sent 1200-talet.
Orangeriet fick sitt namn från det franska ordet för apelsin — där vinterförvarades apelsiner och citrusfrukter förr i tiden.
```

---

*Plan skapad: 2026-03-15*
*Genererad med Claude Code*
