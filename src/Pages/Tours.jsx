import React from 'react'
import TopBanner from '../Components/TopBanner'
import Bali from '../assets/Bali.jpg'
import Paris from '../assets/Paris.jpg'
import Tokyo from '../assets/Tokyo.jpg'
import India from '../assets/India.jpg'
import Venice from '../assets/Venice.jpg'
import { Clock, Star } from 'lucide-react'

const Tours = () => {
  const destinationJson = [
    { name: 'Bali', img: Bali, time: '6 Days · 5 Nights', star: '4.7 (256 reviews)', price: '69,999', tagline: 'Tropical paradise with beaches & temples' },
    { name: 'Venice', img: Venice, time: '5 Days · 4 Nights', star: '4.6 (180 reviews)', price: '84,499', tagline: 'Romantic gondola rides & timeless canals' },
    { name: 'Tokyo', img: Tokyo, time: '7 Days · 6 Nights', star: '4.8 (312 reviews)', price: '92,999', tagline: 'Where tradition meets futuristic vibes' },
    { name: 'India', img: India, time: '10 Days · 9 Nights', star: '4.5 (420 reviews)', price: '55,999', tagline: 'Spiritual journeys & diverse landscapes' },
    { name: 'Paris', img: Paris, time: '6 Days · 5 Nights', star: '4.9 (500 reviews)', price: '88,999', tagline: 'City of love, lights & haute couture' },
  ]

  return (
    <>
      <TopBanner  />
      <div className='max-w-7xl md:mx-auto my-12 px-6'>
        <h1 className='text-3xl lg:text-4xl font-serif mb-3 font-semibold text-center'>
          ✈️ Explore Our Top Destinations
        </h1>
        <p className='text-center text-gray-600 mb-10'>
          Unique experiences crafted for unforgettable journeys.
        </p>

        {/* New Card Grid */}
        <div className='grid gap-10 sm:grid-cols-2 lg:grid-cols-3'>
          {destinationJson.map((destination, index) => (
            <div 
              key={index}
              className='relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-500'
            >
              {/* Image Section */}
              <div className='relative h-52 w-full overflow-hidden rounded-t-2xl'>
                <img 
                  src={destination.img} 
                  alt={destination.name} 
                  className='w-full h-full object-cover transition-transform duration-500 hover:scale-110'
                />
                {/* Badge */}
                <span className='absolute top-4 left-4 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow'>
                  Popular
                </span>
              </div>

              {/* Details Section */}
              <div className='p-5'>
                <h3 className='text-2xl font-bold mb-2 text-gray-800'>{destination.name}</h3>
                <p className='flex items-center text-sm mb-1 gap-2 text-gray-600'>
                  <Clock size={16} /> {destination.time}
                </p>
                <p className='flex items-center gap-2 text-yellow-500 font-medium mb-2'>
                  <Star size={18} fill='gold' /> {destination.star}
                </p>
                <p className='text-gray-600 text-sm mb-4'>
                  {destination.tagline}
                </p>

                {/* Price & Buttons */}
                <div className='flex justify-between items-center'>
                  <span className='text-lg font-bold text-red-500'>₹{destination.price}</span>
                  <button className='px-4 py-2 bg-black text-white rounded-lg font-semibold hover:bg-red-500 transition'>
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className='text-center mt-12'>
          <button className='px-6 py-3 bg-gradient-to-r from-red-500 to-black text-white font-semibold rounded-xl shadow-lg hover:from-black hover:to-red-500 transition-all duration-500'>
            View All Tours
          </button>
        </div>
      </div>
    </>
  )
}

export default Tours
