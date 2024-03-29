import "./app.css";
import { title } from "./constants/enigmaMachine";
import lockPng from "./assets/lock-key.png";
import securePng from "./assets/secure-icon.png";
import buyMeCoffeePng from "./assets/buymecoffee-icon.png";
import React, { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="absolute -top-44 right-0 z-20 w-[450px] h-[450px] rounded-full bg-gradient-to-tl from-[#6B83FF] via-blue-400 to-transparent opacity-20"></div>
      <div className="absolute -bottom-24 -left-16 z-20 w-[450px] h-[450px] rounded-full bg-gradient-to-tl from-[#00FFC2] via-green to-transparent opacity-20"></div>
      {/*  */}
      <div class="relative z-10 h-full md:h-full lg:h-full w-full bg-enigmanormalbg">
        {/*  */}
        <div class="absolute -z-20 h-full w-full bottom-0left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>

        {/* NavBar */}
        <nav className="p-4 container mx-auto">
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
            <div className="space-x-4 md:flex hidden">
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
                className="text-enigmagray bg-white  focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-white shadow-lg shadow-white-500/50 dark:shadow-lg dark:shadow-white-800/80 font-medium rounded-lg text-sm px-4 py-1 md:px-5 md:py-2 text-center"
              >
                Signup
              </button>
            </div>

            {/* Dropdown section */}
            <div className="md:hidden">
              <label class="hamburger">
                <input type="checkbox" onClick={toggleMenu} />
                <svg viewBox="0 0 32 32">
                  <path
                    class="line line-top-bottom"
                    d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                  ></path>
                  <path class="line" d="M7 16 27 16"></path>
                </svg>
              </label>
            </div>
          </div>
        </nav>

        {/* Hero section */}
        <section className="">
          <div className="mt-20"></div>
          {/* heading */}
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl capitalize mb-6 text-white text-center">
              No one should interfere
              <br /> in your secrets!
            </h1>
            <h4 className="font-semibold mb-8 text-xs md:text-sm lg:text-base capitalize text-white text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
              <br /> incididunt ut labore et dolore magna aliqua.
            </h4>

            <button className="bg-white px-6 py-1 md:px-8 md:py-2 mb-3 rounded-lg font-semibold">
              Get Started
            </button>
          </div>
        </section>

        {/* line section */}

        <div className="h-72">
          <div className="overflow-hidden flex items-center justify-center h-10 md:h-14 mt-11 text-enigmagray bg-enigmalightgray bg-opacity-30 rounded-lg text-sm font-semibold px-4 py-1 md:px-5 md:py-2 text-center rotate-[-8deg]">
            <p className="animate-slide-left font-medium text-lg">
              d$k5df lio8j9 djf djkf nj78 don#$kj @djajdnior d$k5df lio8j9 !jfo
              siw urnpivni%%irt d$k5df lio8j9 ut d$k5df lio8j9 djf djkf nj78
              d$k5df lio8j9 djf djkf nj78
            </p>
          </div>

          <div className="overflow-hidden flex items-center justify-center h-10 md:h-14 text-enigmagray bg-gradient-to-r from-enigmalightgreen to-enigmagreen hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-enigmalightgreen dark:focus:ring-enigmagreen shadow-lg shadow-enigmagreen-500/50 dark:shadow-lg dark:shadow-green-800/80 rounded-lg text-sm font-semibold px-4 py-1 md:px-5 md:py-2 text-center rotate-12">
            <p className="animate-slide-left font-medium text-lg">
              d$k5df lio8j9 djf djkf nj78 don#$kj @djajdnior d$k5df lio8j9 !jfo
              siw urnpivni%%irt d$k5df lio8j9 ut d$k5df lio8j9 djf djkf nj78
              d$k5df lio8j9 djf djkf nj78
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
