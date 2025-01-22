import React from 'react';
import Link from 'next/link';
import { GrTwitter } from "react-icons/gr";
import { BsFacebook } from "react-icons/bs";
import { TfiYoutube } from "react-icons/tfi";
import { TiSocialInstagram } from "react-icons/ti";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-black text-white py-8 px-6">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mx-12">
        {/* Column 1 */}
        <div>
          <h3 className="text-sm font-semibold mb-4">FIND A STORE</h3>
          <ul className="space-y-2 text-sm text-[#7E7E7E]">
            <li><Link href="#" className="hover:underline">Become a Member</Link></li>
            <li><Link href="#" className="hover:underline">Sign Up for Email</Link></li>
            <li><Link href="#" className="hover:underline">Send Us Feedback</Link></li>
            <li><Link href="#" className="hover:underline">Student Discounts</Link></li>
           
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-sm font-semibold mb-4">GET HELP</h3>
          <ul className="space-y-2 text-sm text-[#7E7E7E]">
            <li><Link href="#" className="hover:underline">Order Status</Link></li>
            <li><Link href="#" className="hover:underline">Delivery</Link></li>
            <li><Link href="#" className="hover:underline">Returns</Link></li>
            <li><Link href="#" className="hover:underline">Payment Options</Link></li>
            <li><Link href="#" className="hover:underline">Contact Us on Nike.com</Link></li>
            <li><Link href="#" className="hover:underline">Contact Us on All Other Inquiries</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-sm font-semibold mb-4">ABOUT NIKE</h3>
          <ul className="space-y-2 text-sm text-[#7E7E7E]">
            <li><Link href="#" className="hover:underline">News</Link></li>
            <li><Link href="#" className="hover:underline">Careers</Link></li>
            <li><Link href="#" className="hover:underline">Investors</Link></li>
            <li><Link href="#" className="hover:underline">Sustainability</Link></li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4 ">
          <GrTwitter className="text-lg cursor-pointer hover:text-gray-400" />
          <BsFacebook className="text-lg cursor-pointer hover:text-gray-400" />
          <TfiYoutube className="text-lg cursor-pointer hover:text-gray-400" />
          <TiSocialInstagram className="text-lg cursor-pointer hover:text-gray-400" />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 flex flex-wrap justify-between items-center text-xs text-gray-400 border-t border-gray-700 pt-4">
        {/* Country and Copyright */}
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <IoLocationSharp />
          <span>India</span>
          <span>© 2023 Nike, Inc. All Rights Reserved</span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 pr-4">
          <Link href="#" className="hover:underline">Guides</Link>
          <Link href="#" className="hover:underline">Terms of Sale</Link>
          <Link href="#" className="hover:underline">Terms of Use</Link>
          <Link href="#" className="hover:underline">Nike Privacy Policy</Link>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
