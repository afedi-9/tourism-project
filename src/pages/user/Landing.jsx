import React from "react";
import RecentlyviewedCard from "../../Components/RecentlyviewedCard";
import ReommendCard from "../../Components/ReommendCard";

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

        <header className="absolute top-0 left-0 w-full flex items-center justify-between p-6 z-10">
          <h1 className="text-white text-2xl font-bold">Tour Guide</h1>
          <nav className="space-x-6 text-white font-medium">
            <a href="#">Wishlist</a>
            <a href="#">Cart</a>
            <a href="#">Bookings</a>
          </nav>
        </header>

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

      <section>
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Recently viewed
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
          {[1, 2, 3, 4].map((card, index) => {
            return <RecentlyviewedCard key={index} />;
          })}
        </div>
      </section>

      <section>
        <div >
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
        You might like these
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
        {
          [1,2,3,4,].map((recommend, index)=>{
            return(
              <ReommendCard
              key={index}
              
              />
            )
          })
        }

        </div>
        

        </div>
      </section>
    </div>
  );
};

export default Landing;
