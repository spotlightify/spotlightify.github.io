'use client'

import { useState } from "react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import FeatureCard from "@/components/ui/featureCard";
import features from "../data/features";

export default function Commands() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredFeatures = features.filter(feature =>
        feature.Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        feature.Description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        feature.Keyword.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4">
                        Commands
                    </h1>
                    <p className="text-lg leading-8 text-gray-600 dark:text-gray-400">
                        Control Spotify with these powerful keyboard commands
                    </p>

                    {/* Search Bar */}
                    <div className="relative mt-8 max-w-md mx-auto">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-10 pr-3 py-2 border border-gray-200 dark:border-gray-800 rounded-lg 
                                     bg-white/50 dark:bg-gray-900/50
                                     text-gray-900 dark:text-gray-100 placeholder:text-gray-500
                                     focus:ring-2 focus:ring-[#1DB954] dark:focus:ring-[#1ed760] focus:ring-opacity-50
                                     focus:outline-none
                                     transition-all duration-300"
                            placeholder="Search commands..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                <div className="mx-auto mt-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                        {filteredFeatures.map((feature, index) => (
                            <FeatureCard
                                key={index}
                                title={feature.Name}
                                description={feature.Description}
                                keyword={feature.Keyword}
                                icon={feature.Icon}
                                input={feature.Input}
                            />
                        ))}
                    </div>

                    {filteredFeatures.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-600 dark:text-gray-400">
                                No commands found matching your search.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}