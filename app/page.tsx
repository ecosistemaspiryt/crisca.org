import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Process } from '@/components/sections/Process';
import { Impact } from '@/components/sections/Impact';
import { Participate } from '@/components/sections/Participate';
import { Testimonials } from '@/components/sections/Testimonials';
import { Inspiration } from '@/components/sections/Inspiration';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Header />

      <main className="flex-1">
        <Hero />
        <About />
        <Process />
        <Impact />
        <Participate />
        <Testimonials />
        <Inspiration />
      </main>

      <Footer />
    </div>
  );
}
