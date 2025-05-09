import type { Metadata } from "next";
import "@/assets/styles/globals.css";
import { Header } from "@/components/layout/header/header";
import { Footer } from "@/components/layout/footer/footer";
export const metadata: Metadata = {
  title: "Tempalte page",
  description: "Kodeverket sin NextJS template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
