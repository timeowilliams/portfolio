import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { CONFIG } from '@/config';
import { EllipsisVertical } from 'lucide-react';

const socialBorder = `border group hover:border-secondaryDarker duration-200 rounded px-1.5 py-1 border-neutral-800 items-center flex`;

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0 w-full md:px-6 max-w-3xl animate-slide-from-down-and-fade-1">
      <div className="flex flex-row items-center space-x-3">
        <Image
          src={CONFIG.headshot}
          alt="Timeo Williams headshot"
          width={100}
          height={100}
          className="rounded-full h-[48px] w-[48px]"
          priority
        />
        <div className="flex flex-col">
          <span className="font-semibold">{CONFIG.name}</span>
          <span className="text-neutral-400">{CONFIG.title}</span>
        </div>
      </div>
      <div className="flex flex-row space-x-2">
        <TooltipProvider delayDuration={70}>
          {CONFIG.socials.map((social, idx) => {
            return (
              <Tooltip key={idx}>
                <TooltipTrigger className={`${socialBorder}`}>
                  <Link
                    href={social.link}
                    target="_blank"
                    className="cursor-pointer"
                  >
                    {social.icon}
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  side="bottom"
                  className="mr-4 px-3 py-1.5 text-xs"
                >
                  {social.platform}
                </TooltipContent>
              </Tooltip>
            );
          })}
          <Tooltip>
            <TooltipTrigger className={`${socialBorder}`}>
              <Link href="/socials" className="cursor-pointer">
                <EllipsisVertical
                  size={16}
                  className="text-secondaryDarker group-hover:text-secondaryDark duration-200"
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent className="mr-4 px-3 py-1.5 text-xs">
              <p>Stats</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </header>
  );
}
