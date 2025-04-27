import React, { useState } from "react";
import RecentlyviewedCard from "../../Components/RecentlyviewedCard";
import ReommendCard from "../../Components/ReommendCard";
import ChooseCard from "../../Components/ChooseCard";
import AttractionCard from "../../Components/AttractionCard";


import Footer from "../../Components/Footer";
import HeroSliderCard from "../../Components/HeroSliderCard";
import { Link } from "react-router";

const Landing = () => {
  const [startDate, setStartDate] = useState(null);
  return (
    <div>
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSliderCard/>
        
        
        {/* Why Choose Us */}
        <ChooseCard />

        {/* Featured Destinations */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-2">
                  Featured Destinations
                </h2>
                <p className="text-gray-500">
                  Explore Ghana's most popular locations
                </p>
              </div>
              <button className="mt-4 md:mt-0 border border-gray-300 hover:bg-gray-50 px-4 py-2 rounded-md">
                View All Destinations
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
              {[1, 2, 3, 4].map((card, index) => {
                return <RecentlyviewedCard key={index} />;
              })}
            </div>
          </div>
        </section>

        {/* Testimonials */}
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


        <section className="py-16 bg-gradient-to-br from-[#ebf9f7] to-[#d7f5f0]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Left Content */}
              <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
                  Keep things <span className="text-teal-600">flexible</span>
                </h2>
                <p className="text-gray-700 text-lg mb-8 max-w-xl">
                  Use Reserve Now &amp; Pay Later to secure the activities you don't want to miss without being locked
                  in.
                </p>
                <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300 inline-flex items-center">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              {/* Right Content - Feature Cards */}
              <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-lg shadow-md">
                  <div className="rounded-full bg-teal-100 w-12 h-12 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-teal-600"
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
                  <h3 className="font-semibold text-lg mb-2">Book in Advance</h3>
                  <p className="text-gray-600">Secure your spot early without immediate payment</p>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-md">
                  <div className="rounded-full bg-teal-100 w-12 h-12 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-teal-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Free Cancellation</h3>
                  <p className="text-gray-600">Change your plans with no penalty fees</p>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-md">
                  <div className="rounded-full bg-teal-100 w-12 h-12 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-teal-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Pay Later</h3>
                  <p className="text-gray-600">Pay when you're ready, closer to your travel date</p>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-md">
                  <div className="rounded-full bg-teal-100 w-12 h-12 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-teal-600"
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
                  <h3 className="font-semibold text-lg mb-2">Flexible Pricing</h3>
                  <p className="text-gray-600">Lock in today's price for future adventures</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-teal-500">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience Ghana?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Start planning your journey to discover the vibrant culture, breathtaking landscapes, and warm hospitality
              of Ghana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={"/tours"}>
              <button className="bg-white text-teal-500 hover:bg-white/90 px-6 py-3 rounded-md font-medium">
                Plan Your Trip
              </button>
              </Link>
              
              <Link to={"/contact"}>

              <button className="text-white border border-white hover:bg-white/10 px-6 py-3 rounded-md font-medium">
                Contact Us
              </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Flexible Booking Section */}

      <section>{/* Call to Action - New Addition */}</section>
      <Footer />
    </div>
  );
};

export default Landing;
