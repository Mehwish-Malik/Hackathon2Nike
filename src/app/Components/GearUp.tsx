import React from 'react';
import Image from 'next/image';
import Gear from "@/app/Assets/Gear.png"
const GearUp = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-10 flex justify-between items-center">
                {/* Text Section */}
                <div >
                  <p className="text-black font-medium text-lg">Gear Up<br /><br /> </p>
                  <div className="flex justify-center items-center h-full">
                <Image 
                  src={Gear} 
                  alt="" 
                  className="  object-contain "  />
                </div>
                  </div>
                  </div>
    
  );
}

export default GearUp;
