import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galereja",
  description: "Galereja",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
