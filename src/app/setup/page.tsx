'use client'

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CheckIcon } from "@radix-ui/react-icons"
import CreateAppImage from "/public/images/create_app.jpeg";
import FillFieldsImage from "/public/images/fill_fields.jpeg";
import ClickOnSettingsImage from "/public/images/click_on_settings.jpeg";
import IdAndSecretImage from "/public/images/id_and_secret.jpeg";
import AuthSuggestionsImage from "/public/images/auth_suggestions.png";
import AddClientIdImage from "/public/images/add_client_id.png";
import AuthenticateImage from "/public/images/authenticate.png";

interface SetupStep {
    title: string;
    description: string;
    image?: any;
    imageAlt?: string;
    code?: string;
    link?: {
        text: string;
        url: string;
    };
    substeps?: string[];
}

const steps: SetupStep[] = [
    {
        title: "Access Developer Dashboard",
        description: "Visit the Spotify Developer Dashboard and log in with your Spotify Premium account.",
        link: {
            text: "developer.spotify.com/dashboard",
            url: "https://developer.spotify.com/dashboard"
        }
    },
    {
        title: "Create New App",
        description: "Click the 'Create app' button to start setting up your Spotify application.",
        image: CreateAppImage,
        imageAlt: "Create app button"
    },
    {
        title: "Configure Application",
        description: "Fill in the application details with the following information:",
        image: FillFieldsImage,
        imageAlt: "Create app form",
        substeps: [
            "App Name: Spotlightify",
            "App Description: Spotlightify App",
            "Redirect URI: http://localhost:9123/auth/callback",
            "Select 'Web API' under API/SDKs",
            "Accept the terms and conditions",
            "Click 'Save' to create your app"
        ],
    },
    {
        title: "Access App Settings",
        description: "Once your app is created, click the 'Settings' button in the app dashboard.",
        image: ClickOnSettingsImage,
        imageAlt: "Edit settings button"
    },
    {
        title: "Get Credentials",
        description: "Locate and copy your Client ID and Client Secret from the settings page.",
        image: IdAndSecretImage,
        imageAlt: "Copy credentials"
    },
    {
        title: "Configure Spotlightify",
        description: "In Spotlightify, add your Client ID and Client Secret in the respective fields.",
        image: AuthSuggestionsImage,
        imageAlt: "Add credentials to Spotlightify"
    },
    {
        title: "Authenticate",
        description: "Click the 'Authenticate with Spotify' button to complete the setup.",
        image: AuthenticateImage,
        imageAlt: "Authenticate with Spotify"
    },
    {
        title: "Enjoy Spotlightify",
        description: "Spotlightify is now ready to use! Press Ctrl+Alt+Space to activate it.",
        substeps: [
            "Press Ctrl+Alt+Space to open Spotlightify",
            "Check out our Commands page to discover all available features",
            "Start controlling Spotify with lightning speed!"
        ],
        link: {
            text: "View All Commands",
            url: "/commands"
        }
    }
];

export default function Setup() {
    return (
        <div className="min-h-screen py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4">
                        Setup Guide
                    </h1>
                    <p className="text-lg leading-8 text-gray-600 dark:text-gray-400">
                        Follow these steps to authenticate Spotlightify with your Spotify account
                    </p>
                </div>

                <div className="mx-auto mt-16 max-w-4xl">
                    <div className="space-y-16">
                        {steps.map((step, index) => (
                            <div key={index} className="relative">
                                {/* Connection line between steps */}
                                {index !== steps.length - 1 && (
                                    <div className="absolute left-8 top-16 h-[calc(100%+4rem)] w-px bg-gray-200 dark:bg-gray-800" />
                                )}

                                <div className="relative flex gap-x-5">
                                    {/* Step number */}
                                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#1DB954] text-white text-lg font-semibold">
                                        {index + 1}
                                    </div>

                                    {/* Step content */}
                                    <div className="flex-auto flex-wrap w-5">
                                        <h3 className="text-xl font-semibold">{step.title}</h3>
                                        <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
                                            {step.description}
                                        </p>

                                        {/* Link */}
                                        {step.link && (
                                            <a
                                                href={step.link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mt-4 inline-flex items-center text-[#1DB954] hover:text-[#1ed760]"
                                            >
                                                {step.link.text}
                                                <ArrowRightIcon className="ml-1 h-4 w-4" />
                                            </a>
                                        )}

                                        {/* Substeps */}
                                        {step.substeps && (
                                            <ul className="mt-4 space-y-3">
                                                {step.substeps.map((substep, idx) => (
                                                    <li key={idx} className="flex items-start">
                                                        <CheckIcon className="h-5 w-5 text-[#1DB954] shrink-0 mt-0.5" />
                                                        <span className="ml-3 text-gray-600 dark:text-gray-400">{substep}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        {/* Code block */}
                                        {step.code && (
                                            <div className="mt-4">
                                                <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-sm font-mono">
                                                    {step.code}
                                                </code>
                                            </div>
                                        )}

                                        {/* Image */}
                                        {step.image && (
                                            <div className="mt-6 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
                                                <Image
                                                    src={step.image}
                                                    alt={step.imageAlt || ''}
                                                    className="w-full"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
