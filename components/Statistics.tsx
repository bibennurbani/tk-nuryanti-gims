'use client';

import { motion } from 'framer-motion';
import { Users, Award, School, Calendar } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '500+',
    label: 'Lulusan',
    color: 'text-primary',
  },
  {
    icon: Award,
    value: '15+',
    label: 'Tahun Pengalaman',
    color: 'text-secondary',
  },
  {
    icon: School,
    value: '20+',
    label: 'Guru Bersertifikat',
    color: 'text-accent',
  },
  {
    icon: Calendar,
    value: '6+',
    label: 'Program Unggulan',
    color: 'text-sunshine-yellow-500',
  },
];

export function Statistics() {
  return (
    <section className='py-20 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className='text-center'>
              <div className='mb-4 flex justify-center'>
                <stat.icon className={`w-12 h-12 ${stat.color}`} />
              </div>
              <h3 className='text-3xl font-bold mb-2'>{stat.value}</h3>
              <p className='text-gray-600'>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
