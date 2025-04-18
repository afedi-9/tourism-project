import React from 'react'

const ChooseCard = () => {
  return (
    <div>
        <section className="py-12 bg-white text-center">
        <h2 className="text-2xl font-bold mb-10">Why book with WanderNest?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 max-w-7xl mx-auto">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="p-3 rounded-full bg-pink-100 mb-4">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M22 16.92V21a1 1 0 01-1.09 1A19.91 19.91 0 012 4.09 1 1 0 013 3h4.09a1 1 0 011 .75l1.13 4.52a1 1 0 01-.29.95l-2.18 2.18a16 16 0 006.36 6.36l2.18-2.18a1 1 0 01.95-.29l4.52 1.13a1 1 0 01.75 1z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-1">
              24/7 customer support
            </h3>
            <p className="text-sm text-gray-600">
              No matter the time zone, we’re here to help.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="p-3 rounded-full bg-green-100 mb-4">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M20 12H4" />
                <path d="M20 6H4" />
                <path d="M20 18H4" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-1">Earn rewards</h3>
            <p className="text-sm text-gray-600">
              Explore, earn, redeem, and repeat with our loyalty program.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="p-3 rounded-full bg-yellow-100 mb-4">
              <svg
                className="w-6 h-6 text-yellow-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-1">Millions of reviews</h3>
            <p className="text-sm text-gray-600">
              Plan and book with confidence using reviews from fellow travelers.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="p-3 rounded-full bg-blue-100 mb-4">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-1">Plan your way</h3>
            <p className="text-sm text-gray-600">
              Stay flexible with free cancellation and the option to reserve now
              and pay later at no additional cost.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ChooseCard