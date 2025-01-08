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

    // Send email to registration team
    await sendEmail(
      'registrasi@nuryantiislamicmontessori.com',
      'Pendaftaran Siswa Baru',
      registrationEmailContent
    );

    // Send confirmation email to parent/user
    await sendEmail(
      email,
      'Terima Kasih atas Pendaftaran Anda',
      confirmationEmailContent
    );

    // Send WhatsApp message
    await sendWhatsAppMessage(registrationEmailContent);

    return { success: true };
  } catch (error) {
    console.error('Error processing registration:', error);
    return { success: false };
  }
}
