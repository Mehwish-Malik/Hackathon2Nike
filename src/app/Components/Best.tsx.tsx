"use client";
import React, { useState } from "react";
import Image from "next/image";
import Right from "@/app/Assets/Right.png";
import Left from "@/app/Assets/Left.png";
import sneaker from "@/app/Assets/Frame (3).png";
import nike from "@/app/Assets/Frame (4).png";
import standout from "@/app/Assets/Frame (5).png";

import best from "@/app/Assets/Frame (7).png";
import awsum from "@/app/Assets/Frame (8).png";
import shoe from "@/app/Assets/Frame (9).png";

import bestt from "@/app/Assets/Frame (11).png";
import Link from "next/link";

const Best = () => {
  // Array of images
  const images = [
    sneaker,
    nike,
    standout,
    
    best,
    awsum,
    shoe,
    
    bestt,
  ];

  // State to track the current start index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to navigate to the previous set of images
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 3 : prevIndex - 1
    );
  };

  // Function to navigate to the next set of images
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 3 ? 0 : prevIndex + 1
    );
  };

  // Determine the images to display
  const displayedImages = [
    images[currentIndex],
    images[(currentIndex + 1) % images.length],
    images[(currentIndex + 2) % images.length],
  ];

  return (
    <div className="bg-white font-['Helvetica Neue'] w-full min-h-screen relative">
      {/* Top Section */}
      <div className="max-w-screen-xl mx-auto px-4 py-6 flex justify-between items-center relative top-[80px]">
        {/* Text Section */}
        <div>
          <p className="text-black font-medium text-lg">Best of Air Max</p>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <Link href="/NewProducts">
          <button className="text-black font-medium text-sm">Shop</button></Link>
          <div className="flex items-center gap-2">
            
            <button onClick={handlePrevious}>
              <Image src={Left} alt="Left Arrow" className="w-8 h-8" />
            </button>
            <button onClick={handleNext}>
              <Image src={Right} alt="Right Arrow" className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="flex justify-center items-center gap-8 px-4">
        {displayedImages.map((img, index) => (
          <div key={index} className="flex-shrink-0">
            <Image
              src={img}
              alt={`Image ${currentIndex + index + 1}`}
              className="object-contain"
              width={400}
              height={400}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Best;
