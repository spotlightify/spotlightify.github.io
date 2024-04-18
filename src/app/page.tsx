import { Button } from "@/components/ui/button";
import Image from "next/image";
import Logo from "/public/logo.svg"; // replace with your actual SVG file path

export default function Home() {
  return (
    <main className="w-full h-full flex justify-center content-center items-center flex-col gap-6">
      <div className="flex flex-row gap-2">
        <Image className="size-20 pb-3 content-center" src={Logo} alt={""} />
        <h1 className="text-6xl">Spotlightify</h1>
      </div>
      <Button>Coming soon.</Button>
    </main>
  );
}
