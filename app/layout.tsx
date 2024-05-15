'use client'

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./globals.css";
import { LanguageState } from "./utils/context";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Volcites-photo",
//   description: "Volcites-photo",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [language, setLanguage] = useState<boolean>(false);

  return (
    <LanguageState.Provider value={{ language, setLanguage }}>
      <html lang="en">
        <body className={inter.className}>
          <Header language={language} setLanguage={setLanguage} />
          {children}
          <Footer/>
        </body>
      </html>
    </LanguageState.Provider>
  );
}
