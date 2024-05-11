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
    <header className="flex w-full md:px-6 max-w-3xl animate-slide-from-down-and-fade-1">
      <div className="flex flex-row items-center space-x-3">
        <Image
          src={CONFIG.headshot}
          alt=""
          width={100}
          height={100}
          className="rounded-full h-[54px] w-[54px]"
        />
        <div className="flex flex-col">
          <span className="font-semibold text-lg">{CONFIG.name}</span>
          <span className="text-neutral-400">{CONFIG.title}</span>
        </div>
      </div>
    </header>
  );
}
