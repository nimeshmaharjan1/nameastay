import AdminHeader from '@/features/admin/layout/header';
import AdminSidebar from '@/features/admin/layout/sidebar';
import '@/styles/globals.scss';

import { IBM_Plex_Sans } from 'next/font/google';

export const metadata = {
  title: 'Nameastay - Admin',
  description: 'Nameastay hero',
};

const manrope = IBM_Plex_Sans({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <AdminSidebar></AdminSidebar>
        <AdminHeader></AdminHeader>
        <main className="ml-64 p-6 min-h-screen rounded-lg"> {children}</main>
      </body>
    </html>
  );
}
