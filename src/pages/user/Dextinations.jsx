import React from "react";
import DestinationCard from "../../Components/DestinationCard";
import { Filter, MapPin, Search } from "lucide-react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@radix-ui/react-tabs";
import Footer from "../../Components/Footer";

const Dextinations = () => {
  const destinations = [
    {
      id: "accra",
      name: "Accra",
      location: "Greater Accra Region",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Ghana's capital city offers a blend of modern and traditional experiences with vibrant markets, museums, and beaches.",
      tags: ["Urban", "Cultural", "Beaches"],
      categories: ["Cultural", "Beaches"],
    },
    {
      id: "cape-coast",
      name: "Cape Coast Castle",
      location: "Central Region",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Home to the historic Cape Coast Castle and beautiful beaches, this coastal city is rich in history and natural beauty.",
      tags: ["Historical", "Beaches", "UNESCO Site"],
      categories: ["Historical", "Beaches", "Cultural"],
    },
    {
      id: "kumasi",
      name: "Kumasi",
      location: "Ashanti Region",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "The cultural heart of Ghana and home to the Ashanti Kingdom, featuring the famous Kejetia Market and cultural sites.",
      tags: ["Cultural", "Markets", "Historical"],
      categories: ["Cultural", "Historical"],
    },
    {
      id: "mole",
      name: "Mole National Park",
      location: "Northern Region",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Ghana's largest wildlife sanctuary offering safari experiences and opportunities to see elephants and other wildlife.",
      tags: ["Wildlife", "Safari", "Nature"],
      categories: ["Nature", "Wildlife", "Adventure"],
    },
    {
      id: "volta",
      name: "Volta Region",
      location: "Eastern Ghana",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Home to mountains, waterfalls, and Lake Volta, offering adventure activities and stunning natural landscapes.",
      tags: ["Adventure", "Nature", "Hiking"],
      categories: ["Adventure", "Nature"],
    },
    {
      id: "kakum",
      name: "Kakum National Park",
      location: "Central Region",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Famous for its canopy walkway suspended above the rainforest, offering unique views of the forest ecosystem.",
      tags: ["Nature", "Adventure", "Wildlife"],
      categories: ["Nature", "Wildlife", "Adventure"],
    },
    {
      id: "elmina",
      name: "Elmina Castle",
      location: "Central Region",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "A UNESCO World Heritage site and one of the oldest European buildings outside Europe, with a powerful history.",
      tags: ["Historical", "UNESCO Site", "Cultural"],
      categories: ["Historical", "Cultural"],
    },
    {
      id: "ada-foah",
      name: "Ada Foah",
      location: "Greater Accra Region",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "A beautiful coastal area where the Volta River meets the Atlantic Ocean, offering beaches, water sports, and relaxation.",
      tags: ["Beaches", "Water Sports", "Nature"],
      categories: ["Beaches", "Adventure", "Nature"],
    },
    {
      id: "aburi",
      name: "Aburi Botanical Gardens",
      location: "Eastern Region",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Historic botanical gardens established in 1890, offering a peaceful retreat with diverse plant species and walking trails.",
      tags: ["Nature", "Historical", "Gardens"],
      categories: ["Nature", "Historical"],
    },
  ];
  return (
    <div>
      <section>
        <div className="min-h-screen flex flex-col">
          {/* Hero Section */}
          <div
            className="relative h-[50vh] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')",
            }}
          >
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Explore Ghana's Destinations
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                Discover the diverse attractions and breathtaking landscapes of
                Ghana
              </p>
            </div>
          </div>

          {/* Search and Filter Section */}
          <div className="bg-white py-8 border-b">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                {/* Search Input - Will be connected to API search endpoint */}
                <div className="relative w-full md:w-1/2">
                  <Search
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <input
                    placeholder="Search destinations..."
                    className="pl-10 bg-gray-50 border-gray-200"
                    // When implementing search functionality:
                    // onChange={(e) => handleSearch(e.target.value)}
                  />
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                  <button
                    variant="outline"
                    className="flex items-center gap-2"
                    // When implementing filter functionality:
                    // onClick={() => setShowFilters(!showFilters)}
                  >
                    <Filter size={16} />
                    <span>Filters</span>
                  </button>
                  <button
                    className="bg-teal-600 hover:bg-teal-700"
                    // When implementing search functionality:
                    // onClick={handleSearchSubmit}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-gray-50 py-12">
            <div className="container mx-auto px-4">
              {/* Tabs for Categories */}
              <Tabs defaultValue="all" className="mb-10">
                <TabsList className="grid grid-cols-2 md:grid-cols-6 gap-2 bg-transparent h-auto">
                  <TabsTrigger
                    value="all"
                    className="data-[state=active]:bg-teal-600 data-[state=active]:text-white"
                  >
                    All Categories
                  </TabsTrigger>
                  <TabsTrigger
                    value="cultural"
                    className="data-[state=active]:bg-teal-600 data-[state=active]:text-white"
                  >
                    Cultural
                  </TabsTrigger>
                  <TabsTrigger
                    value="nature"
                    className="data-[state=active]:bg-teal-600 data-[state=active]:text-white"
                  >
                    Nature & Wildlife
                  </TabsTrigger>
                  <TabsTrigger
                    value="historical"
                    className="data-[state=active]:bg-teal-600 data-[state=active]:text-white"
                  >
                    Historical
                  </TabsTrigger>
                  <TabsTrigger
                    value="beaches"
                    className="data-[state=active]:bg-teal-600 data-[state=active]:text-white"
                  >
                    Beaches
                  </TabsTrigger>
                  <TabsTrigger
                    value="adventure"
                    className="data-[state=active]:bg-teal-600 data-[state=active]:text-white"
                  >
                    Adventure
                  </TabsTrigger>
                </TabsList>

                {/* All Categories Tab Content */}
                <TabsContent value="all" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Display all destinations */}
                    {destinations.map((destination, index) => (
                      <DestinationCard key={index} destination={destination} />
                    ))}
                  </div>
                </TabsContent>

                {/* Cultural Tab Content */}
                <TabsContent value="cultural" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Filter destinations by category */}
                    {destinations
                      .filter((dest) => dest.categories.includes("Cultural"))
                      .map((destination, index) => (
                        <DestinationCard
                          key={index}
                          destination={destination}
                        />
                      ))}
                  </div>
                </TabsContent>

                {/* Nature & Wildlife Tab Content */}
                <TabsContent value="nature" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {destinations
                      .filter(
                        (dest) =>
                          dest.categories.includes("Nature") ||
                          dest.categories.includes("Wildlife")
                      )
                      .map((destination, index) => (
                        <DestinationCard
                          key={index}
                          destination={destination}
                        />
                      ))}
                  </div>
                </TabsContent>

                {/* Historical Tab Content */}
                <TabsContent value="historical" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {destinations
                      .filter((dest) => dest.categories.includes("Historical"))
                      .map((destination, index) => (
                        <DestinationCard
                          key={index}
                          destination={destination}
                        />
                      ))}
                  </div>
                </TabsContent>

                {/* Beaches Tab Content */}
                <TabsContent value="beaches" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {destinations
                      .filter((dest) => dest.categories.includes("Beaches"))
                      .map((destination, index) => (
                        <DestinationCard
                          key={index}
                          destination={destination}
                        />
                      ))}
                  </div>
                </TabsContent>

                {/* Adventure Tab Content */}
                <TabsContent value="adventure" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {destinations
                      .filter((dest) => dest.categories.includes("Adventure"))
                      .map((destination, index) => (
                        <DestinationCard
                          key={index}
                          destination={destination}
                        />
                      ))}
                  </div>
                </TabsContent>
              </Tabs>

              {/* Featured Destination */}
              <div className="mt-16">
                <h2 className="text-2xl font-bold mb-6">
                  Featured Destination
                </h2>
                <div className="bg-white rounded-xl overflow-hidden shadow-md">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative h-64 lg:h-auto">
                      <img
                        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                        alt="Cape Coast Castle"
                        className="object-cover"
                        fill
                      />
                    </div>
                    
                    <div className="p-6 lg:p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
  <div className="flex items-center mb-3">
    <MapPin className="h-5 w-5 text-teal-600 mr-2" />
    <span className="text-sm text-gray-700 font-medium">
      Central Region, Ghana
    </span>
  </div>
  <h3 className="text-2xl font-bold text-slate-800 mb-3">
    Cape Coast Castle
  </h3>
  <p className="text-gray-600 mb-5 leading-relaxed">
    Cape Coast Castle is one of about forty "slave castles" built on the Gold Coast of West Africa by European traders. 
    It was originally built by the Swedes for trade in timber and gold, but later used in the trans-Atlantic slave trade.
  </p>
  <div className="flex flex-wrap gap-2 mb-6">
    <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-3 py-1 rounded-full">
      Historical
    </span>
    <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full">
      UNESCO Site
    </span>
    <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full">
      Cultural
    </span>
  </div>
  <button className="w-full py-2.5 px-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-medium text-sm rounded-lg shadow hover:shadow-md hover:from-teal-600 hover:to-teal-700 transition-all duration-300">
    Explore Tours
  </button>
</div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Dextinations;
