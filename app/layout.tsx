import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';

const nunitoSans = Nunito_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TK Nuryanti Global Islamic Montessori School',
  description: 'Belajar Mandiri dan Kreatif dengan Metode Montessori',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='id'>
      <body className={nunitoSans.className}>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
