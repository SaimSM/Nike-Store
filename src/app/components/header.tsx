import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaSearch, FaHeart, FaShoppingBag } from 'react-icons/fa';


const Header: React.FC = () => {
  const BasketballLogo = '/basketball.png'; //basketball man logo
  const NikeLogo = '/vector.png'; //nike logo

  return (
    <header className="">
      {/* Top bar */}
      <div className="bg-gray-100 flex justify-between items-center px-6 py-2 md:text-[11px] sm:text-[9px] text-[8px] font-medium text-gray-500">
        <Image src={BasketballLogo} alt="Basketball Logo" width={24} height={24} />
        
        <div className="flex md:gap-4 sm:gap-3 gap-2">
          <Link href="/" className="text-black">Find a Store | <br /></Link>
          <Link href="/Help" className="text-black">Help | <br /></Link>
          <Link href="/" className="text-black">Join Us | <br /></Link>
          <Link href="/signin" className="text-black">Sign In | <br /></Link>
        </div>
      </div>

      {/* Main navigation */}
      <div className="flex flex-wrap justify-between items-center px-6 py-4">
        {/* Left section (Logos) */}
        <div className="flex flex-col items-center">
          <Image
            src={BasketballLogo}
            alt="Basketball Logo"
            width={16}
            height={16}
            className="mb-1" // Adjust spacing between logos
          />
          <Image
            src={NikeLogo}
            alt="Nike Logo"
            width={78}
            height={30}
          />
        </div>

        {/* Center section (Navigation Links) */}
        <nav className="flex gap-4 md:gap-6 text-gray-700 font-medium md:text-[16px] sm:text-[14px] text-[10px] items-center ">
          <Link href="#" className="hover:text-black whitespace-nowrap">New & Featured</Link>
          <Link href="#" className="hover:text-black whitespace-nowrap">Men</Link>
          <Link href="#" className="hover:text-black whitespace-nowrap">Women</Link>
          <Link href="#" className="hover:text-black whitespace-nowrap">Kids</Link>
          <Link href="#" className="hover:text-black whitespace-nowrap">Sale</Link>
          <Link href="#" className="hover:text-black whitespace-nowrap">SNKRS</Link>
        </nav>

        {/* Right section (Search, Wishlist, Cart) */}
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          {/* Search Bar */}              
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none"
            />
            <FaSearch className="absolute right-3 top-2.5 text-gray-500" aria-label="Search"  />
          </div>
          <FaHeart className="text-gray-700 md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] cursor-pointer hover:text-black" aria-hidden="true" />
          <FaShoppingBag className="text-gray-700 md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] cursor-pointer hover:text-black" aria-hidden="true" />
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="block md:hidden px-6 mt-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none w-full"
          />
          <FaSearch className="absolute right-3 top-2.5 text-gray-500" aria-label="Search" />
        </div>
      </div>
    </header>
  );
};

export default Header;
