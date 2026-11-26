# Hearth

A fictional ambient-home-intelligence marketing page that becomes something else as you scroll.

- `index.html` — the site
- `styles.css` — visual system and scene styling
- `script.js` — scroll narrative, subtle corruption, audio, and the door
- `i18n.js` — automatic Chinese/English copy selection
- No external assets, no analytics, no network requests
- Hearth is not a real product. This is a short horror story in the shape of a landing page.

## Language

The page follows the browser language: `zh-*` gets Simplified Chinese, everything
else gets English. Force a language with `?lang=zh` or `?lang=en`.

## Run locally

```bash
python3 -m http.server 8000
```

Open <http://localhost:8000>.

## Deploy

Live: <https://trojan-seahorse.github.io/hearth-house/>

GitHub Pages, branch `main`, root. `.nojekyll` is included.
