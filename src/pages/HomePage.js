import React from 'react';
import NavBar from '../components/NavBar';

export default function HomePage() {
  return (
    <div className="w-full h-full overflow-hidden flex flex-col">
      <NavBar />
      <img src="vessel.png" alt="home" />
    </div>
  );
}