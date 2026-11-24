# Grind Setters website

Static homepage for grindsetters.com, built from the "Grind Setters — Homepage v3 (black & gold)" design.
No build step: open `index.html` in a browser, or upload the whole folder to any static host.

## Layout

```
index.html        all page content, one section per HTML comment banner
css/styles.css    all styling; colors, fonts and widths are tokens in :root at the top
js/main.js        Watch BG popup, hero video autoplay, footer year
assets/img/       logo (logo-mark.png, logo-full.png), favicon, photos, book/journal covers
assets/video/     hero-loop.mp4 (muted background), watch-bg.mp4 (Watch BG popup)
```

## Sections in index.html (in order)

| id         | Section                                   |
|------------|-------------------------------------------|
| `top`      | Hero + header nav + Watch BG button       |
| (none)     | Statement: "You're not lazy…"             |
| `blueprint`| The Blueprint: 3 phases                   |
| `tools`    | Tools for the build: book + 2 journals    |
| `rules`    | Jobsite rules                             |
| `foreman`  | About BG                                  |
| `join`     | Pricing: $600/yr membership, $297 course  |
| footer     | Footer                                    |

## Conventions for edits

- Content changes go in `index.html`; reuse existing classes (`.btn--gold`, `.btn--outline`, `.eyebrow`, `.display`, `.phase`, `.product`, `.rule`, `.bill__item`).
- New colors go in `:root` as tokens, never as one-off hexes in markup.
- New images go in `assets/img/`, with real `alt` text.
- Checkout links: the two `TODO` comments in the Join section mark where the Stripe payment links go.
- After changing `css/styles.css` or `js/main.js`, bump the `?v=` number on their links in `index.html` so browsers fetch the new file instead of a cached copy.
