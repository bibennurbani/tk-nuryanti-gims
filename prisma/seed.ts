// const prisma = new PrismaClient();

// async function main() {
//   // Seed Programs
//   const programs = [
//     {
//       title: 'Program Tahfidz',
//       description: 'Menghafal Al-Quran dengan metode yang menyenangkan',
//       icon: 'Book',
//       color: 'bg-sunshine-yellow-300',
//       image: '/tahfidz-program.jpg',
//     },
//     {
//       title: 'Program Seni & Kreativitas',
//       description: 'Mengembangkan bakat seni dan kreativitas anak',
//       icon: 'Palette',
//       color: 'bg-coral-pink-300',
//       image: '/art-program.jpg',
//     },
//     {
//       title: 'Program Musik & Gerak',
//       description: 'Eksplorasi musik dan pengembangan motorik',
//       icon: 'Music',
//       color: 'bg-pastel-blue-300',
//       image: '/music-program.jpg',
//     },
//     {
//       title: 'Program Global Culture',
//       description: 'Pengenalan budaya dan bahasa internasional',
//       icon: 'Globe',
//       color: 'bg-pastel-green-300',
//       image: '/global-program.jpg',
//     },
//   ];

//   for (const program of programs) {
//     await prisma.program.create({ data: program });
//   }

//   // Seed Testimonials
//   const testimonials = [
//     {
//       name: 'Ibu Sarah',
//       role: 'Orang Tua Murid',
//       image: '/parent-1.jpg',
//       quote:
//         'Anak saya menjadi lebih mandiri dan percaya diri sejak bersekolah di sini. Metode Montessori yang dipadukan dengan nilai Islam sangat efektif.',
//     },
//     {
//       name: 'Bapak Ahmad',
//       role: 'Orang Tua Murid',
//       image: '/parent-2.jpg',
//       quote:
//         'Saya sangat terkesan dengan perkembangan anak saya dalam hal hafalan Al-Quran dan kemampuan berbahasa Inggris.',
//     },
//     {
//       name: 'Ibu Fatima',
//       role: 'Orang Tua Murid',
//       image: '/parent-3.jpg',
//       quote:
//         'Guru-guru yang profesional dan lingkungan pembelajaran yang mendukung membuat anak saya senang bersekolah setiap hari.',
//     },
//   ];

//   for (const testimonial of testimonials) {
//     await prisma.testimonial.create({ data: testimonial });
//   }

//   // Seed Statistics
//   const statistics = [
//     {
//       icon: 'Users',
//       value: '500+',
//       label: 'Lulusan',
//       color: 'text-primary',
//     },
//     {
//       icon: 'Award',
//       value: '15+',
//       label: 'Tahun Pengalaman',
//       color: 'text-secondary',
//     },
//     {
//       icon: 'School',
//       value: '20+',
//       label: 'Guru Bersertifikat',
//       color: 'text-accent',
//     },
//     {
//       icon: 'Calendar',
//       value: '6+',
//       label: 'Program Unggulan',
//       color: 'text-sunshine-yellow-500',
//     },
//   ];

//   for (const statistic of statistics) {
//     await prisma.statistic.create({ data: statistic });
//   }

//   // Seed Teachers
//   const teachers = [
//     {
//       name: 'Ibu Siti Nurhaliza',
//       role: 'Kepala Sekolah',
//       image: '/teacher-1.jpg',
//       description:
//         'Berpengalaman lebih dari 15 tahun dalam pendidikan Montessori dan manajemen sekolah.',
//     },
//     {
//       name: 'Bapak Ahmad Dahlan',
//       role: 'Guru Kelas TK B',
//       image: '/teacher-2.jpg',
//       description: 'Spesialis dalam pengembangan literasi dan numerasi anak usia dini.',
//     },
//     {
//       name: 'Ibu Ratna Sari',
//       role: 'Guru Kelas TK A',
//       image: '/teacher-3.jpg',
//       description:
//         'Ahli dalam metode Montessori untuk pengembangan sensorik dan motorik halus.',
//     },
//     {
//       name: 'Bapak Budi Santoso',
//       role: 'Guru Kelompok Bermain',
//       image: '/teacher-4.jpg',
//       description:
//         'Fokus pada pengembangan sosial-emosional dan adaptasi anak usia 2-3 tahun.',
//     },
//   ];

//   for (const teacher of teachers) {
//     await prisma.teacher.create({ data: teacher });
//   }

//   // Seed Games
//   const games = [
//     {
//       name: 'Puzzle Peta Dunia',
//       image: '/game-world-map.jpg',
//       description:
//         'Membantu anak belajar geografi sambil meningkatkan keterampilan motorik halus.',
//       ageGroup: '4-6 tahun',
//     },
//     {
//       name: 'Menara Warna',
//       image: '/game-color-tower.jpg',
//       description:
//         'Mengajarkan konsep warna dan ukuran melalui permainan menyusun balok.',
//       ageGroup: '2-4 tahun',
//     },
//     {
//       name: 'Kartu Huruf Bergambar',
//       image: '/game-letter-cards.jpg',
//       description: 'Mengenalkan huruf dan kosakata dengan cara yang menyenangkan.',
//       ageGroup: '3-5 tahun',
//     },
//     {
//       name: 'Papan Hitung',
//       image: '/game-counting-board.jpg',
//       description: 'Mengajarkan konsep angka dan perhitungan dasar secara konkret.',
//       ageGroup: '4-6 tahun',
//     },
//     {
//       name: 'Botol Sensori',
//       image: '/game-sensory-bottles.jpg',
//       description: 'Merangsang indera penglihatan dan pendengaran anak.',
//       ageGroup: '1-3 tahun',
//     },
//     {
//       name: 'Papan Jahit',
//       image: '/game-sewing-board.jpg',
//       description: 'Melatih koordinasi mata-tangan dan konsentrasi.',
//       ageGroup: '3-6 tahun',
//     },
//   ];

//   for (const game of games) {
//     await prisma.game.create({ data: game });
//   }

//   // Seed FAQs
//   const faqs = [
//     {
//       question: 'Bagaimana cara mendaftarkan anak saya?',
//       answer:
//         'Untuk mendaftarkan anak Anda, silakan isi formulir kontak di atas atau hubungi kami langsung melalui telepon atau email. Kami akan menghubungi Anda untuk memberikan informasi lebih lanjut tentang proses pendaftaran.',
//     },
//     {
//       question: 'Apa saja yang perlu disiapkan untuk hari pertama sekolah?',
//       answer:
//         'Untuk hari pertama sekolah, pastikan anak Anda membawa tas sekolah, botol minum, bekal makanan (jika diperlukan), dan pakaian ganti. Kami akan memberikan daftar lengkap perlengkapan yang diperlukan saat orientasi.',
//     },
//     {
//       question: 'Apakah ada program after school?',
//       answer:
//         'Ya, kami menyediakan program after school untuk anak-anak yang membutuhkan pengasuhan tambahan setelah jam sekolah reguler. Program ini mencakup berbagai aktivitas edukatif dan kreatif.',
//     },
//     {
//       question: 'Bagaimana cara berkomunikasi dengan guru?',
//       answer:
//         'Kami menyediakan berbagai cara untuk berkomunikasi dengan guru, termasuk buku penghubung harian, pertemuan orang tua-guru yang dijadwalkan secara rutin, dan platform komunikasi online. Anda juga dapat membuat janji temu dengan guru jika diperlukan.',
//     },
//   ];

//   for (const faq of faqs) {
//     await prisma.fAQ.create({ data: faq });
//   }

//   console.log('Seeding completed.');
// }

// main()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
