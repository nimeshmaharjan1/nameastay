import '@/styles/globals.scss';

import { Inter } from 'next/font/google';

export const metadata = {
  title: 'Nameastay - Admin',
  description: 'Nameastay hero',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
