import React from "react";
import logo from "../images/logo1.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 sm:px-8 md:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo */}
        <div className="flex items-center justify-center sm:justify-start">
          <a href="/" className="space-y-2">
            <img src={logo} alt="Little Lemon Logo" className="h-16" />
          </a>
        </div>

        <div>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-customYellow-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-customYellow-500 transition">
                About
              </a>
            </li>
            <li>
              <a href="#menu" className="hover:text-customYellow-500 transition">
                Menu
              </a>
            </li>
            <li>
              <a
                href="#reservations"
                className="hover:text-customYellow-500 transition"
              >
                Reservations
              </a>
            </li>
            <li>
              <a
                href="#orderOnline"
                className="hover:text-customYellow-500 transition"
              >
                Order Online
              </a>
            </li>
            <li>
              <a href="#login" className="hover:text-customYellow-500 transition">
                Login
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-2">
            <li>Address: 123 Lemon St, Citrus City</li>
            <li>Phone: (123) 456-7890</li>
            <li>Email: contact@littlelemon.com</li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-customYellow-500 transition"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-customYellow-500 transition"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-customYellow-500 transition"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p>&copy; 2024 Little Lemon. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
