import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import Navbar from './layout/navbar/navbar';
import Footer from './layout/footer/footer';
import Sidebar from './layout/sidebar/sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ganey-eden',
  description: 'Generated by Shay Bushary',
};

interface Props {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: Props) {

  return (
    <html suppressHydrationWarning={true} lang='he' dir='rtl'>
      <body suppressHydrationWarning={true} className={inter.className}>
        {/* navbar */}
        <Navbar />

        <div className="flex relative">
          {/* sidebar */}
            <Sidebar />

          {/* child app content */}
          <div className='bg-red-400 w-10/12'>
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
