'use client'

import { useEffect, useState } from "react";
import LogoSVG from "/public/logo.svg";
import MenuSVG from "/public/menu.svg";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {

    return (
        <nav style={{ background: "#191414", color: "#b3b3b3" }} className="fixed w-screen top-0 left-0 h-20 sm:h-14 border-b-2 border-b-gray-600 z-50">
            <div className="flex justify-center sm:justify-between items-center h-full pl-4 pr-4">
                <Link href={"/"} className="flex justify-center h-full items-center gap-2">
                    <Image className="size-10" src={LogoSVG} alt={"Spotlightify logo"} />
                    <div className="text-2xl">
                        Spotlightify
                    </div>
                </Link>
                <div className="flex gap-4 invisible sm:visible">
                    <Link href={"/commands"}>
                        Commands
                    </Link>
                    <Link href={"/setup"}>
                        Setup
                    </Link>
                </div>
                {/* TODO, make mobile friendly */}
                {/* <button onClick={() => setOpenNavMenu(!openNavMenu)}>
                    <Image className="size-10" src={MenuSVG} alt={"Menu"} />
                </button> */}
            </div>
        </nav>
    )
}