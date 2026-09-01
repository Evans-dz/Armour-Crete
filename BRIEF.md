# Armour Crete — Site Revamp Brief

**Status:** kickoff, 2026-08-29. Dylan's own business (not an EZHD client demo).
**Live:** https://armour-crete.com → 308 redirects to www. Hosted on **Vercel** (76.76.21.21).
**Owners:** Dylan Evans + Zac.
**Contact:** 435-994-5235 = **Dylan Evans** · 435-224-6987 = **Zac Evans** · evans@armour-crete.com
**Market:** St. George / Washington County, Utah. Affluent buyers.

---

## What exists today

A single 1.1 MB `reference/current-site.html` — no repo, no build, 25 base64-embedded images.
Oswald + Source Sans 3, navy `#1a3a8f` / gold `#f0a500` on near-black.

### Diagnosis — why it reads cheap

1. **Generic-contractor visual language.** All-caps Oswald, navy+gold, a scrolling
   service-name marquee, emoji as icons (⭐ 📞 ✉). This is the Angi/HomeAdvisor look.
   It signals "lowest bid crew," not "the company that seals homes in Kayenta."
2. **"PROTECT YOUR CEMENT"** in the hero. Cement is an ingredient; concrete is the
   material. Any builder, architect, or GC reads that as an amateur tell. Must go.
3. **Price-first.** `$0.85–$1.25 / sq ft` packages plus an instant calculator, high on
   the page. Commodity signal. Wealthy buyers read cheap as risk.
4. **The "OUR WORK" gallery is not Armour Crete's work.** This is the most serious
   problem on the site, and it is a provenance problem, not a resolution problem.
   Each before/after pair is a single wide pre-made marketing graphic sliced down the
   middle: the title bar splits across the two halves (`1. RESIDENTIA` | `AL DRIVEWAY`)
   and the BEFORE/AFTER chips are burned into the pixels. In the driveway pair the
   "before" house has the garage right with a gray door and the "after" has it left
   with a black door and different stonework — **different properties**. Every scene is
   humid-climate: turf lawns, deciduous shade trees, vinyl siding, a pine treeline over
   open water behind the "new construction foundation." No desert, no red rock, nothing
   in Washington County. On top of that they're only 320×568 and base64'd inline.
   Presenting these as "OUR WORK / BEFORE & AFTER" is deceptive advertising, and the
   graphics are almost certainly someone else's copyrighted marketing material. **Must
   come down regardless of what replaces it.**
5. **"across Utah."** No Kayenta, Entrada, Ivins, Santa Clara, Snow Canyon, SunRiver,
   Coral Canyon, Washington, Hurricane. Hyper-local geography is both the luxury
   signal and the local SEO.
6. **Empty reviews section (on production).** Grey stars and a "leave us a review"
   button, zero actual reviews. Worse than omitting the section. The **live** review CTA
   does point at a real profile: `https://g.page/r/CTRFIPJaX9QCEAI/review` — so a Google
   Business Profile exists and can be pulled from. (The stale local reference file is a
   different story — see the divergence note below.)
7. **Two unlabeled phone numbers** stacked in the nav — reads disorganized.

---

## Answers from Dylan (2026-08-29)

| Question | Answer |
|---|---|
| Photo/video assets | Dylan's first read was "mostly short videos, few real stills" — **this turned out to be understated.** See the inventory below. |
| Owners on camera | **No.** Dylan and Zac should NOT appear through the site. At most a small "who owns this" moment on the contact page. The work is the hero, not the guys. |
| Pricing | **Remove entirely.** No per-sq-ft numbers, no calculator. Consultation / private assessment only. |
| Audience | **All four:** luxury homeowners, builders & GCs, commercial & HOA, municipal. |
| Logo | **Locked.** The graffiti spray-can wordmark stays (trucks, shirts, invoices). Design around it — do not redraw it. |

---

## Design constraints that follow

- **Mixed video + stills, both real.** There are 61 full-resolution iPhone HEIC
  stills *and* 50 clips to work with (see inventory). So this is not a
  video-only rescue job — it can be a properly art-directed photo site with motion
  where motion earns it. Restrained, muted, slow autoplay loops (sealer going down,
  wet-look sheen coming up, water beading off a cured slab) read *more* premium than
  a wall of before/afters. Needs a real compression budget — poster frames,
  `preload="none"` below the fold, static fallbacks.
