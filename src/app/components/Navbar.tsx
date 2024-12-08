'use client';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons from React Icons
import Image from 'next/image';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full bg-white h-auto flex flex-col md:flex-row items-center justify-between p-4 md:p-8 border-b-2 border-b-[#e7eef6] relative">
      {/* Logo Section */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <h1 className="text-[#3563e9] text-3xl sm:text-4xl font-bold">MORENT</h1>
        {/* Hamburger Button for Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none text-[#3563e9] text-2xl"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menu Items */}
      <div
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } flex-col md:flex md:flex-row items-center gap-4 md:gap-16 w-full md:w-auto mt-4 md:mt-0`}
      >
        {/* Search Input */}
        <div className="relative w-full md:w-auto">
          <Image
            src={'/search-normal.png'}
            alt="Search icon"
            width={24}
            height={24}
            className="absolute top-1/2 left-3 transform -translate-y-1/2"
          />
          <input
            type="text"
            title="search"
            placeholder="Say something here"
            className="border-2 border-[#e7eef6] w-full md:w-[492px] h-[44px] rounded-full p-2 pl-10 pr-12"
          />
          <Image
            src={'/filter.png'}
            alt="Filter icon"
            width={24}
            height={24}
            className="absolute top-1/2 right-3 transform -translate-y-1/2"
          />
        </div>

        {/* Profile and Notification Icons */}
        <div className="flex items-center justify-center">
          <Image
            src={'/Profil & Notification.png'}
            alt="Profile and Notification"
            width={236}
            height={44}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
