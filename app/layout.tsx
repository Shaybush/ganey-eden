import React from 'react';
import { Inter } from 'next/font/google';
import Footer from './layout/footer/footer';
import Navbar from './layout/navbar/navbar';
import Sidebar from './layout/sidebar/sidebar';
import type { Metadata } from 'next';
import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

interface Props {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: Props) {
  return (
    <html suppressHydrationWarning={true} lang='he' dir='rtl'>
      <body suppressHydrationWarning={true} className={inter.className}>
        <Navbar />

        <div className='relative container-flu'>
          <Sidebar />

          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: 'הקמת גינות, גינות מעוצבות, תכנון גינות, עיצוב גינות, גינות יפות, גני עדן',
  description:
    'הקמת גינות, גינות מעוצבות, תכנון גינות, עיצוב גינות, גינות יפות. חברת אלונים מתמחה במתן שירותי גינון ואדריכלות נוף מקצועיים. הקמת גינה, גינות נוי מעוצבות, תכנון גינות פרטיות ועוד',
  authors: [
    {
      name: 'Shay Bushary',
      url: 'profilio.shay.com',
    },
  ],
  themeColor: '#000000',
};
