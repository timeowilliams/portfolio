import Image from 'next/image';
import Link from 'next/link';

import MaxWidthWrapper from '@/components/max-width-wrapper';
import { CONFIG } from '@/config';

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="flex-1 flex flex-col gap-12 max-w-4xl w-full">
        <div className="grid grid-cols-1 gap-10">
          <div className="flex flex-col space-y-10 md:px-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center items-start space-y-4">
              <div className="flex flex-row items-center space-x-3">
                <Image
                  src={CONFIG.headshot}
                  alt=""
                  width={100}
                  height={100}
                  className="rounded-full h-[58px] w-[58px]"
                />
                <div className="flex flex-col">
                  <span className="font-semibold">{CONFIG.name}</span>
                  <span className="text-secondaryDarker">{CONFIG.title}</span>
                </div>
              </div>
              <div className="flex flex-row space-x-4">
                <a href="https://twitter.com/hqasmei" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    className="text-zinc-400 hover:text-zinc-300 duration-200 mt-0.5"
                  >
                    <path
                      fill="currentColor"
                      d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231l5.45-6.231Zm-1.161 17.52h1.833L7.045 4.126H5.078L17.044 19.77Z"
                    ></path>
                  </svg>
                </a>
                <a href="https://github.com/hqasmei" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    className="text-zinc-400 hover:text-zinc-300 duration-200"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                    ></path>
                  </svg>
                </a>
                <a href="https://www.youtube.com/@hqasmei" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    className="text-zinc-400 hover:text-zinc-300 duration-200"
                  >
                    <path
                      fill="currentColor"
                      d="m10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73Z"
                    ></path>
                  </svg>
                </a>
                <a href="https://discord.com/invite/agzuPEVxhT" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    className="text-zinc-400 hover:text-zinc-300 duration-200"
                  >
                    <path
                      fill="currentColor"
                      d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"
                    ></path>
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/in/hosnaqasmei/"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    className="text-zinc-400 hover:text-zinc-300 duration-200"
                  >
                    <path
                      fill="currentColor"
                      d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            <span className="text-secondaryDark leading-6">
              {CONFIG.description}
            </span>
          </div>

          <div className="flex flex-col space-y-4">
            <span className="font-semibold md:px-6">Featured Projects</span>
            <div className="grid grid-cols-1 gap-6 md:gap-1 px-2">
              {CONFIG.projects.map((project, idx) => {
                return (
                  <Link
                    key={idx}
                    href={project.link}
                    target="_blank"
                    className="flex flex-row justify-between items-center duration-300 md:hover:bg-hoverBackground md:p-4 rounded-lg cursor-pointer"
                  >
                    <div className="flex flex-row space-x-4">
                      <Image
                        src={project.image}
                        alt=""
                        width={40}
                        height={40}
                        className="w-[40px] h-[40px]"
                      />
                      <div className="flex flex-col">
                        <span className="text-secondaryDark">
                          {project.name}
                        </span>
                        <span className="text-secondaryDarker">
                          {project.description}
                        </span>
                      </div>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-link text-secondaryDarker hidden sm:flex"
                    >
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                  </Link>
                );
              })}
            </div>
            <div className="flex flex-row space-x-1 items-center md:px-6 group cursor-pointer">
              <span className="text-secondary">All Projects</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                className="text-secondary group-hover:translate-x-1 duration-200"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M1.25 8A.75.75 0 0 1 2 7.25h10.19L9.47 4.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H2A.75.75 0 0 1 1.25 8"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          <div className="flex flex-col space-y-4 md:px-6">
            <span className="font-semibold">Latest Posts</span>
            <div className="grid grid-cols-1 gap-6">
              {CONFIG.posts.map((post, idx) => {
                return (
                  <div key={idx} className="flex flex-col space-y-2">
                    <span className="text-secondaryDark">{post.title}</span>
                    <span className="text-secondaryDarker">{post.views}</span>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-row space-x-1 items-center group cursor-pointer">
              <span className="text-secondary">All Posts</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                className="text-secondary group-hover:translate-x-1 duration-200"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M1.25 8A.75.75 0 0 1 2 7.25h10.19L9.47 4.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H2A.75.75 0 0 1 1.25 8"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
