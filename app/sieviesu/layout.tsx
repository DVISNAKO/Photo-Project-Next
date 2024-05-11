import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SIEVIEŠU FOTO",
  description: "SIEVIEŠU FOTO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
