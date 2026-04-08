import React from 'react';
import { Hero } from '../components/Hero';
import { Skills } from '../components/Skills';
import { Stats } from '../components/Stats';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { WorkshopAnnouncement } from '../components/WorkshopAnnouncement';

export function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Stats />
      <Contact />
      <WorkshopAnnouncement />
      <Footer />
    </>
  );
}
