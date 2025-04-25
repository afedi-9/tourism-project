import { MapPin } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const AttractionCard = () => {
  return (
    <section>
      <Link to={`/tours/:id`}>
      <div className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
  <div className="aspect-[4/3] relative">
    <img
      src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
      alt="Kakum National Park"
      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 p-4">
      <h3 className="text-lg lg:text-xl font-semibold text-white drop-shadow">
        Kakum National Park
      </h3>
      <div className="flex items-center text-white/90 text-sm mt-1">
        <MapPin className="h-4 w-4 mr-1" />
        <span>Central Region, Ghana</span>
      </div>
    </div>
  </div>
</div>

      </Link>
    </section>
  );
};

export default AttractionCard;
