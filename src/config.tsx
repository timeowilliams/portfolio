import { DiscordIcon } from '@/components/icons/discord';
import { GithubIcon } from '@/components/icons/github';
import { LinkedInIcon } from '@/components/icons/linkedin';
import { TwitchIcon } from '@/components/icons/twitch';
import { XIcon } from '@/components/icons/x';
import { YouTubeIcon } from '@/components/icons/youtube';

export const CONFIG = {
  name: 'Timeo Williams',
  headshot:
    'https://res.cloudinary.com/dnzzm3cnf/image/upload/v1717611006/T052J0LDAAG-U052FG2TB6E-85836b0496a8-512_otejdo.png',
  title: 'Software Developer',
  description: `Hi, I'm Timeo. I'm based in New York City, New York. In addition to coding, I also make YouTube videos, sharing my knowledge
and experience on web development.`,
  socials: [
    { platform: 'X', link: 'https://twitter.com/timeowilliams', icon: <XIcon /> },
    {
      platform: 'GitHub',
      link: 'https://github.com/timeowilliams',
      icon: <GithubIcon />,
    },
    {
      platform: 'YouTube',
      link: 'https://www.youtube.com/@TimeoWilliams',
      icon: <YouTubeIcon />,
    },
    {
      platform: 'Twitch',
      link: 'https://www.twitch.tv/goodwillhunter13',
      icon: <TwitchIcon />,
    },
    {
      platform: 'Discord',
      link: 'https://discord.com/invite/timeo4039',
      icon: <DiscordIcon />,
    },
    {
      platform: 'LinkedIn',
      link: 'https://www.linkedin.com/in/timeowilliams/',
      icon: <LinkedInIcon />,
    },
  ],
  projects: [
    {
      featured: true,
      name: 'TechStackFinder',
      slug: 'tech-stack-finder',
      description: 'Top stacks for building projects and SaaS.',
      image:
        'https://res.cloudinary.com/duud9d8dv/image/upload/v1705091981/tech-stack-finder_inkeoz.png',
      link: 'https://techstackfinder.com/',
    },

  ],
  posts: [
    {
      title: 'Pagination with shadcn/ui',
      slug: '',
      views: '35,530 views',
    },
  ],
  reading: [
    {
      title: 'On Writing Well',
      author: 'William Zinsser',
      link: 'https://www.amazon.com/Writing-Well-Classic-Guide-Nonfiction/dp/0060891548',
      rating: 5,
      dateFinished: '2024-03-07',
    },
  ],
  bucketList: [
    { item: 'Visit all the continents', isChecked: false },
    { item: 'Go to all the wonders of the world', isChecked: false },
    { item: 'Start my own company', isChecked: false },
    { item: 'Go sky diving', isChecked: true },
    { item: 'Cut my own hair', isChecked: true },
  ],
};
