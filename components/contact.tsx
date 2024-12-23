'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your server
    console.log({ name, email, message });
    toast({
      title: 'Message Sent!',
      description: "We'll get back to you soon.",
    });
    setName('');
    setEmail('');
    setMessage('');
  };

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
    <section id='contact' className='py-16 px-6 bg-blue-50'>
      <motion.div
        className='max-w-md mx-auto'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}>
        <motion.h2
          variants={itemVariants}
          className='text-3xl font-bold mb-6 text-center text-blue-600'>
          TITLE
        </motion.h2>
        <motion.form
          variants={containerVariants}
          onSubmit={handleSubmit}
          className='space-y-4'>
          <motion.div variants={itemVariants}>
            <Input
              type='text'
              placeholder='Nama'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Input
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Textarea
              placeholder='Message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Button type='submit' className='w-full'>
              Kirim
            </Button>
          </motion.div>
        </motion.form>
        <motion.div variants={containerVariants} className='mt-8 text-center'>
          <motion.p variants={itemVariants} className='mb-2'>
            Atau
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button variant='outline' className='mr-2' asChild>
              <a href='mailto:info@sunshinekindergarten.com'>Contact Via Email</a>
            </Button>
            <Button variant='outline' asChild>
              <a
                href='https://wa.me/1234567890'
                target='_blank'
                rel='noopener noreferrer'>
                Contact Via Whatsapp
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
