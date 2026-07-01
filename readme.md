# Aventurine Dream — Design System

**Aventurine Dream** is the creator brand of Aventurine, a full-time mixed-media artist working across pre-recorded yoga/Pilates/barre videos (edited like music videos, with light VFX), a weekly gaming stream, a weekly digital art stream, experimental creative shorts, and — eventually — original music. The brand lives at **aventurinedream.art**. The community around it, the **Lil Big Bang Group**, is intentionally trans- and neurodivergent-affirming.

There is no pre-existing codebase, Figma file, or brand deck behind this system — it was built from scratch from a written creative brief (pasted directly into chat) plus a live back-and-forth with Aventurine reacting to visual rounds. There is nothing to link back to; **this project itself is the source of truth**.

## Positioning

"Chaotic and sincere." The brand swings between playful, earnest, cryptic, and a little dark — and the swing itself is the personality. The throughline is the visible joy of making: delight in craft, never performed cool. Identity (queer, neurodivergent, trans/ND-affirming community) is woven into the warmth of the work, never a banner or a slapped-on flag.

The name comes from the aventurine stone — green-to-teal with a shimmer — used as a *starting hypothesis* for the palette, not a strict rule. In practice the system settled on a Rothko-style color-field system: saturated pastels, pulled toward gray, overlapping and blooming edge-to-edge so there's never dead negative space.

## How this system came together

1. Explored five logo/color/type directions on a pannable canvas (`identity-exploration.html`, kept as a historical record of the process).
2. Narrowed to a Rothko-inspired "vibe frame": overlapping color blooms, no negative space, film grain.
3. Locked a five-color palette (aventurine green, magenta, butter, periwinkle, mauve) pulled toward gray/pastel, plus a powder-blue base wash and an "opal" iridescent trim used on interactive pills.
4. Built the token system, foundation specimen cards, a small core component set, and the landing page (`landing.html`) on top of it.

## Content fundamentals

**Voice:** first-person, warm, a little wry. Aventurine talks *to* the reader directly ("I make things..."), never at them in brand-speak. Copy stays personal even when describing the business side (prints, commissions) — it introduces them as things "finding their home here in time," not as store departments.

**Register swings on purpose.** A single paragraph can move from plainly factual ("I'm a full-time creator working in digital mixed media") to poetic ("let your mind off leash") without transition — that swing *is* the brand voice. Don't smooth it into one consistent corporate register.

**Casing & structure:** mostly lowercase for wordmark and short taglines ("chaotic & sincere," "still blooming") — it reads as intimate, not shouted. Sentence case for body copy. Uppercase reserved for tiny tracked-out labels (eyebrows, nav).

**CTAs are invitations, not commands.** "wander in," "find me," "come wander, come watch, come make noise" — never "Subscribe Now" or "Shop Now." End sections on an open door, not a hard sell.

**Emoji:** not used. The visual chaos carries the energy; emoji would flatten it into generic internet-speak.

**Identity handling:** never a banner ("Pride brand!"), never absent either. It shows up as a specific, concrete detail woven into a sentence ("trans- and neurodivergent-affirming by design") — treated the same weight as any other fact about the community, not spotlighted separately.

**Example (from the landing page about section):**
> "I'm a full-time creator working in digital mixed media. Workout videos edited like music videos. A weekly gaming stream and a weekly art stream. Experimental shorts when the mood takes me. Music, eventually, woven through all of it."

## Visual foundations

**Color.** Five-color anchor palette, all pulled toward gray/pastel rather than saturated: aventurine green (`#99B59D`), magenta (`#C297B0`), butter yellow (`#CBB98A`), periwinkle (`#9F96B8`), mauve (`#8B83A3`). A powder-blue wash (`#B3CCD6`) sits *behind* the color-field blooms everywhere, so gaps between blooms never read as dark negative space. Neutrals are warm-cool grays that are never pure black/white: ink (`#241F2B`) for primary text, cream (`#F5EFE4`/`#FBF7EF`) for surfaces and text-on-color. See `tokens/colors.css`.

**Type.** Three families: **Syne** (avant-garde geometric display, for headings — quirky, art-context-native, never a generic corporate sans), **Instrument Serif** italic (poetic accent — the wordmark, pull-quotes, anything that should feel personal rather than declarative), and **Hanken Grotesk** (body copy — chosen specifically for readability as the neurodivergent-affirming guardrail: generous line-height at 1.55–1.75, humanist letterforms). Loaded via Google Fonts CDN — see the Fonts caveat below.

**Backgrounds.** Never flat/plain. The signature motif is the **color field**: 5–6 large, blurred (40–60px), overlapping radial-gradient blooms positioned at the corners and center of the viewport, slowly drifting (10–16s ease loops, `translate` + `scale`), always sitting on the powder-blue base so no gap shows through. A subtle SVG turbulence **grain** overlay (7% opacity, `mix-blend-mode: overlay`) sits on top everywhere for a filmic, non-digital texture. No photography is used yet — see Imagery caveat below.

**Animation.** Slow and atmospheric, never snappy or bouncy for ambient motion (the color field drifts on `ease` timing over 10-16s). Interactive elements (buttons, social pills) use a *soft overshoot* ease (`--ease-bloom`, `cubic-bezier(0.34, 1.2, 0.64, 1)`) for a gentle, organic "settle" feeling. Scroll-reveals fade + rise (20px, 600ms, `ease-out`), staggered slightly per element. All durations collapse to 0 under `prefers-reduced-motion: reduce`.

