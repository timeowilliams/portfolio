import type { Metadata } from 'next';
import { Montserrat, Lora } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const lora = Lora({ 
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Timeo Williams | The Living Bridge',
  description: 'Built to carry others. Formed in fire. Led by faith.',
  icons: {
    icon: [
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: ['/favicon/favicon.ico']
  },
  manifest: '/favicon/site.webmanifest',
  metadataBase: new URL('https://timeowilliams.com'),
  openGraph: {
    title: 'Timeo Williams | The Living Bridge',
    description: 'Built to carry others. Formed in fire. Led by faith.',
    images: [{ url: '/favicon/android-chrome-512x512.png' }],
  },
  twitter: {
    card: 'summary',
    title: 'Timeo Williams | The Living Bridge',
    description: 'Built to carry others. Formed in fire. Led by faith.',
    images: ['/favicon/android-chrome-512x512.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${lora.variable}`}>
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#556B2F" />
        <meta name="theme-color" content="#556B2F" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
