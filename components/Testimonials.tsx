'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Ibu Sarah',
    role: 'Orang Tua Murid',
    image: '/parent-1.jpg',
    quote:
      'Anak saya menjadi lebih mandiri dan percaya diri sejak bersekolah di sini. Metode Montessori yang dipadukan dengan nilai Islam sangat efektif.',
  },
  {
    name: 'Bapak Ahmad',
    role: 'Orang Tua Murid',
    image: '/parent-2.jpg',
    quote:
      'Saya sangat terkesan dengan perkembangan anak saya dalam hal hafalan Al-Quran dan kemampuan berbahasa Inggris.',
  },
  {
    name: 'Ibu Fatima',
    role: 'Orang Tua Murid',
    image: '/parent-3.jpg',
    quote:
      'Guru-guru yang profesional dan lingkungan pembelajaran yang mendukung membuat anak saya senang bersekolah setiap hari.',
  },
];

export function Testimonials() {
  return (
    <section className='py-20 gradient-primary'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>Testimoni Orang Tua</h2>
          <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
            Dengarkan pengalaman langsung dari para orang tua yang telah mempercayakan
            pendidikan anak-anak mereka kepada TK Nuryanti Global Islamic Montessori
            School.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}>
              <Card className='h-full hover:shadow-lg transition-all duration-300'>
                <CardContent className='p-8'>
                  <Quote className='w-12 h-12 text-primary mb-6' />
                  <p className='text-gray-600 mb-6 italic'>
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className='flex items-center'>
                    <div className='relative w-12 h-12 rounded-full overflow-hidden mr-4'>
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className='object-cover'
                      />
                    </div>
                    <div>
                      <h4 className='font-semibold'>{testimonial.name}</h4>
                      <p className='text-sm text-gray-500'>{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
