import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div>
            <h1 className="font-extrabold text-4xl mb-4">
              <span className="text-red-500">Safar</span>ana
            </h1>
            <p className="text-sm text-gray-300 leading-relaxed">
              Safarana is your trusted travel companion, offering handpicked
              destinations, curated tours, and seamless travel experiences that
              make every journey memorable.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-400">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/Home" className="hover:text-red-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/Home" className="hover:text-red-400 transition">
                  Destinations
                </a>
              </li>
              <li>
                <a href="/Tours" className="hover:text-red-400 transition">
                  Tours
                </a>
              </li>
              <li>
                <a href="/About" className="hover:text-red-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/Contact" className="hover:text-red-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-400">
              Contact Us
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>45  Avenue, New Delhi, India</li>
              <li>
                Phone: <span className="text-white">+91 7348748803</span>
              </li>
              <li>Email: hello@safarana.com</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-400">
              Follow Us
            </h3>
            <div className="flex space-x-5 text-xl">
              <a href="#" className="hover:text-red-400 transition">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-red-400 transition">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-red-400 transition">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-red-400 mb-4">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-sm text-gray-300 mb-6">
            Get the latest updates on tours, destinations, and exclusive offers
            delivered straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:flex-1 px-4 py-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 transition px-6 py-3 rounded-md text-white font-medium w-full sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Safarana. Designed & Developed by{" "}
            <span className="text-red-400 font-medium">Nikhil Tripathi</span>.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
