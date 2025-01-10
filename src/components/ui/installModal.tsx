import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon, Cross2Icon } from "@radix-ui/react-icons"

interface InstallModalProps {
    isOpen: boolean;
    onClose: () => void;
    platform: string;
    icon: string;
    instructions: string[];
}

export default function InstallModal({ isOpen, onClose, platform, icon, instructions }: InstallModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow-xl w-full max-w-md mx-4 p-6 transform transition-all">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                >
                    <Cross2Icon className="h-5 w-5" />
                </button>

                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl">{icon}</span>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                        Install on {platform}
                    </h2>
                </div>

                {/* Instructions */}
                <div className="space-y-6">
                    <ol className="list-decimal list-inside space-y-4 text-gray-600 dark:text-gray-400">
                        {instructions.map((instruction, index) => (
                            <li key={index} className="leading-relaxed">
                                {instruction}
                            </li>
                        ))}
                    </ol>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-col gap-4">
                    <Button
                        className="w-full bg-gradient-to-r from-[#1DB954] via-[#1ed760] to-[#1DB954] hover:opacity-90 text-white shadow-lg font-semibold py-6"
                        asChild
                    >
                        <a href="/setup">
                            Continue to Setup
                            <ArrowRightIcon className="ml-2 h-5 w-5" />
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    );
} 