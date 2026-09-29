import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KLYNTAP — Tek dokunuş. Her bağlantı.",
  description: "Fiziksel dünyayı yönetilebilir dijital bağlantılara dönüştüren NFC platformu.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="tr"><body>{children}</body></html>;
}
