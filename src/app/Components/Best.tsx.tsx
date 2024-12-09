import React from 'react';
import Image from 'next/image';
import Right from '@/app/Assets/Right.png'
import Left from "@/app/Assets/Left.png"
import Shoes from "@/app/Assets/Shoes.png"
import Run from "@/app/Assets/Run.png"
const Best = () => {
    return (
            <div className="bg-white font-['Helvetica Neue'] w-full h-screen relative ">
              {/* Top Section */}
              <div className="max-w-screen-xl mx-auto px-10 py-6 flex justify-between items-center relative top-[80px]">
                {/* Text Section */}
                <div >
                  <p className="text-black font-medium text-lg">Best of Air Max</p>
                </div>
                
                {/* Right Section */}
                <div className="flex items-center gap-4">
                  <button className="text-black font-medium text-sm ">Shop</button>
                  <div className="flex items-center gap-2">
                    <Image src={Left} alt="Left Arrow" className="w-6 h-6" />
                    <Image src={Right} alt="Right Arrow" className="w-6 h-6" />
                  </div>
                </div>
              </div>
          
              {/* Shoe Image */}
              <div className="flex justify-center items-center h-full">
                <Image 
                  src={Shoes} 
                  alt="Shoes" 
                  className="  object-contain" 
                />
              </div>
             
</div>
          );
          
      
    }
    export default Best