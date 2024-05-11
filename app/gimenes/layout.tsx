import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ĢIMENES FOTOSESIJA",
  description: "ĢIMENES FOTOSESIJA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
