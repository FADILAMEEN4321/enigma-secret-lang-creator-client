import React from "react";
import buyMeCoffeePng from "./../../assets/buymecoffee-icon.png";

const NavBar = () => {
  return (
    <>
      <nav className="p-4">
        {/* Navbar Container */}
        <div className="container p-2 mx-auto flex justify-between items-center">
          {/* Logo/Brand */}
          <div className="text-white font-bold text-3xl md:text-4xl">
            Enigma
          </div>

          {/* Navigation Links (Hidden on small screens) */}
          <div className="text-white space-x-4 md:flex hidden">
            <a href="#" className="hover:text-gray-300 p-2">
              Home
            </a>
            <a href="#" className="hover:text-gray-300 p-2">
              Enigma-machine
            </a>
            
            <div className="flex items-center hover:cursor-pointer rounded-md p-2">
              <img
                src={buyMeCoffeePng}
                height={120}
                width={120}
                alt="buymecoffee-icon"
              />
            </div>
          </div>

          {/* Login and Signup Buttons */}
          <div className="space-x-4">
            {/* Login Button */}
            <button
              type="button"
              className="text-enigmagray bg-gradient-to-r from-enigmalightgreen to-enigmagreen hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-enigmalightgreen dark:focus:ring-enigmagreen shadow-lg shadow-enigmagreen-500/50 dark:shadow-lg dark:shadow-green-800/80 rounded-lg text-sm font-semibold px-4 py-1 md:px-5 md:py-2 text-center"
            >
              Login
            </button>

            {/* Signup Button */}
            <button
              type="button"
              className="text-enigmagray bg-white focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-white shadow-lg shadow-white-500/50 dark:shadow-lg dark:shadow-white-800/80 font-medium rounded-lg text-sm px-4 py-1 md:px-5 md:py-2 text-center"
            >
              Signup
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
