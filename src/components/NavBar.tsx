import { useState } from "react";
import faithCoLogo from "../assets/faithco-logo.png";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-default z-10 px-4 md:px-12 py-4">
      <div className="flex items-center justify-between h-12">
        {/* Logo */}
        <div className="w-[120px] font-bold text-gray-600">
          <a href="#home">
            <img src={faithCoLogo} alt="Faith Company Logo" />
          </a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="text-gray-600 text-2xl md:hidden"
          onClick={toggleMenu}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } absolute md:relative md:flex md:items-center md:gap-6 bg-default top-16 md:top-0 left-0 w-full md:w-auto py-6 md:py-0 md:pl-0 px-6 md:px-0 transition-all`}
        >
          <li className="border-b md:border-none border-gray-300 md:pb-0 pb-4">
            <a
              className="text-gray-600 text-base font-medium hover:text-pure-white"
              href="#about"
            >
              About
            </a>
          </li>
          <li className="border-b md:border-none border-gray-300 md:pb-0 pb-4">
            <a
              className="text-gray-600 text-base font-medium hover:text-pure-white"
              href="#work"
            >
              Work
            </a>
          </li>
          <li className="border-b md:border-none border-gray-300 md:pb-0 pb-4">
            <a
              className="text-gray-600 text-base font-medium hover:text-pure-white"
              href="#testimonials"
            >
              Testimonials
            </a>
          </li>
          <li className="border-b md:border-none border-gray-300 md:pb-0 pb-4">
            <a
              className="text-gray-600 text-base font-medium hover:text-pure-white"
              href="#contact"
            >
              Contact
            </a>
          </li>
          <li className="mt-4 md:mt-0">
            <a
              href="/CV-ATS-Muhammad Fadhil Hidayatullah.pdf"
              download="CV-ATS-Muhammad-Fadhil-Hidayatullah.pdf"
              className="w-full md:w-[136px] h-9 bg-pure-white border rounded-xl text-gray-50 font-medium flex items-center justify-center hover:bg-slate-400"
            >
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
