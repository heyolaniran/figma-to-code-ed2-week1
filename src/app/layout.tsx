import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Raleway({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Figma To Code Challenge - ED2",
  description: "The NFT WORLD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="container bg-slate-50 lg:px-12">
        <NavBar />
        <main className={`relative overflow-hidden font-normal `}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
