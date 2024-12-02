export default function NavBar() {
  return (
    <nav className="flex w-full m-0 p-6 justify-end fixed bg-default z-10 px-28">
      <ul className="flex items-center gap-6">
        <li>
          <a
            className="text-gray-600 text-base font-medium hover:text-pure-white"
            href="#about" // Mengarah ke section About
          >
            About
          </a>
        </li>
        <li>
          <a
            className="text-gray-600 text-base font-medium hover:text-pure-white"
            href="#work" // Mengarah ke section Work
          >
            Work
          </a>
        </li>
        <li>
          <a
            className="text-gray-600 text-base font-medium hover:text-pure-white"
            href="#testimonials" // Mengarah ke section Testimonials
          >
            Testimonials
          </a>
        </li>
        <li>
          <a
            className="text-gray-600 text-base font-medium hover:text-pure-white"
            href="#contact" // Mengarah ke section Contact
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="/CV-ATS-Muhammad Fadhil Hidayatullah.pdf"
            download="CV-ATS-Muhammad-Fadhil-Hidayatullah.pdf"
            className="w-[136px] h-9 bg-pure-white border rounded-xl text-gray-50 font-medium flex items-center justify-center hover:bg-slate-400"
          >
            Download CV
          </a>
        </li>
      </ul>
    </nav>
  );
}
