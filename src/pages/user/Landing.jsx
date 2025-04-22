import React, { useState } from "react";
import RecentlyviewedCard from "../../Components/RecentlyviewedCard";
import ReommendCard from "../../Components/ReommendCard";
import ChooseCard from "../../Components/ChooseCard";
import AttractionCard from "../../Components/AttractionCard";
import { Calendar, Search } from "lucide-react";
import DatePicker from "react-datepicker";
import Footer from "../../Components/Footer";

const Landing = () => {
  const [startDate, setStartDate] = useState(null);
  return (
    <div>
      <div
        className="relative h-[80vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-white px-4 pt-32 sm:pt-36 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-bold mb-2">
            Discover Ghana's Beauty
          </h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Explore the rich culture, stunning landscapes, and unforgettable
            experiences across Ghana.
          </p>
          <p className="text-lg sm:text-xl mb-6">
            Plan better with 300,000+ travel experiences.
          </p>

          {/* Search Box */}
          <div className="bg-white rounded-2xl shadow-lg px-4 py-4 sm:py-3 flex flex-col md:flex-row items-stretch md:items-center gap-4 w-full max-w-4xl mx-auto">
            <div className="flex-1 flex flex-col md:border-r md:pr-4">
              <label className="text-sm font-semibold text-gray-800 mb-1">
                Where to?
              </label>
              <input
                type="text"
                placeholder="Search for a place or activity"
                className="w-full outline-none bg-transparent text-sm text-gray-700 placeholder:text-gray-400"
              />
            </div>

            {/* When */}
            <div className="flex-1 flex flex-col md:pl-4">
              <label className="text-sm font-semibold text-gray-800 mb-1">
                When
              </label>
              <div className="flex items-center gap-2">
                <Calendar className="text-gray-500" size={18} />
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  placeholderText="Select Dates"
                  className="w-full outline-none bg-transparent text-sm text-gray-700"
                />
              </div>
            </div>

            {/* Search Button */}
            <div className="flex justify-center md:justify-end">
              <button className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full flex items-center justify-center w-full md:w-auto">
                <Search size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <ChooseCard />

      <section className=" bg-[#F7F7F7]">
        <div className="mx-[7%]">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center pt-10">
            Popular Locations
          </h2>
          <p className="text-gray-500 text-sm mb-2 text-center">
            Explore your desire places
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
            {[1, 2, 3, 4,].map((card, index) => {
              return <RecentlyviewedCard key={index} />;
            })}
          </div>
        </div>
      </section>

      {/* Flexible Booking Section */}
      <section className="bg-[#ebf9f7] py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Keep things
            <br />
            flexible
          </h2>
          <p className="max-w-xl mx-auto text-gray-700 text-base mb-8">
            Use Reserve Now &amp; Pay Later to secure the activities you don't
            want to miss without being locked in.
          </p>
          <button className="bg-teal-600 hover:bg-teal-700">Learn More</button>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-[7%]">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center pt-10">
            Popular Locations
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

      <section className="bg-[#F7F7F7] px-4 sm:px-6 lg:px-[9%] py-6">
        <div className="max-w-6xl mx-auto font-sans">
          <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">
            Top attractions in Ghana
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[1, 2, 3, 4, 5, 6].map((at, index) => {
              return <AttractionCard key={index} />;
            })}
          </div>
        </div>
      </section>
      <section>
        {/* Call to Action - New Addition */}
        <section className="bg-teal-600 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Explore Ghana?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-teal-50">
              Sign up today and get exclusive access to special offers,
              personalized recommendations, and travel tips.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-teal-400"
              />
              <button className="bg-white text-teal-600 hover:bg-teal-50">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </section>
      <Footer/>
    </div>
  );
};

export default Landing;
