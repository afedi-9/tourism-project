import { MapPin } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const AttractionCard = () => {
  return (
    <section>
      <Link to={`/tours/:id`}>
        <div className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
          <div className="aspect-[4/3] relative">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
              alt="Attraction"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <h3 className="text-white font-bold">Kakum National Park</h3>
            <div className="flex items-center text-white/90 text-sm">
              <MapPin className="h-3 w-3 mr-1" />
              <span>Central Region, Ghana</span>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default AttractionCard;
