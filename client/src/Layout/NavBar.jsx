import React, { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false); // Toggle mobile menu

  return (
    <header className="relative w-full border-b border-[#e7eaf4] bg-[#f8f9fc] font-sans">
      <div className="flex items-center justify-between px-6 md:px-10 py-3">
        {/* Logo */}
        <div className="flex items-center gap-3 text-[#0d111c]">
          <div className="w-6 h-6 md:w-4 md:h-4">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
            News Agency xxx
          </h2>
        </div>

        {/* Hamburger menu icon for small screens */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#0d111c] focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-9">
          <a className="text-[#0d111c] text-sm font-medium" href="#hero">
            Home
          </a>
          <a className="text-[#0d111c] text-sm font-medium" href="#about">
            About
          </a>
          <a className="text-[#0d111c] text-sm font-medium" href="#services">
            Services
          </a>
          <a className="text-[#0d111c] text-sm font-medium" href="#contact">
            Contact
          </a>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 z-50 bg-[#f8f9fc] px-6 pb-4 shadow-md md:hidden">
          <a className="block py-2 text-[#0d111c] text-sm font-medium" href="#hero">
            Home
          </a>
          <a className="block py-2 text-[#0d111c] text-sm font-medium" href="#about">
            About
          </a>
          <a className="block py-2 text-[#0d111c] text-sm font-medium" href="#services">
            Services
          </a>
          <a className="block py-2 text-[#0d111c] text-sm font-medium" href="#contact">
            Contact
          </a>
        </div>
      )}
    </header>
  );
}

export default NavBar;
