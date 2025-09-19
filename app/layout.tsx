import type { Metadata } from "next";
import "./globals.css";
import { domine } from "./ui/fonts";

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
        className={`${domine.className} antialiased min-h-full`}
      >
        {children}
      </body>
    </html>
  );
}
