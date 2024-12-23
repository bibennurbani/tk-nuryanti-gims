import Hero from '@/components/hero';
import About from '@/components/about';
import Classes from '@/components/classes';
import Games from '@/components/games';
import Contact from '@/components/contact';
import Teachers from '@/components/teachers';

export default function Home() {
  return (
    <main className='min-h-screen bg-gradient-to-b from-blue-100 to-green-100'>
      <Hero />
      <About />
      <Classes />
      <Games />
      <Teachers />
      <Contact />
    </main>
  );
}
