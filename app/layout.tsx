import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Titillium_Web } from "next/font/google";
import "./globals.css";
import NavBarWrapper from "@/components/ui/navigation/NavBarWrapper";

const titillium = Titillium_Web({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rosland Web",
  description: "🤖",
  icons: {
    icon: [
      {
        url: "/favicon-dark.ico",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${titillium.className} antialiased`}>
        <NavBarWrapper />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
