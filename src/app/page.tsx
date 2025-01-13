import { ArrowRightIcon } from "@radix-ui/react-icons"
import { siWails, siReact, siTailwindcss, siGo } from 'simple-icons';
import Branding from "@/components/ui/branding";
import { Button } from '@/components/ui/button';
import ActionButtons from "@/components/ui/actionButtons";
import FeatureCard from "@/components/ui/featureCard";
import features from './data/features';
import VideoWindow from "@/components/ui/videoWindow";
import { headers } from 'next/headers'
import { getOSFromUserAgent } from "@/lib/utils";

export default function Home() {
  const headersList = headers();
  const userAgent = headersList.get('user-agent');
  const os = getOSFromUserAgent(userAgent || "");

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className='relative isolate pt-14 pb-20'>
        <div className='mx-auto max-w-6xl px-6 lg:px-8'>
          <div className='mx-auto max-w-4xl text-center'>
            <Branding className='fade-up-1' />

            <p className='mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400 fade-up-2'>
              Control Spotify from anywhere with lightning-fast keyboard commands.
              Press <kbd className="px-2 py-1 text-sm font-semibold bg-gray-100 dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-700 shadow-sm">⌃ Ctrl + {os === "macOS" ? "⌥ Option" : "Alt"} + Space</kbd> to search, play, and manage your music without leaving your workflow.
            </p>

            <ActionButtons className="mt-10 justify-center fade-up-2" size="lg" platform={os} />
          </div>

          {/* Demo Video */}
          <VideoWindow />
        </div>
      </div>

      {/* Features Grid */}
      <div className='mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-base font-semibold leading-7 text-[#1DB954]'>Powerful Commands</h2>
          <p className='mt-2 text-3xl font-bold tracking-tight sm:text-4xl'>
            Everything you need in one shortcut
          </p>
          <p className='mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400'>
            Access Spotify&apos;s full functionality through intuitive keyboard commands. No more context switching.
          </p>
        </div>

        <div className='mx-auto mt-16'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr'>
            {features.slice(0, 6).map((feature) => (
              <FeatureCard
                key={feature.Name}
                title={feature.Name}
                description={feature.Description}
                keyword={feature.Keyword}
                icon={feature.Icon}
                input={feature.Input}
              />
            ))}
          </div>
        </div>

        <div className='mt-16 flex justify-center'>
          <Button variant="outline" className="group shadow-lg hover:shadow-green-500/20" asChild>
            <a href="/commands" className='group'>
              View All Commands
              <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>

      {/* Built With Section */}
      <div className='mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24 relative'>
        {/* Tech Stack Grid */}
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-base font-semibold leading-7 text-[#1DB954]'>Tech Stack</h2>
          <p className='mt-2 text-3xl font-bold tracking-tight sm:text-4xl'>
            Built with Modern Technologies
          </p>
          <p className='mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400'>
            Created with modern technologies to deliver a seamless and powerful experience across macOS, Windows, and Linux.
          </p>
        </div>

        <div className='mx-auto mt-16 max-w-5xl'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {/* Frontend Stack */}
            <div className='relative group'>
              <div className='absolute -inset-1 rounded-lg bg-gradient-to-r from-[#1DB954]/30 to-[#191414]/30 blur-sm transition duration-200 group-hover:blur'></div>
              <div className='relative bg-gray-900/90 backdrop-blur-xl p-6 rounded-lg ring-1 ring-white/10'>
                <h3 className='text-xl font-semibold mb-4 text-[#1DB954]'>Frontend</h3>
                <div className='space-y-4'>
                  <div className='flex items-start space-x-4'>
                    <div className='rounded-full bg-blue-500/10 flex flex-grow-0 items-center justify-center'>
                      <span className='text-2xl'>
                        <svg
                          role="img"
                          viewBox="0 0 24 24"
                          className="h-10 w-10"
                          fill="#61DAFB"
                        >
                          <path d={siReact.path} />
                        </svg>
                      </span>
                    </div>
                    <div>
                      <h4 className='font-medium'>React + TypeScript</h4>
                      <p className='text-sm text-gray-400'>
                        Powers the UI with type-safe components. Used for the search interface, command system, and settings management. TypeScript ensures robust code quality and better developer experience.
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start space-x-4'>
                    <div className='rounded-full bg-purple-500/10 flex flex-grow-0 items-center justify-center'>
                      <span className='text-2xl'>
                        <svg
                          role="img"
                          viewBox="0 0 24 24"
                          className="h-10 w-10"
                          fill="#06B6D4"
                        >
                          <path d={siTailwindcss.path} />
                        </svg>
                      </span>
                    </div>
                    <div>
                      <h4 className='font-medium'>TailwindCSS</h4>
                      <p className='text-sm text-gray-400'>
                        Handles styling with utility-first CSS. Enables rapid UI development with consistent design tokens and dark mode support. Provides smooth animations and responsive layouts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend Stack */}
            <div className='relative group'>
              <div className='absolute -inset-1 rounded-lg bg-gradient-to-r from-[#191414]/30 to-[#1DB954]/30 blur-sm transition duration-200 group-hover:blur'></div>
              <div className='relative bg-gray-900/90 backdrop-blur-xl p-6 rounded-lg ring-1 ring-white/10'>
                <h3 className='text-xl font-semibold mb-4 text-[#1DB954]'>Backend</h3>
                <div className='space-y-4'>
                  <div className='flex items-start space-x-4'>
                    <div className='rounded-full bg-cyan-500/10 flex flex-grow-0 items-center justify-center'>
                      <span className='text-2xl'>
                        <svg
                          role="img"
                          viewBox="0 0 24 24"
                          className="h-10 w-10"
                          fill="#e02214"
                        >
                          <path d={siWails.path} />
                        </svg>
                      </span>
                    </div>
                    <div>
                      <h4 className='font-medium'>Wails</h4>
                      <p className='text-sm text-gray-400'>
                        Bridges Go (local backend) and web technologies (frontend) through interprocess communication. Provides cross-platform compatibility and build system for macOS, Windows, and Linux.
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start space-x-4'>
                    <div className='rounded-full bg-teal-500/10 flex flex-grow-0 items-center justify-center'>
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        className="h-10 w-10"
                        fill="#00ADD8"
                      >
                        <path d={siGo.path} />
                      </svg>
                    </div>
                    <div>
                      <h4 className='font-medium'>Golang</h4>
                      <p className='text-sm text-gray-400'>
                        Handles core application logic. Manages Spotify API integration, local file caching, and system-level operations. Provides high-performance concurrent operations with goroutines.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main >
  );
}
