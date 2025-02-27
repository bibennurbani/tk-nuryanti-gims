import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  const testimonials = await prisma.testimonial.findMany();
  return NextResponse.json(testimonials);
}
