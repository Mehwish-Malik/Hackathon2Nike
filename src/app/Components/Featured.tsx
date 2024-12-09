import React from 'react';
import Image from 'next/image';
import Run from "@/app/Assets/Run.png"
const Featured = () => {
  return (
    <div>
     <div className="max-w-screen-xl mx-auto px-10 flex justify-between items-center">
                {/* Text Section */}
                <div >
                  <p className="text-black font-medium text-lg">Featured <br /><br /> </p>
                  <div className="flex justify-center items-center h-full">
                <Image 
                  src={Run} 
                  alt="" 
                  className="  object-contain "  />
                </div>

                <div className="mt-4 px-4 md:px-20 text-center">
  {/* Heading */}
  <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-gray-900">
    STEP INTO WHAT FEELS GOOD
  </h1>
  
  {/* Subheading */}
  <p className="mt-4 text-black text-sm md:text-base leading-6 font-normal max-w-[90%] md:max-w-[70%] mx-auto">
    Cause everyone should know the feeling of running in that perfect pair.
  </p>
  
  {/* Button Section */}
  <div className="mt-8 flex justify-center">
    <button className="flex items-center gap-2 py-3 px-6 rounded-[24px] bg-black text-white hover:bg-gray-800">
      <span className="text-sm md:text-base font-medium">Find Your Shoe</span>
    </button>
  </div>
</div>
</div></div>
</div>
          );
          
      
    }
    export default Featured 

 