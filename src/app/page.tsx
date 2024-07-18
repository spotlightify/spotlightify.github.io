import Spotlightify from "@/components/spotlightify/Spotlightify";
import Logo from "@/components/ui/logo";

export default function Home() {
  return (
    <main className="w-full h-full flex justify-center content-center items-center flex-col gap-6">
      <Logo />
      <h2 className="scroll-m-20 text-2xl tracking-tight">
        The Spotify overlay controller
      </h2>
      <Spotlightify />
    </main>
  );
}
