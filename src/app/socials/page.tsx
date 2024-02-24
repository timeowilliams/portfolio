'use client';

import React from 'react';

import Link from 'next/link';

import { findMostRecentEntryByPlatform } from '@/lib/utils';
import { useQuery } from 'convex/react';

import { api } from '../../../convex/_generated/api';
import Card from './card';

export default function SocialAnalyticsPage() {
  const socials = useQuery(api.socials.get);
  if (!socials) {
    return null;
  }
  const xData = findMostRecentEntryByPlatform('X', socials);
  const githubData = findMostRecentEntryByPlatform('GitHub', socials);
  const youtubeData = findMostRecentEntryByPlatform('YouTube', socials);
  const twitchData = findMostRecentEntryByPlatform('Twitch', socials);
  const discordData = findMostRecentEntryByPlatform('Discord', socials);
  const linkedinData = findMostRecentEntryByPlatform('LinkedIn', socials);

  return (
    <div className="grid grid-cols-1 gap-10 pb-10 w-full">
      <div className="flex flex-col">
        <Link
          href="/"
          className="flex flex-row space-x-2 items-center   group cursor-pointer mb-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            className="text-secondaryDarker group-hover:-translate-x-1 duration-200 rotate-180"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M1.25 8A.75.75 0 0 1 2 7.25h10.19L9.47 4.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H2A.75.75 0 0 1 1.25 8"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-secondaryDarker">Back</span>
        </Link>
        <span className="text-4xl font-bold  mb-6">Social Media Stats</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
          <Card {...xData} type="Followers" />
          <Card {...githubData} type="Followers" />
          <Card {...youtubeData} type="Subscribers" />
          <Card {...twitchData} type="Followers" />
          <Card {...discordData} type="Members" />
          <Card {...linkedinData} type="Followers" />
        </div>
      </div>
    </div>
  );
}
