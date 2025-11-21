import HeroSection from '@/components/HeroSection';
import { Card, CardContent } from '@/components/ui/card';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Guru Montesorri',
  description:
    'Guru Montesorri di TK Nuryanti Global Islamic Montessori School sudah terakreditasi dan memiliki sertifikasi',
};

const teachers = [
  {
    name: 'Citra, S.Pd.',
    role: 'Guru Kelas',
    image: '/placeholder.svg',
    description:
      'Guru lulusan Universitas Pendidikan Indonesia yang sudah memiliki sertifikasi untuk menjadi guru montessori, Berpengalaman dalam pendidikan montessori dan manajemen sekolah',
  },
  {
    name: 'Destian Nurfadli Hasan, S.Pd.',
    role: 'Guru Kelas',
    image: '/placeholder.svg',
    description:
      'Guru lulusan Universitas Pendidikan Indonesia yang sudah memiliki sertifikasi untuk menjadi guru montessori,Spesialis dalam pengembangan literasi dan numerasi anak usia dini.',
  },
  {
    name: 'Biben Nurbani Hasan,A.Md.T., S.T. ',
    role: 'Guru Kelas',
    image: '/placeholder.svg',
    description:
      'Guru lulusan Universitas Pasundan yang mahir dalam technology informasi dan algoritma, berpengalaman mengajarkan metode coding dalam pendidikan anak',
  },
  {
    name: 'Prof. Dr. B Lena Nuryanti Sastradinata, M.Pd.',
    role: 'Kepala Sekolah & Ketua Yayasan',
    image: '/placeholder.svg',
    description:
      'Professor dan Guru Besar dari Universitas Pendidikan Indonesia yang sudah lebih dari 15 tahun berpengalaman dalam mengelola sekolah serta yayasan',
  },
];

export default function TeachersPage() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <HeroSection
        title='Guru Montessori Kami'
        subtitle='Tim Pengajar Berpengalaman dan Berdedikasi'
        imageSrc='/assets/montessori-hero.gif'
      />

      <section className='py-16 bg-white'>
        <div className='container mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-12'>Profil Guru</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {teachers.map((teacher, index) => (
              <Card key={index} className='transition-all duration-300 hover:shadow-lg'>
                <CardContent className='p-6'>
                  <Image
                    src={teacher.image}
                    alt={teacher.name}
                    width={200}
                    height={200}
                    className='rounded-full mx-auto mb-4'
                  />
                  <h3 className='text-xl font-semibold text-center mb-2'>
                    {teacher.name}
                  </h3>
                  <p className='text-center text-gray-600 mb-4'>{teacher.role}</p>
                  <p className='text-center'>{teacher.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-12'>Filosofi Pengajaran</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
            <div>
              <p className='mb-4'>
                Guru-guru kami berperan sebagai fasilitator dalam proses pembelajaran
                anak. Mereka menciptakan lingkungan yang mendukung eksplorasi mandiri dan
                membantu anak-anak menemukan potensi unik mereka.
              </p>
              <p>Dengan pendekatan Montessori, guru-guru kami fokus pada:</p>
              <ul className='list-disc pl-5 mt-4 space-y-2'>
                <li>Mengamati dan memahami kebutuhan individual setiap anak</li>
                <li>Menyediakan bimbingan yang tepat tanpa terlalu banyak intervensi</li>
                <li>Mendorong kemandirian dan rasa tanggung jawab</li>
                <li>Menumbuhkan rasa ingin tahu dan cinta belajar seumur hidup</li>
              </ul>
            </div>
            <Image
              src='/assets/montessori/montessori2.jpg'
              alt='Guru Montessori sedang mengajar'
              width={500}
              height={300}
              className='rounded-lg shadow-md'
            />
          </div>
        </div>
      </section>

      <section className='py-16 bg-white'>
        <div className='container mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            Pengembangan Profesional
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <Card>
              <CardContent className='p-6'>
                <h3 className='text-xl font-semibold mb-4'>Pelatihan Berkelanjutan</h3>
                <p>
                  Guru-guru kami secara rutin mengikuti pelatihan dan workshop untuk
                  memperbarui pengetahuan dan keterampilan mereka dalam metode Montessori.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className='p-6'>
                <h3 className='text-xl font-semibold mb-4'>Kolaborasi Tim</h3>
                <p>
                  Kami mendorong kolaborasi antar guru untuk berbagi pengalaman, ide, dan
                  praktik terbaik dalam mengajar dengan metode Montessori.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className='p-6'>
                <h3 className='text-xl font-semibold mb-4'>Riset dan Inovasi</h3>
                <p>
                  Guru-guru kami aktif melakukan riset dan mengembangkan inovasi dalam
                  pendidikan Montessori, memastikan bahwa praktik pengajaran kami selalu
                  up-to-date dan efektif.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
