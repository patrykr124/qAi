import type { Metadata } from "next";
import { Righteous } from "next/font/google";
import "./globals.css";

const righteous = Righteous({
  variable: "--font-formula",
  subsets: ["latin"],
  weight: ["400"]
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${righteous.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
