'use server';

// import { createStudent } from '@/lib/db';
import {
  sendEmail,
  generateRegistrationEmailContent,
  generateConfirmationEmailContent,
} from '@/lib/email';
import { sendWhatsAppMessage } from '@/lib/whatsapp';

export async function registerStudent(formData: FormData) {
  const childName = formData.get('childName') as string;
  const parentName = formData.get('parentName') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const address = formData.get('address') as string;

  const studentData = { childName, parentName, email, phone, address };

  try {
    // Save student data to the database
    // await createStudent(studentData);

    // Generate email content
    const registrationEmailContent = generateRegistrationEmailContent(studentData);
    const confirmationEmailContent = generateConfirmationEmailContent(
      parentName,
      childName
    );

    // Generate WhatsApp URL (will be used on client side)
    const whatsappResult = await sendWhatsAppMessage(registrationEmailContent);

    // // Send email to registration team
    // await sendEmail(
    //   'registrasi@nuryantiislamicmontessori.com',
    //   'Pendaftaran Siswa Baru',
    //   registrationEmailContent
    // );

    // // Send confirmation email to parent/user
    // await sendEmail(
    //   email,
    //   'Terima Kasih atas Pendaftaran Anda',
    //   confirmationEmailContent
    // );

    return { success: true, whatsappUrl: whatsappResult.url };
  } catch (error) {
    console.error('Error processing registration:', error);
    return { success: false };
  }
}
