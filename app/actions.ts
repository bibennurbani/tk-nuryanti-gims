'use server';

import nodemailer from 'nodemailer';

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
  const childName = formData.get('childName');
  const parentName = formData.get('parentName');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const address = formData.get('address');

  const emailContent = `
    Pendaftaran Siswa Baru:
    
    Nama Anak: ${childName}
    Nama Orang Tua: ${parentName}
    Email: ${email}
    Nomor Telepon: ${phone}
    Alamat: ${address}
  `;

  try {
    // Send email
    await transporter.sendMail({
      from: adminEmail,
      to: [email as string, 'registration@nuryantiislamicmontessori.com'],
      subject: 'Pendaftaran Siswa Baru',
      text: emailContent,
    });

    // Send WhatsApp message
    const whatsappMessage = encodeURIComponent(emailContent);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`;
    await fetch(whatsappUrl);

    return { success: true };
  } catch (error) {
    console.error('Error sending registration:', error);
    return { success: false };
  }
}
