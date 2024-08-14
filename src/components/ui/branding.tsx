import Image from "next/image";
import LogoSVG from "/public/logo.svg"; // replace with your actual SVG file path

interface props {
    className?: string;
}

export default function Branding({ className }: props) {
    return (
        <div className={`flex items-center flex-col ${className}`}>
            <div className="flex flex-row gap-2 justify-center">
                <Image className="size-16 sm:size-20 pb-3 content-center" src={LogoSVG} alt={"Spotlightify logo"} />
                <h1 className="text-5xl sm:text-6xl">Spotlightify</h1>
            </div>
            <h2 className="scroll-m-20 text-xl sm:text-2xl tracking-tight">
                The Spotify overlay controller
            </h2>
        </div>
    )
}