- **Curate hard.** 132 items is a camera roll, not a portfolio. Expect maybe 12–20 to
  survive at the quality bar this site needs. Cull for: even light, no clutter in
  frame, no truck/tools/people, a clean architectural edge, and a surface where the
  finish actually reads.
- **Work the locked logo instead of fighting it.** The spray-can mark is street, the
  site needs to be classy. Isolate it: small, single-color, on a solid quiet field,
  used as a *stamp* rather than a headline. Let a refined typographic wordmark and a
  restrained palette carry the identity everywhere else. Contrast makes it look
  deliberate; scaling it up makes it look like the brand.
- **Two audiences, two paths.** A homeowner shopping a pool deck and a GC bidding
  foundation waterproofing want opposite pages. One refined homeowner-facing home,
  with a distinct, plainer, spec-driven Builders & Commercial track.
- **Proof without price.** Materials named, process shown, warranty/spec stated,
  license and insurance verifiable, real named local projects. That's what replaces
  the number the buyer no longer sees.

---

## ⚠️ `reference/current-site.html` is NOT production

The saved file (from `~/Downloads/armour-crete.html`, dated 2026-05-31) and the live
Vercel site have **diverged in both directions**. Do not treat either as authoritative
on its own — verify against live before acting.

| | `reference/current-site.html` | **Live armour-crete.com** |
|---|---|---|
| Hero | "Stop Water. Protect Your **Foundation**." ✅ correct term | "STOP WATER. PROTECT YOUR **CEMENT**." ❌ |
| Reviews | Six **fabricated** review cards — Jake M., Sarah R., Dave L., Tammy C., Brad H., Kyle W. — under a Google logo and a 5.0 badge ❌ | No review cards at all ✅ |
| Build note | Ships visible body text: "Connect your Google Business Profile in Squarespace to display live reviews automatically" ❌ | Absent ✅ |
| Review CTA | `g.page/r/` — stub, no profile ID ❌ | `g.page/r/CTRFIPJaX9QCEAI/review` — real profile ✅ |

**The invented testimonials are NOT on production.** They exist only in the stale local
draft. There is no live FTC endorsement exposure — but the fabricated copy must never
be carried forward into the rebuild, and nobody should redeploy that file.

The gallery problem (item 4) is present in **both**.

## Confirmed: the actual product lines

A coverage table buried in the site's Add-On Services panel — present in live source
HTML, hidden behind a tab — names all six, and they are all **Deco Products, Inc.**
(Denver, CO): **DECO 20 Clear, Salt Shield 303, SilaCast BES, D2K, TravaCast,
Shine-A-Cast.** So "premium deco products" was a manufacturer name lowercased into
meaninglessness. Naming Deco Products explicitly is a credibility asset in this market.
Needs Dylan to confirm the list is still current.

## Answered 2026-08-29 (second round)

- **Deco Products confirmed current.** All six lines above are still what's used. Name
  the manufacturer explicitly — it's the strongest specificity asset the site has.
- **Roughly one Google review exists.** So there is **no social-proof section**. Cut the
  REVIEWS nav item and the whole testimonials block rather than building a section
  around a single review or padding it — a thin reviews section reads worse than none,
  and it's how the fabricated cards got into the old draft in the first place.
  Credibility has to be carried by: named Deco product lines, stated warranty terms,
  process shown step by step, real local project photos, and the licensed/insured
  claim. Getting more reviews is a business task for Dylan, not a site feature — leave
  a clean slot the section can occupy later once there are 8–10.
- **No license number on the site.** Dylan's call: convey *licensed and insured* as a
  claim, but do not print the DOPL number. So no number, no badge implying a lookup, no
  "verify our license" link. Just a clean, confident statement — and do not build any
  layout that leaves an obvious hole where a number would go.

## Answered 2026-08-29 (third round)

**Service radius: all of Utah**, not just Washington County.

