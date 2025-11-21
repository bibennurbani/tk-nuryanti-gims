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
    <section className='relative h-[700px] md:h-[600px] overflow-hidden'>
      <Image src={imageSrc} alt='Hero Image' fill className='object-cover' priority />
      <div className='absolute inset-0 gradient-primary opacity-90'></div>
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center text-white'>
            <h1 className='text-4xl md:text-6xl font-bold mb-6 font-heading text-shadow-lg leading-tight'>
              {title}
            </h1>
            <p className='text-xl md:text-3xl mb-8 font-medium text-shadow-md'>
              {subtitle}
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
              <Button
                size='lg'
                className='bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-6 text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105'
                onClick={() => setIsModalOpen(true)}>
                Daftar Sekarang!
              </Button>
              <Button
                size='lg'
                variant='outline'
                className='border-2 border-white bg-transparent text-white hover:bg-white hover:text-navy-800 font-semibold px-8 py-6 text-lg rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105'>
                Lihat Program
              </Button>
            </div>
          </div>
        </div>
      </div>
      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default HeroSection;
