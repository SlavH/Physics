import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ֆիզիկայի թեստեր",
  description: "Ֆիզիկայի 2020 թվականի երկրորդ կիսամյակի քննական թեստեր",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hy">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Armenian:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-armenian bg-gray-100 min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
