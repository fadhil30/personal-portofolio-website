import { useState } from "react";
import faithCoLogo from "../assets/faithco-logo.png";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-default z-10 px-8 md:px-20 py-4">
      <div className="flex items-center justify-between h-12">
        {/* Logo */}
        <div className="w-[120px] font-bold text-gray-600">
          <a href="#home">
            <img src={faithCoLogo} alt="Faith Company Logo" />
          </a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="text-gray-600 text-2xl lg:hidden"
          onClick={toggleMenu}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } absolute lg:relative lg:flex lg:items-center lg:gap-6 bg-default top-16 lg:top-0 left-0 w-full lg:w-auto py-6 lg:py-0 lg:pl-0 px-6 lg:px-0 transition-all`}
        >
          <li className="border-b lg:border-none border-gray-300 lg:pb-0 pb-4">
            <a
              className="text-gray-600 text-base font-medium hover:text-pure-white"
              href="#about"
            >
              About
            </a>
          </li>
          <li className="border-b lg:border-none border-gray-300 lg:pb-0 pb-4">
            <a
              className="text-gray-600 text-base font-medium hover:text-pure-white"
              href="#work"
            >
              Work
            </a>
          </li>
          <li className="border-b lg:border-none border-gray-300 lg:pb-0 pb-4">
            <a
              className="text-gray-600 text-base font-medium hover:text-pure-white"
              href="#testimonials"
            >
              Testimonials
            </a>
          </li>
          <li className="border-b lg:border-none border-gray-300 lg:pb-0 pb-4">
            <a
              className="text-gray-600 text-base font-medium hover:text-pure-white"
              href="#contact"
            >
              Contact
            </a>
          </li>
          <li className="mt-4 lg:mt-0">
            <a
              href="/CV-ATS-Muhammad Fadhil Hidayatullah.pdf"
              download="CV-ATS-Muhammad-Fadhil-Hidayatullah.pdf"
              className="w-full lg:w-[136px] h-9 bg-pure-white border rounded-xl text-gray-50 font-medium flex items-center justify-center hover:bg-slate-400"
            >
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
