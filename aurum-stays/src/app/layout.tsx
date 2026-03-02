import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AURUM STAYS — Luxury Rentals",
  description: "Curated collection of the world\u2019s most exclusive luxury properties.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-dark text-white font-sans antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
