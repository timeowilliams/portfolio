import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.hosnaqasmei.com/'),
  title: { default: 'Hosna Qasmei', template: '%s | Hosna Qasmei' },
  description: 'Developer & YouTuber',
  openGraph: {
    title: 'Hosna Qasmei',
    description: 'Developer & YouTuber.',
    url: 'https://www.hosnaqasmei.com/',
    siteName: 'Hosna Qasmei',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
          src="https://beamanalytics.b-cdn.net/beam.min.js"
          data-token="a07e2826-5910-4684-9e69-0ec4388a0509"
          async
        ></script>
        <meta property="ogititle" content="Hosna Qasmei" />
        <meta property="og:description" content="Developer & YouTuber." />
        <meta property="og:url" content="https://www.hosnaqasmei.com/" />
        <meta property="og:site_name" content="Hosna Qasmei" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image"
          content="https://www.hosnaqasmei.com/opengraph-image.jpg?d69767cd956a7bc0"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hosna Qasmei" />
        <meta name="twitter:description" content="Developer & YouTuber" />
        <meta name="twitter:image:type" content=" image/jpeg" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
        <meta
          name="twitter: image"
          content="https://www.hosnaqasmei.com/opengraph-image.jpg?d69767cd956a7bc0"
        />
      </head>
      <body
        className={`bg-primary text-secondary text-sm md:text-base ${inter.className}`}
      >
        <main className="min-h-screen flex flex-col items-center">
          <div className="flex-1 w-full flex flex-col gap-12 items-center">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
