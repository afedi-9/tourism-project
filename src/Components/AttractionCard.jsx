import React from 'react'
import { Link } from 'react-router'

const AttractionCard = () => {
  return (
    <div>
        <section>
        <Link to={`/tours/:id`}>
        <div className="flex gap-3 items-center sm:gap-4 md:gap-5 lg:gap-6">
  <img
    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
    alt="Attraction"
    className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-cover rounded"
  />
  <div>
    <h3 className="font-medium text-black text-sm sm:text-base md:text-lg">Attraction Name</h3>
    <p className="text-xs text-gray-600 sm:text-sm md:text-base">Tours and Activities</p>
  </div>
</div>
        </Link>


        </section>
      

    
    </div>
  )
}

export default AttractionCard