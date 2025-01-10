"use client"
import { Button } from '@/components/ui/button';
import { getOS, OS } from '@/lib/utils';
import { DownloadIcon, GitHubLogoIcon, StarIcon } from "@radix-ui/react-icons"
import { useState, useEffect } from 'react';

const GitHubLink = "https://github.com/spotlightify/spotlightify/";

interface ActionButtonsProps {
    className?: string;
    size?: "default" | "sm" | "lg";
    showGithub?: boolean;
    downloadText?: string;
    platform?: OS;
}

export default function ActionButtons({
    className = '',
    size = 'default',
    showGithub = true,
    downloadText = 'Download Beta',
    platform = "Unknown"
}: ActionButtonsProps) {
    const [os, setOs] = useState<OS | undefined>(platform);

    useEffect(() => {
        try {
            const detectedOS = getOS();
            setOs(detectedOS);
        } catch (error) {
            console.error('Failed to detect OS:', error);
            setOs(platform);
        }
    }, []);

    const [isHovered, setIsHovered] = useState(false);

    const isRecommended = os !== "Unknown"
    const buttonText = os !== "Unknown" ? `Download for ${os}` : downloadText;

    return (
        <div className={`flex items-center gap-x-6 gap-y-6 ${className} flex-wrap`}>
            <div className="relative">
                <Button
                    size={size}
                    variant={isRecommended ? 'spotify' : 'spotifyAlt'}
                    scale={isRecommended ? 'recommended' : 'default'}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    asChild
                >
                    <a href={"/downloads"}>
                        <DownloadIcon className="mr-2 h-5 w-5" />
                        {buttonText}
                    </a>
                </Button>
                {isRecommended && (
                    <div className={`
                        absolute -top-2 -right-2 
                        bg-[#1DB954] text-white text-xs px-1.5 py-0.5 rounded-full
                        transform transition-opacity duration-300
                        ${isHovered ? 'opacity-100' : 'opacity-80'}
                    `}>
                        Recommended
                    </div>
                )}
            </div>
            {showGithub && (
                <Button size={size} variant="outline" className="shadow-lg" asChild>
                    <a href={GitHubLink} className="flex items-center">
                        <GitHubLogoIcon className="mr-2 h-5 w-5" />
                        <span className="mr-2">Github</span>
                        <div className="flex items-center text-xs bg-gray-100 dark:bg-gray-800 rounded-full px-2 py-0.5">
                            <StarIcon className="mr-1 h-3.5 w-3.5" />
                            200+
                        </div>
                    </a>
                </Button>
            )}
        </div>
    );
} 