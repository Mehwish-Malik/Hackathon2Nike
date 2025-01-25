import React from 'react';
import Image from 'next/image';
import Firstimg from '@/app/Assets/Firstimg.png';
import Nike from '@/app/Assets/Nike.png';
import Link from 'next/link';
import { FaRegHeart } from 'react-icons/fa';
import { FiShoppingBag } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import ProductSearch from './Productsearch';

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

      {/* Main Navbar */}
      <header className="bg-white border-b shadow-sm">
        <div className="flex justify-between items-center px-4 md:px-8 py-2">
          {/* Logo */}
          <Link href="/">
          <Image src={Nike} alt="Logo" className="w-[60px]" /></Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-6 items-center font-medium">
            <Link href="/NewProducts" className="text-black hover:underline">
              New & Featured
            </Link>
            <Link href="/NewProducts" className="text-black hover:underline">
              Men
            </Link>
            <Link href="#" className="text-black hover:underline">
              Women
            </Link>
            <Link href="#" className="text-black hover:underline">
              Kids
            </Link>
            <Link href="NewProducts" className="text-black hover:underline">
              SNKRS
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="flex items-center space-x-4">
            <ProductSearch />
            
            
            <Link href="/Wishlist">
            <FaRegHeart className="text-black text-lg" />  </Link>
            <Link href="/Cart">
              <FiShoppingBag /></Link>
          
          </div>

          {/* Mobile Menu */}
          <button className="md:hidden text-black text-lg">
            Menu <GiHamburgerMenu />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
