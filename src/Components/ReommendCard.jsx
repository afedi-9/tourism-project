import { MapPin } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const ReommendCard = (ad) => {
  return (
    <div>
      <Link to={`/tours/:id`}>
      <div>
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
              alt="Tour"
              className="w-full h-56 object-cover"
            />
            <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5 text-red-500"
              >
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
            2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 
            2.09C13.09 3.81 14.76 3 16.5 3 
            19.58 3 22 5.42 22 8.5c0 3.78-3.4 
            6.86-8.55 11.54L12 21.35z"
                />
              </svg>
            </button>

            {/* User Profile Image */}
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User"
              className="w-10 h-10 rounded-full border-2 border-white absolute bottom-2 right-2 shadow-md"
            />
          </div>

          <div className="p-4 space-y-2">
          <div className="flex items-center mb-2">
                <MapPin className="h-4 w-4 text-teal-600 mr-1" />
                <span className="text-sm text-gray-600">Accra, Ghana</span>
              </div>
            <h3 className="text-lg font-semibold text-gray-800 leading-snug">
              Experience the Beauty
            </h3>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="text-green-600 font-semibold">4.8</span>
              <div className="flex gap-1">
                <span className="text-green-500 text-sm">●</span>
                <span className="text-green-500 text-sm">●</span>
                <span className="text-green-500 text-sm">●</span>
                <span className="text-green-500 text-sm">●</span>
                <span className="text-green-500 text-sm">●</span>
              </div>
              <span>(200)</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-red-500">
              ❤️ Recommended
            </div>

            <div className="text-sm text-gray-600">Private and Luxury</div>

            <div className="text-base font-semibold text-gray-800 pt-1">
              from <span className="text-black">$80.00</span> per adult
            </div>
          </div>
        </div>
      </div>
      </Link>
      
    </div>
  );
};

export default ReommendCard;
