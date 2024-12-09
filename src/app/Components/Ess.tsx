import React from 'react';
import Image from 'next/image';
import Boy from "@/app/Assets/Boy.png"
const Ess = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-10 flex justify-between items-center">
                {/* Text Section */}
                <div >
                  <p className="text-black font-medium text-lg">Gear Up<br /><br /> </p>
                  <div className="flex justify-center items-center h-full">
                <Image 
                  src={Boy} 
                  alt="" 
                  className="  object-contain "  />
                </div>
                 
                  
                <div className="mt-4 px-4 md:px-20 text-center">
  {/* Heading */}
  <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-gray-900">
  FLIGHT ESSENTIALS
  </h1>
  
  {/* Subheading */}
  <p className="mt-4 text-black text-sm md:text-base leading-6 font-normal max-w-[90%] md:max-w-[70%] mx-auto">
  Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
  </p>
  
  {/* Button Section */}
  <div className="mt-8 flex justify-center">
    <button className="flex items-center gap-2 py-3 px-6 rounded-[24px] bg-black text-white hover:bg-gray-800">
      <span className="text-sm md:text-base font-medium">Shop</span>
    </button>
  </div></div>
</div>
                  </div>
    
  );
}

export default Ess;
