import React from 'react';
import NavBar from '../components/NavBar';
import About from '../components/About';
import SustainabilitySection from '../components/SustainabilitySection';
import ContactSection from '../components/ContactSection';

export default function HomePage() {
  return (
    <div className="w-full h-full overflow-hidden flex flex-col">
      <NavBar />
      <div className="w-full h-screen">
        <img src="vessel.png" alt="home" />
      </div>
      <About />
      <SustainabilitySection />
      <ContactSection />
    </div>
  );
}