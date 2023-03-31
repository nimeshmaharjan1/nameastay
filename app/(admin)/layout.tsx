import '@/styles/globals.scss';

import { Manrope } from 'next/font/google';

export const metadata = {
  title: 'Nameastay - Admin',
  description: 'Nameastay hero',
};

const manrope = Manrope({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
