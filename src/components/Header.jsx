import React, { useState } from "react";
import { FaBars } from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className="">
        <div className="container mx-auto flex items-center justify-between p-4 bg-black text-white">
          <div className="flex-none">logo</div>
          <nav className="flex-auto w-100">
            <ul className="flex flex-col sm:flex-row justify-center gap-2  md:gap-10 lg:gap-14 xl:gap-16">
              <li className="text-center sm:text-left">About</li>
              <li className="text-center sm:text-left">Skills</li>
              <li className="text-center sm:text-left">Projects</li>
              <li className="text-center sm:text-left">Contact</li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
