'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Beranda' },
    { href: '/about', label: 'Tentang Kami' },
    { href: '/classes', label: 'Program' },
    { href: '/games', label: 'Aktivitas' },
    { href: '/teachers', label: 'Pengajar' },
    { href: '/contact', label: 'Kontak' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md h-[70px]'
          : 'bg-white/95 backdrop-blur-sm shadow-sm h-[80px]'
      }`}>
      <nav className='container mx-auto h-full px-4 flex items-center justify-between'>
        {/* Logo */}
        <Link href='/' className='flex items-center'>
          <Image
            src='/assets/logo/HORIZONTAL LOGO.png'
            alt='Nuryanti Global Islamic School Montessori'
            width={180}
            height={60}
            className='h-auto w-auto max-h-[60px]'
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className='hidden lg:flex items-center space-x-8'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='text-gray-700 hover:text-orange-500 font-medium text-base transition-colors duration-200 relative group'>
              {link.label}
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300'></span>
            </Link>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <Link
          href='/contact'
          className='hidden lg:block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-105'>
          Daftar Sekarang
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className='lg:hidden p-2 text-navy-700 hover:text-orange-500 focus:outline-none'
          aria-label='Toggle menu'>
          {isMobileMenuOpen ? (
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          ) : (
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-navy-800/95 backdrop-blur-sm transition-opacity duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        style={{ top: isScrolled ? '70px' : '80px' }}>
        <div className='container mx-auto px-4 py-8'>
          <div className='flex flex-col space-y-6'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className='text-white hover:text-orange-400 font-medium text-xl transition-colors duration-200 text-center py-2'>
                {link.label}
              </Link>
            ))}
            <Link
              href='/contact'
              onClick={() => setIsMobileMenuOpen(false)}
              className='bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-4 rounded-lg transition-all duration-200 text-center mt-4'>
              Daftar Sekarang
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
