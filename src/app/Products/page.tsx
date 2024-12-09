import Link from "next/link";
import { IoIosArrowUp } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";

import Image from "next/image";
import Hide from "@/app/Assets/hide.png"
import White from "@/app/Assets/Frame (4).png"
import Black from "@/app/Assets/Frame (3).png"
import Pink from "@/app/Assets/Frame (5).png"
import Grey from "@/app/Assets/Frame (8).png"
import Litgrey from "@/app/Assets/Frame (7).png"
import Skin from "@/app/Assets/Frame (6).png"
import Ofwhite from "@/app/Assets/Frame (9).png"
import Shirt from "@/app/Assets/Frame (10).png"
import Blshirt from "@/app/Assets/Frame (12).png"
import girl from "@/app/Assets/Frame (13).png"
import Red from "@/app/Assets/Frame (14).png"
import Green from "@/app/Assets/Frame (11).png"
import Purple from "@/app/Assets/Frame (15).png"
import Litgren from "@/app/Assets/Frame (16).png"
import Man from "@/app/Assets/Frame (17).png"


import Multi from "@/app/Assets/Frame (18).png"
import Fulwhite from "@/app/Assets/Frame (19).png"
import DBshirt from "@/app/Assets/Frame (20).png"
import Rwhite from "@/app/Assets/Frame (21).png"
import Women from "@/app/Assets/Frame (22).png"
import Peach from "@/app/Assets/Frame (23).png"
import Wgirl from "@/app/Assets/Frame (24).png"
import Blueshoe from "@/app/Assets/Frame (33).png"
import Yellow from "@/app/Assets/Frame (26).png"
import Blak from "@/app/Assets/Frame (27).png"
import Dgren from "@/app/Assets/Frame (28).png"
import Kids from "@/app/Assets/Frame (29).png"
import Short from "@/app/Assets/Frame (30).png"
import Skyblue from "@/app/Assets/Frame (31).png"
import Cgreen from "@/app/Assets/Frame (32).png"

