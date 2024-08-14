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
  return (
    <html lang="en" className="h-auto w-full">
      <head>
        <title>Spotlightify</title>
      </head>
      <body className={`${GeistSans.className} h-auto w-full overflow-auto flex flex-col items-center`}>
        <NavBar />
        <main style={{ backgroundColor: "#fefefe" }} className="max-w-4xl ml-4 mr-4 w-full mt-28 sm:mt-24 sm:mb-10 pb-10">
          {children}
        </main>
      </body>
    </html>
  );
}
