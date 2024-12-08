import React from 'react';

export default function Footer() {
  return (
    <div className="relative flex flex-col items-center justify-center gap-6 px-5 w-full bg-white py-6">
      {/* Top Section */}
      <div className="first w-full flex flex-wrap items-start justify-between gap-6">
        {/* Intro Section */}
        <div className="intro flex flex-col gap-2 w-full lg:w-[40%] text-center lg:text-left">
          <h1 className="text-[#3563e9] text-2xl lg:text-3xl font-bold">MORENT</h1>
          <p className="text-gray-500 w-full lg:w-[300px]">
            Our vision is to provide convenience and help increase your sales business.
          </p>
        </div>

        {/* Links Section */}
        <div className="lists flex flex-wrap gap-6 justify-center lg:justify-between w-full lg:w-[60%]">
          {/* About Section */}
          <div className="about">
            <ul className="flex flex-col gap-2">
              <li className="font-bold text-lg"><h1>About</h1></li>
              <li className="text-gray-600 cursor-pointer hover:text-[#3563e9]">How it works</li>
              <li className="text-gray-600 cursor-pointer hover:text-[#3563e9]">Featured</li>
              <li className="text-gray-600 cursor-pointer hover:text-[#3563e9]">Partnership</li>
              <li className="text-gray-600 cursor-pointer hover:text-[#3563e9]">Business Relation</li>
            </ul>
          </div>

          {/* Community Section */}
          <div className="community">
            <ul className="flex flex-col gap-2">
              <li className="font-bold text-lg"><h1>Community</h1></li>
              <li className="text-gray-600 cursor-pointer hover:text-[#3563e9]">Events</li>
              <li className="text-gray-600 cursor-pointer hover:text-[#3563e9]">Blog</li>
              <li className="text-gray-600 cursor-pointer hover:text-[#3563e9]">Podcast</li>
              <li className="text-gray-600 cursor-pointer hover:text-[#3563e9]">Invite a friend</li>
            </ul>
          </div>

          {/* Socials Section */}
          <div className="socials">
            <ul className="flex flex-col gap-2">
              <li className="font-bold text-lg"><h1>Socials</h1></li>
              <li className="text-gray-600 cursor-pointer hover:text-[#3563e9]">Discord</li>
              <li className="text-gray-600 cursor-pointer hover:text-[#3563e9]">Instagram</li>
              <li className="text-gray-600 cursor-pointer hover:text-[#3563e9]">Facebook</li>
              <li className="text-gray-600 cursor-pointer hover:text-[#3563e9]">Twitter</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="line border-t w-full border-[#e7eef6]"></div>

      {/* Bottom Section */}
      <div className="last w-full flex flex-wrap items-center justify-between gap-4">
        {/* Copyright Section */}
        <div className="first text-center lg:text-left w-full lg:w-auto">
          <h1 className="font-bold text-sm text-gray-500">©2022 MORENT. All rights reserved</h1>
        </div>
        {/* Links Section */}
        <div className="second flex flex-wrap justify-center lg:justify-end items-center gap-4 w-full lg:w-auto">
          <h1 className="font-bold text-sm text-gray-500 cursor-pointer hover:text-[#3563e9]">Privacy & Policy</h1>
          <h1 className="font-bold text-sm text-gray-500 cursor-pointer hover:text-[#3563e9]">Terms & Conditions</h1>
        </div>
      </div>
    </div>
  );
}
