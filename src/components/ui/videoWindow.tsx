"use client"
import { useState } from "react";
import { useRef } from "react";

export default function VideoWindow() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className='mt-16 flow-root sm:mt-20'>
            {/* Floating Window */}
            <div className={`relative mx-auto max-w-5xl group transform transition-all duration-700 ${isLoading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                {/* Window Frame */}
                <div className="relative bg-gray-900/90 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl
                ring-1 ring-white/10 transform transition-all duration-500
                hover:shadow-[0_20px_50px_rgba(29,185,84,0.15)]
                            group-hover:scale-[1.02]">
                    <div className="relative" onClick={() => {
                        if (videoRef.current) {
                            if (videoRef.current.paused) {
                                videoRef.current.play();
                            } else {
                                videoRef.current.pause();
                            }
                        }
                    }}>
                        <video
                            controls={false}
                            preload="none"
                            loop
                            playsInline
                            muted
                            autoPlay
                            className="relative w-full"
                            ref={videoRef}
                            onLoadedData={() => setIsLoading(false)}
                        >
                            <source src="https://github.com/user-attachments/assets/058e8074-853b-48e2-8b9d-bb9f11ab4024" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        {/* Glass Reflection */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                </div>
            </div>
        </div>
    )
}