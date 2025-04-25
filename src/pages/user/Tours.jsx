import React, { useEffect, useState } from 'react'
import Footer from '../../Components/Footer'
import TourCard from '../../Components/TourCard'
import { apiGetAllTours } from '../../services/tours';

const Tours = () => {
  const [ads, setAds] = useState([]);
    //featching data from api//
    const getAds = async () => {
      try {
        const response = await apiGetAllTours();
        setAds(response.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getAds();
    }, []);
  

  


  return (
    <div>
      <section>
        <div className="min-h-screen flex flex-col">
          {/* Hero Section */}
          <div
            className="relative h-[50vh] bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')",
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Unforgettable Tours & Experiences</h1>
              <p className="text-xl text-white/90 max-w-2xl">
                Discover the best guided tours and unique experiences across Ghana
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-gray-50 py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Filters Sidebar */}
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                    <h2 className="text-lg font-bold mb-4">Filter Tours</h2>

                    {/* Search */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
                      <div className="relative">
                        <input placeholder="Keywords..." className="pl-10 w-full p-2 border rounded" />
                      </div>
                    </div>

                    {/* Price Range */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-3">Price Range</label>
                      <input type="range" min="0" max="500" className="w-full mb-2" />
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>$0</span>
                        <span>$500+</span>
                      </div>
                    </div>

                    {/* Duration */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                      <select className="w-full p-2 border rounded">
                        <option value="any">Any duration</option>
                        <option value="half-day">Half-day tours</option>
                        <option value="full-day">Full-day tours</option>
                        <option value="multi-day">Multi-day tours</option>
                      </select>
                    </div>

                    {/* Tour Type */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Tour Type</label>
                      <select className="w-full p-2 border rounded">
                        <option value="any">Any type</option>
                        <option value="cultural">Cultural</option>
                        <option value="adventure">Adventure</option>
                        <option value="wildlife">Wildlife & Nature</option>
                        <option value="historical">Historical</option>
                        <option value="food">Food & Culinary</option>
                      </select>
                    </div>

                    {/* Group Size */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Group Size</label>
                      <select className="w-full p-2 border rounded">
                        <option value="any">Any size</option>
                        <option value="small">Small groups (1-8)</option>
                        <option value="medium">Medium groups (9-15)</option>
                        <option value="large">Large groups (16+)</option>
                        <option value="private">Private tours</option>
                      </select>
                    </div>

                    <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded">Apply Filters</button>
                  </div>
                </div>

                {/* Tours List */}
                <div className="lg:col-span-3">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Available Tours</h2>
                    <select className="p-2 border rounded w-48">
                      <option value="recommended">Recommended</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="rating">Highest Rated</option>
                      <option value="duration">Duration</option>
                    </select>
                  </div>

                  <div className="space-y-6">


                    {/* Tour Card 1 */}
                    {
                      ads.map((ad) => (
                        <TourCard key={ad.id} ad={ad} />
                      ))
                    }
                                     
                  </div>

                  {/* Pagination */}
                  <div className="flex justify-center mt-10">
                    <nav className="flex items-center gap-1">
                      <button className="w-9 h-9 flex items-center justify-center border rounded">
                        <span className="sr-only">Previous page</span>
                        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      <button className="w-9 h-9 flex items-center justify-center border rounded bg-teal-600 text-white">
                        1
                      </button>
                      <button className="w-9 h-9 flex items-center justify-center border rounded">
                        2
                      </button>
                      <button className="w-9 h-9 flex items-center justify-center border rounded">
                        3
                      </button>
                      <button className="w-9 h-9 flex items-center justify-center border rounded">
                        4
                      </button>
                      <button className="w-9 h-9 flex items-center justify-center border rounded">
                        5
                      </button>
                      <button className="w-9 h-9 flex items-center justify-center border rounded">
                        <span className="sr-only">Next page</span>
                        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">Frequently Asked Questions</h2>

        <div className="max-w-4xl">
          <div className="mb-4 bg-white rounded-lg shadow-sm">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer p-6 text-gray-800">
                <span className="text-lg">How do I book a tour?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" width="24" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 pt-2">
                <p className="text-gray-600">
                  You can book a tour directly through our website by selecting your desired tour, choosing your
                  preferred date, and completing the checkout process. Alternatively, you can contact our customer
                  service team for assistance.
                </p>
              </div>
            </details>
          </div>
          
          <div className="mb-4 bg-white rounded-lg shadow-sm">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer p-6 text-gray-800">
                <span className="text-lg">What is your cancellation policy?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" width="24" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 pt-2">
                <p className="text-gray-600">
                  Most tours can be canceled up to 24 hours before the start date for a full refund. Some tours with
                  special arrangements may have different policies, which will be clearly indicated on the tour details
                  page.
                </p>
              </div>
            </details>
          </div>
          
          <div className="mb-4 bg-white rounded-lg shadow-sm">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer p-6 text-gray-800">
                <span className="text-lg">Are meals included in the tours?</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" width="24" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 pt-2">
                <p className="text-gray-600">
                  Meal inclusions vary by tour. The specific inclusions for each tour are listed in the "What's
                  Included" section of the tour details. Many full-day tours include lunch, while multi-day tours
                  typically include most meals.
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Tours