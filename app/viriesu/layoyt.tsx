import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VĪRIEŠU FOTO",
  description: "VĪRIEŠU FOTO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
