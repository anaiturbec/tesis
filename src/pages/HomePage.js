import React from 'react';
import NavBar from '../components/NavBar';
import About from '../components/About';
import SustainabilitySection from '../components/SustainabilitySection';

export default function HomePage() {
  return (
    <div className="w-full h-full overflow-hidden flex flex-col">
      <NavBar />
      <div className="w-full h-screen">
        <img src="vessel.png" alt="home" />
      </div>
      <About />
      <SustainabilitySection />
    </div>
  );
}