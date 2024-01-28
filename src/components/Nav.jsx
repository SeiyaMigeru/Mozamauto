import { useState } from "react";
import { headerLogo, hamburger, headerLogoNew } from "../assets/icons";
import { navLinks } from "../constants";
import Lang from "./Lang";
import { CSSTransition } from "react-transition-group";
import "../index.css"; // Import your custom CSS file

const Nav = () => {
  // State to manage the visibility of the navigation links
  const [showNavLinks, setShowNavLinks] = useState(false);

  // Function to toggle the visibility of the navigation links
  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };

  return (
    <header className="padding-x pt-8 fixed z-20 w-full" style={{backgroundColor: 'rgba(255, 255, 255, 0.8)'}}>
      <nav className="flex bg-white rounded-xl px-2 justify-between gap-10 items-center max-container">
        <div className="flex">
          <a href="/" className="mr-4">
            <img src={headerLogo} alt="Logo" className="max-h-[90px]"/>
          </a>
          <Lang />
        </div>
        <div className="flex items-center">
          {/* Navigation Links */}
          <CSSTransition
            in={showNavLinks}
            timeout={300}
            classNames="slide"
            unmountOnExit
          >
            <ul className="md:flex-1 flex md:flex-row flex-col items-center mr-4 gap-16">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-montserrat leading-normal text-lg text-slate-950"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </CSSTransition>
          {/* Hamburger Icon */}
          <button
            onClick={toggleNavLinks}
            className={`hamburger-btn ${showNavLinks ? "open" : ""}`}
          >
            <img src={hamburger} className="mx-6" alt="Hamburger" width={30} height={30} />
          </button>

          <a
            href="/appointment"
            className="font-montserrat leading-normal text-lg ml-2 rounded-full flex justify-center items-center px-4 py-2 border bg-gray-500 hover:bg-gray-700 text-white border-gray-500"
          >
            {" "}
            Book Appointment{" "}
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
