import { Button } from "@/components/ui/button";
import Image from "next/image";
import LogoSVG from "/public/logo.svg"; // replace with your actual SVG file path


export default function Logo() {
    return (
        <div className="flex flex-row gap-2">
            <Image className="size-20 pb-3 content-center" src={LogoSVG} alt={"Spotlightify logo"} />
            <h1 className="text-6xl">Spotlightify</h1>
        </div>
    )
}