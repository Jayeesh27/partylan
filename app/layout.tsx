import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
