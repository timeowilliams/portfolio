import { cache, Suspense } from 'react';

import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import MaxWidthWrapper from '@/components/max-width-wrapper';
import { reformatDate } from '@/lib/utils';
import { allPosts } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';

export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata | undefined> {
  const post = allPosts.find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let { title, date: publishedTime, summary: description, image } = post;
  let ogImage = image
    ? `https://www.hosnaqasmei.com${image}`
    : `https://www.hosnaqasmei.com/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://www.hosnaqasmei.com/posts/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Blog({ params }: { params: any }) {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <MaxWidthWrapper className="pb-10">
      <div className="flex flex-row space-x-4 mb-6 text-sm text-secondaryDarker">
        <Link
          href="/"
          className="hover:text-secondaryDark duration-200 hover:underline"
        >
          Home
        </Link>
        <Link
          href="/posts"
          className="hover:text-secondaryDark duration-200 hover:underline"
        >
          More Posts
        </Link>
      </div>
      <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
        {post.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {reformatDate(post.date)}
        </p>
      </div>
      <article className="prose prose-invert">
        <MDXContent />
      </article>
    </MaxWidthWrapper>
  );
}
