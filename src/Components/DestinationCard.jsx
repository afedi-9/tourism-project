import { Link, MapPin, MapPinIcon } from 'lucide-react'
import React from 'react'

const DestinationCard = ({destination}) => {
  return (
    <div>
        <section>
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group">
      <div className="relative h-48">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          alt={destination.name}
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-4">
          <h3 className="text-xl font-bold text-white">{destination.name}</h3>
          <div className="flex items-center text-white/90">
            <MapPin className="h-3 w-3 mr-1" />
            <span className="text-sm">{destination.location}</span>
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{destination.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {/* Display tags/categories for each destination */}
          {destination.tags.map((tag, index) => (
            <span key={index} className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>
        <Link href={`/destinations/${destination.id}`}>
          <button variant="outline" className="w-full border-teal-600 text-teal-600 hover:bg-teal-50">
            View Details
          </button>
        </Link>
      </div>
    </div>
        </section>
    </div>
  )
}

export default DestinationCard