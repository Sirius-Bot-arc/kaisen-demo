import type { Metadata } from "next";
import { Shippori_Mincho, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const display = Shippori_Mincho({ subsets: ["latin"], weight: ["500", "600", "700", "800"], variable: "--font-display" });
const body = Zen_Kaku_Gothic_New({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Kaisen Arcane Systems | Arcane Cyber Defense Division",
  description: "Kaisen Arcane is a fictional cyber defense company. This site is a safe demo target.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <div className="bg-layers" aria-hidden="true"><div className="bg-grid" /><div className="bg-stars" /></div>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
