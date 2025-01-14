import type { Metadata } from 'next';
import 'react-calendar/dist/Calendar.css';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'Paperprint calendear',
  description: 'Create your own paper calendar!',
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
