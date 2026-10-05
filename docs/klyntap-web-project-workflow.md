# KLYNTAP Web Project Workflow

## Repository assessment

The project is a Next.js 16 application. The current Sarikhani page already provides a premium, mobile-first visual treatment, direct WhatsApp/call/Instagram actions, and a vCard endpoint. The reusable `/m/[username]` page is only a placeholder, with non-functional `#` links and hard-coded content. The key improvement is therefore to retain the Sarikhani experience while making the public profile model reusable.

## Stage 1

STAGE: Growth / business direction
AGENT: Growth Hacker
INPUT: KLYNTAP project brief and repository assessment.
DECISIONS: The primary conversion is a completed contact action: WhatsApp first, then phone or saved contact. The offer is a fast, professional contact page reached from an NFC card. Measure action-link engagement by destination when analytics is connected. Prioritize the WhatsApp CTA, a save-contact action, and a fully configured public profile route.
OUTPUT: A single-action mobile funnel: scan -> recognize person/brand -> contact through WhatsApp, call, or vCard.
RISKS / OPEN QUESTIONS: Per-client action analytics is not yet connected to a persistence provider.
STATUS: PASS

## Stage 4

STAGE: Frontend implementation
AGENT: Frontend Developer
INPUT: Approved UI specification and earlier handoffs.
DECISIONS: Replaced the placeholder public-profile route with a shared `PublicProfilePage` and local typed client configuration. Kept `/sarikhani`, all existing Sarikhani actions, and its legacy vCard endpoint functional while routing its UI and vCard data through the new shared model. Added a configured generic vCard endpoint at `/api/profiles/[username]/contact`.
OUTPUT: `lib/profiles.ts`, `components/public-profile.tsx`, reusable `/m/[username]` rendering, and configuration-generated contact downloads.
RISKS / OPEN QUESTIONS: Resolved. npm restored the generated dependency tree from the existing lockfile. Next.js made its required TypeScript configuration updates during the verified build; no application source, dependency manifest, or package lock change was needed.
STATUS: PASS

## Stage 5

STAGE: Final quality gate
AGENT: Reality Checker
INPUT: Original brief, all stage artifacts, implementation, route inspection, and attempted validation evidence.
DECISIONS: Independently rechecked the original brief and all approved handoffs against the current implementation. The implementation maintains the premium, mobile-first Sarikhani reference; removes the generic profile placeholder and `#` contact actions; provides configured WhatsApp, phone, social, and vCard behavior; and avoids new runtime dependencies or framework migration.
OUTPUT: Clean dependency recovery followed by `npm run build` on 2026-10-05 passed: Next.js 16.3.6 compiled successfully, completed TypeScript, generated all 10 static pages, and reported the expected public profile and vCard routes. The build ran on Node v24.17.0 with npm 11.13.0.
RISKS / OPEN QUESTIONS: None for this revision. Client configuration remains intentionally local until a future CMS/database decision.
STATUS: PASS

PASS

## Stage 2

STAGE: Brand guardrails
AGENT: Brand Guardian
INPUT: Project brief and Growth Hacker artifact.
DECISIONS: Preserve Sarikhani's editorial, tactile card language: restrained KLYNTAP attribution, uncluttered action list, premium typography, and a dark teal/cream palette. Do not add generic dashboard-like UI, excessive gradients, or promotional claims.
OUTPUT: Brand constraints suitable for the public profile shell.
RISKS / OPEN QUESTIONS: Client portraits and brand assets are optional and must not be fabricated.
STATUS: PASS

## Stage 3

STAGE: Interface definition
AGENT: UI Designer
INPUT: Project brief, Growth Hacker artifact, Brand Guardian artifact, and Sarikhani reference.
DECISIONS: A profile is one mobile-first column: branded visual header, name and role, ordered action cards, optional contact-download card, then discreet KLYNTAP attribution. Actions use native `tel:` / `https://wa.me/` / HTTPS destinations. Each action has a visible label, destination value, semantic navigation label, focus state, and a minimum 44px touch target. The page is full-bleed on narrow screens and a contained card from 481px upward.
OUTPUT: An implementation-ready reusable profile configuration, with Sarikhani as its first configured client and `/m/[username]` as the reusable route.
RISKS / OPEN QUESTIONS: The client configuration is local data until a CMS/database source is selected.
STATUS: PASS
