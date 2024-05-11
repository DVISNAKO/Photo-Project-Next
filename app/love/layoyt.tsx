import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LOVE STORY",
  description: "LOVE STORY",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
