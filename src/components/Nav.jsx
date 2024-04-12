import { useState } from "react";
import Logo from "../assets/icons/logo.png";
export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  function handleNavOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <header className="bg-blue-500/90 sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <img src={Logo} alt="Wish Maker" className="max-w-64 h-auto" />

          <div className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-blue-950 font-semibold text-md"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-blue-950 font-semibold text-md"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-blue-950 font-semibold text-md"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-blue-950 font-semibold text-md"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button
              className="outline-none mobile-menu-button"
              onClick={handleNavOpen}
            >
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
        <div
          className={
            isOpen ? "mobile-menu md:hidden" : "mobile-menu hidden md:hidden"
          }
        >
          <ul className="my-6 space-y-5">
            <li>
              <a
                href="#"
                className="block px-4 py-3 text-white bg-blue-500/40 hover:bg-blue-600/90 rounded"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-3 text-white bg-blue-500/40 hover:bg-blue-600/90 rounded"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-3 text-white bg-blue-500/40 hover:bg-blue-600/90 rounded"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-3 text-white bg-blue-500/40 hover:bg-blue-600/90 rounded"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
