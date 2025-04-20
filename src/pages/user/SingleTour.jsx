import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AttractionCard from "../../Components/AttractionCard";
import ReommendCard from "../../Components/ReommendCard";
import ReviewCard from "../../Components/ReviewCard";

const SingleTour = () => {
  const [startDate, setStartDate] = useState(new Date("2025-05-21"));
  const [travelers, setTravelers] = useState(4);

  return (
    <div>
      <section className="max-w-7xl mx-auto font-sans w-[80%]">
        {/* Header with title and actions */}
        <div className="flex justify-between items-center mb-4 py-2">
          <h1 className="text-2xl md:text-3xl font-bold">
            Experience the Beauty, History and the Culture Of Accra in a Day
          </h1>
          <div className="flex gap-2">
            <button className="p-2 rounded-full border border-gray-300">
              <span className="sr-only">Share</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
            </button>
            <button className="flex items-center gap-1 py-2 px-4 rounded-full border border-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              Save
            </button>
          </div>
        </div>

        {/* Rating and reviews */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-medium">4.8</span>
          <div className="flex">
            <span className="text-green-500">●●●●●</span>
          </div>
          <a href="#reviews" className="text-gray-600 hover:underline">
            (200 reviews)
          </a>
          <div className="flex items-center">
            <span className="bg-red-100 text-red-500 p-1 rounded-full mr-1">
              ❤
            </span>
            <span>Recommended by 97% of travelers</span>
            <span className="ml-1">ⓘ</span>
          </div>
        </div>

        {/* Write a review link */}
        <div className="mb-6">
          <a
            href="#write-review"
            className="flex items-center gap-1 text-gray-700 hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
            Write a review
          </a>
        </div>

        {/* Image gallery */}
        <div className="grid grid-cols-2 gap-2 mb-6">
          <div className="relative h-96 overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
              alt="Independence Arch"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-rows-2 gap-2">
            <div className="relative h-48 overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                alt="Tourists at landmark"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-48 overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                alt="Tour group"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Tabs navigation */}
        <div className="border-b border-gray-300 mb-6">
          <nav className="flex overflow-x-auto space-x-8">
            <a
              href="#overview"
              className="border-b-2 border-black px-1 py-4 text-sm font-medium"
            >
              Overview
            </a>
            <a
              href="#details"
              className="text-gray-500 hover:text-gray-700 px-1 py-4 text-sm font-medium"
            >
              Details
            </a>
            <a
              href="#itinerary"
              className="text-gray-500 hover:text-gray-700 px-1 py-4 text-sm font-medium"
            >
              Itinerary
            </a>
            <a
              href="#operator"
              className="text-gray-500 hover:text-gray-700 px-1 py-4 text-sm font-medium"
            >
              Operator
            </a>
            <a
              href="#reviews"
              className="text-gray-500 hover:text-gray-700 px-1 py-4 text-sm font-medium"
            >
              Reviews
            </a>
          </nav>
        </div>

        {/* Main content area */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left column - Tour details */}
          <div className="md:col-span-2 space-y-6">
            <section>
              <h2 className="text-xl font-bold mb-4">About</h2>
              <p className="text-gray-700">
                See the best of what Accra has to offer in just one day with
                this private tour. You'll learn about contemporary Ghanaian
                history at Kwame Nkrumah Memorial Park, Independence Square, and
                the James Town Lighthouse, go shopping...
                <button className="text-blue-600 font-medium">Read more</button>
              </p>
            </section>

            {/* Tour features */}
            <section className="space-y-4 border-t border-gray-200 pt-6">
              <div className="flex items-start gap-3">
                <div className="bg-yellow-100 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Free cancellation</p>
                  <p className="text-sm text-gray-600">
                    • Full refund if cancelled up to 24 hours before the
                    experience starts (local time).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-gray-100 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Reserve now & pay later</p>
                  <p className="text-sm text-gray-600">
                    • Secure your spot while staying flexible.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-gray-100 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Lowest price guarantee</p>
                  <p className="text-sm text-gray-600">
                    • Find a lower price online? Get the difference refunded!
                  </p>
                </div>
              </div>
            </section>

            {/* Tour information */}
            <section className="space-y-4 border-t border-gray-200 pt-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span>Ages 0-79</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Duration: 6h</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Start time: Check availability</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Mobile ticket</span>
                </div>
              </div>
            </section>

            <section className="pt-2">
              <a
                href="#all-things"
                className="flex items-center gap-2 text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                See all Things to Do in Accra
              </a>
            </section>

            {/* Second tab navigation */}
            

            {/* Accordion sections */}
          
          </div>

          {/* Right column - Booking */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h2 className="text-xl font-bold mb-2">From $80.00</h2>
              <p className="text-gray-600 mb-6">per adult</p>

              <div className="space-y-4">
                <h3 className="font-medium">Select date and travelers</h3>

                {/* Updated Date Picker */}
                <div className="border rounded-md p-3">
                  <label className="block text-sm font-medium mb-1">
                    Tour Date
                  </label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="PPPP" // "Wednesday, May 21, 2025"
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    minDate={new Date("2025-01-01")}
                    maxDate={new Date("2025-12-31")}
                    placeholderText="Select a date"
                    showPopperArrow={false}
                  />
                </div>

                <div className="border rounded-md p-3">
                  <label className="block text-sm font-medium mb-1">
                    Travelers
                  </label>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <input
                      type="number"
                      min="1"
                      max="10"
                      value={travelers}
                      onChange={(e) => setTravelers(parseInt(e.target.value))}
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-100 rounded-md p-3">
                  <div className="flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <p className="font-medium">Free Cancellation</p>
                      <p className="text-sm">
                        • Cancel anytime before Apr 20 for full refund.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-medium">
                  Experience the Beauty, History and the Culture Of Accra in a
                  Day
                </h2>
                <div className="flex items-center">
                  <span className="text-green-500 mr-1">●</span>
                  <span>4.8</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">Pickup included</p>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>{travelers} Adults x $80.00</span>
                  <span>${(travelers * 80).toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>${(travelers * 80).toFixed(2)}</span>
                </div>
                <p className="text-sm text-gray-500">
                  (Price includes taxes and booking fees)
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
              <span className="text-gray-700">from $80.00</span>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg font-medium">
                Check availability
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-[7%]">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center pt-10">
          Explore our promoted experiences
          </h2>
          <p className="text-gray-500 text-sm mb-2 text-center">
            Explore your desire places
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
            {[1, 2, 3, 4].map((recommend, index) => {
              return <ReommendCard key={index} />;
            })}
          </div>
        </div>
      </section>

      <section>
        <ReviewCard/>
      </section>
    </div>
  );
};

export default SingleTour;
