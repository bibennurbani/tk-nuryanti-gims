export function generateWhatsAppUrl(message: string): string {
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || process.env.WHATSAPP_NUMBER;
  const whatsappMessage = encodeURIComponent(message);
  return `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
}

export async function sendWhatsAppMessage(message: string) {
  try {
    const whatsappUrl = generateWhatsAppUrl(message);

    // For server-side, we just return the URL
    // The actual opening will happen on the client side
    return { success: true, url: whatsappUrl };
  } catch (error) {
    console.error('Error generating WhatsApp message:', error);
    throw new Error('Failed to generate WhatsApp message');
  }
}
