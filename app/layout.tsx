import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Head from 'next/head';

const nunitoSans = Nunito_Sans({ subsets: ['latin'] });

export function generateMetadata({}): Metadata {
  return {
    title: {
      default: 'TK Nuryanti Global Islamic Montessori School',
      template: '%s | TK Nuryanti Global Islamic Montessori School',
    },
    description:
      'TK Nuryanti Global Islamic Montessori School di Bandung menyediakan pendidikan Islam berkualitas dengan metode Montessori yang terbukti efektif. Bergabunglah untuk mendukung kreativitas, kemandirian, dan semangat belajar anak Anda.',
    keywords: [
      'TK Islam Bandung',
      'Montessori Bandung',
      'Pendidikan Islam Montessori',
      'TK Nuryanti',
      'Sekolah Anak Bandung',
      'Montessori Indonesia',
    ],
    authors: [{ name: 'TK Nuryanti', url: 'https://nuryantiislamicmontessori.com/' }],
    creator: 'TK Nuryanti Global Islamic Montessori School',
    publisher: 'TK Nuryanti Global Islamic Montessori School',
    formatDetection: {
      email: false,
      address: false,
      telephone: true,
    },
    openGraph: {
      title: 'TK Nuryanti Global Islamic Montessori School',
      description:
        'Berikan anak Anda pendidikan terbaik di TK Nuryanti Global Islamic Montessori School Bandung. Kami mengintegrasikan nilai-nilai Islam dengan metode Montessori.',
      url: 'https://nuryantiislamicmontessori.com/',
      type: 'website',
      images: [
        {
          url: 'https://nuryantiislamicmontessori.com/assets/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'TK Nuryanti Global Islamic Montessori School',
        },
      ],
      siteName: 'TK Nuryanti Global Islamic Montessori School',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@NuryantiSchool',
      title: 'TK Nuryanti Global Islamic Montessori School',
      description:
        'Gabung bersama TK Nuryanti Global Islamic Montessori School untuk pendidikan Islami yang kreatif dan inovatif di Bandung.',
      images: ['https://nuryantiislamicmontessori.com/assets/images/og-image.jpg'],
    },
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='id'>
      <GoogleTagManager gtmId='GTM-P6NVZ3VX' />
      <Head>
        <link rel='canonical' href='https://nuryantiislamicmontessori.com/' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='robots' content='index, follow' />
        <meta
          name='google-site-verification'
          content='-2NN-MHZW2Sgl7jfS25477EXKJMZgSR88c5LbHpyYOs'
        />
      </Head>
      <body className={nunitoSans.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
