// components/Navbar.
"use client"
// components/Navbar.tsx

import { useState } from 'react';
import Link from 'next/link';
import menuItems from '@/utils/data';



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-white p-6 shadow-md w-full">
  <div className='flex justify-around'>
  <div className="flex items-center flex-shrink-0 mr-6">
        <img src="/logo.png" alt="Logo" className="h-12" />
        <span className="ml-2 font-semibold text-xl tracking-tight text-red-600">ekant solutions</span>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 border rounded text-gray-700 border-gray-700 hover:text-black hover:border-black"
        >
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
          </svg>
        </button>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
        <div className="text-sm lg:flex-grow">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href} className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-black mr-4">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
  </div>
    </nav>
  );
};

export default Navbar;


