import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PublicProfilePage } from "@/components/public-profile";
import { getPublicProfile } from "@/lib/profiles";

export const metadata: Metadata = {
  title: "Abbas Sarikhani | KLYNTAP",
  description: "Abbas Sarikhani digital contact card. Reach via WhatsApp, phone, and Instagram through KLYNTAP."
};

export default function SarikhaniPage() {
  const profile = getPublicProfile("sarikhani");
  if (!profile) notFound();

  return <PublicProfilePage profile={profile} />;
}
