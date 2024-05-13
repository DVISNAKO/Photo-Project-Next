import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Par mani",
  description: "Par mani",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
