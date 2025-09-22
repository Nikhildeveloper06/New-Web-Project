import React from 'react'
import { Plane, Hotel, Map, Camera, Headphones, Shield } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: <Plane />,
      title: "Smart Flight Deals",
      description: "Save big with exclusive discounts on top airlines and smooth, hassle-free bookings."
    },
    {
      icon: <Hotel />,
      title: "Curated Stays",
      description: "From boutique hotels to luxury resorts — every stay is handpicked for comfort and style."
    },
    {
      icon: <Map />,
      title: "Personalized Journeys",
      description: "Travel your way with itineraries designed around your interests, pace, and budget."
    },
    {
      icon: <Camera />,
      title: "Unforgettable Experiences",
      description: "Guided tours and activities that showcase culture, history, and hidden gems."
    },
    {
      icon: <Headphones />,
      title: "24/7 Travel Assistance",
      description: "Round-the-clock support so you’re never alone, no matter where your journey takes you."
    },
    {
      icon: <Shield />,
      title: "Secure Travel Protection",
      description: "Comprehensive insurance and coverage options for peace of mind on every trip."
    }
  ]

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: "#F0F0F0" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl font-serif text-gray-800">
            Why Choose Us ✈️
          </h2>
          <p className="mt-4 text-gray-600 md:text-lg max-w-2xl mx-auto">
            Discover the services that make your journey seamless, safe, and truly unforgettable.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-xl p-8 bg-white border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Icon Wrapper */}
              <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-full bg-red-100 group-hover:bg-red-500 transition">
                {React.cloneElement(feature.icon, {
                  className: "h-7 w-7 text-red-500 group-hover:text-white transition"
                })}
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-red-500 transition">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