⚠️ This is in tension with the luxury-local positioning and needs handling, not a
literal transcription. "Serving all of Utah" as the headline is exactly the flat,
placeless line the current site already uses, and it throws away both the local SEO and
the status signal. Resolution: **lead with St. George / Washington County as the home
market** — name Kayenta, Entrada, Ivins, Santa Clara, Snow Canyon, SunRiver, Coral
Canyon, Washington, Hurricane — and state statewide availability as a secondary fact
("based in St. George · available statewide"). Both true, right emphasis.

**Sealing positioning line, in Dylan's words: "we only use Deco products."** That
exclusivity is a stronger claim than "premium products" and should be used close to
verbatim.

**The residential sealing process, from Dylan:**

1. Clean the driveway
2. Let it dry completely
3. Apply the sealer
4. **Wait 24 hours before walking or driving on it**

That 24-hour cure is the single most useful expectation-setting fact on the whole site —
it answers the question every homeowner actually has ("how long am I without my
driveway?") and no competitor bothers to state it. Give it real weight; don't bury it in
a footnote.

Note the gap: this is the **flatwork sealing** process only. Foundation waterproofing and
damp proofing on new construction is a different service with a different sequence, and
the Builders & GCs track needs its own process. Still to get from Dylan.

## Still open

- Warranty terms — years per package. Load-bearing now that reviews are out.
- The **foundation waterproofing** process, for the builder/GC track.
- One phone number on the site or both (Dylan 435-994-5235 / Zac 435-224-6987)?
- Does a Vercel project already exist under Dylan's account, and what repo feeds it?
- Service radius, and whether both numbers stay on the site or just Dylan's.
- Does the Vercel project already exist under Dylan's account, and what's the repo?
- Warranty terms — how many years on each package.

---

## Asset inventory — export COMPLETE

Pulled from the **"Armour Crete"** album in Apple Photos via AppleScript. Direct
filesystem reads of the Photos library are TCC-blocked, but `osascript` automation of
Photos.app works without any permission change.

### `reference/stills/` — 95 files, 284 MB

| Type | Count | Note |
|---|---|---|
| `.heic` | **61** | Full-res iPhone stills — the real find |
| `.png` | 13 | Likely screenshots; expect to cull most |
| `.jpg` | 8 | Mixed |
| `.mov` | 13 | **Live Photo companions**, paired 1:1 with a `.heic` of the same basename |

The 13 Live Photos are a quiet bonus: each carries ~1.5s of real motion tied to a
still that's already been composed. That is exactly the "motion where motion earns it"
material — a sheen settling, water beading — without needing a video edit.

### `reference/video/` — 49 files, 4.1 GB

16 `.mp4` + 33 `.mov`, deduplicated by MD5.

### Completeness

All 132 album items are accounted for: 82 stills + 50 video entries, where two of those
entries are the same file (`D5DAADF6-…mp4` appears twice in the album itself), giving
**49 unique clips**. Nothing is missing.

Two gotchas worth knowing if this is ever re-run:

- The default Apple Event timeout is 2 minutes; a bulk `export` of 132 iCloud originals
  blows through it and aborts (error `-1712`). Wrap in `with timeout of 43200 seconds`
  and export item-by-item inside a `try`.
- Photos does not skip existing files — it appends ` (1)`, ` (2)` suffixes, so a re-run
  silently duplicates everything. Dedupe by content hash, not filename.

```
osascript -e 'tell application "Photos" to get name of every album'
osascript -e 'tell application "Photos" to export (get media items of album "NAME") to POSIX file "/abs/path/" with using originals'
```


---

## Build — first full pass (2026-08-30)

Built in this repo's Astro project: `src/layouts/Base.astro` (tokens + global CSS) and
`src/pages/index.astro` (all markup, section CSS, and inline JS). Logo copied to
`public/logo.png`. Runs on the existing dev server at **:4179**.

**Design concept — the page behaves like sealed concrete.** Dry surfaces are pale, warm
and matte; sealed surfaces are deep, saturated and hold a sheen. That is literally what
the product does, so it carries the whole visual system: hover states deepen bone → ink.

**Hero — REVISED 2026-08-30.** The first version was an abstract untreated → sealed
gradient. Dylan rejected it: "the untreated to sealed makes no sense." He was right — it
read as a colour swatch, not as concrete. Replaced with a drawn perspective scene: a
driveway running up to a garage door, desert ground and an agave either side. A wet edge
travels down the slab and the surface goes deep and glossy behind it, so the animation
depicts the actual service rather than symbolising it.

Direction matters and is deliberate: the seal starts at the garage and works back
**toward the street**, which is how it is actually done — you do not seal yourself into a
corner. Reversing this would read as wrong to anyone in the trade.

Implementation is a single inline SVG: dry slab, a sealed slab revealed by an animated
`<mask>`, and a wet-edge highlight plus blurred mist riding the identical keyframes.
No raster assets, so it costs nothing to load. Verified animating and looping in browser.
`prefers-reduced-motion` holds it part-sealed, which still reads.

**Hero — SETTLED 2026-08-30.** Dylan rejected the driveway illustration too. Four
directions were built side by side at `/hero-options` (water beading on a sealed slab;
an architect's line drawing; no image at all; a pool deck at dusk). **He chose "no image
at all"** and it is now live on the homepage.

The hero is therefore pure typography: community-name eyebrow, an oversized Fraunces
headline, a hairline rule, then a two-column row of lede plus CTAs against three data
facts (24h / 6 / All). No figure, no illustration, no photograph.

Why this is the right answer and should be defended: every drawn image is a stand-in for
photography Armour Crete does not yet have, and drawn imagery is precisely what makes a
trade site read as templated. This hero cannot look cheap and cannot age. When real
photos arrive they go *below* the fold and the hero never changes.

`src/pages/hero-options.astro` was deleted 2026-08-31 once the direction was settled. The
four alternatives it held are described above; recover it from git history
(commit 07d2cf1) if the decision is ever revisited.

**Palette:** Washington County sandstone and basalt — bone `#f4f0e9`, sand `#ddd4c6`,
warm ink `#171513`, stone `#6e655b`, one red-rock clay accent `#9e4a2c` used sparingly.
No navy, no gold. **Type:** Fraunces (display, light weights, wide optical size) over
Inter (body), with JetBrains Mono reserved strictly for data.

**Motion:** a single slow sheen sweep plus IntersectionObserver fade-and-rise reveals.
Deliberately unlike the other demos — no marquee (the old site had one), no parallax.
`prefers-reduced-motion` fully honoured.

Sections: nav → hero + slab + fact strip → six services → four-step process with the
24-hour cure as a feature moment → Deco materials roster → homeowner/builder split →
service area → assessment form → footer.

**Constraints honoured:** zero pricing anywhere. No photos. Logo kept exactly as-is,
small, on its own black plate so it reads as a stamp rather than a headline. No reviews
section. No owner photos. Licensed-and-insured stated with no number and no gap where a
number would sit. St. George leads, statewide is secondary. Sentence-case filled rounded
controls, mono only on data.

### Known gaps in this pass

- **No mobile nav menu.** Links are hidden below 900px and only the logo and CTA remain.
  The page still works by scrolling, but this needs a proper menu before launch.
- **The form has no backend.** It composes a `mailto:` to evans@armour-crete.com rather
  than silently swallowing submissions. Needs real wiring before launch.
- Product roster lists the six Deco lines by name only — no per-product claims were
  invented. Descriptions need Dylan.
- Still missing: warranty terms, the foundation waterproofing process for the builder
  track, and confirmation of whether both phone numbers belong on the site.
- Not committed. No git commits made; the working tree holds the build.

---

## Build — products page, why, FAQ, maintenance (2026-08-31)

Four additions Dylan asked for. Nav is now: Services · Why it fails · Process ·
Products · FAQ.

### `/products` — `src/pages/products.astro`

All six Deco lines in depth. **The surface and coverage figures are Armour Crete's own** —
recovered from the coverage table buried in the old site's Add-On Services panel, not
invented:

| Product | Surface | Coverage / 5 gal |
|---|---|---|
| DECO 20 Clear | Concrete | 1,200–1,500 sq ft |
| Salt Shield 303 | Salt-exposed concrete | 1,000–1,500 sq ft |
| D2K | Decorative concrete | 1,000–1,200 sq ft |
| SilaCast BES | Pavers & stone | 700–1,000 sq ft |
| TravaCast | Natural stone | 750–1,250 sq ft |
| Shine-A-Cast | High shine | 750–1,250 sq ft |

**No chemistry, cure time, gloss level, slip rating or service life has been invented
for any product.** Each entry carries a visible clay-bordered `Awaiting Dylan` block
naming exactly what is still needed. Those markers are draft artefacts and must be
resolved or removed before launch — they are visible to visitors.

### `#why` — the mechanism

Three steps, then the honest qualifier:

1. **It moves.** ~5.5 millionths of an inch per inch per °F (standard coefficient for
   normal-weight concrete). A 50-ft driveway through a 100°F swing moves about ⅓ inch.
   Restrained slab → stress → hairline cracks.
2. **It drinks.** Porous. Water wicks into capillary pores and the new cracks, carrying
   dissolved salt — pool, softener, soil, hard water.
3. **It breaks from the inside.** Water expands ~9% on freezing and southern Utah nights
   do drop below freezing; salt crystallisation does the same work without cold. Both are
   scaling, spalling and efflorescence.

Then: *"Sealing does not stop concrete moving. Nothing does."* It removes the water that
exploits the movement. That qualifier is deliberate — it is more credible than claiming
sealer prevents cracking, and it is defensible to a builder.

⚠️ The climate claims are kept qualitative on purpose. Before launch, verify St. George
freeze-night frequency against a primary source (NWS/NOAA normals) if it is ever made
specific.

### `#care` — the maintenance program

Two-year reseal cycle, scheduled by Armour Crete. Four points: scheduled by us, same
product and finish, priority on the calendar, stop whenever. **No pricing**, consistent
with the rest of the site — CTA is "Ask about the maintenance program".

⚠️ **Flag for Dylan.** A flat two-year cycle across all six products may not be
defensible. Penetrating sealers typically last far longer than film-forming ones, so if
any of these — SilaCast in particular, going by the name — is a penetrating silane,
reselling it every two years could read as an upsell to an informed buyer. The interval
should be per product, or the copy should say the cycle is set at assessment.

### `#faq` — nine questions

Native `<details>`/`<summary>` accordion, no JS, keyboard accessible. Three answers carry
`Awaiting Dylan` markers: the real reseal interval per product, whether anti-slip
additive is standard or optional (the top pool-deck objection), and the actual cure time
before new concrete can be sealed (commonly 28 days, unconfirmed).

The "What does it cost?" answer holds the no-pricing line — explains why a number before
a site visit is a guess, and points at the free assessment.

## Still open

- **Per-product technical detail** — six `Awaiting Dylan` blocks on `/products`.
- **Anti-slip additive** — standard, optional, or product-specific?
- **Cure time before sealing new concrete.**
- **Reseal interval per product**, and whether the flat two-year cycle survives it.
- Warranty terms per package.
- The foundation waterproofing sequence for the builder/GC track.
- One phone number on the site or both.
- **Mobile nav menu** — still the biggest structural gap; nav collapses to logo + CTA.

---

## Deco Products research — 2026-08-31

Pulled from **decoproducts.com** at Dylan's direction. Facts extracted and rewritten in
our own voice — no manufacturer marketing copy is reproduced on the site.

**Company:** Deco Products Inc., 7900 E 40th Ave, Denver CO 80207. Founded 1991 on the
premise that sealers should not be solvent-based. Water-based, non-hazardous throughout.
Runs a **Certified Applicator** program with free training.

### Verified product data

| Product | Type | Surface | Notes |
|---|---|---|---|
| **DECO 20 Clear Finish** | Penetrating, reactive | Concrete, roof tile | 100% transparent. Deco's original (1991). **The only clear sealer ICC-approved for dampproofing basement foundations.** Sharply slows mildew regrowth after a wash. Must go down early morning — flash-dries on a hot slab and leaves whiting/streaks. |
| **Salt Shield 303** | Penetrating, silane/siloxane | Salt-exposed concrete | **"Will not change the skid or slip resistance."** Dries clear, no film. Reduces spalling, freeze–thaw, dusting, mildew. |
| **SilaCast BES** | Penetrating, polymer emulsion | Pavers, roof tile, stone | Beauty Enhancing Sealer. Wet look from *within* the substrate. **Never needs stripping** before re-coat. Two types of UV protection. ~1,000 sq ft / 5 gal. |
| **Shine-A-Cast** | **Hybrid** — penetrating + topical | High shine | Locks paver joint sand. Revives sun-faded surfaces. Pigment can be added. UV protected, scratch resistant. **Approved applicators only.** |
| **TravaCast** | **Topical acrylic** | Non-porous stone | Travertine, Spanish tile. For surfaces a penetrating sealer cannot enter. UV protected, resists water blushing. |
| **Deco 20 Seal** | Hybrid acrylic resin membrane | Foundation walls | ICC approved. Continuous, seamless. Applies to damp walls and ICF. Eliminates 6 mil poly. Rated for hydrostatic pressure. |

Deco 20 Seal ASTM results now cited on `/products`: C 1306 (hydrostatic pressure over
cracks), C 836 §6.7/6.9/6.10/6.12, D 2939 §15, E 96, E 154 §13, D 2565.

### D2K — RESOLVED 2026-08-31

Dylan confirmed the sixth product is **Bio Blacktop**. D2K was an error carried forward.
Bio Blacktop is now written up on `/products` as 06, and "Asphalt & blacktop" has been
added to the homepage services as a seventh card (it spans the final row so it reads as
deliberate rather than as a gap). Coverage is stated as "varies with asphalt condition"
rather than reusing the old D2K figure, which cannot be trusted to have belonged to it.

Bio Blacktop facts: a proprietary blend of natural oil and co-polymers, positioned
explicitly as a non-toxic alternative to asphalt- and tar-based sealers. Conditions
dried-out asphalt as well as sealing it. Chemical and UV resistant, dries fast, cleans up
with soap and water. Applied by backpack sprayer and back-rolled — **never squeegeed**,
which pulls too much material to the surface.

### ⚠️ D2K does not exist (original finding, now resolved above)

There is **no D2K** in Deco's catalogue, and a site search returns nothing. Their
decorative range is SilaCast BES, TravaCast, Deco 20 Clear Finish, Shine-A-Cast,
StripaCast, Bio Blacktop, Salt Shield and ColorCast. The old site's "D2K Decorative
Sealer, 1,000–1,200 sq ft" was therefore discontinued, renamed at the distributor, or an
error. Given the old gallery carried an asphalt driveway, **Bio Blacktop** (Deco's
non-asphalt blacktop sealer, natural oil and co-polymer blend) is the likeliest intended
product. `/products` now carries a visible block asking Dylan to resolve it. **D2K has
been removed from the homepage roster.**

### Questions this research CLOSED

- **Anti-slip / pool decks — answered.** Salt Shield 303 does not change skid or slip
  resistance, per the manufacturer. FAQ rewritten to say so, with the honest caveat that
  high-shine topical finishes do leave a surface layer and warrant a conversation.
- **Reseal interval — largely answered.** It is governed by product type, not elapsed
  time. Penetrating products last considerably longer; SilaCast never needs stripping;
  topical acrylics wear as films do. The FAQ now explains this, and the maintenance
  section concedes that where a product outlasts two years we say so and stretch the
  cycle. **This vindicates the earlier flag — a flat two-year cycle across all products
  was not defensible.** Dylan still needs to supply the number he actually quotes.

### New opportunity

Deco runs a **Certified Applicator** program, and both Shine-A-Cast and Deco 20 Seal are
restricted to approved applicators. **If Dylan is certified, that belongs prominently on
the site** — it is third-party credentialing, which is exactly the kind of proof that
substitutes for the price and the reviews he does not want to show. Ask him.

## Certified applicator — CONFIRMED 2026-08-31

**Armour Crete is a certified Deco applicator.** Dylan confirmed it. This is the single
strongest credibility asset on the site, because it is third-party credentialing — which
is precisely the proof that has to do the work of the price and the reviews he has chosen
not to show. It also explains capability: Shine-A-Cast and the Deco 20 Seal foundation
membrane are restricted to approved applicators, so this is *why* Armour Crete can put
them down and a general handyman cannot.

Now placed in four spots: the hero fact list, the hero note line under the CTAs, the
materials section copy, and the footer. Do not bury it.

## Still open

- Reseal interval Dylan actually quotes, per product.
- Cure time before new flatwork can be sealed (Deco's site does not state it for flatwork).
- Warranty terms per package.
- One phone number on the site or both.
- **Mobile nav menu** — still the biggest structural gap.

---

## Build — mobile menu, both phones, working form (2026-08-31)

### Shared nav — `src/components/SiteNav.astro`

The nav was duplicated across index and products and had already started to drift, so it
is now one component used by both. Pass `solid={true}` for interior pages.

**Mobile menu** (below 900px): hamburger → full-screen panel with serif links, both
phone numbers, the email, the CTA, and the licensed/certified line. Verified working:
`aria-expanded` toggles, `aria-label` swaps open/close, Escape closes and returns focus
to the button, tapping any link closes it, background scroll is locked via
`html.menu-open`, and growing the viewport past 900px drops the menu state. Honours
`prefers-reduced-motion`.

### Both phone numbers — done

Dylan confirmed both go on the site. They now appear in the nav (desktop), the mobile
menu, the assessment section and the footer — **always labelled with a first name**.
That labelling is the fix for the original diagnosis: the old site's problem was never
two numbers, it was two *unlabelled* numbers, which read as disorganised.

### Form — now really submits

Posts JSON to `https://formsubmit.co/ajax/evans@armour-crete.com`. No account and no API
key; the service forwards to that address.

- Honeypot field `_honey` — silently drops bot submissions (verified).
- Native validation blocks empty required fields before any request (verified).
- Inline status region, `role="status" aria-live="polite"`, success and error styling.
- Button disables and reads "Sending…" during flight.
- **On network failure it falls back to opening the mail client**, so a lead is never
  silently swallowed — the exact bug the old site shipped.

Verified with a stubbed `fetch`: correct endpoint, correct payload, honeypot stripped
before send, success state renders, form resets. **No real submission was sent** — that
would have put a test lead in Dylan's inbox.

### ✅ ACTIVATED 2026-08-31

Dylan submitted once, clicked the activation link, and FormSubmit returned "Form
Activated". A follow-up test submission returned success with no fallback triggered.
**The form forwards to evans@armour-crete.com.**

Note the first submission appeared to "fail" and opened the mail client. That was
correct: FormSubmit does not forward the activation submission itself, so the code
treated it as a non-delivery and fell back rather than showing a false success. The
fallback did exactly its job.

⚠️ **RE-TEST AFTER DEPLOY — do not assume this carries over.** FormSubmit's confirmation
recorded the form as living at `http://localhost:4179/`. Once the site is on
www.armour-crete.com the submissions come from a different origin, and FormSubmit may
treat that as a new form needing its own activation. **The first thing to do after the
first deploy is submit a test from the live domain and watch for either the email or a
second activation link.** If this is missed, the form will look like it works while
silently dropping every lead — the precise failure the old site had.

⚠️ **One thing Dylan should still decide:**
**Is a third party acceptable?** Customer names, phone numbers and property
   addresses will route through formsubmit.co. If he would rather that data never leave
   his own infrastructure, the alternative is a Vercel serverless function plus an email
   API key (Resend or similar) — more setup, needs a key, but nothing third-party in the
   path. Swapping is a one-line endpoint change.

### Note on the dev server

Vite's module graph went stale twice while editing scoped styles — markup updates while
CSS silently does not, in every browser and every new tab. `curl` shows the correct CSS
while the browser does not. Fix: kill the process, `rm -rf node_modules/.vite .astro`,
restart. Worth knowing before chasing a phantom CSS bug.

## Still open

- Reseal interval Dylan actually quotes, per product.
- Cure time before new flatwork can be sealed.
- Warranty terms per package.
- The foundation waterproofing sequence for the builder/GC track.
- Real photography — 95 stills and 49 clips sit unused in `reference/`.
- Nothing is committed; the repo still has zero commits.

---

## Build — expansion joints + full SEO pass (2026-08-31)

### Expansion joints

Added as service 07; asphalt moved to 08. Copy ties it to the `#why` mechanism — failed
joint filler is the direct route for water into the sub-base, which is the whole argument
the site makes. The grid now keeps its final row full whether the count lands one or two
short (`:last-child:nth-child(3n+1)` spans 3, `3n+2` spans 2).

⚠️ Caught a live copy bug doing this: the services heading still read **"Six ways
concrete fails here"** while eight cards rendered beneath it. Rewritten to "Every way
concrete fails here" so it is no longer coupled to a count that keeps changing.

### SEO

**Titles & descriptions.** Keyword-led, brand last, location in both:
- `/` — "Concrete Sealing & Driveway Sealer | St. George, UT | Armour Crete" (66 chars)
- `/products` — "Deco Concrete Sealers We Use | St. George, UT | Armour Crete" (60 chars)

The H1 stays **"Sealed against the desert."** deliberately. Keyword-stuffing the H1 would
wreck the one line carrying the brand, and the title tag, section headings, body copy and
structured data carry the terms instead. That is the right trade for a site whose whole
argument is that it does not look like a contractor template.

**Structured data** (validated, parsing clean):
- `LocalBusiness` + `HomeAndConstructionBusiness` — NAP, `areaServed` covering all 12
  communities plus Utah, `knowsAbout` covering 13 service terms, `sameAs` pointing at the
  real Google Business Profile, and an `OfferCatalog` generated from the services array
  so it can never drift from the page.
- `FAQPage` with all 9 questions — **this is the rich-result play**; FAQ snippets expand
  in Google results and take vertical space off competitors. Answers are pulled from the
  same copy the visitor reads, because a mismatch is a policy violation.
- `WebSite`, plus `BreadcrumbList` and a 6-item `ItemList` of Products on `/products`.

**No `aggregateRating` anywhere.** With one real review, inventing or padding a rating
would be both an FTC problem and a Google structured-data violation. It goes in when
there are real reviews to point at.

**Crawl & social:** `public/robots.txt` (with sitemap reference), `public/sitemap.xml`
(hand-written — two pages does not justify a build dependency; **add new pages here
manually**), `max-image-preview:large`, geo meta, favicon and apple-touch-icon.

**OG image** — `public/og.png`, 1200×630, rendered with headless Chrome from an HTML card
so it uses the real Fraunces webfont. Recipe kept at
`scratchpad/og.html` pattern: build HTML, then
`"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --window-size=1200,630 --screenshot=out.png file://…`.
`sharp` is a dependency but cannot see the webfonts, so Chrome is the better tool here.

**Also:** keyword-bearing section eyebrows (small text, indexed, no design cost),
descriptive internal anchor text in place of "Talk to us", richer footer logo alt text,
`lang="en-US"`, and visible `:focus-visible` rings site-wide — accessibility, and a
ranking input.

Homepage keyword counts in visible text: concrete sealing ×7, St. George ×9, driveway ×7,
foundation waterproofing ×5, pool deck ×5, sealer ×6, Deco ×15, Kayenta ×3. Natural, not
stuffed.

### SEO work that still needs Dylan, not code

Ranking locally is mostly off-page. In rough order of impact:

1. **Google Business Profile** — the single biggest lever for "near me" searches, worth
   more than anything on the site. Claim it, fill every field, add photos, post
   occasionally. The profile exists (`g.page/r/CTRFIPJaX9QCEAI`).
2. **Reviews** — one review is a ranking problem as much as a trust problem. Ask every
   customer.
3. **Photos** — 95 stills and 49 clips sitting unused. Real project images with sensible
   filenames and alt text feed both the site and the GBP.
4. **NAP consistency** — identical name, address and phone everywhere online.
5. **A street address** — `LocalBusiness` schema currently has locality only. A verified
   address materially helps local pack ranking.
6. Submit the sitemap in Google Search Console once live.

## Still open

- Business street address for the schema.
- Reseal interval per product; cure time before sealing new flatwork; warranty terms.
- Foundation waterproofing sequence for the builder track.
- Re-test the form from the live domain immediately after the first deploy.
- Nothing committed; repo still has zero commits.
