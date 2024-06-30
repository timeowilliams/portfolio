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
  description: `hey there, i'm timeo. i'm based in nyc. usually coding (preferably open-source), lifting (2024 goal),and practicing bachata/piano/something sensual.`,
  socials: [
    {
      platform: 'X',
      link: 'https://twitter.com/timeowilliams',
      icon: <XIcon />,
    },
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
      name: 'Kafka-Penguin',
      slug: 'kafka-penguin',
      description: 'Message Reprocessing Lib for KafkaJS.',
      image:
        'https://res.cloudinary.com/dnzzm3cnf/image/upload/v1717618939/kafka-penguin_ocljx4.png',
      link: 'https://github.com/oslabs-beta/kafka-penguin?tab=readme-ov-file',
    },
  ],
  posts: [
    {
      title: 'My first post',
      slug: '',
      views: '0 views',
    },
  ],
  reading: [
    {
      title: 'On Writing Well',
      author: 'William Zinsser',
      link: 'https://www.amazon.com/Writing-Well-Classic-Guide-Nonfiction/dp/0060891548',
      rating: 5,
      dateFinished: '',
      favorite: true,
    },
    {
      title: 'Software Engineering at Google',
      author: 'Titus',
      link: 'https://abseil.io/resources/swe-book/html/toc.html',
      rating: 5,
      dateFinished: '',
      favorite: true,
    },
    {
      title: 'A Philosophy of Software Design',
      author: 'John Ousterhout',
      link: 'https://milkov.tech/assets/psd.pdf',
      rating: 5,
      dateFinished: '',
      favorite: true,
    },
    {
      title: 'Learning Domain Driven Design',
      author: 'Vlad Khononov',
      link: 'https://dl.ebooksworld.ir/books/Learning.Domain-Driven.Design.9781098100131.EBooksWorld.ir.pdf',
      rating: 5,
      dateFinished: '',
      favorite: true,
    },
    {
      title: 'Fall in Love with the Problem, Not the Solution',
      author: 'Uri Levine',
      link: 'https://urilevine.com/book/',
      rating: 4,
      dateFinished: '',
      favorite: true,
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
