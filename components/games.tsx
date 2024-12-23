'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

export default function Games() {
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

  const games = [
    {
      name: 'Permainan Sensorik',
      description:
        'Permainan sensorik membantu anak-anak mengembangkan dan mempertajam indera mereka. Aktivitas ini penting untuk perkembangan kognitif dan pemahaman dunia di sekitar mereka.',
      benefits: [
        'Meningkatkan koordinasi tangan-mata',
        'Mengembangkan kemampuan kategorisasi',
        'Memperkuat memori sensorik',
        'Mendorong eksplorasi dan kreativitas',
      ],
    },
    {
      name: 'Permainan Kehidupan Praktis',
      description:
        'Permainan kehidupan praktis membantu anak-anak belajar keterampilan sehari-hari yang penting. Aktivitas ini meningkatkan kemandirian dan kepercayaan diri anak.',
      benefits: [
        'Mengembangkan kemandirian',
        'Meningkatkan koordinasi motorik halus',
        'Membangun rasa tanggung jawab',
        'Meningkatkan konsentrasi',
      ],
    },
    {
      name: 'Permainan Bahasa',
      description:
        'Permainan bahasa membantu anak-anak mengembangkan keterampilan komunikasi mereka. Aktivitas ini mencakup berbagai aspek perkembangan bahasa, dari mendengarkan hingga berbicara dan persiapan membaca.',
      benefits: [
        'Memperkaya kosakata',
        'Meningkatkan kemampuan mendengarkan',
        'Mengembangkan keterampilan bercerita',
        'Mempersiapkan untuk membaca dan menulis',
      ],
    },
    {
      name: 'Permainan Matematika',
      description:
        'Permainan matematika memperkenalkan konsep matematika dasar kepada anak-anak dengan cara yang menyenangkan dan konkret. Aktivitas ini membangun dasar yang kuat untuk pemahaman matematika di masa depan.',
      benefits: [
        'Mengembangkan pemahaman angka',
        'Memperkenalkan konsep penjumlahan dan pengurangan',
        'Meningkatkan kemampuan pengenalan pola',
        'Mengembangkan pemikiran logis',
      ],
    },
  ];

  return (
    <section id='games' className='py-16 px-6 bg-yellow-50 text-center'>
      <motion.h2
        className='text-3xl font-bold mb-8 text-center text-blue-600'
        variants={itemVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}>
        Belajar Melalui Bermain
      </motion.h2>
      <motion.p
        className='text-xl mb-8 text-gray-600'
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}>
        Di TK Sinar Mentari, kami percaya bahwa bermain adalah cara terbaik bagi anak-anak
        untuk belajar. Melalui permainan, anak-anak mengembangkan keterampilan penting
        sambil bersenang-senang.
      </motion.p>
      <motion.div
        className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}>
        {games.map((game, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card>
              <CardHeader>
                <CardTitle>{game.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-gray-600'>{game.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
