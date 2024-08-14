'use client'

import React, { useEffect, useRef, useState } from 'react';
import { DownloadIcon, GitHubLogoIcon } from "@radix-ui/react-icons"
import Branding from "@/components/ui/branding";
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const GitHubLink = "https://github.com/spotlightify/spotlightify/";
const DownloadLink = GitHubLink + "releases";

export default function Home() {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='flex gap-10 flex-col mt-14'>
      <Branding className='fade-up-1' />
      <div className='flex gap-5 justify-center fade-up-2'>
        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <div>
                <Button disabled className='bg-green-500'><DownloadIcon className="mr-2 h-4 w-4" />Download</Button>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Coming soon</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <Button asChild>
          <a href={GitHubLink}>
            <GitHubLogoIcon className="mr-2 h-4 w-4" />Github
          </a>
        </Button>
      </div>
      <div className='flex justify-center'>
        <video
          controls={false}
          preload="none"
          loop
          playsInline
          muted
          autoPlay
          className='object-cover max-w-2xl w-full rounded-lg'
        >
          <source src="sp_demo.m4v" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
