import React, { useState } from "react";
import logo from "../images/logo.png";

const Navbar = () => {
  // State to manage mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white text-black py-4 px-6">
      {/* Brand and Hamburger Icon for Small Screens */}
      <div className="flex items-center justify-evenly">
        <a href="/" className="text-2xl font-bold text-yellow-500 hover:text-yellow-400">
          <img src={logo} alt="logo" className="h-8" />
        </a>

        {/* Hamburger Icon (Visible on small screens) */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-3xl text-black focus:outline-none"
        >
          <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>
      {/* Navigation Links */}
      <ul
        className={`lg:flex space-x-6 mt-4 lg:mt-0 ${isOpen ? "block" : "hidden"} lg:block`}
      >
        <li>
          <a href="/" className="text-black hover:text-yellow-500">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="text-black hover:text-yellow-500">
            About
          </a>
        </li>
        <li>
          <a href="#menu" className="text-black hover:text-yellow-500">
            Menu
          </a>
        </li>
        <li>
          <a href="/reservation" className="text-black hover:text-yellow-500">
            Reservations
          </a>
        </li>
        <li>
          <a href="#orderOnline" className="text-black hover:text-yellow-500">
            Order Online
          </a>
        </li>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
