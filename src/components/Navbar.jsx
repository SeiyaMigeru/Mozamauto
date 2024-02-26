import React, { useState, useEffect } from "react";
import { navLinks } from "../constants";
import { headerLogoNew } from "../assets/icons";
import Lang from "./Lang";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="bg-gray-300 shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-auto">
          <div className="flex items-center w-full justify-between">
            <div className="flex gap-10 items-center">
              <div className="w-auto">
                <a href="/">
                  <img
                    src={headerLogoNew}
                    alt="Logo"
                    className={`w-full transition-all ${
                      isScrolled ? "max-w-[16rem]" : "max-w-[24rem]"
                    }`}
                  />
                </a>
              </div>
              <Lang />
            </div>
            <div className="hidden 2xl:flex gap-6">
              <ul className="flex gap-6 font-montserrat font-medium text-lg cursor-pointer">
                {navLinks.map((item) => (
                  <li
                    key={item.label}
                    className="hover:-translate-y-2 transition"
                  >
                    <a href={item.href} className="">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <button>
                <a
                  href="/appointment"
                  className="p-4 bg-gray-500 rounded-full text-white font-montserrat font-medium text-lg
                  cursor-pointer hover:bg-gray-600 transition"
                >
                  Book an Appointment
                </a>
              </button>
            </div>
          </div>
          <div className="2xl:hidden flex p-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400"
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z"
                    fill="currentColor"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16ZM3 5C3 4.44772 3.44772 4 4 4H20C20.5523 4 21 4.44772 21 5C21 5.55228 20.5523 6 20 6H4C3.44772 6 3 5.55228 3 5ZM3 10C3 9.44772 3.44772 9 4 9H20C20.5523 9 21 9.44772 21 10C21 10.5523 20.5523 11 20 11H4C3.44772 11 3 10.5523 3 10ZM3 15C3 14.4477 3.44772 14 4 14H20C20.5523 14 21 14.4477 21 15C21 15.5523 20.5523 16 20 16H4C3.44772 16 3 15.5523 3 15Z"
                    fill="currentColor"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`2xl:hidden overflow-hidden transition-height ease-in-out duration-300 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 sm:px-3">
          <ul className="flex flex-col items-center gap-2">
            {navLinks.map((item) => (
              <li
                key={item.label}
                className="font-montserrat font-medium hover:font-bold transition"
              >
                <a href={item.href} className="">
                  {item.label}
                </a>
              </li>
            ))}
            <div className="flex gap-2 py-2">
              <hr className="bg-black p-1 rounded-full"></hr>
              <hr className="bg-black p-1 rounded-full"></hr>
              <hr className="bg-black p-1 rounded-full"></hr>
            </div>

            <a
              href="/appointment"
              className="font-montserrat font-medium hover:font-bold transition"
            >
              Book An Appointment
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
