import React from 'react';
import Navbar from './Components/Navbar'; 
import Hero from './Components/Hero';
import GearUp from './Components/GearUp';
import Best from './Components/Best.tsx';
import Featured from './Components/Featured';
import Ess from './Components/Ess';
import Footer from './Components/Footer';
import Essential from './Components/Essential';
const page = () => {
  return (
    <div>
      
      <Hero />
      <Best />
    <Featured />
    <GearUp />
    <Ess />
    <Essential />
   
    </div>
  );
}

export default page;
