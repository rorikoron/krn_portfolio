import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Header from './components/Header'
const robotoMono = localFont({
  src: "./fonts/RobotoMono-Light.ttf",
  variable: "--font-roboto-mono",
  weight: "100 900",
});

const zenkakuGothicLight = localFont({
  src: "./fonts/ZenKakuGothicAntique-Light.ttf",
  variable: "--font-zenkaku-gothic-light",
  weight: "100 900",
});
const zenkakuGothicMedium = localFont({
  src: "./fonts/ZenKakuGothicAntique-Medium.ttf",
  variable: "--font-zenkaku-gothic-medium",
  weight: "100 900",
});
const zenkakuGothicRegular = localFont({
  src: "./fonts/ZenKakuGothicAntique-Regular.ttf",
  variable: "--font-zenkaku-gothic-regular",
  weight: "100 900",
})
const zenkakuGothicBold = localFont({
  src: "./fonts/ZenKakuGothicAntique-Bold.ttf",
  variable: "--font-zenkaku-gothic-bold",
  weight: "100 900"
})

export const metadata: Metadata = {
  title: "krn",
  description: "ろりころんの自己紹介サイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoMono.variable} ${zenkakuGothicLight.variable} ${zenkakuGothicMedium.variable} ${zenkakuGothicRegular.variable} ${zenkakuGothicBold.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
