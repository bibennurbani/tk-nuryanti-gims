import HeroSection from '@/components/HeroSection';
import { Card, CardContent } from '@/components/ui/card';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Kelas Kami',
  description:
    'Kelas yang tersedia di TK Nuryanti Global Islamic Montessori School beserta fasilitasnya',
};

export default function ClassesPage() {
  return (
    <div className='min-h-screen bg-cream-100'>
      <HeroSection
        title='Kelas Montessori Kami'
        subtitle='Lingkungan Belajar yang Mendukung Perkembangan Anak'
        imageSrc='/assets/montessori-hero.gif'
      />

      <section className='py-16 bg-white'>
        <div className='container mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-12'>Program Kelas</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <Card className='transition-all duration-300 hover:shadow-lg'>
              <CardContent className='p-6'>
                <h3 className='text-xl font-semibold mb-4'>
                  Kelompok Bermain (2-3 tahun)
                </h3>
                <Image
                  src='/assets/kelas/Kelas1.jpeg'
                  alt='Kelas Kelompok Bermain'
                  width={300}
                  height={200}
                  className='rounded-lg mb-4'
                />
                <p>
                  Program ini fokus pada pengembangan keterampilan motorik, bahasa, dan
                  sosialisasi awal melalui permainan dan aktivitas sensori.
                </p>
              </CardContent>
            </Card>
            <Card className='transition-all duration-300 hover:shadow-lg'>
              <CardContent className='p-6'>
                <h3 className='text-xl font-semibold mb-4'>TK A (3-4 tahun)</h3>
                <Image
                  src='/assets/kelas/Kelas2.jpeg'
                  alt='Kelas TK A'
                  width={300}
                  height={200}
                  className='rounded-lg mb-4'
                />
                <p>
                  Di kelas ini, anak-anak mulai belajar kemandirian, pengenalan huruf dan
                  angka, serta pengembangan keterampilan praktis sehari-hari.
                </p>
              </CardContent>
            </Card>
            <Card className='transition-all duration-300 hover:shadow-lg'>
              <CardContent className='p-6'>
                <h3 className='text-xl font-semibold mb-4'>TK B (5-6 tahun)</h3>
                <Image
                  src='/assets/kelas/Kelas3.jpeg'
                  alt='Kelas TK B'
                  width={300}
                  height={200}
                  className='rounded-lg mb-4'
                />
                <p>
                  Program ini mempersiapkan anak-anak untuk masuk SD dengan fokus pada
                  pengembangan literasi, numerasi, dan keterampilan sosial-emosional.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className='py-16 bg-cream-100'>
        <div className='container mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-12'>Fokus Pembelajaran</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <Card>
              <CardContent className='p-6'>
                <h3 className='text-xl font-semibold mb-4'>Keterampilan Praktis</h3>
                <ul className='list-disc pl-5 space-y-2'>
                  <li>Memakai dan melepas sepatu</li>
                  <li>Menuang air</li>
                  <li>Merapikan lingkungan</li>
                  <li>Mencuci tangan</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className='p-6'>
                <h3 className='text-xl font-semibold mb-4'>Pengembangan Sensori</h3>
                <ul className='list-disc pl-5 space-y-2'>
                  <li>Mengenal warna dan bentuk</li>
                  <li>Membedakan tekstur</li>
                  <li>Mengembangkan kepekaan suara</li>
                  <li>Mengenal bau dan rasa</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className='p-6'>
                <h3 className='text-xl font-semibold mb-4'>Bahasa dan Literasi</h3>
                <ul className='list-disc pl-5 space-y-2'>
                  <li>Pengenalan huruf</li>
                  <li>Pengembangan kosakata</li>
                  <li>Membaca permulaan</li>
                  <li>Menulis awal</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className='p-6'>
                <h3 className='text-xl font-semibold mb-4'>Matematika</h3>
                <ul className='list-disc pl-5 space-y-2'>
                  <li>Pengenalan angka</li>
                  <li>Konsep penjumlahan dan pengurangan</li>
                  <li>Pengukuran sederhana</li>
                  <li>Pengenalan geometri dasar</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className='py-16 bg-white'>
        <div className='container mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-12'>Alat Peraga Montessori</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='flex flex-col items-center'>
              <Image
                src='/pink-tower.jpg'
                alt='Pink Tower'
                width={200}
                height={200}
                className='rounded-lg mb-4'
              />
              <h3 className='text-xl font-semibold mb-2'>Pink Tower</h3>
              <p className='text-center'>
                Membantu anak belajar tentang ukuran, berat, dan koordinasi mata-tangan.
              </p>
            </div>
            <div className='flex flex-col items-center'>
              <Image
                src='/number-rods.jpg'
                alt='Number Rods'
                width={200}
                height={200}
                className='rounded-lg mb-4'
              />
              <h3 className='text-xl font-semibold mb-2'>Number Rods</h3>
              <p className='text-center'>
                Mengajarkan konsep angka dan penjumlahan secara konkret.
              </p>
            </div>
            <div className='flex flex-col items-center'>
              <Image
                src='/movable-alphabet.jpg'
                alt='Movable Alphabet'
                width={200}
                height={200}
                className='rounded-lg mb-4'
              />
              <h3 className='text-xl font-semibold mb-2'>Movable Alphabet</h3>
              <p className='text-center'>
                Membantu anak belajar membaca dan menulis dengan cara yang menyenangkan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
