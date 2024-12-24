import HeroSection from '@/components/HeroSection';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className='min-h-screen bg-cream-100'>
      <HeroSection
        title='Hubungi Kami'
        subtitle='Kami Siap Membantu Anda'
        imageSrc='/contact-hero.jpg'
      />

      <section className='py-16 bg-white'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <Card>
              <CardContent className='p-6'>
                <h2 className='text-2xl font-bold mb-6'>Formulir Kontak</h2>
                <form>
                  <div className='mb-4'>
                    <label
                      htmlFor='name'
                      className='block text-sm font-medium text-gray-700 mb-1'>
                      Nama
                    </label>
                    <Input type='text' id='name' name='name' required />
                  </div>
                  <div className='mb-4'>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-gray-700 mb-1'>
                      Email
                    </label>
                    <Input type='email' id='email' name='email' required />
                  </div>
                  <div className='mb-4'>
                    <label
                      htmlFor='phone'
                      className='block text-sm font-medium text-gray-700 mb-1'>
                      Nomor Telepon
                    </label>
                    <Input type='tel' id='phone' name='phone' />
                  </div>
                  <div className='mb-4'>
                    <label
                      htmlFor='message'
                      className='block text-sm font-medium text-gray-700 mb-1'>
                      Pesan
                    </label>
                    <Textarea id='message' name='message' rows={4} required />
                  </div>
                  <Button type='submit' className='w-full'>
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>
            <Card>
              <CardContent className='p-6'>
                <h2 className='text-2xl font-bold mb-6'>Informasi Kontak</h2>
                <div className='space-y-4'>
                  <div className='flex items-start'>
                    <MapPin className='w-6 h-6 mr-2 text-pastel-green-500' />
                    <p>Jl. Teratai Mekar VIII no 27</p>
                  </div>
                  <div className='flex items-center'>
                    <Phone className='w-6 h-6 mr-2 text-pastel-green-500' />
                    <p>(62) 85721549005</p>
                  </div>
                  <div className='flex items-center'>
                    <Mail className='w-6 h-6 mr-2 text-pastel-green-500' />
                    <p>info@tknuryanti.com</p>
                  </div>
                  <div className='flex items-start'>
                    <Clock className='w-6 h-6 mr-2 text-pastel-green-500' />
                    <div>
                      <p>Senin - Jumat: 07:00 - 15:00</p>
                      <p>Sabtu: 08:00 - 12:00</p>
                      <p>Minggu: Tutup</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className='py-16 bg-cream-100'>
        <div className='container mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-12'>Lokasi Kami</h2>
          <div className='aspect-w-16 aspect-h-9'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7002574995245!2d107.69663047593384!3d-6.926387593073369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c2cc99fc8079%3A0x48ccc2041109c248!2sJl.%20Teratai%20Mekar%20VIII%20No.27%2C%20Mekar%20Mulya%2C%20Kec.%20Panyileukan%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040292!5e0!3m2!1sen!2sid!4v1735034223983!5m2!1sen!2sid'
              width='100%'
              height='450'
              style={{ border: 0 }}
              allowFullScreen
              loading='lazy'></iframe>
          </div>
        </div>
      </section>

      <section className='py-16 bg-white'>
        <div className='container mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-12'>Pertanyaan Umum</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <Card>
              <CardContent className='p-6'>
                <h3 className='text-xl font-semibold mb-4'>
                  Bagaimana cara mendaftarkan anak saya?
                </h3>
                <p>
                  Untuk mendaftarkan anak Anda, silakan isi formulir kontak di atas atau
                  hubungi kami langsung melalui telepon atau email. Kami akan menghubungi
                  Anda untuk memberikan informasi lebih lanjut tentang proses pendaftaran.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className='p-6'>
                <h3 className='text-xl font-semibold mb-4'>
                  Apa saja yang perlu disiapkan untuk hari pertama sekolah?
                </h3>
                <p>
                  Untuk hari pertama sekolah, pastikan anak Anda membawa tas sekolah,
                  botol minum, bekal makanan (jika diperlukan), dan pakaian ganti. Kami
                  akan memberikan daftar lengkap perlengkapan yang diperlukan saat
                  orientasi.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className='p-6'>
                <h3 className='text-xl font-semibold mb-4'>
                  Apakah ada program after school?
                </h3>
                <p>
                  Ya, kami menyediakan program after school untuk anak-anak yang
                  membutuhkan pengasuhan tambahan setelah jam sekolah reguler. Program ini
                  mencakup berbagai aktivitas edukatif dan kreatif.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className='p-6'>
                <h3 className='text-xl font-semibold mb-4'>
                  Bagaimana cara berkomunikasi dengan guru?
                </h3>
                <p>
                  Kami menyediakan berbagai cara untuk berkomunikasi dengan guru, termasuk
                  buku penghubung harian, pertemuan orang tua-guru yang dijadwalkan secara
                  rutin, dan platform komunikasi online. Anda juga dapat membuat janji
                  temu dengan guru jika diperlukan.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
