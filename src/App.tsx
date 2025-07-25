import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import MediaServices from './components/MediaServices';
import ClientsProjects from './components/ClientsProjects';
import OurReach from './components/OurReach';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans overflow-x-hidden bg-white">
      <Header />
      <Hero />
      <About />
      <MediaServices />
      <ClientsProjects />
      <OurReach />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;