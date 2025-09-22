import React from "react";
import TopBanner from "../Components/TopBanner";
import trip from "../assets/trip.gif";
import time from "../assets/fire-time.gif";
import price from "../assets/best-price.gif";
import b3 from "../assets/b3.jpeg";

const About = () => {
  return (
    <div className="pt-20"> 
      {/* Padding so banner isn't hidden by navbar */}
      <TopBanner />

      {/* Intro Section */}
      <div className="max-w-7xl mx-auto my-16 px-6 lg:px-0">
        <div className="flex flex-col md:flex-row gap-10 items-center">
       
          {/* Image with hover effect */}
          <div className="flex-1 relative flex justify-center">
            <div className="relative group w-full md:w-4/5 lg:w-3/4">
              <img
                src={b3}
                alt="Travel"
                className="rounded-xl shadow-lg transform transition duration-500 ease-in-out group-hover:scale-105"
              />
              {/* Overlay text only on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-500">
                
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-800 leading-tight">
              Why Choose <span className="text-red-500">Safarana</span>?
            </h1>
            <p className="text-gray-600 leading-relaxed text-lg">
              At Safarana, we believe travel is not just about destinations, but
              about creating stories worth telling. With handpicked packages,
              top-notch services, and personalized experiences, we make your
              journeys unforgettable. Whether it’s an exotic getaway, an
              adventure trek, or a family holiday, we ensure comfort, quality,
              and memories that last forever.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Makes Us <span className="text-red-500">Special?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition duration-500">
              <img src={trip} alt="Destinations" className="w-24 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">50+ Destinations</h3>
              <p className="text-gray-600">
                From breathtaking beaches to mountain retreats, explore curated
                destinations across the globe.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition duration-500">
              <img src={price} alt="Best Price" className="w-24 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Best Price Guarantee</h3>
              <p className="text-gray-600">
                Enjoy top-class experiences at unbeatable prices with no hidden
                costs — value for every penny.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition duration-500">
              <img src={time} alt="Fast Booking" className="w-24 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Super Fast Booking</h3>
              <p className="text-gray-600">
                Book your dream vacation instantly with our easy and secure
                booking system, anytime & anywhere.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="relative bg-gradient-to-r from-red-500 to-pink-600 py-16 mt-16">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready for Your Next Adventure?
          </h2>
          <p className="mb-6 text-lg">
            Join thousands of happy travelers who have trusted Safarana for their
            journeys. Let’s make your dream trip a reality today.
          </p>
          <a
            href="/contact"
            className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold shadow-md hover:bg-gray-200 transition"
          >
            Plan Your Trip Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
