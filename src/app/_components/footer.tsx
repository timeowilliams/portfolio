import React from 'react';

import Link from 'next/link';

import { CONFIG } from '@/config';

export default function Footer() {
  return (
    <footer className="animate-slide-from-down-and-fade-6 pb-20 w-full items-center justify-center">
      <div className="flex flex-row space-x-6 items-center justify-center pb-10">
        {CONFIG.socials.map((social, idx) => {
          return (
            <Link
              key={idx}
              href={social.link}
              target="_blank"
              className="cursor-pointer"
            >
              {social.icon}
            </Link>
          );
        })}
      </div>
      <div className="flex flex-row space-x-2 items-center justify-center text-sm">
        <span className='text-secondaryDarker'>
          Inspired by{' '}
          <Link href="https://www.ibelick.com/" target="_blank" className='text-secondaryDarker hover:text-secondaryDark duration-200 hover:underline'>
            Julien Thibeaut
          </Link>
        </span>
      </div>
    </footer>
  );
}
