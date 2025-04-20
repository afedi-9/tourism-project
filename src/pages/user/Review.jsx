import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Review = () => {
  const [visitDate, setVisitDate] = useState(null);

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        {/* Left Side */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-semibold mb-6">Tell us, how was your visit?</h2>

          <div className="border rounded-lg p-4 shadow-sm">
  <img
    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
    alt="Activity"
    className="rounded mb-4 h-48 w-full object-cover"
  />
  <h3 className="font-medium text-lg">
    Experience the Beauty, History and the Culture Of Accra in a Day
  </h3>
  <p className="text-sm text-gray-500">By Bigbentourslgh</p>
  <a href="#" className="text-sm text-blue-600 mt-2 inline-block">
    Not the right one? Change activity
  </a>
</div>
        </div>

        {/* Right Side */}
        <div className="md:col-span-2 space-y-6">
          {/* Rating */}
          <div>
            <label className="block text-lg font-semibold mb-2">
              How would you rate your experience?
            </label>
            <div className="flex gap-2">
              <div className="w-8 h-8 border border-green-500 rounded-full"></div>
              <div className="w-8 h-8 border border-green-500 rounded-full"></div>
              <div className="w-8 h-8 border border-green-500 rounded-full"></div>
              <div className="w-8 h-8 border border-green-500 rounded-full"></div>
              <div className="w-8 h-8 border border-green-500 rounded-full"></div>
            </div>
          </div>

          {/* Date - Updated with DatePicker */}
          <div>
            <label className="block text-lg font-semibold mb-2">
              When did you go?
            </label>
            <DatePicker
              selected={visitDate}
              onChange={(date) => setVisitDate(date)}
              dateFormat="MMMM yyyy"
              showMonthYearPicker
              showFullMonthYearPicker
              placeholderText="Select month and year"
              className="w-full border rounded p-2"
              maxDate={new Date()}
              isClearable
            />
          </div>

          {/* Companions */}
          <div>
            <label className="block text-lg font-semibold mb-2">
              Who did you go with?
            </label>
            <div className="flex flex-wrap gap-2">
              <span className="border rounded-full px-4 py-1 text-sm cursor-pointer">
                Business
              </span>
              <span className="border rounded-full px-4 py-1 text-sm cursor-pointer">
                Couples
              </span>
              <span className="border rounded-full px-4 py-1 text-sm cursor-pointer">
                Family
              </span>
              <span className="border rounded-full px-4 py-1 text-sm cursor-pointer">
                Friends
              </span>
              <span className="border rounded-full px-4 py-1 text-sm cursor-pointer">
                Solo
              </span>
            </div>
          </div>

          {/* Write Review */}
          <div>
            <label className="block text-lg font-semibold mb-2">
              Write your review
            </label>
            <textarea
              rows="5"
              placeholder="The views were amazing. We took so many photos!..."
              className="w-full border rounded p-3 resize-none"
            ></textarea>
            <div className="text-right text-sm text-gray-500 mt-1">
              0/100 min characters
            </div>
          </div>

          {/* Title */}
          <div>
            <label className="block text-lg font-semibold mb-2">
              Title your review
            </label>
            <input
              type="text"
              placeholder="Give us the gist of your experience"
              className="w-full border rounded p-3"
            />
            <div className="text-right text-sm text-gray-500 mt-1">
              0/120 max characters
            </div>
          </div>

          {/* Add Photos */}
          <div>
            <label className="block text-lg font-semibold mb-2">
              Add some photos <span className="text-gray-500 text-sm">(Optional)</span>
            </label>
            <label
              htmlFor="photos"
              className="block border-2 border-dashed p-10 text-center rounded-lg text-gray-500 cursor-pointer hover:border-gray-400"
            >
              <p>Click to add photos<br />or drag and drop</p>
              <input
                type="file"
                id="photos"
                accept="image/*"
                multiple
                className="hidden"
              />
            </label>
          </div>

          {/* Confirm */}
          <div className="flex items-start space-x-2">
            <input type="checkbox" id="confirm" className="mt-1" />
            <label htmlFor="confirm" className="text-sm text-gray-600">
              I certify that this review is based on my own experience and is my
              genuine opinion of this establishment and that I have no personal or
              business relationship with this establishment...
              <a
                href="#"
                className="text-blue-600 underline ml-1"
              >
                Learn more about the consequences of review fraud.
              </a>
            </label>
          </div>

          {/* Submit */}
          <div>
            <button className="w-full bg-black text-white py-3 rounded-full text-lg hover:bg-gray-900">
              Submit review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;