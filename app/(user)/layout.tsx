import Header from '@/features/user/layout/header';
import '@/styles/globals.scss';
import 'react-toastify/dist/ReactToastify.css';

import { IBM_Plex_Sans } from 'next/font/google';
import ClientOnly from '../client-only';
import ToastProvider from '@/shared/providers/toast-provider';
import ReactQueryProvider from '@/features/user/providers/react-query';
import getCurrentUser from '@/shared/actions/get-current-user';

export const metadata = {
  title: 'Nameastay',
  description: 'Nameastay hero',
  icons: {
    icon: '/favicon.ico',
  },
};

const manrope = IBM_Plex_Sans({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={manrope.className}>
        <ReactQueryProvider>
          <ClientOnly>
            <Header {...{ currentUser }}></Header>
            <ToastProvider></ToastProvider>
            <main className="pt-[72px] md:pt-[82px] container">{children}</main>
          </ClientOnly>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
