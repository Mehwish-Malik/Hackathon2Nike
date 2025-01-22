"use client";
import React, { useState } from "react";
import Image from "next/image";
import men from "@/app/Assets/Frame (10).png";
import ofwhite from "@/app/Assets/Frame (6).png";
import blue from "@/app/Assets/Frame (12).png";
import darkblue from "@/app/Assets/Frame (20).png";

const GearUp = () => {
  const images = [men, ofwhite, blue, darkblue]; // Array of images
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the starting image index

  // Function to navigate to the previous set of images
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 3 : prevIndex - 1
    );
  };

  // Function to navigate to the next set of images
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= images.length - 3 ? 0 : prevIndex + 1
    );
  };

  // Determine the images to display
  const displayedImages = [
    images[currentIndex],
    images[(currentIndex + 1) % images.length],
    images[(currentIndex + 2) % images.length],
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center">
      {/* Title Section */}
      <p className="text-black font-medium text-2xl text-center mb-8">Gear Up</p>

      {/* Image Carousel */}
      <div className="relative flex items-center w-full max-w-4xl">
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          className="absolute left-0 p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition z-10"
        >
          ❮
        </button>

        {/* Images */}
        <div className="flex justify-center gap-6 mx-10 overflow-hidden">
          {displayedImages.map((img, index) => (
            <div
              key={index}
              className="relative w-[250px] h-[250px] flex-shrink-0 hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={img}
                alt={`Image ${index + 1}`}
                className="object-contain rounded-lg"
                width={250}
                height={250}
              />
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-0 p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition z-10"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default GearUp;
