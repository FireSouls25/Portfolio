import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { VT323 } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import CrtEffect from './components/CrtEffect'; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const vt323 = VT323({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body
        className={`${geistSans.variable} ${vt323.variable} antialiased`}
      >
        <CrtEffect> {/* Wrap children with CrtEffect */}
          <Providers>{children}</Providers>
        </CrtEffect>
      </body>
    </html>
  );
}
