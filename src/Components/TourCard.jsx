import { Calendar, Clock, Heart, MapPin, Star, User } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const TourCard = ({tour}) => {
  return (
    <div>
        <section>
        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="relative md:col-span-1">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
            alt={tour.title}
            className="object-cover h-full w-full"
            width={300}
            height={200}
          />
          <div className="absolute top-3 right-3 bg-white p-1.5 rounded-full">
            <Heart className="h-4 w-4 text-gray-500 hover:text-red-500 cursor-pointer" />
          </div>
          {tour.featured && (
            <div className="absolute top-3 left-3 bg-teal-600 text-white text-xs font-semibold px-2 py-1 rounded">
              Featured
            </div>
          )}
        </div>

        <div className="p-4 md:p-6 md:col-span-2">
          <div className="flex items-center mb-2">
            <MapPin className="h-4 w-4 text-teal-600 mr-1" />
            <span className="text-sm text-gray-600">{tour.location}</span>
          </div>

          <h3 className="text-xl font-bold mb-2">{tour.title}</h3>

          <div className="flex items-center mb-3">
            <div className="flex text-yellow-500 mr-1">
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className={`h-4 w-4 ${tour.rating >= 4.8 ? "fill-current" : "text-yellow-300"}`} />
            </div>
            <span className="text-sm text-gray-600">
              {tour.rating} ({tour.reviewCount} reviews)
            </span>
          </div>

          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{tour.description}</p>

          <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Clock className="h-4 w-4 text-teal-600 mr-1" />
              <span>{tour.duration}</span>
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 text-teal-600 mr-1" />
              <span>{tour.groupSize}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 text-teal-600 mr-1" />
              <span>{tour.availability}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {tour.tags.map((tag, index) => (
              <span key={index} className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="font-bold text-teal-600 text-xl">${tour.price}</span>
              <span className="text-sm text-gray-500 ml-1">per person</span>
            </div>
            <Link href={`/tours/${tour.id}`}>
              <button className="bg-teal-600 hover:bg-teal-700">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
        </section>
    </div>
  )
}

export default TourCard