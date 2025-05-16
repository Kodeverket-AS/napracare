import {type Metadata } from "next";
import "@/assets/styles/globals.css";

import { Footer } from "@/components/layout/footer/footer";
import { Navbar } from "@/components/layout/navigation/navbar";

export const metadata: Metadata = {
  title: 'NapraCare – Naprapatklinikkvest Ørjan Bask',
  description: 'Profesjonell behandling av muskel- og leddsmerter i Voss. Naprapat Ørjan Bask tilbyr effektiv manuell terapi, massasje og rehabilitering.',
  keywords: [
    'naprapat', 'Voss', 'manuell terapi', 'massasje', 'ryggsmerter', 
    'rehabilitering', 'Ørjan Bask', 'Naprapatklinikkvest', 'NapraCare'
  ],
  authors: [{ name: 'Ørjan Bask', url: 'https://napracare.no' }],
  metadataBase: new URL('https://napracare.no'),
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  openGraph: {
    title: 'NapraCare – Naprapatklinikkvest Ørjan Bask',
    description: 'Få profesjonell hjelp med smerter i muskler og ledd. Ørjan Bask tilbyr naprapati, massasje og rehabilitering i Bergen.',
    url: 'https://napracare.no',
    siteName: 'NapraCare',
    locale: 'nb_NO',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'NapraCare – Naprapatklinikkvest Ørjan Bask',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<<<<<<< HEAD
    <html lang="en">
      <body className="overflow-x-hidden">
        <Header />
=======
    <html lang="nb">
      <body>
        <Navbar />
>>>>>>> origin/development
        {children}
     <Footer />
      </body>
    </html>
  );
}
