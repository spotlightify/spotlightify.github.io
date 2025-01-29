"use client";
import { useEffect, useState, useMemo } from "react";
import { ArrowRightIcon, CheckIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button";
import { Tag } from "lucide-react";
import { getOS, OS } from "@/lib/utils";

// Sanitize and validate version string
const sanitizeVersion = (version: string) => {
    // Only allow valid semver-like strings with optional 'beta' or 'alpha'
    const validVersion = /^[0-9]+\.[0-9]+\.[0-9]+(?:-(?:beta|alpha)\.[0-9]+)?$/;
    if (!validVersion.test(version)) {
        throw new Error('Invalid version format');
    }
    return version;
};

// Construct secure download URL
const getSecureDownloadUrl = (version: string, fileName: string) => {
    try {
        const sanitizedVersion = sanitizeVersion(version);
        const baseUrl = 'https://github.com/spotlightify/spotlightify/releases/download/';
        return `${baseUrl}${encodeURIComponent(sanitizedVersion)}/${encodeURIComponent(fileName)}`;
    } catch (error) {
        console.error('Error constructing download URL:', error);
        return null;
    }
};

interface PlatformCardContainerProps {
    version: string;
}

export default function PlatformCardContainer({ version }: PlatformCardContainerProps) {
    const [os, setOS] = useState<OS | undefined>(undefined);
    const sortedPlatforms = useMemo(() => {
        if (os === undefined) return platforms;
        return platforms.sort((a, b) => {
            if (a.platform === os) return -1;
            if (b.platform === os) return 1;
            return 0;
        });
    }, [os]);

    useEffect(() => {
        try {
            const detectedOS = getOS();
            setOS(detectedOS);
        } catch (error) {
            console.error('Failed to detect OS:', error);
            setOS(undefined);
        }
    }, []);

    return (
        <div className="mx-auto mt-16 flex flex-col gap-8">
            {sortedPlatforms.map((platform, index) => (
                <div
                    key={index}
                    className={`transform transition-all duration-700 ${os === undefined ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                >
                    <PlatformCard {...platform} version={version} />
                </div>
            ))}
        </div>
    );
}

const platforms: PlatformCardProps[] = [
    {
        platform: "Windows",
        icon: "🪟",
        instructions: [
            "Download the latest Windows release",
            "Run the installer (.exe)",
            "Follow the installation wizard",
            "Launch Spotlightify",
            "Follow the setup wizard"
        ],
        requirements: [
            "Windows 10 or later",
            "Spotify Premium account",
            "Spotify desktop app installed"
        ],
        features: [
            "Windows system tray integration",
            "Global keyboard shortcut support",
            "Automatic startup configuration",
            "Seamless updates through the app",
            "Windows-native design language"
        ],
        downloadFile: `Spotlightify-amd64-installer.exe`
    },
    {
        platform: "macOS",
        icon: "🍎",
        instructions: [
            "Download the latest macOS release",
            "Open the downloaded .dmg file",
            "Drag Spotlightify to Applications",
            "Open Spotlightify from Applications",
            "You will be prompted with a security warning",
            "Go to System Preferences > Privacy & Security",
            "Scroll down to the 'Security' heading and click 'Open Anyway'",
        ],
        requirements: [
            "macOS 10.15 or later",
            "Spotify Premium account",
            "Spotify desktop app installed"
        ],
        features: [
            "Global keyboard shortcut support",
            "Apple Silicon/Intel support",
            "Seamless updates through the app",
            "Integration with macOS Spotlight design"
        ],
        downloadFile: `Spotlightify.dmg`
    }, {
        platform: "Linux",
        icon: "🐧",
        instructions: [
            "Ensure you have the necessary dependencies installed",
            "Clone the repository",
            "Follow the 'Building from source' instructions in the README to build the application"
        ],
        requirements: [
            "Modern Linux distribution",
            "X11 Window Server (Contact me for future Wayland support)",
            "Spotify Premium account",
            "Spotify desktop app installed",
            "Go 1.22 or later",
            "Wails 2.92 or later",
            "Node.js 20 or later",
            "CGO enabled",
            "GCC compiler installed"
        ],
        features: [
            "System tray integration",
            "Global keyboard shortcut support",
            "Automatic startup option",
            "AppImage format available",
            "Native desktop environment integration"
        ],
        altDownloadButton: {
            text: "Build from source",
            href: "https://github.com/spotlightify/spotlightify#building"
        }
    }
];

export interface PlatformCardProps {
    platform: string;
    icon: string;
    instructions: string[];
    requirements?: string[];
    features?: string[];
    downloadFile?: string;
    version?: string;
    altDownloadButton?: {
        text: string;
        href: string;
    };
}

async function trackDownload(platform: string, version: string) {
    try {
        const response = await fetch('/api/track-download', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ platform, version }),
        });

        if (!response.ok) {
            throw new Error('Failed to track download');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error tracking download:', error);
    }
}

function PlatformCard({ platform, icon, instructions, requirements = [], features = [], downloadFile, version, altDownloadButton }: PlatformCardProps) {
    const [os, setOS] = useState<string>('Unknown');
    const downloadUrl = version && downloadFile ? getSecureDownloadUrl(version, downloadFile) : null;

    useEffect(() => {
        setOS(getOS());
    }, []);

    const handleDownload = async () => {
        if (version) {
            await trackDownload(platform, version);
        }
    };

    const isUserPlatform = platform === os;

    return (
        <>
            <div className={"relative flex flex-col rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 shadow-lg hover:border-[#1DB954] hover:shadow-green-500/20 transition-all duration-300"}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
                    <div className='flex flex-col justify-between'>
                        <div className="flex items-center gap-x-3 text-xl font-semibold mb-6">
                            <span className="text-2xl">{icon}</span>
                            {platform}
                            <div className="flex items-center gap-x-0">
                                {version && (
                                    <span className="ml-3 inline-flex items-center rounded-md bg-green-50 dark:bg-green-900/20 px-2 py-1 text-sm font-medium text-green-700 dark:text-green-300 ring-1 ring-inset ring-green-600/20">
                                        <Tag className="mr-1 h-3 w-3" /> {version}
                                    </span>
                                )}
                                {isUserPlatform && (
                                    <span className="ml-3 inline-flex items-center rounded-md bg-green-50 dark:bg-green-900/20 px-2 py-1 text-sm font-medium text-green-700 dark:text-green-300 ring-1 ring-inset ring-green-600/20">
                                        <CheckIcon className="mr-1 h-3 w-3" />
                                        Detected OS
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="flex-grow space-y-6">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">System Requirements</h3>
                                <ul className="mt-4 list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                                    {requirements.map((req, index) => (
                                        <li key={index}>{req}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-6 flex gap-4 justify-start">
                            {downloadUrl ? (
                                <Button variant="spotify" scale="default" asChild onClick={handleDownload}>
                                    <a
                                        href={downloadUrl}
                                        target="_blank"
                                        rel="noopener noreferrer nofollow"
                                        referrerPolicy="no-referrer"
                                        download
                                    >
                                        Download for {platform}
                                    </a>
                                </Button>
                            ) : altDownloadButton ? (
                                <Button variant="spotify" scale="default" asChild>
                                    <a href={altDownloadButton?.href}>
                                        {altDownloadButton?.text}
                                    </a>
                                </Button>
                            ) : null}
                        </div>
                    </div>

                    <div className="mt-10 lg:mt-0">
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Installation Steps {downloadFile ? "" : " - Build from source"}</h3>
                        <ul className="mt-4 space-y-4">
                            {instructions.map((instruction, index) => (
                                <li key={index} className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1DB954]/10 text-[#1DB954]">
                                            {index + 1}
                                        </div>
                                    </div>
                                    <p className="ml-3 text-sm text-gray-600 dark:text-gray-400">{instruction}</p>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6">
                            <Button variant="outline" className="group shadow-lg hover:shadow-green-500/20" asChild>
                                <a href="/setup">
                                    Go to setup
                                    <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
