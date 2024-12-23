'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion } from 'framer-motion';

const teachers = [
  { name: 'Ms. Sarah', role: 'Lead Teacher', image: '/placeholder.svg' },
  { name: 'Mr. John', role: 'Assistant Teacher', image: '/placeholder.svg' },
  { name: 'Ms. Emily', role: 'Montessori Specialist', image: '/placeholder.svg' },
];

export default function Teachers() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id='teachers' className='py-16 px-6 bg-pink-50'>
      <motion.h2
        className='text-3xl font-bold mb-8 text-center text-blue-600'
        variants={itemVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}>
        Guru Kami
      </motion.h2>
      <motion.div
        className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}>
        {teachers.map((teacher) => (
          <motion.div key={teacher.name} variants={itemVariants}>
            <Card className='text-center'>
              <CardHeader>
                <Avatar className='w-24 h-24 mx-auto'>
                  <AvatarImage src={teacher.image} alt={teacher.name} />
                  <AvatarFallback>{teacher.name[0]}</AvatarFallback>
                </Avatar>
                <CardTitle>{teacher.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-gray-600'>{teacher.role}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
