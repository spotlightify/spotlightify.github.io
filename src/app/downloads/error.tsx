'use client';

import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from "@radix-ui/react-icons";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="relative isolate overflow-hidden py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4">
                        Oops! Something went wrong
                    </h1>
                    <p className="text-lg leading-8 text-gray-600 dark:text-gray-400 mb-8">
                        We couldn&apos;t fetch the latest version information. You can try again or download directly from GitHub.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button onClick={reset} variant="outline" className="group shadow-lg hover:shadow-blue-500/20">
                            Try Again
                            <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button variant="default" className="group shadow-lg hover:shadow-green-500/20" asChild>
                            <a
                                href="https://github.com/spotlightify/spotlightify/releases/latest"
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                referrerPolicy="no-referrer"
                            >
                                Download from GitHub
                                <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
