import {  MapPin, MapPinIcon } from 'lucide-react'
import { Link } from 'react-router'
import React from 'react'

const DestinationCard = ({destination}) => {
  return (
    <section className="p-4">
  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group max-w-sm mx-auto">
    <div className="relative h-48">
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
        alt={destination.name}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full px-4 pb-4">
        <h3 className="text-xl font-semibold text-white drop-shadow">
          {destination.name}
        </h3>
        <div className="flex items-center text-white/90 text-sm mt-1">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{destination.location}</span>
        </div>
      </div>
    </div>
    <div className="p-4">
      <div className="flex flex-wrap gap-2 mb-4">
        {destination.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-teal-100 text-teal-800 text-xs font-semibold px-2.5 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <Link to={`/destinations/${destination.id}`} className="block">
        <button className="w-full py-2 px-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-medium text-sm rounded-lg shadow hover:shadow-md hover:from-teal-600 hover:to-teal-700 transition-all duration-300">
          View Details
        </button>
      </Link>
    </div>
  </div>
</section>

  )
}

export default DestinationCard