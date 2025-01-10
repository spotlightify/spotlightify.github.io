import Image from "next/image";
import { Card } from "./card";

interface props {
    icon?: string;
    title: string;
    description: string;
    keyword: string;
    input: string;
}

export default function FeatureCard({ icon, title, description, keyword, input }: props) {
    return (
        <Card className="group relative overflow-hidden border-0 bg-gradient-to-b from-white/[0.12] to-transparent dark:from-white/[0.07] hover:from-white/[0.18] dark:hover:from-white/[0.12] transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1DB954]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative p-6 flex flex-col h-full">
                <div className="flex items-start justify-between">
                    <div className="p-2 rounded-xl bg-black/5 dark:bg-white/5">
                        {icon && <Image className="w-6 h-6 dark:invert" fill={false} src={icon} alt={`${title} icon`} />}
                    </div>
                    <div className="flex items-center space-x-1">
                        <div className="text-xs font-mono px-2 py-1 rounded-md bg-[#1DB954]/10 text-[#1DB954] dark:text-[#1ed760]">
                            {keyword}
                        </div>
                        {input && input !== "None" && (
                            <div className="text-xs font-mono px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400">
                                {input}
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        {title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 flex-grow">
                        {description}
                    </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#1DB954]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
        </Card>
    );
}