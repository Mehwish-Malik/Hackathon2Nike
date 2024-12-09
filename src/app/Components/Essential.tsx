import React from 'react';
import Image from 'next/image';
import Essimg from "@/app/Assets/Essimg.png"
const Essential = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-10 flex justify-between items-center">
    {/* Text Section */}
    <div >
      <p className="text-black font-medium text-lg ">The Essentials<br /><br /> </p>
      <div className="flex justify-center items-center h-full">
    <Image 
      src={Essimg} 
      alt="" 
      className="  object-contain "  />
    </div>
    <div className="bg-white text-[#757575] py-8 px-6">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mx-8">
        {/* Column 1 */}
        <div>
          <h3 className="text-sm font-semibold mb-4 text-black ">Icons</h3>
          <ul className="space-y-2 text-sm text-[#757575]">
            <li><>Air Force 1</></li>
            <li><>Huarache</></li>
            <li><>Air Max 90</></li>
            <li><>Air Max 95</></li>
           
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-sm font-semibold mb-4  text-black">Shoes</h3>
          <ul className="space-y-2 text-sm text-[#757575]]">
            <li><>All Shoes</></li>
            <li><>Custom Shoes</></li>
            <li><>Returns</></li>
            <li><>Jordan Shoes</></li>
            <li><>Running Shoes</></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-sm font-semibold mb-4  text-black">Clothing</h3>
          <ul className="space-y-2 text-sm text-[#757575]">
          <li><>All Clothing</></li>
            <li><>Modest Wear</></li>
            <li><>Hoodies & Pullovers</></li>
            <li><>Shirts & Tops</></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-4  text-black">Kids'</h3>
          <ul className="space-y-2 text-sm text-[#757575]">
            <li><>Infant & Toddler Shoes</></li>
            <li><>Kids' Shoes</></li>
            <li><>Kids' Jordan Shoes</></li>
            <li><>Kids' Basketball Shoes</></li>
          </ul>
        </div>

     
      
      </div>
    </div>
      </div>
      </div>
  )
}

export default Essential;
