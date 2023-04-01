import Header from '@/features/user/layout/header';
import '@/styles/globals.scss';

import { IBM_Plex_Sans } from 'next/font/google';
import ClientOnly from '../client-only';
import ToastProvider from '@/shared/providers/toast-provider';

export const metadata = {
  title: 'Nameastay',
  description: 'Nameastay hero',
};

const manrope = IBM_Plex_Sans({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <ClientOnly>
          <Header></Header>
          <ToastProvider></ToastProvider>
        </ClientOnly>
        <main className="pt-[72px] md:pt-[82px]  container">{children}</main>
      </body>
    </html>
  );
}