export default function Featured() {
  return (
    <main className="my-20 max-w-[1300px] mx-auto flex flex-col lg:flex-row gap-4 lg:gap-20 font-[Helvetica Neue]">
      <section className="flex flex-col w-full lg:max-w-[200px]">
        <h1 className="font-semibold text-base sm:text-lg lg:text-2xl">New(500)</h1>
        <div className="font-medium text-sm lg:text-base space-y-2 mt-6 flex flex-col ">
          <Link href={""}>Shoes</Link>
          <Link href={""}>Sports Bras</Link>
          <Link href={""}>Tops & T-Shirts</Link>
          <Link href={""}>Hoodies & Sweatshirts</Link>
          <Link href={""}>Jackets</Link>
          <Link href={""}>Trousers & Tights</Link>
          <Link href={""}>Shorts</Link>
          <Link href={""}>Tracksuits</Link>
          <Link href={""}>Jumpsuits & Rompers</Link>
          <Link href={""}>Skirts & Dresses</Link>
          <Link href={""}>Socks</Link>
          <Link href={""}>Accessories & Equipment</Link>
                 
        </div>
        
        <div className="mt-10">
          <hr />
          <h1 className="font-semibold flex justify-between items-center text-sm mt-1">
            Gender
            <span>
              <IoIosArrowUp />
            </span>
          </h1>
          <div className="mt-2 text-xs lg:text-sm">
            <label className="flex gap-2 items-center">
              <input type="checkbox" id="men" />
              Men
            </label>
            <label className="flex gap-2 items-center">
              <input type="checkbox" id="women" />
              Women
            </label>
            <label className="flex gap-2 items-center">
              <input type="checkbox" id="unisex" />
              Unisex
            </label>
          </div>
        </div>
        <div className="mt-10">
          <hr />
          <h1 className="font-semibold flex justify-between text-sm items-center mt-1">
            Kids
            <span>
              <IoIosArrowUp />
            </span>
          </h1>
          <div className="mt-2 text-[9px] lg:text-sm">
            <h1 className="flex gap-2 items-center">
            <input type="checkbox" id="boys" />
              Boys
            </h1>
            <h1 className="flex gap-2 items-center">
            <input type="checkbox" id="girls" />
              Girls
            </h1>
          </div>
        </div>
        <div className="mt-10">
          <hr />
          <h1 className="font-semibold flex text-[9px] lg:text-[12px] justify-between items-center mt-1">
            Shop By Price
            <span>
              <IoIosArrowUp />
            </span>
          </h1>
          <div className="mt-2 text-[9px] lg:text-sm">
            <h1 className="flex gap-2 items-center">
            <input type="checkbox" id="" />
              Under ₹ 2 500.00
            </h1>
            <h1 className="flex gap-2 items-center">
            <input type="checkbox" id="" />
             ₹ 2 501.00 - ₹ 7 500.00
            </h1>
          </div>
        </div>
     
      </section>

      <section className="w-full lg:w-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="flex items-center gap-2 font-semibold text-sm ml-[800px]">
            Hide Filters
            <Image src={Hide} alt="Hide Filters Icon" />
          </h1>
          <h2 className="flex items-center gap-2 font-semibold text-sm">
            Sort By
            <span>
              <RiArrowDropDownLine size={25} />
            </span>
          </h2>
        </div>

        <hr />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 mt-6">
          <Image src={White} alt="White Item" className="w-full h-auto" />
          <Image src={Black} alt="Black Item" className="w-full h-auto" />
          <Image src={Pink} alt="Pink Item" className="w-full h-auto" />
          <Image src={Grey} alt="Grey Item" className="w-full h-auto" />
          <Image src={Litgrey} alt="Light Grey Item" className="w-full h-auto" />
          <Image src={Skin} alt="Skin Item" className="w-full h-auto" />
          <Image src={Ofwhite} alt="Off-White Item" className="w-full h-auto" />
          <Image src={Shirt} alt="Shirt Item" className="w-full h-auto" />
          <Image src={Green} alt="White Item" className="w-full h-auto" />
          <Image src={Blshirt} alt="Black Shirt" className="w-full h-auto" />
          <Image src={girl} alt="Girl Item" className="w-full h-auto" />
          <Image src={Red} alt="Red Item" className="w-full h-auto" />
          <Image src={Purple} alt="Purple Item" className="w-full h-auto" />
          <Image src={Litgren} alt="Light Green Item" className="w-full h-auto" />
          <Image src={Man} alt="Light Green Item" className="w-full h-auto" />
          
          
          <Image src={Multi} alt="Multicolor Item" className="w-full h-auto" />
          <Image src={Fulwhite} alt="Full White Item" className="w-full h-auto" />
          <Image src={DBshirt} alt="Dark Blue Shirt" className="w-full h-auto" />
          <Image src={Rwhite} alt="Rich White Item" className="w-full h-auto" />
          <Image src={Women} alt="Women Item" className="w-full h-auto" />
          <Image src={Peach} alt="Peach Item" className="w-full h-auto" />
          <Image src={Wgirl} alt="White Girl Item" className="w-full h-auto" />
          <Image src={Blueshoe} alt="Blue Shoe" className="w-full h-auto" />
          <Image src={Yellow} alt="Yellow Item" className="w-full h-auto" />
          <Image src={Blak} alt="Black Item" className="w-full h-auto" />
          <Image src={Dgren} alt="Dark Green Item" className="w-full h-auto" />
          <Image src={Kids} alt="Kids Item" className="w-full h-auto" />
          <Image src={Short} alt="Shorts" className="w-full h-auto" />
          <Image src={Skyblue} alt="Sky Blue Item" className="w-full h-auto" />
          <Image src={Cgreen} alt="Cream Green Item" className="w-full h-auto" />

        </div>

        <section className="my-10">
          <h1 className="font-semibold text-lg">Related Categories</h1>
          <div className="flex flex-wrap gap-2 mt-4">
            {[
              "Best Selling Products",
              "Best Shoes",
              "New Basketball Shoes",
              "New Football Shoes",
              "New Men's Shoes",
              "New Running Shoes",
              "Best Men's Shoes",
              "New Jordan Shoes",
              "Best Women's Shoes",
              "Best Training & Gym",
            ].map((category, index) => (
              <button
                key={index}
                className="bg-white text-black rounded-full border-[1px] shadow-none px-4 py-2 text-sm"
              >
                {category}
              </button>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
