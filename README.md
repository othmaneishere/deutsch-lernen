# Deutsch Lernen

An approachable, audio-first German A1 learning experience with multilingual support, interactive exercises, chapter-based learning, and a dedicated stories library.

## Highlights

- Structured A1 course with vocabulary, dialogues, grammar, pronunciation, exercises, and progress persistence.
- Dedicated Stories page at `/geschichten` with search, level filters, translations, and sentence-by-sentence audio.
- Arabic, English, French, and German-only learning modes.
- Responsive layout designed for focused study on desktop and mobile.

## Run locally

Prerequisites: Node.js 20+.

```bash
npm install
npm run dev
```

Open `http://localhost:3000` for the course or `http://localhost:3000/geschichten` for Stories.

## Build

```bash
npm run build
npm start
```

Optional environment variables are documented in `.env.example`.

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
