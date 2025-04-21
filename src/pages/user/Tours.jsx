import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@radix-ui/react-accordion'
import { Select, SelectItem, SelectTrigger, SelectContent, SelectValue } from '@radix-ui/react-select'
import { Search, Sliders } from 'lucide-react'
import React from 'react'
import TourCard from '../../Components/TourCard'
import Footer from '../../Components/Footer'

const Tours = () => {
  const tours = [
    {
      id: "accra-city-tour",
      title: "Accra City Tour: History & Culture",
      location: "Accra, Greater Accra Region",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Explore the vibrant capital city of Ghana on this comprehensive tour. Visit the Kwame Nkrumah Memorial Park, Independence Square, Jamestown Lighthouse, and experience the bustling Makola Market.",
      rating: 4.8,
      reviewCount: 156,
      price: 85,
      duration: "6 hours",
      groupSize: "Up to 12 people",
      availability: "Daily",
      featured: true,
      tags: ["Cultural", "Historical", "City Tour"],
    },
    {
      id: "kakum-canopy-walk",
      title: "Kakum National Park Canopy Walkway Adventure",
      location: "Central Region",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Experience the thrill of walking on the famous Kakum Canopy Walkway suspended 30 meters above the ground. Explore the rainforest with expert guides and learn about the diverse ecosystem.",
      rating: 4.9,
      reviewCount: 210,
      price: 120,
      duration: "Full day",
      groupSize: "Small groups",
      availability: "Daily except Mondays",
      featured: false,
      tags: ["Adventure", "Nature", "Wildlife"],
    },
    {
      id: "cape-coast-elmina",
      title: "Cape Coast & Elmina Castles Heritage Tour",
      location: "Central Region",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Visit two UNESCO World Heritage sites on this powerful historical tour. Learn about the transatlantic slave trade at Cape Coast Castle and Elmina Castle with knowledgeable local guides.",
      rating: 4.9,
      reviewCount: 185,
      price: 145,
      duration: "Full day",
      groupSize: "Up to 15 people",
      availability: "Tuesday-Sunday",
      featured: true,
      tags: ["Historical", "UNESCO Sites", "Cultural"],
    },
    {
      id: "mole-safari",
      title: "Mole National Park 3-Day Safari Experience",
      location: "Northern Region",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Embark on an unforgettable safari in Ghana's largest wildlife refuge. Spot elephants, antelopes, monkeys, and various bird species on guided walking and driving safaris.",
      rating: 4.7,
      reviewCount: 98,
      price: 450,
      duration: "3 days, 2 nights",
      groupSize: "4-10 people",
      availability: "Year-round",
      featured: false,
      tags: ["Wildlife", "Safari", "Nature", "Multi-day"],
    },
    {
      id: "volta-adventure",
      title: "Volta Region Adventure: Wli Falls & Mount Afadjato",
      location: "Volta Region",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Discover the natural beauty of the Volta Region with a visit to Ghana's highest mountain and the stunning Wli Falls, the highest waterfall in West Africa. Enjoy hiking, swimming, and cultural experiences.",
      rating: 4.6,
      reviewCount: 124,
      price: 180,
      duration: "2 days, 1 night",
      groupSize: "6-12 people",
      availability: "Weekends",
      featured: false,
      tags: ["Adventure", "Hiking", "Nature", "Waterfall"],
    },
  ]
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
        <div className="absolute inset-0 bg-black/40" />
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
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                    <input placeholder="Keywords..." className="pl-10" />
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">Price Range</label>
                  <Sliders defaultValue={[150]} max={500} step={10} className="mb-2" />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>$0</span>
                    <span>$500+</span>
                  </div>
                </div>

                {/* Duration */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                  <Select defaultValue="any">
                    <SelectTrigger>
                      <Select placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any duration</SelectItem>
                      <SelectItem value="half-day">Half-day tours</SelectItem>
                      <SelectItem value="full-day">Full-day tours</SelectItem>
                      <SelectItem value="multi-day">Multi-day tours</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Tour Type */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tour Type</label>
                  <Select defaultValue="any">
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any type</SelectItem>
                      <SelectItem value="cultural">Cultural</SelectItem>
                      <SelectItem value="adventure">Adventure</SelectItem>
                      <SelectItem value="wildlife">Wildlife & Nature</SelectItem>
                      <SelectItem value="historical">Historical</SelectItem>
                      <SelectItem value="food">Food & Culinary</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Group Size */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Group Size</label>
                  <Select defaultValue="any">
                    <SelectTrigger>
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any size</SelectItem>
                      <SelectItem value="small">Small groups (1-8)</SelectItem>
                      <SelectItem value="medium">Medium groups (9-15)</SelectItem>
                      <SelectItem value="large">Large groups (16+)</SelectItem>
                      <SelectItem value="private">Private tours</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <button className="w-full bg-teal-600 hover:bg-teal-700">Apply Filters</button>
              </div>
            </div>

            {/* Tours List */}
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Available Tours</h2>
                <Select defaultValue="recommended">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recommended">Recommended</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="duration">Duration</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-6">
                {tours.map((tour, index) => (
                  <TourCard key={index} tour={tour} />
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-10">
                <nav className="flex items-center gap-1">
                  <button variant="outline" size="icon" className="w-9 h-9">
                    <span className="sr-only">Previous page</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <button
                    variant="outline"
                    size="sm"
                    className="w-9 h-9 bg-teal-600 text-white hover:bg-teal-700 hover:text-white"
                  >
                    1
                  </button>
                  <button variant="outline" size="sm" className="w-9 h-9">
                    2
                  </button>
                  <button variant="outline" size="sm" className="w-9 h-9">
                    3
                  </button>
                  <button variant="outline" size="sm" className="w-9 h-9">
                    4
                  </button>
                  <button variant="outline" size="sm" className="w-9 h-9">
                    5
                  </button>
                  <button variant="outline" size="icon" className="w-9 h-9">
                    <span className="sr-only">Next page</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
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
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I book a tour?</AccordionTrigger>
                <AccordionContent>
                  You can book a tour directly through our website by selecting your desired tour, choosing your
                  preferred date, and completing the checkout process. Alternatively, you can contact our customer
                  service team for assistance.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>What is your cancellation policy?</AccordionTrigger>
                <AccordionContent>
                  Most tours can be canceled up to 24 hours before the start date for a full refund. Some tours with
                  special arrangements may have different policies, which will be clearly indicated on the tour details
                  page.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Are meals included in the tours?</AccordionTrigger>
                <AccordionContent>
                  Meal inclusions vary by tour. The specific inclusions for each tour are listed in the "What's
                  Included" section of the tour details. Many full-day tours include lunch, while multi-day tours
                  typically include most meals.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>What should I bring on a tour?</AccordionTrigger>
                <AccordionContent>
                  We recommend bringing comfortable clothing appropriate for the weather, walking shoes, sunscreen,
                  insect repellent, a hat, and a water bottle. For specific tours, additional items may be recommended,
                  which will be communicated to you after booking.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>Are your tours suitable for children?</AccordionTrigger>
                <AccordionContent>
                  Many of our tours are family-friendly and suitable for children. Each tour listing indicates whether
                  it is appropriate for children and any age restrictions that may apply. If you're unsure, please
                  contact us for guidance.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
        </section>

        <Footer/>
    </div>
  )
}

export default Tours