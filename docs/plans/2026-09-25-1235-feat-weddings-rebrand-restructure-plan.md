---
artifact_contract: ce-unified-plan/v1
artifact_readiness: implementation-ready
product_contract_source: ce-brainstorm
execution: code
---

# Unified Technical Plan: Weddings Brand & Website Restructuring 2026

## Goal Capsule

- **Objective:** Transform `paulamacouzet.com/weddings` from a portfolio with a password-restricted gallery and a flat pricing line into a high-end, multi-page boutique website that projects Quiet Luxury and Fine Art authority, communicating clear tiered packages ($1,600 - $3,800+ USD), open editorial case studies, and a dedicated B2B channel for wedding planners.
- **Means:** Multi-page Vite static site architecture using Vanilla CSS and semantic HTML, removing the password gate, introducing dedicated subpages for `/stories/`, `/collections/`, and `/for-planners/`, and upgrading navigation and forms.
- **Git Branch:** `feature/weddings-rebrand-restructure` (repo: `paulamacouzet.com`).
- **Stop Conditions:** 
  1. All new and modified subpages build with 0 errors via `npm run build`.
  2. The password gate is completely removed; case studies are fully accessible.
  3. The 3 tiers and comparison table are live and legible across mobile, tablet, and desktop.
  4. The user has reviewed and approved the visual layout before merging to `main`.

---

## Product Contract

### Traceability & Origin
Derived directly from the strategic blueprint created during the brainstorm:
- `Estrategia de Marca, Paquetes y Workflow 2026.md` (Obsidian Vault).
- Client Proposal Reference: `Emily&Michael_Wedding Identity Proposal.pdf`.

### Requirements

#### [R1] Elimination of Password Gate & Open Case Studies
- The password gate (`pauladesigns`) on wedding work must be completely removed.
- Wedding web work and visual identities will be accessible at `/weddings/stories/` (with backwards compatibility redirect/alias from `/weddings/websites/`).
- Case studies will present the couple narrative, destination, monogram, hand-drawn illustrations, and mockups in desktop and mobile viewports.

#### [R2] 3-Tier Pricing & Collections Page (`/weddings/collections/`)
- A dedicated page presenting the 3 investment tiers:
  - **Tier 1: The Digital Suite** ($1,600 – $1,800 USD)
  - **Tier 2: The Signature Identity & Digital World** ($2,600 USD — Signature Badge)
  - **Tier 3: The Full Atelier Experience** ($3,600 – $3,800 USD)
- Transparent delivery timelines (3 weeks, 4-6 weeks, 6-8 weeks).
- Side-by-side feature comparison table highlighting deliverables.
- Add-on menu for bespoke physical pieces (hand-painted bottles, framed original art).
- FAQ section addressing common client questions (domains, hosting, revisions, print specs).

#### [R3] Dedicated B2B Page for Wedding Planners (`/weddings/for-planners/`)
- Dedicated subpage communicating directly with destination wedding planners.
- Highlighting the **Production Brand Guide** (Pantone/HEX, vector library, typography hierarchy, rental and floral styling alignment).
- Expedited inquiry CTA for planners.

#### [R4] Main Weddings Landing Page Refresh (`/weddings/index.html`)
- Tagline update: *"Bespoke Visual Identity & Digital Spaces for Meaningful Destination Weddings"*.
- Updated navigation bar pointing to `/weddings/`, `/weddings/stories/`, `/weddings/collections/`, `/weddings/for-planners/`, and `/weddings/inquire/`.
- Experience cards refreshed to tease the 3 collections and link to the collections page.
- Teaser grid for recent stories.

#### [R5] Inquire Form Qualification (`/weddings/inquire/index.html`)
- Form updated to include:
  - Dropdown selector for package of interest (*The Digital Suite*, *The Signature Identity*, *The Full Atelier*, *Custom/Undecided*).
  - Budget range selector.
  - "I am a Wedding Planner" toggle or indicator.

---

## Planning Contract

### Architecture & Key Technical Decisions (KTDs)

