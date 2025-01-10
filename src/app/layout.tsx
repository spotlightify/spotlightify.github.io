'use client'

import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from 'geist/font/sans';
import NavBar from "@/components/ui/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full w-full dark">
      <head>
        <title>Spotlightify</title>
        <meta name="description" content="Spotlightify is a GUI based application designed to allow users to quickly interact with Spotify playback across Windows, Linux, and macOS. Created with simplicity and efficiency in mind, Spotlightify allows users to seamlessly control their music experience without having to navigate through Spotify's native interface." />
        <meta name="keywords" content="Spotlightify, Spotify, Spotlight, Next.js, TypeScript, React, Wails, Golang" />
        <meta name="author" content="Peter Murphy" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#1DB954" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Spotlightify - Seamless Spotify Control" />
        <meta property="og:description" content="Spotlightify is a GUI application that simplifies Spotify playback control across multiple platforms." />
        <meta property="og:image" content="https://github.com/spotlightify/spotlightify/blob/main/media/logo.svg" />
        <meta property="og:url" content="https://spotlightify.github.io/" />
        <meta property="og:site_name" content="Spotlightify" />
        <meta property="og:locale" content="en_US" />
      </head>

      <body className={`${GeistSans.className} h-full w-full overflow-auto flex flex-col items-center bg-[#f8fafc] dark:bg-[#0A0A0A] relative`}>
        {/* Top Gradient */}
        <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#1DB954] to-[#191414] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>

        {/* Bottom Gradient */}
        <div className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#1DB954] to-[#191414] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
        </div>

        <NavBar />
        <main className="w-full h-full mt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
