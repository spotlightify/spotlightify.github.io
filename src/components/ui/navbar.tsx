'use client'

import { useEffect, useState } from "react";
import LogoSVG from "/public/logo.svg";
import MenuSVG from "/public/menu.svg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";

interface MobileMenuProps {
    onClose: () => void;
    isOpen: boolean;
}

function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    return (
        <>
            <div
                style={{ background: "#191414" }}
                className={`
                    w-80 h-screen fixed right-0 top-0 z-50 
                    transform transition-transform duration-300 ease-in-out
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'}
                `}
            >
                <div className="pl-5 pt-5 flex flex-col text-3xl gap-2">
                    <Image className="size-10" src={LogoSVG} alt="Spotlightify logo" />
                    <Link onClick={onClose} href="/">
                        Home
                    </Link>
                    <Link onClick={onClose} href="/commands">
                        Commands
                    </Link>
                    <Link onClick={onClose} href="/setup">
                        Setup
                    </Link>
                </div>
            </div>
            {isOpen && (
                <div
                    className="h-screen w-screen opacity-50 bg-black z-40 fixed left-0 top-0"
                    onClick={onClose}
                />
            )}
        </>
    );
}

export default function NavBar() {
    const [openNavMenu, setOpenNavMenu] = useState(false);

    return (
        <nav style={{ background: "#191414", color: "#b3b3b3" }} className="fixed w-screen top-0 left-0 h-16 sm:h-14 border-b-2 border-b-gray-600 z-50">
            <div className="flex justify-between sm:justify-between items-center h-full sm:pl-4 sm:pr-4 pl-6 pr-6">
                <div className="inline-block sm:hidden w-8">
                </div>
                <Link href="/" className="flex justify-center h-full items-center gap-2">
                    <Image className="size-10" src={LogoSVG} alt="Spotlightify logo" />
                    <div className="text-2xl">
                        Spotlightify
                    </div>
                </Link>
                <div className="sm:flex gap-4 hidden sm:visible">
                    <Link href="/commands">
                        Commands
                    </Link>
                    <Link href="/setup">
                        Setup
                    </Link>
                </div>
                <button onClick={() => setOpenNavMenu(!openNavMenu)} className='sm:hidden h-8 w-8 flex justify-center items-center'>
                    <Image alt="Mobile menu button" src={MenuSVG} />
                </button>
                <MobileMenu isOpen={openNavMenu} onClose={() => setOpenNavMenu(false)} />
            </div>
        </nav>
    );
}