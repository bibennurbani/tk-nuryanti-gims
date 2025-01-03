'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { RegistrationModal } from '@/components/RegistrationModal';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  imageSrc: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, imageSrc }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className='relative h-[600px]'>
      <Image src={imageSrc} alt='Hero Image' layout='fill' objectFit='cover' />
      <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
        <div className='text-center text-white'>
          <h1 className='text-4xl md:text-6xl font-bold mb-4'>{title}</h1>
          <p className='text-xl md:text-2xl mb-8'>{subtitle}</p>
          <Button
            size='lg'
            className='bg-pastel-blue-500 hover:bg-pastel-blue-600 text-white transition-all duration-300 transform hover:scale-105'
            onClick={() => setIsModalOpen(true)}>
            Daftar Sekarang!
          </Button>
        </div>
      </div>
      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default HeroSection;
