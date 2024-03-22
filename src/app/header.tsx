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
    <header className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0 w-full md:px-6 max-w-3xl">
      <div className="flex flex-row items-center space-x-3">
        <Image
          src={CONFIG.headshot}
          alt=""
          width={100}
          height={100}
          className="rounded-full h-[48px] w-[48px]"
        />
        <div className="flex flex-col">
          <span className="font-semibold">{CONFIG.name}</span>
          <span className="text-secondaryDarker">{CONFIG.title}</span>
        </div>
      </div>
      <div className="flex flex-row space-x-2">
        {CONFIG.socials.map((social, idx) => {
          return (
            <TooltipProvider key={idx}>
              <Tooltip>
                <TooltipTrigger className={`${socialBorder}`}>
                  <Link href={social.link} target="_blank">
                    {social.icon}
                  </Link>
                </TooltipTrigger>
                <TooltipContent>{social.platform}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className={`${socialBorder}`}>
              <Link href="/socials">
                <EllipsisVertical
                  size={16}
                  className="text-secondaryDarker group-hover:text-secondaryDark duration-200"
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Stats</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </header>
  );
}
