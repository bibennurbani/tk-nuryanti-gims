import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendEmail(to: string, subject: string, text: string) {
  try {
    await transporter.sendMail({
      from: process.env.ADMIN_EMAIL,
      to,
      subject,
      text,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
}

export function generateRegistrationEmailContent(formData: {
  childName: string;
  parentName: string;
  email: string;
  phone: string;
  address: string;
}) {
  return `
    Pendaftaran Siswa Baru:
    
    Nama Anak: ${formData.childName}
    Nama Orang Tua: ${formData.parentName}
    Email: ${formData.email}
    Nomor Telepon: ${formData.phone}
    Alamat: ${formData.address}
  `;
}

export function generateConfirmationEmailContent(parentName: string, childName: string) {
  return `
    Kepada Yth. ${parentName},

    Terima kasih telah mendaftarkan ${childName} di TK Nuryanti Global Islamic Montessori School.

    Kami telah menerima pendaftaran Anda dan sedang memproses data yang Anda berikan. Tim kami akan menghubungi Anda dalam waktu 2-3 hari kerja untuk informasi lebih lanjut mengenai proses pendaftaran.

    Jika Anda memiliki pertanyaan, jangan ragu untuk menghubungi kami di nomor telepon (62) 85721549005 atau membalas email ini.

    Terima kasih atas kepercayaan Anda kepada TK Nuryanti Global Islamic Montessori School.

    Salam,
    Tim Pendaftaran
    TK Nuryanti Global Islamic Montessori School
  `;
}
