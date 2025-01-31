import HeroSection from '@/components/HeroSection';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tentang Kami',
  description:
    'Pelajari lebih lanjut tentang TK Nuryanti Global Islamic Montessori School dan filosofi pendidikan kami',
};

export default function AboutPage() {
  return (
    <div className='min-h-screen bg-cream-100'>
      <HeroSection
        title='Tentang TK Nuryanti'
        subtitle='Mengenal Lebih Dekat Sekolah Montessori Kami'
        imageSrc='/assets/montessori-hero.gif'
      />

      <section className='py-16 bg-white'>
        <div className='container mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-12'>Filosofi Sekolah</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
            <div>
              <p className='mb-4'>
                TK Nuryanti Global Islamic Montessori School menerapkan metode Montessori
                yang berfokus pada kemandirian dan kreativitas anak. Kami percaya bahwa
                setiap anak memiliki potensi unik yang perlu dikembangkan melalui
                lingkungan belajar yang mendukung dan menginspirasi.
              </p>
              <p>
                Dengan menggabungkan prinsip-prinsip Montessori dan nilai-nilai Islam,
                kami bertujuan untuk membentuk generasi muda yang cerdas, berkarakter, dan
                siap menghadapi tantangan masa depan.
              </p>
            </div>
            <Image
              src='/assets/montessori/montessori3.jpg'
              alt='Anak-anak belajar dengan metode Montessori'
              width={500}
              height={300}
              className='rounded-lg shadow-md'
            />
          </div>
        </div>
      </section>

      <section className='py-16 bg-cream-100'>
        <div className='container mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-12'>Sejarah Sekolah</h2>
          <div className='relative'>
            <div className='absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-pastel-green-500'></div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <Card className='md:text-right'>
                <CardContent className='p-6'>
                  <h3 className='text-xl font-semibold mb-2'>2010</h3>
                  <p>
                    Pendirian TK Nuryanti dengan visi pendidikan Montessori yang
                    terintegrasi dengan nilai-nilai Islam.
                  </p>
                </CardContent>
              </Card>
              <div></div>
              <div></div>
              <Card>
                <CardContent className='p-6'>
                  <h3 className='text-xl font-semibold mb-2'>2015</h3>
                  <p>
                    Perluasan fasilitas dan penambahan program untuk kelompok bermain.
                  </p>
                </CardContent>
              </Card>
              <Card className='md:text-right'>
                <CardContent className='p-6'>
                  <h3 className='text-xl font-semibold mb-2'>2020</h3>
                  <p>
                    Pencapaian akreditasi internasional dan pengembangan kurikulum
                    Montessori-Islam yang komprehensif.
                  </p>
                </CardContent>
              </Card>
              <div></div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-16 bg-white'>
        <div className='container mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-12'>Visi dan Misi</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <Card>
              <CardContent className='p-6'>
                <h3 className='text-xl font-semibold mb-4'>Visi</h3>
                <p>
                  Menjadi pusat pendidikan anak usia dini yang unggul dalam
                  mengintegrasikan metode Montessori dengan nilai-nilai Islam, membentuk
                  generasi yang mandiri, kreatif, dan berakhlak mulia.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className='p-6'>
                <h3 className='text-xl font-semibold mb-4'>Misi</h3>
                <ul className='list-disc pl-5 space-y-2'>
                  <li>
                    Menyelenggarakan pendidikan berkualitas dengan metode Montessori yang
                    terintegrasi dengan ajaran Islam.
                  </li>
                  <li>
                    Mengembangkan potensi setiap anak secara optimal melalui lingkungan
                    belajar yang inspiratif dan mendukung.
                  </li>
                  <li>
                    Membangun kerjasama yang erat dengan orang tua dan masyarakat dalam
                    mendidik anak.
                  </li>
                  <li>
                    Meningkatkan kompetensi guru melalui pelatihan dan pengembangan
                    profesional berkelanjutan.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className='py-16 bg-cream-100'>
        <div className='container mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-12'>Galeri Foto</h2>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {[1, 2, 3, 4, 5, 6, 7].map((index) => (
              <div
                key={index}
                className='relative aspect-square overflow-hidden rounded-lg shadow-md'>
                <Image
                  src={`/assets/montessori/montessori${index}.jpg`}
                  alt={`Galeri foto ${index}`}
                  layout='fill'
                  objectFit='cover'
                  className='transition-transform duration-300 hover:scale-110'
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
