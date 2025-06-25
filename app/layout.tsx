import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Theme from "@/components/Theme";

export const metadata: Metadata = {
  title: "Destiné",
  description: "Your Destiny Awaits",
  openGraph:{
    images: []
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`md:px-28 bg-white dark:bg-black text-gray-900 dark:text-gray-50 transition-colors`}
      >
        <Navbar />
        {children}
        <Theme />
      </body>
    </html>
  );
}
