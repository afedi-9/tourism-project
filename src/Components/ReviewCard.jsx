import React from 'react'
import { Link } from 'react-router'

const ReviewCard = () => {
  return (
    <div className="w-full">
      <div className="w-full mx-auto p-4 bg-white shadow-sm rounded-lg">
        {/* Disclaimer */}
        <div className="text-gray-600 text-sm mb-8">
          <p>These reviews are the subjective opinions of Tripadvisor members and not of Tripadvisor LLC. Tripadvisor performs checks on reviews as part of our industry-leading trust & safety standards. Read our <a href="#" className="text-blue-600 hover:underline">transparency report</a> to learn more.</p>
        </div>

        {/* Contribute Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Contribute</h2>
          <div className="flex flex-wrap gap-3">
            <Link to={'/review'} className="border border-gray-400 rounded-full px-6 py-2 hover:bg-gray-100">
            Write a review 
            </Link>

            <Link to={'/review'} className="border border-gray-400 rounded-full px-6 py-2 hover:bg-gray-100">
            Upload a photo
            </Link>
            
            
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b mb-6">
          <div className="flex gap-6">
            <button className="text-lg pb-3 font-bold border-b-2 border-black">
              Reviews
            </button>
          </div>
        </div>

        {/* Rating Overview */}
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="md:w-1/3">
            <div className="flex items-center mb-6">
              <span className="text-4xl font-bold mr-3">4.8</span>
              <div>
                <div className="text-green-600 flex">
                  <span className="text-lg">●</span>
                  <span className="text-lg">●</span>
                  <span className="text-lg">●</span>
                  <span className="text-lg">●</span>
                  <span className="text-lg">●</span>
                </div>
                <p className="text-gray-600">200 reviews</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center">
                <span className="w-24 text-sm">Excellent</span>
                <div className="bg-gray-200 h-3 rounded-full flex-1 mx-2">
                  <div className="bg-green-600 h-3 rounded-full" style={{ width: "88%" }}></div>
                </div>
                <span className="text-sm text-gray-600">177</span>
              </div>
              <div className="flex items-center">
                <span className="w-24 text-sm">Very good</span>
                <div className="bg-gray-200 h-3 rounded-full flex-1 mx-2">
                  <div className="bg-green-600 h-3 rounded-full" style={{ width: "9%" }}></div>
                </div>
                <span className="text-sm text-gray-600">18</span>
              </div>
              <div className="flex items-center">
                <span className="w-24 text-sm">Average</span>
                <div className="bg-gray-200 h-3 rounded-full flex-1 mx-2">
                  <div className="bg-green-600 h-3 rounded-full" style={{ width: "1%" }}></div>
                </div>
                <span className="text-sm text-gray-600">2</span>
              </div>
              <div className="flex items-center">
                <span className="w-24 text-sm">Poor</span>
                <div className="bg-gray-200 h-3 rounded-full flex-1 mx-2">
                  <div className="bg-green-600 h-3 rounded-full" style={{ width: "1%" }}></div>
                </div>
                <span className="text-sm text-gray-600">2</span>
              </div>
              <div className="flex items-center">
                <span className="w-24 text-sm">Terrible</span>
                <div className="bg-gray-200 h-3 rounded-full flex-1 mx-2">
                  <div className="bg-green-600 h-3 rounded-full" style={{ width: "0.5%" }}></div>
                </div>
                <span className="text-sm text-gray-600">1</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sample Review */}
        <div className="border-t pt-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <div className="w-full h-full flex items-center justify-center bg-green-600 text-white">
                S
              </div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-bold">Selina S</h3>
                  <p className="text-sm text-gray-600">1 contribution</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-1 text-gray-500">
                    <span>0</span>
                    <span>👍</span>
                  </button>
                  <button className="text-gray-500">⋯</button>
                </div>
              </div>

              <div className="my-2 text-green-600 flex">
                <span className="text-lg">●</span>
                <span className="text-lg">●</span>
                <span className="text-lg">●</span>
                <span className="text-lg">●</span>
                <span className="text-lg">●</span>
              </div>

              <h4 className="font-bold mb-2">Fun fact filled tour!</h4>
              <p className="mb-4">
                Having done this tour as a solo traveller, I knew that when my partner came with me he would have to experience it. Elisha was so friendly and knowledgeable. He taught us so much about the history of Accra and made sure our journey was comfortable. I would recommend this tour to anyone looking for an introduction to Accra. Also shout out to Elisha for some great photos!!
              </p>

              <p className="text-sm text-gray-600">Written April 11, 2023</p>
              <p className="text-xs text-gray-500 mt-2">
                This review is the subjective opinion of a Tripadvisor member and not of Tripadvisor LLC. Tripadvisor performs checks on reviews as part of our industry-leading trust & safety standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard