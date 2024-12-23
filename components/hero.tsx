'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className='py-24 px-6 text-center'>
      <motion.h1
        className='text-5xl font-bold mb-6 text-blue-600'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        Selamat Datang di TK
      </motion.h1>
      <motion.p
        className='text-xl mb-8 text-gray-600'
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}>
        Di mana pikiran kecil tumbuh dan berkembang!
      </motion.p>
      <motion.div
        className='space-x-4'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}>
        <Button asChild>
          <Link href='#contact'>Enroll</Link>
        </Button>
        <Button variant='outline' asChild>
          <Link href='#about'>Learn More</Link>
        </Button>
      </motion.div>
    </section>
  );
}
