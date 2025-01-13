import { Button } from '@/components/ui/button';
import { ArrowRightIcon, CheckIcon } from "@radix-ui/react-icons"
import { getLatestRelease } from '../actions/github';
import PlatformCardContainer from './PlatformCardContainer';

export default async function Downloads() {
    const { version } = await getLatestRelease();

    return (
        <div className="relative isolate overflow-hidden py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4">
                        Download Spotlightify
                    </h1>
                    <p className="text-lg leading-8 text-gray-600 dark:text-gray-400">
                        Choose your platform and get started with Spotlightify in minutes.
                    </p>
                </div>

                <PlatformCardContainer version={version} />

                <div className="mx-auto mt-16 max-w-2xl text-center">
                    <h2 className="text-2xl font-semibold mb-4">Need help with setup?</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                        Check out our detailed setup guide to get Spotlightify configured properly.
                    </p>
                    <Button variant="outline" className="group shadow-lg hover:shadow-green-500/20" asChild>
                        <a href="/setup">
                            View Setup Guide
                            <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    );
}
