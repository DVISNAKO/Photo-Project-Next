import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakti",
  description: "Kontakti",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
