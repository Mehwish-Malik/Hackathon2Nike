import React from 'react';
import Image from 'next/image';
import Firstimg from "@/app/Assets/Firstimg.png"
import Nike from "@/app/Assets/Nike.png"
import Link from "next/link";

import { FaRegHeart } from "react-icons/fa";
import Bag from "@/app/Assets/bag.png"
import { GiHamburgerMenu } from "react-icons/gi";

import Logo from "@/app/Assets/Logo.png"
const Navbar = () => {
  return (
<div>
        <header className="bg-[#F5F5F5] border-b font-[Helvetica Neue] flex justify-between items-center px-10 py-2">
          {/* Logo Section */}
          <Image src={Firstimg} alt="Logo" className="w-[50px]" />
    
          {/* Links Section */}
          <nav>
            <ul className="flex items-center space-x-3 text-black text-[11px] font-medium">
              <li>
                <Link href="/Store">Find a Store</Link>
              </li>
              <span className="h-[14px] w-px bg-gray-400" />
              <li>
                <Link href="/Help">Help</Link>
              </li>
              <span className="h-[14px] w-px bg-gray-400" />
              <li>
                <Link href="/Join">Join Us</Link>
              </li>
              <span className="h-[14px] w-px bg-gray-400" />
              <li>
                <Link href="/Login">Sign In</Link>
              </li>
            </ul>
          </nav>
      </header>
      {/* Main navbar */}
    
    <header className="bg-white border-b shadow-sm">
      {/* Main Navbar */}
      <div className="flex justify-between items-center px-4 md:px-8 py-2">
        {/* Logo */}
        <Image src={Nike} alt="Logo" className="w-[60px]" />

        {/* Navigation Links (hidden on mobile) */}
        <nav className="hidden md:flex space-x-6 items-center font-medium">
          <Link href="/Products" className="text-black hover:underline">
            New & Featured
          </Link>
          <Link href="#" className="text-black hover:underline">
            Men
          </Link>
          <Link href="#" className="text-black hover:underline">
            Women
          </Link>
          <Link href="#" className="text-black hover:underline">
            Kids
          </Link>
          <Link href="#" className="text-black hover:underline">
            SNKRS
          </Link>
        </nav>

        {/* Search and Icons */}
        <div className="flex items-center space-x-4">
          {/* Search Bar (hidden on small screens) */}
          <div className="hidden lg:flex items-center bg-slate-100 rounded-full px-3 py-1">
           
               <input 
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-sm flex-grow pl-2"
            /> 
              <button className="relative right-0 sm:right-10">
             <svg
              className="pl-2 block text-gray-400"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_20)">
                <path
                  d="M13.962 16.296C12.916 16.9224 11.7192 17.2521 10.5 17.25C9.6134 17.2512 8.7353 17.0772 7.91618 16.7379C7.09707 16.3986 6.35308 15.9008 5.72701 15.273C5.09924 14.6469 4.6014 13.9029 4.26212 13.0838C3.92284 12.2647 3.7488 11.3866 3.75001 10.5C3.75001 8.63601 4.50501 6.94901 5.72701 5.72701C6.35308 5.09924 7.09707 4.6014 7.91618 4.26212C8.7353 3.92284 9.6134 3.7488 10.5 3.75001C12.364 3.75001 14.051 4.50501 15.273 5.72701C15.9008 6.35308 16.3986 7.09707 16.7379 7.91618C17.0772 8.7353 17.2512 9.6134 17.25 10.5C17.2517 11.6974 16.9338 12.8736 16.329 13.907C15.812 14.789 15.895 15.895 16.618 16.618L20.471 20.471"
                  stroke="#111111"
                  strokeWidth="1.5"
                />
              </g> 
              <defs>
                <clipPath id="clip0_1_20">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>  
          </div>

          {/* Icons */}
          <FaRegHeart className="text-black text-lg" />
       <Link  href="/Cart" > <Image src={Bag} alt="Bag Icon" className="w-6 h-6"  /></Link>
        </div>

        {/* Mobile Menu (visible only on small screens) */}
        <button className="md:hidden text-black text-lg">
       Menu   <GiHamburgerMenu />
      
        </button> 
      </div>

      {/* Mobile Navigation Drawer */}
      <div className="md:hidden bg-white w-full px-4 py-3 hidden" id="mobile-menu">
        <Link href="/Products" className=" text-black py-1 hover:underline">
          New & Featured
        </Link>
        <Link href="#" className="block text-black py-1 hover:underline">
          Men
        </Link>
        <Link href="#" className="block text-black py-1 hover:underline">
          Women
        </Link>
        <Link href="#" className="block text-black py-1 hover:underline">
          Kids
        </Link>
        <Link href="#" className="block text-black py-1 hover:underline">
          SNKRS
        </Link>
      </div>
    </header>
    </div>
  )
};

    export default Navbar;
    