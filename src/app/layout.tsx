'use client'

import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from 'geist/font/sans';
import NavBar from "@/components/ui/navbar";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mobileView, setMobileView] = useState(false);

  const isMobile = mobileView || window.innerWidth < 640;

  useEffect(() => {
    if (window.innerWidth >= 640) {
      setMobileView(false);
    }

    const handleResize = () => {
      if (window.innerWidth < 640) {
        setMobileView(true);
      } else {
        setMobileView(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <html lang="en" className="h-auto w-full">
      <body className={`${GeistSans.className} h-auto w-full overflow-auto flex flex-col items-center`}>
        {!isMobile && <NavBar />}
        <main style={{ backgroundColor: "#fefefe" }} className="max-w-4xl ml-4 mr-4 w-full mt-28 sm:mt-24 sm:mb-24">
          {children}
        </main>
      </body>
    </html>
  );
}
