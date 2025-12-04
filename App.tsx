
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import ShowAtmosphere from './components/ShowAtmosphere';
import Collective from './components/Collective';
import Contact from './components/Contact';
import WhyVisit from './components/WhyVisit';
import Tracklist from './components/Tracklist';
import Reward from './components/Reward';
import FAQ from './components/FAQ';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black selection:bg-brand-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Tracklist />
        <WhyVisit />
        <Timeline />
        <Gallery />
        <ShowAtmosphere />
        <Collective />
        <FAQ />
        <Reward />
        <Contact />
      </main>
    </div>
  );
};

export default App;
