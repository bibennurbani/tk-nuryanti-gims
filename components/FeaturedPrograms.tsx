'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Music, Palette, Book } from 'lucide-react';
import Image from 'next/image';

const programs = [
  {
    title: 'Program Tahfidz',
    description: 'Menghafal Al-Quran dengan metode yang menyenangkan',
    icon: Book,
    color: 'bg-sunshine-yellow-300',
    image: '/tahfidz-program.jpg',
  },
  {
    title: 'Program Seni & Kreativitas',
    description: 'Mengembangkan bakat seni dan kreativitas anak',
    icon: Palette,
    color: 'bg-coral-pink-300',
    image: '/art-program.jpg',
  },
  {
    title: 'Program Musik & Gerak',
    description: 'Eksplorasi musik dan pengembangan motorik',
    icon: Music,
    color: 'bg-pastel-blue-300',
    image: '/music-program.jpg',
  },
  {
    title: 'Program Global Culture',
    description: 'Pengenalan budaya dan bahasa internasional',
    icon: Globe,
    color: 'bg-pastel-green-300',
    image: '/global-program.jpg',
  },
];

export function FeaturedPrograms() {
  return (
    <section className='py-20 bg-cream-50'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>Program Unggulan</h2>
          <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
            Kami menyediakan berbagai program unggulan yang dirancang khusus untuk
            mengembangkan potensi anak secara optimal dengan pendekatan Montessori yang
            terintegrasi dengan nilai-nilai Islam.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}>
              <Card className='group h-full hover:shadow-lg transition-all duration-300'>
                <CardHeader className={`${program.color} rounded-t-lg p-6`}>
                  <div className='relative w-full aspect-video rounded-lg overflow-hidden mb-4'>
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className='object-cover transition-transform duration-300 group-hover:scale-110'
                    />
                  </div>
                  <program.icon className='w-12 h-12 mb-4 mx-auto text-primary' />
                  <CardTitle className='text-center'>{program.title}</CardTitle>
                </CardHeader>
                <CardContent className='p-6'>
                  <p className='text-center text-gray-600'>{program.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
