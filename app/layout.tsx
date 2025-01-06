import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/services/AuthProvider";
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
        <AuthProvider>
          <NavBarWrapper />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
