import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sasniegumi",
  description: "Sasniegumi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
