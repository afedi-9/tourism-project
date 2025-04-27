import React from "react";
import { Link } from "react-router";

const TourCard = ({ ad }) => {
  return (
    <div>
      <Link to={`/tours/${ad.id}`}>
        <div className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/3">
            <img
              src={`${ad.image}`}
              alt="Tour"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-6 md:w-2/3">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold">{ad.title}</h3>
              <div className="text-yellow-500 flex items-center">
                <span className="ml-1 text-gray-700">4.8 (156 reviews)</span>
              </div>
            </div>
            <p className="text-gray-500 mb-2">{ad.location}</p>
            <p className="text-gray-700 mb-4">{ad.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                Cultural
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                Historical
              </span>
              <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                City Tour
              </span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500 text-sm">
                  6 hours • Up to 12 people • Daily
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-teal-600">
                  {ad.rateCard}
                </p>
                <a
                  href="#"
                  className="bg-teal-600 text-white px-4 py-2 rounded inline-block mt-2 hover:bg-teal-700"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TourCard;
