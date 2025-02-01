import HeroSection from '@/components/HeroSection';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Games Montesorri',
  description: 'Games Montesorri di TK Nuryanti Global Islamic Montessori School',
};

const games = [
  {
    name: 'Puzzle Peta Dunia',
    image: '/assets/games/game-world-map.png',
    description:
      'Membantu anak belajar geografi sambil meningkatkan keterampilan motorik halus.',
    ageGroup: '4-6 tahun',
  },
  {
    name: 'Menara Warna',
    image: '/assets/games/game-color-tower.png',
    description: 'Mengajarkan konsep warna dan ukuran melalui permainan menyusun balok.',
    ageGroup: '2-4 tahun',
  },
  {
    name: 'Kartu Huruf Bergambar',
    image: '/assets/games/game-letter-cards.png',
    description: 'Mengenalkan huruf dan kosakata dengan cara yang menyenangkan.',
    ageGroup: '3-5 tahun',
  },
  {
    name: 'Papan Hitung',
    image: '/assets/games/game-counting-board.png',
    description: 'Mengajarkan konsep angka dan perhitungan dasar secara konkret.',
    ageGroup: '4-6 tahun',
  },
  {
    name: 'Botol Sensori',
    image: '/assets/games/game-sensory-bottles.png',
    description: 'Merangsang indera penglihatan dan pendengaran anak.',
    ageGroup: '1-3 tahun',
  },
  {
    name: 'Papan Jahit',
    image: '/assets/games/game-sewing-board.png',
    description: 'Melatih koordinasi mata-tangan dan konsentrasi.',
    ageGroup: '3-6 tahun',
  },
];

export default function GamesPage() {
  return (
    <div className='min-h-screen bg-cream-100'>
      <HeroSection
        title='Permainan Edukatif Montessori'
        subtitle='Belajar Sambil Bermain dengan Metode Montessori'
        imageSrc='/assets/montessori-hero.gif'
      />

      <section className='py-16 bg-white'>
        <div className='container mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            Koleksi Permainan Montessori
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {games.map((game, index) => (
              <Card key={index} className='transition-all duration-300 hover:shadow-lg'>
                <CardContent className='p-6'>
                  <Image
                    src={game.image}
                    alt={game.name}
                    width={300}
                    height={200}
                    className='rounded-lg mb-4'
                  />
                  <h3 className='text-xl font-semibold mb-2'>{game.name}</h3>
                  <p className='text-gray-600 mb-2'>Usia: {game.ageGroup}</p>
                  <p className='mb-4'>{game.description}</p>
                  <Button className='w-full'>Pelajari Lebih Lanjut</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className='py-16 bg-cream-100'>
        <div className='container mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            Manfaat Permainan Montessori
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <Card>
              <CardContent className='p-6'>
                <h3 className='text-xl font-semibold mb-4'>Pengembangan Kognitif</h3>
                <ul className='list-disc pl-5 space-y-2'>
                  <li>Meningkatkan kemampuan berpikir logis</li>
                  <li>Mengembangkan keterampilan pemecahan masalah</li>
                  <li>Merangsang kreativitas dan inovasi</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className='p-6'>
                <h3 className='text-xl font-semibold mb-4'>Pengembangan Motorik</h3>
                <ul className='list-disc pl-5 space-y-2'>
                  <li>Meningkatkan koordinasi mata-tangan</li>
                  <li>Mengembangkan keterampilan motorik halus</li>
                  <li>Melatih keseimbangan dan kontrol tubuh</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className='p-6'>
                <h3 className='text-xl font-semibold mb-4'>
                  Pengembangan Sosial-Emosional
                </h3>
                <ul className='list-disc pl-5 space-y-2'>
                  <li>Meningkatkan kemampuan berinteraksi</li>
                  <li>Mengembangkan empati dan kerja sama</li>
                  <li>Membangun kepercayaan diri</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className='p-6'>
                <h3 className='text-xl font-semibold mb-4'>Pengembangan Bahasa</h3>
                <ul className='list-disc pl-5 space-y-2'>
                  <li>Memperkaya kosakata</li>
                  <li>Meningkatkan kemampuan komunikasi</li>
                  <li>Mempersiapkan dasar untuk membaca dan menulis</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className='py-16 bg-white'>
        <div className='container mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-12'>Cara Bermain di Rumah</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
            <div>
              <p className='mb-4'>
                Anda dapat menerapkan prinsip-prinsip permainan Montessori di rumah untuk
                mendukung perkembangan anak Anda. Berikut beberapa tips:
              </p>
              <ul className='list-disc pl-5 space-y-2'>
                <li>Sediakan area bermain yang aman dan mudah diakses anak</li>
                <li>Pilih mainan yang sesuai dengan usia dan minat anak</li>
                <li>Biarkan anak memilih sendiri permainan yang ingin dimainkan</li>
                <li>Berikan waktu yang cukup untuk anak mengeksplorasi mainan</li>
                <li>Hindari intervensi yang tidak perlu, biarkan anak belajar mandiri</li>
                <li>Diskusikan pengalaman bermain dengan anak setelah selesai</li>
              </ul>
            </div>
            <Image
              src='/assets/montessori/montessori7.jpg'
              alt='Bermain Montessori di Rumah'
              width={500}
              height={300}
              className='rounded-lg shadow-md'
            />
          </div>
        </div>
      </section>
    </div>
  );
}
