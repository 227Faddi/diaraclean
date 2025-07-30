import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { myMetadata } from "@/data";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-nunito",
});

export const metadata: Metadata = myMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-theme="themelight">
      <body className={`${nunito.className} antialiased relative`}>
        <div className="flex flex-col items-center bg-base-100">
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
