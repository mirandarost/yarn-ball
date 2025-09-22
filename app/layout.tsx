import type { Metadata } from "next";
import "./globals.css";
import { robotoMono } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Yarnball",
  description: "A Ravelry skin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoMono.className} antialiased min-h-full bg-orange-100 text-slate-800`}
      >
        {children}
      </body>
    </html>
  );
}
