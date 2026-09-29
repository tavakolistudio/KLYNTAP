# KLYNTAP

KLYNTAP is a Turkish, physical-to-digital NFC connection platform prototype. It contains the responsive public product site, product detail route, profile and dashboard shells, admin shell, and an NFC redirect route ready to be connected to Supabase.

## Run locally

1. Copy `.env.example` to `.env.local` and set values when Supabase is configured.
2. Run `npm install`.
3. Run `npm run dev` and visit `http://localhost:3000`.

## Key routes

- `/` marketing site
- `/urun/google-review` product page pattern
- `/m/mohammad` public profile pattern
- `/n/A8F21` NFC redirect state pattern
- `/dashboard` customer dashboard shell
- `/admin` administration shell

## Supabase

Apply `supabase/schema.sql` in the Supabase SQL editor or migration workflow. The schema keeps redirect slugs short, separates destinations from physical cards, and stores only the basic operational tap data described in the brief. Add row-level security policies before connecting browser data access.

## Deployment

Import the project into Vercel, add the variables from `.env.example`, and set `NEXT_PUBLIC_APP_URL` to the deployed origin. Payment providers are deliberately not coupled to the app; implement an adapter behind order creation once iyzico or PayTR is selected.
