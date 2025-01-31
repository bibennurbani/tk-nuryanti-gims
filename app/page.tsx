'use client';

import HeroSection from '@/components/HeroSection';
import { Card, CardContent } from '@/components/ui/card';
import {
  BookOpen,
  PuzzleIcon as PuzzlePiece,
  Building2,
  Star,
  Globe2,
  Heart,
} from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FeaturedPrograms } from '@/components/FeaturedPrograms';
import { Statistics } from '@/components/Statistics';
import { Testimonials } from '@/components/Testimonials';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function Home() {
  return (
    <div className='min-h-screen bg-cream-50'>
      <HeroSection
        title='Belajar Mandiri dan Kreatif dengan Metode Montessori'
        subtitle='di TK Nuryanti Global Islamic Montessori School'
        imageSrc='/assets/montessori-hero.gif'
      />

      {/* Introduction Section */}
      <section
        className='py-20 bg-white'
        aria-label='Introduction to TK Nuryanti Global Islamic Montessori School'>
        <div className='container mx-auto px-4'>
          <motion.div
            className='max-w-4xl mx-auto text-center'
            initial={fadeIn.initial}
            whileInView={fadeIn.animate}
            transition={fadeIn.transition}
            viewport={{ once: true }}>
            <h2 className='text-3xl md:text-4xl font-bold mb-8 text-gray-800'>
              Selamat Datang di TK Nuryanti Global Islamic Montessori School
            </h2>
            <p className='text-lg text-gray-600 leading-relaxed mb-8'>
              Pendidikan anak usia dini (PAUD) memiliki peran penting dalam membentuk
              karakter, moral, dan keterampilan dasar anak. TK Nuryanti Global Islamic
              Montessori School hadir untuk menjawab kebutuhan masyarakat akan pendidikan
              yang memadukan metode Montessori, nilai-nilai Islami, dan wawasan global.
            </p>
            <p className='text-lg text-gray-600 leading-relaxed'>
              Dengan pendekatan yang inovatif, TK NURYANTI GLOBAL ISLAMIC MONTESORI SCHOOL
              Ini berkomitmen untuk menciptakan generasi yang mandiri, berkarakter Islami,
              dan siap menghadapi tantangan dunia modern.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section
        className='py-20 bg-gradient-to-b from-pastel-green-500/10 to-cream-100'
        aria-label='Vision and mission TK Nuryanti Global Islamic Montessori School'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={fadeIn.initial}
              whileInView={fadeIn.animate}
              transition={fadeIn.transition}
              viewport={{ once: true }}>
              <h2 className='text-3xl font-bold mb-6'>Visi</h2>
              <p className='text-lg text-gray-700 mb-8'>
                Menciptakan generasi yang mandiri, berakhlak mulia, dan berwawasan global
                melalui pendekatan Montessori Islami.
              </p>
              <h2 className='text-3xl font-bold mb-6'>Misi</h2>
              <ul className='space-y-4 text-gray-700'>
                <li className='flex items-start'>
                  <Star className='w-6 h-6 text-pastel-green-500 mr-2 flex-shrink-0 mt-1' />
                  <span>
                    Mengintegrasikan metode Montessori dengan pendidikan nilai-nilai
                    Islam.
                  </span>
                </li>
                <li className='flex items-start'>
                  <Star className='w-6 h-6 text-pastel-green-500 mr-2 flex-shrink-0 mt-1' />
                  <span>Menyediakan fasilitas pembelajaran yang modern dan aman.</span>
                </li>
                <li className='flex items-start'>
                  <Star className='w-6 h-6 text-pastel-green-500 mr-2 flex-shrink-0 mt-1' />
                  <span>
                    Melatih tenaga pendidik profesional yang bersertifikasi Montessori.
                  </span>
                </li>
                <li className='flex items-start'>
                  <Star className='w-6 h-6 text-pastel-green-500 mr-2 flex-shrink-0 mt-1' />
                  <span>
                    Mengembangkan program pembelajaran yang mendukung kreativitas dan
                    kemandirian anak.
                  </span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              className='relative h-[400px] rounded-2xl overflow-hidden shadow-xl'
              initial={fadeIn.initial}
              whileInView={fadeIn.animate}
              transition={fadeIn.transition}
              viewport={{ once: true }}>
              <Image
                src='/assets/visi-misi.svg'
                alt='Anak-anak belajar dengan metode Montessori'
                fill
                className='object-cover'
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section
        className='py-20 bg-white'
        aria-label='Core and Values of TK Nuryanti Global Islamic Montessori School'>
        <div className='container mx-auto px-4'>
          <motion.h2
            className='text-3xl md:text-4xl font-bold text-center mb-16'
            initial={fadeIn.initial}
            whileInView={fadeIn.animate}
            transition={fadeIn.transition}
            viewport={{ once: true }}>
            Nilai-Nilai Inti Yang Dikembangkan
          </motion.h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <motion.div
              className='group'
              initial={fadeIn.initial}
              whileInView={fadeIn.animate}
              transition={{ ...fadeIn.transition, delay: 0.2 }}
              viewport={{ once: true }}>
              <Card className='h-full transition-all duration-300 hover:shadow-xl'>
                <CardContent className='p-8'>
                  <div className='mb-6 flex justify-center'>
                    <Heart className='w-16 h-16 text-pastel-green-500 group-hover:scale-110 transition-transform duration-300' />
                  </div>
                  <h3 className='text-xl font-bold text-center mb-4'>
                    Islamic Character
                  </h3>
                  <p className='text-gray-600 text-center'>
                    Menanamkan akhlak Islami dalam setiap aspek pembelajaran
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              className='group'
              initial={fadeIn.initial}
              whileInView={fadeIn.animate}
              transition={{ ...fadeIn.transition, delay: 0.4 }}
              viewport={{ once: true }}>
              <Card className='h-full transition-all duration-300 hover:shadow-xl'>
                <CardContent className='p-8'>
                  <div className='mb-6 flex justify-center'>
                    <BookOpen className='w-16 h-16 text-pastel-blue-500 group-hover:scale-110 transition-transform duration-300' />
                  </div>
                  <h3 className='text-xl font-bold text-center mb-4'>Independence</h3>
                  <p className='text-gray-600 text-center'>
                    Mengembangkan kemampuan anak untuk berpikir dan bertindak secara
                    mandiri
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              className='group'
              initial={fadeIn.initial}
              whileInView={fadeIn.animate}
              transition={{ ...fadeIn.transition, delay: 0.6 }}
              viewport={{ once: true }}>
              <Card className='h-full transition-all duration-300 hover:shadow-xl'>
                <CardContent className='p-8'>
                  <div className='mb-6 flex justify-center'>
                    <Globe2 className='w-16 h-16 text-pastel-green-500 group-hover:scale-110 transition-transform duration-300' />
                  </div>
                  <h3 className='text-xl font-bold text-center mb-4'>
                    Global Perspective
                  </h3>
                  <p className='text-gray-600 text-center'>
                    Membuka wawasan anak terhadap dunia melalui pengenalan budaya global
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section
        className='py-20 bg-cream-100'
        aria-label='Philosophy of TK Nuryanti Global Islamic Montessori School'>
        <div className='container mx-auto px-4'>
          <motion.h2
            className='text-3xl md:text-4xl font-bold text-center mb-16'
            initial={fadeIn.initial}
            whileInView={fadeIn.animate}
            transition={fadeIn.transition}
            viewport={{ once: true }}>
            Filosofi Montessori
          </motion.h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <motion.div
              initial={fadeIn.initial}
              whileInView={fadeIn.animate}
              transition={{ ...fadeIn.transition, delay: 0.2 }}
              viewport={{ once: true }}>
              <Card className='transition-all duration-300 hover:shadow-lg group'>
                <CardContent className='flex flex-col items-center p-8'>
                  <BookOpen className='w-16 h-16 text-pastel-green-500 mb-6 group-hover:scale-110 transition-transform duration-300' />
                  <h3 className='text-xl font-semibold mb-4'>Belajar Mandiri</h3>
                  <p className='text-center text-gray-600'>
                    Anak-anak didorong untuk mengeksplorasi dan belajar sesuai minat
                    mereka.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={fadeIn.initial}
              whileInView={fadeIn.animate}
              transition={{ ...fadeIn.transition, delay: 0.4 }}
              viewport={{ once: true }}>
              <Card className='transition-all duration-300 hover:shadow-lg group'>
                <CardContent className='flex flex-col items-center p-8'>
                  <PuzzlePiece className='w-16 h-16 text-pastel-blue-500 mb-6 group-hover:scale-110 transition-transform duration-300' />
                  <h3 className='text-xl font-semibold mb-4'>Pembelajaran Praktis</h3>
                  <p className='text-center text-gray-600'>
                    Menggunakan alat peraga dan aktivitas hands-on untuk pemahaman
                    mendalam.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={fadeIn.initial}
              whileInView={fadeIn.animate}
              transition={{ ...fadeIn.transition, delay: 0.6 }}
              viewport={{ once: true }}>
              <Card className='transition-all duration-300 hover:shadow-lg group'>
                <CardContent className='flex flex-col items-center p-8'>
                  <Building2 className='w-16 h-16 text-pastel-green-500 mb-6 group-hover:scale-110 transition-transform duration-300' />
                  <h3 className='text-xl font-semibold mb-4'>Lingkungan Terstruktur</h3>
                  <p className='text-center text-gray-600'>
                    Ruang kelas yang didesain untuk mendukung kemandirian dan eksplorasi.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section
        className='py-20 bg-white'
        aria-label='Advantages of TK Nuryanti Global Islamic Montessori School'>
        <div className='container mx-auto px-4'>
          <motion.h2
            className='text-3xl md:text-4xl font-bold text-center mb-16'
            initial={fadeIn.initial}
            whileInView={fadeIn.animate}
            transition={fadeIn.transition}
            viewport={{ once: true }}>
            Keunggulan TK Kami
          </motion.h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <motion.div
              className='flex flex-col items-center'
              initial={fadeIn.initial}
              whileInView={fadeIn.animate}
              transition={{ ...fadeIn.transition, delay: 0.2 }}
              viewport={{ once: true }}>
              <div className='relative w-32 h-32 mb-6'>
                <Image
                  src='/assets/certified3.png'
                  alt='Guru Tersertifikasi'
                  fill
                  className='object-contain'
                />
              </div>
              <h3 className='text-xl font-semibold mb-4'>
                Guru Tersertifikasi Montessori
              </h3>
              <p className='text-center text-gray-600'>
                Tim pengajar kami memiliki sertifikasi Montessori internasional.
              </p>
            </motion.div>
            <motion.div
              className='flex flex-col items-center'
              initial={fadeIn.initial}
              whileInView={fadeIn.animate}
              transition={{ ...fadeIn.transition, delay: 0.4 }}
              viewport={{ once: true }}>
              <div className='relative w-32 h-32 mb-6'>
                <Image
                  src='/pink-tower.jpg'
                  alt='Mainan Berkualitas'
                  fill
                  className='object-contain'
                />
              </div>
              <h3 className='text-xl font-semibold mb-4'>
                Mainan Edukasi Berkualitas Tinggi
              </h3>
              <p className='text-center text-gray-600'>
                Kami menggunakan alat peraga Montessori asli untuk pembelajaran optimal.
              </p>
            </motion.div>
            <motion.div
              className='flex flex-col items-center'
              initial={fadeIn.initial}
              whileInView={fadeIn.animate}
              transition={{ ...fadeIn.transition, delay: 0.6 }}
              viewport={{ once: true }}>
              <div className='relative w-32 h-32 mb-6'>
                <Image
                  src='/assets/kelas/Kelas0.png'
                  alt='Lingkungan Mendukung'
                  fill
                  className='object-contain'
                />
              </div>
              <h3 className='text-xl font-semibold mb-4'>
                Lingkungan yang Mendukung Eksplorasi
              </h3>
              <p className='text-center text-gray-600'>
                Ruang kelas kami didesain untuk mendorong kemandirian dan kreativitas
                anak.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <FeaturedPrograms />
      <Statistics />
      <Testimonials />
    </div>
  );
}
