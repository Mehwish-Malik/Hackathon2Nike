"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const State = () => {
  // Declare state for menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {/* Hamburger Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-black text-lg"
      >
        <GiHamburgerMenu />
      </button>

      {/* Conditional Rendering for Mobile Menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden bg-gray-100 p-4`}>
        <a href="#" className="block text-black py-2 hover:underline">
          Menu 
        <a href="#" className="block text-black py-2 hover:underline">
          Menu Item 2
        </a>
        <a href="#" className="block text-black py-2 hover:underline">
          Menu Item 3
        </a>
      </div>
    </div>
  );
};

export default State;

