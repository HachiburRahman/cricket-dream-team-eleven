import React from 'react';
import bannerLogo from "../../assets/banner-main.png";
import bg from "../../assets/bg-shadow.png";

const Banner = () => {
    return (
       
    <div className="max-w-300 mx-auto px-4 mt-8">
  <div
    className="relative h-105 rounded-3xl overflow-hidden bg-cover bg-center"
    style={{ backgroundImage: `url(${bg})` }}

  >
    
    {/* Dark overlay for readability */}
    <div className="absolute inset-0 bg-black/50"></div>

    {/* Content on background */}
    <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

      {/* Logo / image */}
      <img
        src={bannerLogo}
        alt="Cricket"
        className="w-32 mb-6"
      />

      {/* Heading */}
      <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h1>

      {/* Subtitle */}
      <p className="text-gray-300 mt-4 text-lg">
        Beyond Boundaries Beyond Limits
      </p>

      {/* Button */}
      <button className="mt-6 px-6 py-3 rounded-xl bg-lime-400 text-black font-semibold
                         shadow-[0_0_20px_rgba(163,230,53,0.8)]
                         hover:scale-105 transition">
        Claim Free Credit
      </button>

    </div>
  </div>
</div>
    );
};

export default Banner;