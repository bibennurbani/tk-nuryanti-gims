import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <header className='bg-pastel-green-500 p-4'>
      <nav className='container mx-auto flex flex-wrap justify-between items-center'>
        <Link href='/' className='flex items-center'>
          <Image src='/logo.jpg' alt='TK Nuryanti Logo' width={50} height={50} />
        </Link>
        <div className='flex flex-wrap space-x-4'>
          <Link href='/' className='text-white hover:text-pastel-blue-300'>
            Beranda
          </Link>
          <Link href='/about' className='text-white hover:text-pastel-blue-300'>
            Tentang Kami
          </Link>
          <Link href='/classes' className='text-white hover:text-pastel-blue-300'>
            Kelas
          </Link>
          <Link href='/games' className='text-white hover:text-pastel-blue-300'>
            Permainan
          </Link>
          <Link href='/teachers' className='text-white hover:text-pastel-blue-300'>
            Guru
          </Link>
          <Link href='/contact' className='text-white hover:text-pastel-blue-300'>
            Kontak
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
