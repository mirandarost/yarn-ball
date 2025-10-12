import type { Metadata } from "next";
import "./globals.css";
import { robotoMono, domine } from "@/app/ui/fonts";

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

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
    <html lang="en" className={`${robotoMono.variable} ${domine.variable}`}>
      <body
        className={` antialiased min-h-full`}
      >
        {children}
      </body>
    </html>
  );
}
