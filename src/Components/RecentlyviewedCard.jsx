import { Heart, MapIcon, MapPin, Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const RecentlyviewedCard = () => {
  return (
  
    <div>
      <section>
        <Link to={`tours/:id`}>
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-48">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                className="object-cover"
                
              />
              <div className="absolute top-3 right-3 bg-white p-1.5 rounded-full">
                <Heart className="h-4 w-4 text-gray-500 hover:text-red-500 cursor-pointer" />
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center mb-2">
                <MapPin className="h-4 w-4 text-teal-600 mr-1" />
                <span className="text-sm text-gray-600">Accra, Ghana</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-1">Labadi Beach</h3>
              <div className="flex items-center mb-2">
                <Star className="h-4 w-4 text-yellow-500 mr-1" />
                <span className="text-sm text-gray-600">4.8 (120 reviews)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-teal-600">$120</span>
                <span className="text-sm text-gray-500">per person</span>
              </div>
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default RecentlyviewedCard;