- **[KTD-1] Static Multi-Page Generation via Vite:**
  Instead of introducing a heavy framework (React/Next), keep the ultra-fast Vanilla HTML/CSS/JS architecture already established in `paulamacouzet.com`. Update `vite.config.js` rollup input map to bundle each HTML page cleanly.
- **[KTD-2] Shared CSS Design System (`style.css`):**
  Maintain existing brand variables (`--color-bg`, typography pairings with Poppins and Cinzel, diamond accent bullets `⟡`) and create reusable utility components for luxury pricing tables, accordions, and case study hero splits.
- **[KTD-3] Responsive Editorial Grids:**
  Implement CSS grid and flexbox with strict mobile-first and tablet-first breakpoints (testing 375px mobile, 768px tablet, 1024px iPad Pro, and 1440px desktop).

---

## Implementation Units

### U1: Multi-Page Routing & Navigation Architecture
- **Files:**
  - `vite.config.js`
  - `weddings/index.html`
  - `weddings/style.css`
- **Actions:**
  - Update `vite.config.js` rollup inputs:
    `weddings`, `stories`, `collections`, `planners`, `gallery`, `inquire`, `thankyou`.
  - Update desktop and mobile drawer navigation across all existing headers with consistent links:
    - Left: `about`, `philosophy`
    - Center: Weddings Logo
    - Right: `stories`, `collections`, `for planners`, `inquire`
- **Verification:** Navigating between all pages in local dev server loads without 404s.

### U2: `/weddings/stories/` — Open Editorial Case Studies
- **Files:**
  - `weddings/stories/index.html` (created from `weddings/websites/index.html`)
  - `weddings/websites/index.html` (simplified to redirect or mirror `/stories/`)
  - `weddings/style.css`
- **Actions:**
  - Remove all `#password-overlay`, sessionStorage checks, and password submit logic.
  - Restructure showcase into distinct editorial stories (e.g., *London Meets Tuscany*, *Canadian Romance*, *Oaxaca Destination*).
  - Pair full mockup screenshots with concept text, palette chips, and illustration details.
- **Verification:** Page loads instantly without password prompts; images display smoothly on mobile and desktop.

### U3: `/weddings/collections/` — 3 Tiers, Pricing Table & FAQ
- **Files:**
  - `weddings/collections/index.html` (new file)
  - `weddings/style.css`
- **Actions:**
  - Build 3-card tier display (The Digital Suite, The Signature Identity with featured badge, The Full Atelier).
  - Implement full comparison table.
  - Implement collapsible FAQ accordion (using existing tested accordion JS pattern).
  - Add clear CTA buttons linking to `/weddings/inquire/`.
- **Verification:** Accordion expands/collapses properly; table is responsive with horizontal scroll on small mobile screens.

### U4: `/weddings/for-planners/` — B2B Planner Landing Page
- **Files:**
  - `weddings/for-planners/index.html` (new file)
  - `weddings/style.css`
- **Actions:**
  - Showcase the Production Brand Guide value proposition.
  - Explain the vendor synchronization workflow (florals, signage, rentals, print).
  - Add direct planner inquiry link.
- **Verification:** Layout renders cleanly with high-end editorial aesthetic.

### U5: `/weddings/index.html` & `/weddings/inquire/index.html` Polish
- **Files:**
  - `weddings/index.html`
  - `weddings/inquire/index.html`
- **Actions:**
  - Update home page copy and experience cards linking to `/collections/`.
  - Update inquiry form with package dropdown and budget selector.
- **Verification:** Submitting form sends correct payload to Formspree endpoint.

---

## Verification Contract

- **Build verification:** `npm run build` must complete with zero errors in `paulamacouzet.com`.
- **Local preview:** `npm run preview` to inspect:
  - Header links on mobile and desktop.
  - Removal of password barrier.
  - Responsiveness of pricing cards and comparison table.
- **No broken links:** All anchors point to valid relative paths (`/weddings/stories/`, `/weddings/collections/`, etc.).

---

## Definition of Done

1. Git branch `feature/weddings-rebrand-restructure` contains all incremental commits.
2. User has reviewed the visual layouts and flow in browser preview.
3. No password prompt exists anywhere on the site.
4. All 3 tiers and prices match the strategic blueprint.
