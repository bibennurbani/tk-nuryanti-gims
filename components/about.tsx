'use client';

import { motion } from 'framer-motion';

export default function About() {
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

  const features = [
    {
      title: 'Lingkungan yang Ramah Anak',
      description:
        'Ruang kelas kami dirancang khusus untuk memenuhi kebutuhan anak-anak, dengan perabotan berukuran anak dan area aktivitas yang beragam.',
    },
    {
      title: 'Kurikulum Berbasis Permainan',
      description:
        'Kami percaya bahwa anak-anak belajar paling baik melalui permainan. Kurikulum kami menggabungkan pembelajaran dengan aktivitas yang menyenangkan dan menarik.',
    },
    {
      title: 'Guru yang Berpengalaman',
      description:
        'Tim pengajar kami terdiri dari profesional berpengalaman yang berdedikasi untuk mendukung perkembangan setiap anak.',
    },
    {
      title: 'Fokus pada Keterampilan Sosial',
      description:
        'Kami menekankan pentingnya keterampilan sosial dan emosional, membantu anak-anak belajar berempati, bekerja sama, dan menyelesaikan konflik.',
    },
  ];

  return (
    <section id='about' className='py-16 px-6 bg-white'>
      <motion.div
        className='max-w-4xl mx-auto'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}>
        <motion.h2
          variants={itemVariants}
          className='text-3xl font-bold mb-6 text-center text-blue-600'>
          Tentang TK
        </motion.h2>
        <motion.p variants={itemVariants} className='text-lg mb-4'>
          Deskripsi TK
        </motion.p>
        <motion.ul
          variants={containerVariants}
          className='list-disc list-inside space-y-2 text-gray-700'>
          {features.map((feature, index) => (
            <motion.li key={index} variants={itemVariants}>
              {feature.title}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