**Hover / press states.** Hover: soft lift (`translateY(-2px)`) plus a colored periwinkle glow (`--hover-glow`) — never a hard color swap or underline. Press: slight sink + scale-down (`translateY(1px) scale(0.985)`). Nothing snaps; every transition uses the bloom or soft easing curve.

**Borders & the "opal" system.** Standard borders are hairline and low-contrast (`--border-soft`, `--border-hair`, ~7–12% ink). The signature accent is the **opal trim**: a milky, pearlescent gradient border (`--gradient-opal`, teal → lilac → pink → soft gold) applied via the layered `background: linear-gradient(surface, surface) padding-box, var(--gradient-opal) border-box` technique. Used on chips and social pills — deliberately desaturated/pearlescent, not a saturated rainbow (an earlier, more saturated version was explicitly rejected as "RGB keyboard"-looking).

**Shadows.** Always plum/ink-tinted, never pure black (`rgba(36,31,43,...)`). A special `--shadow-bloom` (colored periwinkle glow) exists for elements that should feel like they're radiating rather than sitting on a surface.

**Corners.** Soft and organic throughout — `--radius-md` (12px) to `--radius-xl` (32px) for cards, `--radius-pill` for buttons/chips/social links, and a custom organic `--radius-blob` (`42% 58% 63% 37% / 41% 44% 56% 59%`) for anything that should feel hand-formed rather than geometric (e.g. the logo placeholder slot).

**Cards.** Warm cream surface (`--surface-card`), soft plum shadow (`--shadow-md` by default), generous rounded corners (`--radius-lg`), no visible border — the shadow alone separates it from the page.

**Transparency & blur.** Used specifically for the color-field blooms (`blur(60px)` on oversized gradient shapes) and for the still-empty logo placeholder (a translucent dashed-border slot, `backdrop-filter: blur(8px)`) — signaling "fill me in" rather than being a finished mark.

**Layout.** Single long-scroll landing page, no fixed/sticky elements besides a transparent top nav. Generous vertical rhythm (`--space-9`/`--space-10`/`--space-11`, i.e. 96–192px) between sections — the "readable chaos" guardrail in practice: visually rich backgrounds, but calm, spacious, uncluttered content blocks on top.

## Iconography

No existing icon system was provided (no codebase/Figma to inherit from). Approach:
- **Social platform logos** (Twitch, YouTube, Reddit, Bluesky, TikTok) are loaded live from the **Simple Icons CDN** (`https://cdn.simpleicons.org/<slug>/<hex>`) — real brand marks, not hand-drawn approximations, tinted to match `--text-primary`.
- **Fansly** has no entry in Simple Icons (it's outside their "popular brands" set), so its glyph on the landing page is a **flagged custom placeholder** — swap in the official mark if/when you have one.
- No emoji are used anywhere in the UI.
- No unicode-glyph icons are used as a system (the only unicode character in the UI is a plain "↓" scroll cue).
- There is no custom icon font or icon set of Aventurine's own yet. If the brand accumulates its own iconography (stream overlay icons, merch marks, etc.), add them to `assets/icons/` and register them here.

## Assets

`assets/` currently contains `logo-temp.svg` as a temporary mark. The landing page hero uses the organic blob slot, sized 120×120, ready for a final wordmark/symbol to replace the temporary asset once one is designed. All hero/about imagery is deliberately blank for now — Aventurine will source real photography/video stills and the layout should accept it later without restructuring.

## Caveats & open flags

- **Fonts are loaded from Google Fonts CDN**, not shipped as local `@font-face` binaries — because there was no existing type system to inherit real font files from, and Syne / Instrument Serif / Hanken Grotesk were chosen fresh as the nearest fit for "avant-garde + readable." This works fine for any consumer with internet access, but the design-system compiler won't report these as bundled "Fonts" (it only indexes local `@font-face` closures). Flag: if you want the system fully self-contained/offline, real Syne/Instrument Serif/Hanken Grotesk `.woff2` files need to be added and referenced via local `@font-face`.
- **No real logo/wordmark yet** — the hero shows an explicit placeholder slot. This was deliberately left for last per the brief ("do not worry about logo yet").
- **Fansly's icon is a custom placeholder**, not sourced from a verified library (see Iconography above).
- **No photography/imagery yet** — the about and hero sections are copy-only by design; the layout is built to accept real photos/video stills later without a redesign.
- **This is a from-scratch original brand**, not a recreation of an existing product — so there's no "ground truth" codebase to check pixel-fidelity against. Everything here is a first-round design system built collaboratively in chat; expect iteration.

## Index

- `styles.css` — root entry point, imports everything below.
- `tokens/colors.css` — core palette, tints/shades, neutrals, semantic aliases, opal gradient.
- `tokens/typography.css` — font families (Google Fonts import), type scale, weights, semantic type roles.
- `tokens/spacing.css` — spacing scale, container widths, radii (incl. organic blob), z-index.
- `tokens/effects.css` — shadows, blur, grain texture, motion easing/durations, hover/press states.
- `guidelines/` — 18 foundation specimen cards (Colors ×5, Type ×5, Spacing ×4, Brand ×4) shown in the Design System tab.
- `components/core/` — `Button`, `Chip`, `SocialLink`, `Card`, `Eyebrow`, `SectionHeading` (React, styled via CSS custom properties only).
- `landing.html` — the live working build of the aventurinedream.art landing page (hero, about, coming-soon, connect/socials).
- `identity-exploration.html` — historical record of the five initial logo/color/type directions and the vibe-frame refinement rounds; kept for reference, not a current deliverable.
- `SKILL.md` — portable skill definition for using this system in Claude Code or elsewhere.
