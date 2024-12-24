import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='bg-pastel-green-500 text-white py-8'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap justify-between'>
          <div className='w-full md:w-1/3 mb-6 md:mb-0'>
            <h3 className='text-xl font-bold mb-2'>
              TK Nuryanti Global Islamic Montessori School
            </h3>
            <p>Mendidik anak-anak untuk menjadi pembelajar mandiri dan kreatif.</p>
          </div>
          <div className='w-full md:w-1/3 mb-6 md:mb-0'>
            <h4 className='text-lg font-semibold mb-2'>Tautan Cepat</h4>
            <ul className='space-y-2'>
              <li>
                <Link href='/' className='hover:text-pastel-blue-300'>
                  Beranda
                </Link>
              </li>
              <li>
                <Link href='/about' className='hover:text-pastel-blue-300'>
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href='/classes' className='hover:text-pastel-blue-300'>
                  Kelas
                </Link>
              </li>
              <li>
                <Link href='/games' className='hover:text-pastel-blue-300'>
                  Permainan
                </Link>
              </li>
              <li>
                <Link href='/teachers' className='hover:text-pastel-blue-300'>
                  Guru
                </Link>
              </li>
              <li>
                <Link href='/contact' className='hover:text-pastel-blue-300'>
                  Kontak
                </Link>
              </li>
            </ul>
          </div>
          <div className='w-full md:w-1/3'>
            <h4 className='text-lg font-semibold mb-2'>Hubungi Kami</h4>
            <p>Jl. Montessori No. 123, Jakarta</p>
            <p>Telepon: (021) 1234-5678</p>
            <p>Email: info@tknuryanti.com</p>
          </div>
        </div>
        <div className='mt-8 text-center'>
          <p>
            &copy; 2024 TK Nuryanti Global Islamic Montessori School. Hak Cipta
            Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
