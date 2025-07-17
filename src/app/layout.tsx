import React from "react";
import type { Metadata } from "next";
// Import DM Sans from next/font/google to set as the default font for the project
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { HeroHeader } from "@/components/ui/header";
import { Footer } from "@/components/page-components/footer-section";

const dmSans = DM_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EasyGoDocs",
  description:
    "Effortless, elegant, and powerful documentation for your Go projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} antialiased`}>
        <HeroHeader />
        {children}
        <Databuddy
                clientId="w2muEC5fMcyhRncjyO380"
                        enableBatching={true}
                              />
        <Footer />
      </body>
    </html>
  );
}
