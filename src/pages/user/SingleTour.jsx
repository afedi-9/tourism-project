import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AttractionCard from "../../Components/AttractionCard";
import ReommendCard from "../../Components/ReommendCard";
import ReviewCard from "../../Components/ReviewCard";
import Footer from "../../Components/Footer";
import { Link, useParams } from "react-router";
import { apiGetSingleTour } from "../../services/tours";

const SingleTour = () => {
  const [startDate, setStartDate] = useState(new Date("2025-05-21"));
  const [travelers, setTravelers] = useState(2); // default to 2 adults

  const { id } = useParams();

  const [ad, setAd] = useState({});

  const getAd = async () => {
    try {
      const response = await apiGetSingleTour(id);
      setAd(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAd();
  }, []);

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
              {/* Share Icon SVG */}
            </button>
            <button className="flex items-center gap-1 py-2 px-4 rounded-full border border-gray-300">
              {/* Heart Icon SVG */}
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
          <a href="#reviews" className="text-gray-600 hover:underline">(200 reviews)</a>
          <div className="flex items-center">
            <span className="bg-red-100 text-red-500 p-1 rounded-full mr-1">❤</span>
            <span>Recommended by 97% of travelers</span>
            <span className="ml-1">ⓘ</span>
          </div>
        </div>

        {/* Write a review link */}
        <div className="mb-6">
          <a href="#write-review" className="flex items-center gap-1 text-gray-700 hover:underline">
            {/* Pencil Icon SVG */}
            Write a review
          </a>
        </div>

        {/* Image gallery */}
        <div className="grid grid-cols-2 gap-2 mb-6">
          <div className="relative h-96 overflow-hidden rounded-lg">
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="Independence Arch" className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-rows-2 gap-2">
            <div className="relative h-48 overflow-hidden rounded-lg">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="Tourists at landmark" className="w-full h-full object-cover" />
            </div>
            <div className="relative h-48 overflow-hidden rounded-lg">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="Tour group" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Tabs navigation */}
        <div className="border-b border-gray-300 mb-6">
          <nav className="flex overflow-x-auto space-x-8">
            <a href="#overview" className="border-b-2 border-black px-1 py-4 text-sm font-medium">Overview</a>
            <a href="#details" className="text-gray-500 hover:text-gray-700 px-1 py-4 text-sm font-medium">Details</a>
            <a href="#itinerary" className="text-gray-500 hover:text-gray-700 px-1 py-4 text-sm font-medium">Itinerary</a>
            <a href="#operator" className="text-gray-500 hover:text-gray-700 px-1 py-4 text-sm font-medium">Operator</a>
            <a href="#reviews" className="text-gray-500 hover:text-gray-700 px-1 py-4 text-sm font-medium">Reviews</a>
          </nav>
        </div>

        {/* Main content area */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left column - Tour details */}
          <div className="md:col-span-2 space-y-6">
            <section>
              <h2 className="text-xl font-bold mb-4">About</h2>
              <p className="text-gray-700">
                See the best of what Accra has to offer in just one day with this private tour. You'll learn about contemporary Ghanaian history at Kwame Nkrumah Memorial Park, Independence Square, and the James Town Lighthouse, go shopping...
                <button className="text-blue-600 font-medium ml-2">Read more</button>
              </p>
            </section>

            {/* Tour features */}
            <section className="space-y-4 border-t border-gray-200 pt-6">
              {/* Free cancellation */}
              <div className="flex items-start gap-3">
                <div className="bg-yellow-100 p-2 rounded-full">{/* Clock Icon SVG */}</div>
                <div>
                  <p className="font-medium">Free Cancellation</p>
                  <p className="text-sm text-gray-600">• Cancel anytime before May 20 for full refund.</p>
                </div>
              </div>

              {/* Reserve now & pay later */}
              <div className="flex items-start gap-3">
                <div className="bg-gray-100 p-2 rounded-full">{/* Calendar Icon SVG */}</div>
                <div>
                  <p className="font-medium">Reserve now, pay later</p>
                  <p className="text-sm text-gray-600">• Secure your spot while staying flexible.</p>
                  <p className="text-xs font-medium mt-1">Reserve Now & Pay Later Eligible</p>
                </div>
              </div>

              {/* Lowest price guarantee */}
              <div className="flex items-start gap-3">
                <div className="bg-gray-100 p-2 rounded-full">{/* Guarantee Icon SVG */}</div>
                <div>
                  <p className="font-medium">Lowest price guarantee</p>
                  <p className="text-sm text-gray-600">• Find a lower price online? Get the difference refunded!</p>
                </div>
              </div>
            </section>

            {/* Additional information */}
            <section className="space-y-4 border-t border-gray-200 pt-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">{/* Ages Icon SVG */}<span>Ages 0-79</span></div>
                <div className="flex items-center gap-3">{/* Duration Icon SVG */}<span>Duration: 6h</span></div>
                <div className="flex items-center gap-3">{/* Time Icon SVG */}<span>Start time: Check availability</span></div>
                <div className="flex items-center gap-3">{/* Ticket Icon SVG */}<span>Mobile ticket</span></div>
              </div>
            </section>

            <section className="pt-2">           
              <a href="#all-things" className="flex items-center gap-2 text-gray-700">{/* Arrow Icon SVG */}See all Things to Do in Accra</a>
            </section>
          </div>

          {/* Right column - Booking */}
          <div className="space-y-6">
            {/* Booking form header */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h2 className="text-xl font-bold mb-2">From $80.00</h2>
              <p className="text-gray-600 mb-6">per adult</p>

              {/* Date & travelers form */}
              <div className="space-y-4">
                <h3 className="font-medium">Select date and travelers</h3>

                <div className="border rounded-md p-3">
                  <label className="block text-sm font-medium mb-1">Tour Date</label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="EEEE, MMMM d, yyyy"
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    minDate={new Date("2025-01-01")}
                    maxDate={new Date("2025-12-31")}
                    placeholderText="Select a date"
                    showPopperArrow={false}
                  />
                </div>

                <div className="border rounded-md p-3">
                  <label className="block text-sm font-medium mb-1">Travelers</label>
                  <div className="flex items-center gap-2">
                    {/* Travelers Icon SVG */}
                    <input
                      type="number"
                      min="1"
                      max="10"
                      value={travelers}
                      onChange={(e) => setTravelers(parseInt(e.target.value, 10))}
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-100 rounded-md p-3">
                  <div className="flex gap-2">
                    {/* Clock Icon SVG */}
                    <div>
                      <p className="font-medium">Free Cancellation</p>
                      <p className="text-sm">• Cancel anytime before May 20 for full refund.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-100 rounded-md p-3">
                  <div className="flex gap-2">
                    {/* Calendar Icon SVG */}
                    <div>
                      <p className="font-medium">Reserve now, pay later</p>
                      <p className="text-sm">• Secure your spot while staying flexible.</p>
                      <p className="text-xs font-medium mt-1">Reserve Now & Pay Later Eligible</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing summary */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-medium">Experience the Beauty, History and the Culture Of Accra in a Day</h2>
                <div className="flex items-center">
                  <span className="text-green-500 mr-1">●</span><span>4.8</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">Pickup included</p>

              <div className="space-y-2">
                <div className="flex justify-between"><span>{travelers} Adults x $80.00</span><span>${(travelers * 80).toFixed(2)}</span></div>
                <div className="flex justify-between font-bold"><span>Total</span><span>${(travelers * 80).toFixed(2)}</span></div>
                <p className="text-sm text-gray-500">(Price includes taxes and booking fees)</p>
              </div>
            </div>

            {/* Reserve Now button at fixed time */}
            <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
              <span className="font-medium">9:00 AM</span>
              
              <Link to="/bookings">
    <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg font-medium">
      Reserve Now
    </button>
  </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Promoted experiences */}
      <section className="bg-white">
        <div className="mx-[7%]">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center pt-10">Explore our promoted experiences</h2>
          <p className="text-gray-500 text-sm mb-2 text-center">Explore your desired places</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
            {/* { ads.map((ad) => <ReommendCard key={ad.id}  ad={ad}/>)} */}
          </div>
        </div>
      </section>

      {/* Reviews section */}
      <section>
        <ReviewCard />
      </section>
      <Footer/>
    </div>
  );
};

export default SingleTour;
