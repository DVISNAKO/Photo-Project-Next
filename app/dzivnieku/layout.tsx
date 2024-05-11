import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "DZĪVNIEKU FOTO",
    description: "DZĪVNIEKU FOTO",
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
       {children}
    </div>
  );
}
