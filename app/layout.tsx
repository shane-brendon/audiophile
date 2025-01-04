import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import "./global.css";
import PromoCard from "../src/components/promoCard/PromoCard"

const manrope = localFont({
  src: "./fonts/Manrope-VariableFont_wght.ttf",
  variable: "--font-manrope",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable}`}>
        {children}
        <PromoCard/>
      </body>
    </html>
  );
}
