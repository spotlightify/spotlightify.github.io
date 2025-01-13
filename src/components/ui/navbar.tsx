'use client'

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import LogoSVG from "/public/logo.svg";
import MenuSVG from "/public/menu.svg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import { Cross2Icon } from "@radix-ui/react-icons";

interface NavLink {
    href: string;
    label: string;
}

const navLinks: NavLink[] = [
    { href: "/commands", label: "Commands" },
    { href: "/downloads", label: "Downloads" },
    { href: "/setup", label: "Setup" }
];

function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const pathname = usePathname();

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <>
            <div
                className={`
                    fixed top-0 bottom-0 right-0 z-50
                    w-screen sm:w-80 bg-white dark:bg-[#0A0A0A]
                    transform transition-transform duration-300 ease-in-out
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'}
                    border-l border-gray-200/50 dark:border-gray-800/50
                    flex flex-col h-screen
                `}
            >
                <div className="flex items-center justify-between p-6 border-b border-gray-200/50 dark:border-gray-800/50">
                    <Link href="/" className="flex items-center gap-2" onClick={onClose}>
                        <Image className="h-8 w-8" src={LogoSVG} alt="Spotlightify logo" />
                        <span className="text-xl font-semibold text-gray-900 dark:text-gray-100">Spotlightify</span>
                    </Link>
                    <button
                        onClick={onClose}
                        className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/50 rounded-full transition-colors"
                    >
                        <Cross2Icon className="h-5 w-5" />
                    </button>
                </div>
                <nav className="flex-1 p-6 bg-white dark:bg-[#0A0A0A] min-h-0 overflow-y-auto">
                    <ul className="space-y-3">
                        <li>
                            <Link
                                href="/"
                                onClick={onClose}
                                className={`block p-3 rounded-lg transition-colors ${pathname === "/"
                                    ? "bg-[#1DB954]/10 dark:bg-[#1ed760]/10 text-[#1DB954] dark:text-[#1ed760]"
                                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50"
                                    }`}
                            >
                                Home
                            </Link>
                        </li>
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    onClick={onClose}
                                    className={`block p-3 rounded-lg transition-colors ${pathname === link.href
                                        ? "bg-[#1DB954]/10 dark:bg-[#1ed760]/10 text-[#1DB954] dark:text-[#1ed760]"
                                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            {/* Backdrop */}
            <div
                className={`
                    fixed inset-0 bg-black/30 dark:bg-black/50 backdrop-blur-sm z-40
                    transition-opacity duration-300
                    ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                `}
                onClick={onClose}
            />
        </>
    );
}

export default function NavBar() {
    const [openNavMenu, setOpenNavMenu] = useState(false);
    const pathname = usePathname();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/50 dark:bg-[#111111]/50 border-b border-gray-200/50 dark:border-gray-800/50 backdrop-blur-xl supports-[backdrop-filter]:bg-white/50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <nav className="flex h-16 items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <Image className="h-8 w-8" src={LogoSVG} alt="Spotlightify logo" />
                        <span className="text-xl font-semibold text-gray-900 dark:text-gray-100">Spotlightify</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden sm:flex sm:gap-x-8 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`
                                    relative py-2 text-sm font-medium transition-colors
                                    ${pathname === link.href
                                        ? 'text-[#1DB954] dark:text-[#1ed760]'
                                        : 'text-gray-700 dark:text-gray-300 hover:text-[#1DB954] dark:hover:text-[#1ed760]'
                                    }
                                `}
                            >
                                {link.label}
                                {pathname === link.href && (
                                    <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-[#1DB954]/0 via-[#1DB954]/70 to-[#1DB954]/0 dark:from-[#1ed760]/0 dark:via-[#1ed760]/70 dark:to-[#1ed760]/0" />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setOpenNavMenu(true)}
                        className="sm:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                    >
                        <Image className="h-5 w-5 dark:invert" alt="Menu" src={MenuSVG} />
                    </button>
                </nav>
            </div>

            {/* Mobile Menu */}
            <MobileMenu isOpen={openNavMenu} onClose={() => setOpenNavMenu(false)} />
        </header>
    );
}