// app/layout.tsx

import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import AuthProvider from "./components/global/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mike Watts's Portfolio Site",
  description: "A personal portfolio site built with Sanity and Next.js",
  openGraph: {
    images: "https://cdn.vectorstock.com/i/1000x1000/76/33/mission-impossible-rubber-stamp-vector-13317633.webp",
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <AuthProvider>
      <body className={`${inter.className} bg-sky-950 text-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
      </AuthProvider>
    </html>
  );
}
