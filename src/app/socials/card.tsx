'use client';

import React, { useEffect } from 'react';

import Link from 'next/link';

export default function Card({
  icon,
  link,
  type,
  followersCount,
}: {
  icon: any;
  link: string;
  type: string;
  followersCount: string;
}) {
  return (
    <Link
      href={link}
      target="_blank"
      className="flex flex-col border p-4 rounded-md duration-200 border-secondaryDarker hover:border-secondaryDark group"
    >
      <div className="flex flex-row space-x-2 items-center text-secondaryDarker group-hover:text-secondaryDark duration-200 pb-2">
        {icon}
        <span>{type}</span>
      </div>

      <span className="text-3xl font-semibold text-secondaryDark">
        {followersCount}
      </span>
    </Link>
  );
}
