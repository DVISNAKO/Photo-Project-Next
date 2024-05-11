import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PASĀKUMU FOTO",
  description: "PASĀKUMU FOTO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
