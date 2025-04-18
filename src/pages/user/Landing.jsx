import React from "react";
import RecentlyviewedCard from "../../Components/RecentlyviewedCard";
import ReommendCard from "../../Components/ReommendCard";
import ChooseCard from "../../Components/ChooseCard";
import AttractionCard from "../../Components/AttractionCard";

const Landing = () => {
  return (
    <div>
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 text-white px-8 pt-40 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Travel memories
            <br /> you'll never forget
          </h2>
          <p className="mt-4 text-lg">
            Goreme Hot Air Balloon Flight at Sunrise
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200">
            Learn More
          </button>
        </div>
      </div>

      <ChooseCard/>

      <section className=" bg-[#F7F7F7]">
        <div className="mx-[7%]">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center pt-10">
            Popular Locations
          </h2>
          <p className="text-gray-500 text-sm mb-2 text-center">
            Explore your desire places
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
            {[1, 2, 3, 4].map((card, index) => {
              return <RecentlyviewedCard key={index} />;
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#ebf9f7] py-16 text-center mt-3">
      <h2 className="text-3xl font-bold mb-4">Keep things<br />flexible</h2>
      <p className="max-w-xl mx-auto text-gray-700 text-base">
        Use Reserve Now &amp; Pay Later to secure the activities you don't want to miss without being locked in.
      </p>
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
    <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">Top attractions in Ghana</h1>

    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
      <AttractionCard />
      <AttractionCard />
      <AttractionCard />
      <AttractionCard />
      <AttractionCard />
      <AttractionCard />
    </div>
  </div>
</section>

     
    </div>
  );
};

export default Landing;
