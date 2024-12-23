'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

export default function Classes() {
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

  const classes = [
    {
      name: 'Kelas Batita',
      age: '18 bulan - 3 tahun',
      description:
        'Kelas Batita kami dirancang untuk memperkenalkan anak-anak pada lingkungan sekolah dengan cara yang lembut dan menyenangkan. Fokus utama kami adalah pada pengembangan keterampilan motorik, bahasa, dan sosialisasi awal.',
      activities: [
        'Permainan sensorik',
        'Aktivitas musik dan gerakan',
        'Waktu cerita interaktif',
        'Permainan outdoor yang aman',
        'Pengenalan keterampilan hidup sehari-hari',
      ],
    },
    {
      name: 'Kelas Utama',
      age: '3 - 6 tahun',
      description:
        'Kelas Utama kami menerapkan kurikulum Montessori inti, memungkinkan anak-anak untuk mengeksplorasi dan belajar sesuai dengan minat dan kecepatan mereka sendiri. Kami fokus pada pengembangan kemandirian, konsentrasi, dan keterampilan akademik dasar.',
      activities: [
        'Aktivitas kehidupan praktis',
        'Latihan sensorik',
        'Pengenalan bahasa dan matematika',
        'Eksplorasi sains dan alam',
        'Seni dan kerajinan tangan',
      ],
    },
    {
      name: 'Taman Kanak-kanak',
      age: '5 - 6 tahun',
      description:
        'Program Taman Kanak-kanak kami mempersiapkan anak-anak untuk transisi ke sekolah dasar. Kami memperdalam pemahaman konsep akademik sambil terus mengembangkan keterampilan sosial dan emosional yang penting.',
      activities: [
        'Persiapan membaca dan menulis lanjutan',
        'Pengenalan matematika yang lebih kompleks',
        'Proyek sains hands-on',
        'Pengembangan keterampilan sosial dan kerja tim',
        'Pengenalan teknologi sederhana',
      ],
    },
  ];

  return (
    <section id='classes' className='py-16 px-6 bg-green-50'>
      <motion.h2
        className='text-3xl font-bold mb-8 text-center text-blue-600'
        variants={itemVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}>
        Kelas Kami
      </motion.h2>
      <motion.div
        className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}>
        {classes.map((cls, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card>
              <CardHeader>
                <CardTitle>{cls.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='font-semibold'>{cls.age}</p>
                <p className='text-gray-600'>{cls.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
