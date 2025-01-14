import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from 'geist/font/sans';
import NavBar from "@/components/ui/navbar";

export const metadata: Metadata = {
  title: "Spotlightify - Seamless Spotify Control",
  description: "Spotlightify is a GUI based application designed to allow users to quickly interact with Spotify playback across Windows, Linux, and macOS. Created with simplicity and efficiency in mind.",
  keywords: ["Spotlightify", "Spotify", "Spotlight", "Next.js", "TypeScript", "React", "Wails", "Golang"],
  authors: [{ name: "Peter Murphy" }],
  creator: "Peter Murphy",
  publisher: "Peter Murphy",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  themeColor: "#1DB954",
  openGraph: {
    type: "website",
    title: "Spotlightify - Seamless Spotify Control",
    description: "Spotlightify is a GUI application that simplifies Spotify playback control across multiple platforms.",
    images: [{
      url: "https://raw.githubusercontent.com/spotlightify/spotlightify/main/media/logo.svg",
      width: 800,
      height: 800,
      alt: "Spotlightify Logo"
    }],
    url: "https://spotlightify.github.io/",
    siteName: "Spotlightify",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spotlightify - Seamless Spotify Control",
    description: "Control Spotify with lightning speed using Spotlightify's intuitive interface.",
    images: ["https://raw.githubusercontent.com/spotlightify/spotlightify/main/media/logo.svg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  verification: {
    google: "your-google-site-verification", // You'll need to add this
  },
  alternates: {
    canonical: "https://spotlightify.github.io",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full w-full dark">
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
