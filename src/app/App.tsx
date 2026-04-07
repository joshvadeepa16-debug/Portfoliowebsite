import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Stats } from './components/Stats';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Skills />
      <Stats />
      <Contact />
      <Footer />
    </div>
  );
}
