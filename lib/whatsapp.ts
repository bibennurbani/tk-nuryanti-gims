export async function sendWhatsAppMessage(message: string) {
  try {
    const whatsappNumber = process.env.WHATSAPP_NUMBER;
    const whatsappMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`;
    await fetch(whatsappUrl);
  } catch (error) {
    console.error('Error sending WhatsApp message:', error);
    throw new Error('Failed to send WhatsApp message');
  }
}
