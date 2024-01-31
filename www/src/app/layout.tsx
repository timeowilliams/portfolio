import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.hosnaqasmei.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  title: { default: 'Hosna Qasmei', template: '%s | Hosna Qasmei' },
  description: 'Developer & YouTuber',
  openGraph: {
    title: 'Hosna Qasmei',
    description: 'Developer & YouTuber.',
    url: 'https://www.hosnaqasmei.com',
    siteName: 'Hosna Qasmei',
    locale: 'en_US',
    type: 'website',
    images: '/og-image.png',
  },
  twitter: {
    title: 'Hosna Qasmei',
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <script
          defer
          data-domain="sadhearts.club"
          src="https://plausible.io/js/script.js"
        ></script>
      </head>
      <body className={`bg-primary text-secondary text-sm md:text-base ${inter.className}`}>
        <main className="min-h-screen flex flex-col items-center">
          <div className="flex-1 w-full flex flex-col gap-12 items-center">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
