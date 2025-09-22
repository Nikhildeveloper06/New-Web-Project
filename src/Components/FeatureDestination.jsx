import React from 'react'
import Bali from '../assets/bali1.jpeg'
import Paris from '../assets/paris1.jpeg'
import Tokyo from '../assets/Tokyo1.jpeg'
import India from '../assets/India1.jpeg'
import Venice from '../assets/Venice1.jpeg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Clock, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import '../Components/Css/reactSlick.css'

// Custom Arrow Components
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute -left-12 top-1/2 -translate-y-1/2 bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center shadow hover:bg-black transition z-20"
    >
      <ChevronLeft size={20} />
    </button>
  )
}

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute -right-12 top-1/2 -translate-y-1/2 bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center shadow hover:bg-black transition z-20"
    >
      <ChevronRight size={20} />
    </button>
  )
}

const FeatureDestination = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ]
  };

  const destinationJson = [
    { name: 'Paris', img: Paris, time: '6 Days · 5 Nights', star: '⭐ 4.9 (150 reviews)', price: '88,999' },
    { name: 'Bali', img: Bali, time: '6 Days · 5 Nights', star: '⭐ 4.7 (120 reviews)', price: '69,999' },
    { name: 'Venice', img: Venice, time: '5 Days · 4 Nights', star: '⭐ 4.6 (95 reviews)', price: '84,499' },
    { name: 'Tokyo', img: Tokyo, time: '7 Days · 6 Nights', star: '⭐ 4.8 (210 reviews)', price: '92,999' },
    { name: 'India', img: India, time: '10 Days · 9 Nights', star: '⭐ 4.5 (300 reviews)', price: '55,999' },
  ];

  return (
    <section className="w-full py-12 md:py-20 lg:pt-28 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-center mb-3 font-serif">
          🌍 Featured Destinations
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Handpicked journeys for unforgettable adventures
        </p>

        {/* Slider */}
        <div className="slider-container relative">
          <Slider {...settings}>
            {destinationJson.map((destination, i) => (
              <div key={i} className="px-3">
                <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl group transition-all duration-500">
                  
                  {/* Background Image */}
                  <img 
                    src={destination.img} 
                    alt={destination.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 group-hover:opacity-95 transition"></div>

                  {/* Content */}
                  <div className="absolute bottom-0 p-6 text-white space-y-2">
                    <h3 className="text-2xl font-bold">{destination.name}</h3>
                    <p className="flex items-center text-sm gap-2 text-gray-200">
                      <Clock size={15}/> {destination.time}
                    </p>
                    <p className="text-yellow-400 text-sm">{destination.star}</p>

                    <div className="flex justify-between items-center pt-3 gap-x-6">
                      <span className="text-lg font-bold text-red-400">₹{destination.price}</span>
                      <button className="px-5 py-2 bg-red-500 text-white rounded-lg text-sm font-semibold hover:bg-white hover:text-black transition">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default FeatureDestination
