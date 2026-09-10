# DESIGN.md — Armour Crete

> The contract for armour-crete.com. Reverse-derived 2026-09-10 from the shipped
> Astro build (adopt-lite); the authority on any styling question is this file
> plus the token block in `src/layouts/Base.astro`. This build predates the lab
> scaffold — it is **Astro 5, statically built**, not the zero-build pattern.
> Respect that: pages are `.astro`, styles are per-page scoped except
> `Base.astro` (tokens, global) and `Sub.astro` (shared sub-page styles,
> `is:global`).

---

## 1. Motion language

**Name:** sealed surface

**Where it comes from:** the trade itself — dry concrete is pale and matte;
sealed concrete is deep, saturated, and holds a sheen. The page behaves like
the product.

**How it shows up:**
1. Service cards and product rows invert to ink-dark on hover — the surface
   "seals" under the cursor (`.svc-i`, `.prod`).
2. Scroll reveals: quiet 14px rise + fade (`.rv` → `.in`), staggered ~60ms.
3. The fixed nav gains a frosted, sealed backdrop once you leave the hero
   (`.nav.stuck`).

**What it must never do:** parallax, marquees, spring physics, anything wet
that moves. The old site's scrolling service marquee is the cautionary tale.

**Easing token:** `--ease: cubic-bezier(0.2, 0.7, 0.2, 1)` — confident,
settled, no bounce.

**Mechanism:** IntersectionObserver reveals + CSS transitions on
transform/opacity/background/color only. No GSAP, no scroll-driven timelines.

## 2. Palette & roles

Concept: Washington County sandstone and basalt. One red-rock accent.

| Role | Token | Value | Used for |
|---|---|---|---|
| surface | `--bone` | `#f4f0e9` | page ground |
| raised | `--bone-2` | `#ece6dc` | chips, wells |
| sand | `--sand` / `--sand-deep` | `#ddd4c6` / `#c9bdab` | hover chips, note borders |
| ink | `--ink` | `#171513` | body copy, dark sections |
| ink-2/3 | `--ink-2` / `--ink-3` | `#23201d` / `#322d29` | footer, dark wells |
| muted | `--stone` / `--stone-lt` | `#6e655b` / `#968b7d` | secondary copy, eyebrows |
| accent | `--clay` / `--clay-lt` | `#9e4a2c` / `#b96742` | one job: emphasis numbers, hover states, focus rings |
| line | `--line` / `--line-soft` | 13% / 7% ink | hairlines |

A fixed 5%-opacity fractal-noise overlay ("concrete tooth") sits over
everything — felt, not seen. Contrast floor 4.5:1 body, 3:1 large/UI.

## 3. Type

- **Display:** Fraunces 300–500, `opsz` 144, tight (-0.024em), line-height 1.02.
  Hero clamps to 7.6rem (home) / 5.6rem (sub-pages).
- **Body:** Inter 300, 17px, 1.6, -0.006em.
- **Mono:** JetBrains Mono for every number, phone, product name (`.num`).
- **Loading:** Google Fonts with preconnect (predates the self-host rule —
  change only as a deliberate perf pass, not in passing).

## 4. Components — what is different here

| Element | The decision | The reason |
|---|---|---|
| Eyebrows | 11px/500/0.16em uppercase sans | section wayfinding without shouting |
| `.facts` dl | mono number + quiet label rows | proof without price — numbers carry credibility |
| Buttons | filled, pill, sentence case | contractor sites shout; this one doesn't |
| FAQ | native `<details>`, serif summaries, chevron rotate | no JS, honest disclosure |
| Logo | small, stamped, never scaled up | the spray-can mark is locked; contrast makes it deliberate |
| Phones | always labelled Dylan/Zac | two unlabelled numbers read disorganised |

## 5. Layout

- `--maxw: 1240px`, `--pad: clamp(1.25rem, 5vw, 5.5rem)` via `.wrap`
- Sections alternate bone/ink; grids are 1fr 1fr splits collapsing at 900px
- Sub-pages: hero → content sections → dark assessment CTA → footer (all via
  `src/layouts/Sub.astro`)

## 6. Depth

No shadows anywhere. Depth is done with ink-on-bone inversion and 1px
hairlines. Keep it that way.

## 7. Do / Don't

**Do**
- Mechanism-first copy: explain *why* concrete fails, then the fix
- Name Deco products explicitly; "we only use Deco products" close to verbatim
- Name real Washington County places (Kayenta, Entrada, Snow Canyon…)
- British-leaning spellings already in the voice: colour, crystallise
- 24-hour cure gets stated plainly, everywhere it is relevant

**Don't**
- No pricing, no calculators, no per-sq-ft numbers — consultation only
- No fabricated reviews, no stock before/afters, no work that isn't ours
- No emoji as icons, no all-caps display, no navy+gold
- No license number on the site (claim "licensed & insured" only)
- Owners stay off camera

## 8. Responsive

Mobile: single column, burger menu (`SiteNav`), steps 2-up, footer stacks.
Tap targets ≥24px enforced by audit (nav links carry `padding-block` for this).

## 9. Data source of truth

**File:** `src/data/site.js` — SITE, EMAIL, PHONES, AREAS, SERVICE_PAGES,
CITY_PAGES + JSON-LD builders. Sub-pages and layouts read from it. `index.astro`
still carries its own service/FAQ arrays (page copy), but contact/area facts
must never be hard-coded twice.

## 10. Launch checklist (live site — for future changes)

- [x] Forms wired (FormSubmit AJAX + mailto fallback)
- [x] Indexed (`index, follow`), sitemap lists all 12 pages
- [ ] `node $LAB/verify/audit.mjs --url http://localhost:4179/<page>` clean on
      every touched page before push (`npx astro preview --port 4179`)
- [ ] JSON-LD updated when services/areas change (schema builders in
      `src/data/site.js`)
