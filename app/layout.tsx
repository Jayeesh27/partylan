import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PartyLAN — The Portable LAN Gaming Hub",
  description:
    "PartyLAN is a portable, Raspberry Pi 5-powered LAN gaming hub with local game caching, wired connectivity, and plug-and-play setup. Built at SJSU.",
  openGraph: {
    title: "PartyLAN — The Portable LAN Gaming Hub",
    description:
      "PartyLAN is a portable, Raspberry Pi 5-powered LAN gaming hub with local game caching, wired connectivity, and plug-and-play setup. Built at SJSU.",
    type: "website",
    url: "https://github.com/Jayeesh27/partylan",
  },
  twitter: {
    card: "summary_large_image",
    title: "PartyLAN — The Portable LAN Gaming Hub",
    description:
      "PartyLAN is a portable, Raspberry Pi 5-powered LAN gaming hub with local game caching, wired connectivity, and plug-and-play setup. Built at SJSU.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
