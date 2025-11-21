import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='bg-navy-900 text-white py-12'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-8'>
          {/* Logo and Description */}
          <div className='md:col-span-2'>
            <Image
              src='/assets/logo/HORIZONTAL LOGO.png'
              alt='Nuryanti Global Islamic School Montessori'
              width={200}
              height={60}
              className='mb-4 brightness-0 invert'
            />
            <h3 className='text-xl font-semibold mb-3 font-heading'>
              TK Nuryanti Global Islamic Montessori School
            </h3>
            <p className='text-gray-300 leading-relaxed max-w-md'>
              Mendidik anak-anak untuk menjadi pembelajar mandiri, kreatif, dan berakhlak
              mulia dengan metode Montessori Islami.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-lg font-semibold mb-4 font-heading text-orange-400'>
              Tautan Cepat
            </h4>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/'
                  className='text-gray-300 hover:text-orange-400 transition-colors duration-200'>
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className='text-gray-300 hover:text-orange-400 transition-colors duration-200'>
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href='/classes'
                  className='text-gray-300 hover:text-orange-400 transition-colors duration-200'>
                  Program
                </Link>
              </li>
              <li>
                <Link
                  href='/games'
                  className='text-gray-300 hover:text-orange-400 transition-colors duration-200'>
                  Aktivitas
                </Link>
              </li>
              <li>
                <Link
                  href='/teachers'
                  className='text-gray-300 hover:text-orange-400 transition-colors duration-200'>
                  Pengajar
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='text-gray-300 hover:text-orange-400 transition-colors duration-200'>
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className='text-lg font-semibold mb-4 font-heading text-orange-400'>
              Hubungi Kami
            </h4>
            <div className='space-y-3 text-gray-300'>
              <p className='leading-relaxed'>
                Jl. Teratai Mekar VIII No.27
                <br />
                Mekar Mulya, Kec. Panyileukan
                <br />
                Kota Bandung, Jawa Barat 40614
              </p>
              <p>
                <span className='text-orange-400'>Telepon:</span> 6285819900061
              </p>
              <p>
                <span className='text-orange-400'>Email:</span>{' '}
                admin@nuryantiislamicmontessori.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-gray-700 pt-6 mt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            <p className='text-gray-400 text-sm text-center md:text-left'>
              &copy; {new Date().getFullYear()} TK Nuryanti Global Islamic Montessori
              School. Hak Cipta Dilindungi.
            </p>
            <div className='flex space-x-6'>
              <Link
                href='https://www.tiktok.com/@nuryantimontessori'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-400 hover:text-orange-400 transition-colors duration-200'>
                TikTok
              </Link>
              <Link
                href='https://www.instagram.com/nuryantimontessori'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-400 hover:text-orange-400 transition-colors duration-200'>
                Instagram
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
