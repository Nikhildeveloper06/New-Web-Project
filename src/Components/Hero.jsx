import React, { useState } from "react";
import banner1 from "../assets/India.jpg"; // ✅ Use image instead of video
import bannerFallback from "../assets/Hero3.jpg"; // fallback for smaller screens
import { Search, CheckCircle } from "lucide-react";

const Hero = () => {
  const [showCard, setShowCard] = useState(false);

  const handleBookNow = () => {
    setShowCard(true);
    setTimeout(() => setShowCard(false), 3000);
  };

  return (
    <div className="relative -mt-12 overflow-hidden">
      {/* Background Image */}
      <div className="h-[650px] lg:h-[800px] relative">
        {/* Desktop / Tablet Background */}
        <img
          src={banner1}
          alt="Travel background"
          className="absolute inset-0 w-full h-full object-cover hidden sm:block"
        />
        {/* Mobile Background */}
        <img
          src={bannerFallback}
          alt="Travel background"
          className="absolute inset-0 w-full h-full object-cover sm:hidden"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Text Content */}
        <div className="relative max-w-7xl mx-auto">
          <div className="flex h-[650px] lg:h-[800px] justify-center items-center">
            <div className="flex flex-col space-y-6 justify-center items-center text-center px-5 md:px-0">
              <h1 className="text-white font-bold text-3xl sm:text-4xl lg:text-6xl">
                Discover Hidden Paradises
              </h1>
              <p className="text-white text-base sm:text-lg lg:w-[700px]">
                Journey to breathtaking escapes, unwind in luxury, and create
                stories you’ll never forget.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Form */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[5%] z-20 w-[90%] sm:w-[95%] lg:w-[1000px]">
        <div className="bg-white/20 backdrop-blur-md rounded-2xl shadow-2xl p-4 sm:p-6 border border-white/30">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 items-end">
            {/* Location */}
            <div className="flex flex-col gap-2">
              <label className="flex font-semibold gap-1 items-center text-white text-sm">
                <Search className="w-4 h-4" /> Location
              </label>
              <select className="border border-gray-300 rounded-md p-2 bg-white/80 focus:ring-2 focus:ring-red-400 text-sm">
                <option value="">Select Destination</option>
                <option value="bali">Bali, Indonesia</option>
                <option value="paris">Paris, France</option>
                <option value="tokyo">Tokyo, Japan</option>
                <option value="venice">Venice, Italy</option>
                <option value="cape-town">Cape Town, South Africa</option>
              </select>
            </div>
            {/* Check In */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-white text-sm">
                Check In
              </label>
              <input
                type="date"
                className="border p-2 rounded-md bg-white/80 focus:ring-2 focus:ring-red-400 text-sm"
              />
            </div>
            {/* Check Out */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-white text-sm">
                Check Out
              </label>
              <input
                type="date"
                className="border p-2 rounded-md bg-white/80 focus:ring-2 focus:ring-red-400 text-sm"
              />
            </div>
            {/* Guests */}
            <div className="flex flex-col gap-2">
              <label className="flex font-semibold gap-1 items-center text-white text-sm">
                <Search className="w-4 h-4" /> Guests
              </label>
              <select className="border border-gray-300 rounded-md p-2 bg-white/80 focus:ring-2 focus:ring-red-400 text-sm">
                <option value="">Select Guests</option>
                <option value="1">1 Adult</option>
                <option value="2">2 Adults</option>
                <option value="3">2 Adults + 1 Child</option>
                <option value="4">4 Adults</option>
                <option value="5">Group (5+)</option>
              </select>
            </div>
            {/* Book Button */}
            <div className="flex flex-col">
              <label className="text-transparent">Search</label>
              <button
                onClick={handleBookNow}
                className="bg-red-500 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-black transition text-sm"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Success Card */}
      {showCard && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[30%] z-30 animate-fadeInUp">
          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 flex flex-col items-center gap-4 w-[280px] sm:w-[350px]">
            <CheckCircle className="text-green-500 w-10 h-10 sm:w-12 sm:h-12" />
            <h3 className="text-lg sm:text-xl font-bold text-gray-800">
              Booking Confirmed!
            </h3>
            <p className="text-gray-600 text-center text-sm sm:text-base">
              Thank you for choosing us. We’ll get back to you shortly with your
              travel details.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
