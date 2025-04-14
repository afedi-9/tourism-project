import React from 'react'

const UpdateTour = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
  <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
    <div className="bg-blue-600 p-6">
      <h1 className="text-2xl font-bold text-white">Update Tour Experience</h1>
      <p className="text-blue-100 mt-2">Update the details of your tour below</p>
    </div>
    
    <form className="p-6 space-y-8">
      {/* Basic Information */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Basic Information</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="tourTitle" className="block text-sm font-medium text-gray-700">Tour Title</label>
            <input 
              type="text" 
              id="tourTitle" 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500" 
              placeholder="e.g. Experience the Beauty, History and Culture of Accra in a Day"
            />
          </div>
          
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price per Adult ($)</label>
            <input 
              type="number" 
              id="price" 
              min="0" 
              step="0.01" 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500" 
              placeholder="e.g. 80.00"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label htmlFor="duration" className="block text-sm font-medium text-gray-700">Duration (hours)</label>
            <input 
              type="number" 
              id="duration" 
              min="0.5" 
              step="0.5" 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500" 
              placeholder="e.g. 6"
            />
          </div>
          
          <div>
            <label htmlFor="ageRange" className="block text-sm font-medium text-gray-700">Age Range</label>
            <div className="flex gap-2 mt-1">
              <input 
                type="number" 
                id="minAge" 
                min="0" 
                className="block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500" 
                placeholder="Min (e.g. 0)"
              />
              <span className="self-center">-</span>
              <input 
                type="number" 
                id="maxAge" 
                min="1" 
                className="block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500" 
                placeholder="Max (e.g. 79)"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="tourType" className="block text-sm font-medium text-gray-700">Tour Type</label>
            <select 
              id="tourType" 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="private">Private Tour</option>
              <option value="group">Group Tour</option>
              <option value="self-guided">Self-guided Tour</option>
            </select>
          </div>
        </div>
        
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea 
            id="description"
            rows="4" 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500"
            placeholder="Describe your tour in detail, highlighting key attractions and activities"
          ></textarea>
        </div>
      </section>
      
      {/* Locations & Attractions */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Locations & Attractions</h2>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Key Attractions (Update as needed)</label>
          <div className="space-y-2 mt-1">
            <div className="flex gap-2">
              <input 
                type="text" 
                className="block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500" 
                placeholder="e.g. Kwame Nkrumah Memorial Park"
              />
              <button type="button" className="p-2 bg-red-100 text-red-700 rounded hover:bg-red-200">
                Remove
              </button>
            </div>
            <div className="flex gap-2">
              <input 
                type="text" 
                className="block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500" 
                placeholder="e.g. Independence Square"
              />
              <button type="button" className="p-2 bg-red-100 text-red-700 rounded hover:bg-red-200">
                Remove
              </button>
            </div>
            <div className="flex gap-2">
              <input 
                type="text" 
                className="block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500" 
                placeholder="e.g. James Town Lighthouse"
              />
              <button type="button" className="p-2 bg-red-100 text-red-700 rounded hover:bg-red-200">
                Remove
              </button>
            </div>
            <button type="button" className="mt-2 py-2 px-4 bg-blue-100 text-blue-700 rounded hover:bg-blue-200">
              + Add Another Attraction
            </button>
          </div>
        </div>
      </section>
      
      {/* Tour Details */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Tour Details</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Available Languages</label>
            <div className="mt-1 space-y-2">
              <div className="flex items-center">
                <input id="english" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                <label htmlFor="english" className="ml-2 block text-sm text-gray-700">English</label>
              </div>
              <div className="flex items-center">
                <input id="french" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                <label htmlFor="french" className="ml-2 block text-sm text-gray-700">French</label>
              </div>
              <div className="flex items-center">
                <input id="spanish" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                <label htmlFor="spanish" className="ml-2 block text-sm text-gray-700">Spanish</label>
              </div>
              <div className="flex items-center">
                <input id="other-lang" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                <label htmlFor="other-lang" className="ml-2 block text-sm text-gray-700">Other</label>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Available Start Times</label>
              <div className="flex gap-2 mt-1">
                <input 
                  type="time" 
                  className="block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500" 
                  defaultValue="09:00"
                />
                <button type="button" className="p-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200">
                  Add
                </button>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="bg-gray-100 px-2 py-1 rounded text-sm flex items-center">
                  9:00 AM <button className="ml-1 text-gray-500 hover:text-gray-700">×</button>
                </span>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Services Included</label>
              <div className="mt-1 space-y-2">
                <div className="flex items-center">
                  <input id="transportation" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                  <label htmlFor="transportation" className="ml-2 block text-sm text-gray-700">Transportation</label>
                </div>
                <div className="flex items-center">
                  <input id="guide" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" checked />
                  <label htmlFor="guide" className="ml-2 block text-sm text-gray-700">Professional Guide</label>
                </div>
                <div className="flex items-center">
                  <input id="entrance" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                  <label htmlFor="entrance" className="ml-2 block text-sm text-gray-700">Entrance Fees</label>
                </div>
                <div className="flex items-center">
                  <input id="pickup" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" checked />
                  <label htmlFor="pickup" className="ml-2 block text-sm text-gray-700">Hotel Pickup</label>
                </div>
                <div className="flex items-center">
                  <input id="meals" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
                  <label htmlFor="meals" className="ml-2 block text-sm text-gray-700">Meals</label>
                </div>
                <div className="flex items-center">
                  <input id="mobile-ticket" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded" checked />
                  <label htmlFor="mobile-ticket" className="ml-2 block text-sm text-gray-700">Mobile Ticket</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Cancellation Policy */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Cancellation Policy</h2>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Select Cancellation Policy</label>
          <select 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="24h">Free cancellation up to 24 hours before start time</option>
            <option value="48h">Free cancellation up to 48 hours before start time</option>
            <option value="7d">Free cancellation up to 7 days before start time</option>
            <option value="non-refundable">Non-refundable</option>
            <option value="custom">Custom policy</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Additional Cancellation Details (Optional)</label>
          <textarea 
            rows="2" 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500"
            placeholder="Provide additional details regarding the cancellation policy"
          ></textarea>
        </div>
      </section>
      
      {/* Submit Button */}
      <div className="text-center">
        <button type="submit" className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Update Tour
        </button>
      </div>
    </form>
  </div>
</div>

  )
}

export default UpdateTour