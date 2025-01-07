'use server';

import nodemailer from 'nodemailer';
import prisma from '@/lib/prisma';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const adminEmail = process.env.ADMIN_EMAIL;
const whatsappNumber = process.env.WHATSAPP_NUMBER;

export async function registerStudent(formData: FormData) {
  const childName = formData.get('childName') as string;
  const parentName = formData.get('parentName') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const address = formData.get('address') as string;

  const emailContent = `
    Pendaftaran Siswa Baru:
    
    Nama Anak: ${childName}
    Nama Orang Tua: ${parentName}
    Email: ${email}
    Nomor Telepon: ${phone}
    Alamat: ${address}
  `;

  try {
    // Save student data to the database
    await prisma.student.create({
      data: {
        childName,
        parentName,
        email,
        phone,
        address,
      },
    });

    // Send email to registration team
    await transporter.sendMail({
      from: adminEmail,
      to: 'registration@nuryantiislamicmontessori.com',
      subject: 'Pendaftaran Siswa Baru',
      text: emailContent,
    });

    // Send confirmation email to parent/user
    await transporter.sendMail({
      from: adminEmail,
      to: email,
      subject: 'Terima Kasih atas Pendaftaran Anda',
      text: `
        Kepada Yth. ${parentName},

        Terima kasih telah mendaftarkan ${childName} di TK Nuryanti Global Islamic Montessori School.

        Kami telah menerima pendaftaran Anda dan sedang memproses data yang Anda berikan. Tim kami akan menghubungi Anda dalam waktu 2-3 hari kerja untuk informasi lebih lanjut mengenai proses pendaftaran.

        Jika Anda memiliki pertanyaan, jangan ragu untuk menghubungi kami di nomor telepon (62) 85721549005 atau membalas email ini.

        Terima kasih atas kepercayaan Anda kepada TK Nuryanti Global Islamic Montessori School.

        Salam,
        Tim Pendaftaran
        Nuryanti Global Islamic Montessori School
      `,
    });

    // Send WhatsApp message
    const whatsappMessage = encodeURIComponent(emailContent);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`;
    await fetch(whatsappUrl);

    return { success: true };
  } catch (error) {
    console.error('Error processing registration:', error);
    return { success: false };
  }
}
