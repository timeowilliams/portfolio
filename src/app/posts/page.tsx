import Image from 'next/image';
import Link from 'next/link';

import MaxWidthWrapper from '@/components/max-width-wrapper';
import { reformatDate } from '@/lib/utils';
import { allPosts } from 'contentlayer/generated';

export const metadata = {
  title: 'Posts',
  description: 'Read my thoughts on software development, design, and more.',
};

export default async function PortfolioIndex() {
  const items = allPosts;

  return (
    <MaxWidthWrapper className="">
      <div className="grid grid-cols-1 gap-10 pb-10">
        <div className="flex flex-col">
          <Link
            href="/"
            className="flex flex-row space-x-2 items-center md:px-6 group cursor-pointer mb-4"
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
          <span className="text-4xl font-bold md:px-6 mb-6 md:mb-4">
            All Posts
          </span>
          <div>
            <div className="grid grid-cols-1 gap-6 md:gap-1 md:px-2">
              {items
                .sort((a, b) => {
                  if (new Date(a.date) > new Date(b.date)) {
                    return -1;
                  }
                  return 1;
                })
                .map((post) => (
                  <Link
                    key={post.slug}
                    href={`/posts/${post.slug}`}
                    className="flex flex-row justify-between items-center duration-300 md:hover:bg-hoverBackground md:p-4 rounded-lg cursor-pointer"
                  >
                    <div className="flex flex-col space-y-2">
                      <span className="text-secondaryDark">{post.title}</span>
                      <span className="text-secondaryDarker">
                        {reformatDate(post.date)}
                      </span>
                    </div>

                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-secondaryDarker"
                    >
                      <path
                        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
