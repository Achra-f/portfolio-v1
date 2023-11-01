// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
        <nav className="flex flex-col sm:flex-row justify-center">
          <div className="flex items-center justify-between flex-row-reverse">
            <button
              type="button"
              className="sm:hidden p-2"
              onClick={handleClick}
            >
              {isOpen ? (
                <div className="relative w-6 h-6">
                  <div className="h-1 w-full bg-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
                  <div className="h-1 w-full bg-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
                </div>
              ) : (
                <div className="w-6 h-1 bg-black"></div>
              )}
            </button>
            <div className="flex-none flex justify-start">Logo</div>
          </div>

          <div className="flex-auto w-100">
            <div
              className={`sm:flex justify-center ${
                isOpen ? "block" : "hidden"
              } `}
            >
              <ul
                className={`flex flex-col sm:flex-row justify-center gap-2  md:gap-10 lg:gap-14 xl:gap-16`}
              >
                <li className="text-center sm:text-left">About</li>
                <li className="text-center sm:text-left">Skills</li>
                <li className="text-center sm:text-left">Projects</li>
                <li className="text-center sm:text-left">Contact</li>
              </ul>
            </div>
          </div>
          <div
            className={`flex-none flex justify-center ${
              isOpen ? "block" : "hidden"
            } `}
          >
            Sound
          </div>
        </nav>
      </header>
    </>
  );
}
