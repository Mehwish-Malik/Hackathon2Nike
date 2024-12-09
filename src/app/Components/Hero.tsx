import React from 'react';
import Image from 'next/image';
import Heroimg from "@/app/Assets/Hero1.png"

const Hero = () => {
  return (
    <div className="bg-white font-[Helvetica Neue]">
      {/* Top Section */}
      <div className="max-w-screen-xl mx-auto px-4 py-6 text-center">
        <div className="text-black font-medium text-lg">
          Hello Nike App
        </div>
        <div className="text-sm text-gray-800 mt-2">
          Download the app to access everything Nike.{" "}
          <span className="underline cursor-pointer">
            Get Your Great
          </span>
        </div>
      </div>

      {/* Hero Image */}
      <div className="px-10 relative">
        <Image
          src={Heroimg}
          alt="Hero Image"
          className="w-full object-cover h-[400px] md:h-[500px]"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="max-w-screen-xl mx-auto px-4 py-10 text-center">
        <div className="text-gray-800 text-sm font-medium">
          First Look
        </div>
        <div className="mt-4 text-4xl md:text-7xl font-bold text-gray-900">
          Nike Air Max Pulse
        </div>
        <div className="mt-4 text-black text-base leading-6">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse <br />—
          designed to push you past your limits and help you go to the max.
        </div>
      </div>
      <div className="mt-8 flex justify-center gap-4">
  <button className="flex items-center gap-2 py-3 px-6 rounded-[24px] bg-black text-white hover:bg-gray-800">
    <span className="text-base font-medium">Notify Me</span>
  </button>
  <button className="flex items-center gap-2 py-3 px-6 rounded-[24px] bg-black text-white hover:bg-gray-800">
    <span className="text-base font-medium">Shop Air Max</span>
  </button>
</div>

</div>

      
     
  );
};

export default Hero;
