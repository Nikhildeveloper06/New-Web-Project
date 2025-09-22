import { X } from "lucide-react";
import React from "react";
import { FaUserCircle, FaCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "right-0" : "-right-[100%]"
      } fixed bottom-0 top-0 flex h-screen w-[75%] flex-col 
      bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white
      px-8 pt-16 transition-all duration-300 md:hidden 
      rounded-l-2xl shadow-2xl backdrop-blur-lg`}
    >
      {/* Close Button */}
      <button
        className="absolute top-4 right-6 p-2 rounded-full bg-white/20 hover:bg-red-500 hover:text-white transition"
        onClick={() => setShowMenu(false)}
      >
        <X />
      </button>

      {/* Menu Content */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {/* User Info */}
          <div className="flex items-center justify-start gap-3">
            <FaUserCircle size={50} className="text-red-400" />
            <div>
              <h1 className="font-semibold">Hello User</h1>
              <h1 className="text-sm text-gray-400">Premium User</h1>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="mt-14">
            <ul className="space-y-8 text-lg font-medium">
              <Link to="/" onClick={() => setShowMenu(false)}>
                <li className="hover:text-red-400 transition">Home</li>
              </Link>
              <Link to="/about" onClick={() => setShowMenu(false)}>
                <li className="hover:text-red-400 transition">About Us</li>
              </Link>
              <Link to="/tours" onClick={() => setShowMenu(false)}>
                <li className="hover:text-red-400 transition">Tours</li>
              </Link>
              <Link to="/gallery" onClick={() => setShowMenu(false)}>
                <li className="hover:text-red-400 transition">Gallery</li>
              </Link>
              <Link to="/contact" onClick={() => setShowMenu(false)}>
                <li className="hover:text-red-400 transition">Contact</li>
              </Link>
            </ul>
          </nav>
        </div>

        {/* Footer (Always at bottom) */}
        <div className="text-center text-gray-400 text-sm flex items-center justify-center gap-2 mt-10 pb-6">
          <FaCopyright className="text-red-400" />
          <span>{new Date().getFullYear()} Nikhil Tripathi. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
