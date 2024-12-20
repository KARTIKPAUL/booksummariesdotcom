import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">
          <a href="/">BookSummaries</a>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <a
            href="/"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Home
          </a>
          <a
            href="/genres"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Genres
          </a>
          <a
            href="/about"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            About
          </a>
          <a
            href="/contact"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Search Bar */}
        <div className="flex-1 hidden md:block mx-6">
          <input
            type="text"
            placeholder="Search for books..."
            className="w-full border rounded-md px-4 py-2 focus:ring focus:ring-blue-300 focus:outline-none"
          />
        </div>

        {/* CTA Button */}
        <div>
          <a
            href="/subscribe"
            className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition"
          >
            Subscribe
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
