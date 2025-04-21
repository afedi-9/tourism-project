import { Star } from 'lucide-react'
import React from 'react'

const TestimoniyCard = () => {
  return (
    <div>
        <section>
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
          <div className="flex text-yellow-500 mb-4">
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
          </div>
          <blockquote className="text-gray-600 italic mb-4">
            "TravelGhana provided us with the most authentic and memorable experience of Ghana. Their local
            knowledge and connections made all the difference."
          </blockquote>
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden relative mr-3">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="Customer" className="object-cover w-full h-full" />
            </div>
            <div>
              <p className="font-semibold">Sarah Johnson</p>
              <p className="text-sm text-gray-500">United States</p>
            </div>
          </div>
        </div>
        </section>
    </div>
  )
}

export default TestimoniyCard