import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/Footer/Footer";

import Header from "./components/Header/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Volcites-photo",
  description: "Volcites-photo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
    <Footer/>
      </body>
    </html>
  );
}
