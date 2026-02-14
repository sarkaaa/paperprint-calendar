import type { Metadata } from 'next';
import 'react-calendar/dist/Calendar.css';
import '@/app/globals.css';

const BASE_URL = 'https://paperprint-calendar.vercel.app/';

const mainInfo = {
  title: 'PaperPrint calendar - printable weekly calendar',
  description:
    'Create your own printable weekly calendar with a minimalist design. Choose a layout and download a PDF for easy printing.',
};

export const metadata: Metadata = {
  ...mainInfo,
  metadataBase: new URL(BASE_URL),
  authors: [{ name: 'Šárka Chwastková', url: 'https://pandacode.cz' }],
  keywords: [
    'calendar',
    'paper',
    'print',
    'create',
    'custom',
    'design',
    'download',
    'share',
  ],
  icons: { icon: './favicon.ico' },
  openGraph: {
    ...mainInfo,
    images: [
      {
        url: './thumbnail.png',
        secureUrl: './thumbnail.png',
        width: 1200,
        height: 630,
        alt: 'Preview image for Paperprint calendar',
      },
    ],
    type: 'website',
    siteName: 'Paperprint calendar',
    url: BASE_URL,
  },
  twitter: {
    ...mainInfo,
    card: 'summary_large_image',
    creator: '@sarkachwastkova',
    images: ['./thumbnail.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        {children}
        <footer className='bg-slate-200 py-4 text-center'>
          Made with ❤️ by{' '}
          <a
            href='https://pandacode.cz'
            target='_blank'
            className='font-semibold hover:text-pink-700 focus:text-pink-700'
          >
            Šárka Chwastková
          </a>
        </footer>
      </body>
    </html>
  );
}
