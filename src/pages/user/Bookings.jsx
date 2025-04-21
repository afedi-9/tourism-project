import { Calendar1Icon, Info, Link, Menu } from 'lucide-react'
import React from 'react'

const Bookings = () => {
  return (
    <div>
      <section>
      <div className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold mb-6">Book Your Tour</h1>

            <form className="space-y-8">
              {/* Personal Information */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold">Personal Information</h2>
                  <p className="text-gray-500 text-sm mt-1">Please provide your contact details for booking confirmation.</p>
                </div>
                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="block font-medium text-sm">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="lastName" className="block font-medium text-sm">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block font-medium text-sm">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="block font-medium text-sm">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </div>
              </div>

              {/* Booking Details */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold">Booking Details</h2>
                  <p className="text-gray-500 text-sm mt-1">Select your preferred date and number of participants.</p>
                </div>
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="tourDate" className="block font-medium text-sm">
                      Tour Date <span className="text-red-500">*</span>
                    </label>
                    <button
                      type="button"
                      className="w-full flex items-center justify-start px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-left"
                    >
                      <Calendar1Icon className="mr-2 h-4 w-4 text-gray-400" />
                      <span className="text-gray-500">Select a date</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="adults" className="block font-medium text-sm">
                        Adults <span className="text-red-500">*</span>
                      </label>
                      <div className="flex">
                        <button
                          type="button"
                          className="px-3 py-2 border border-gray-300 rounded-l-md bg-gray-50 hover:bg-gray-100"
                        >
                          -
                        </button>
                        <input
                          id="adults"
                          name="adults"
                          type="number"
                          defaultValue="1"
                          min="1"
                          max="10"
                          className="w-full px-3 py-2 border-y border-gray-300 text-center"
                        />
                        <button
                          type="button"
                          className="px-3 py-2 border border-gray-300 rounded-r-md bg-gray-50 hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="children" className="block font-medium text-sm">Children (Ages 2-12)</label>
                      <div className="flex">
                        <button
                          type="button"
                          className="px-3 py-2 border border-gray-300 rounded-l-md bg-gray-50 hover:bg-gray-100"
                        >
                          -
                        </button>
                        <input
                          id="children"
                          name="children"
                          type="number"
                          defaultValue="0"
                          min="0"
                          max="10"
                          className="w-full px-3 py-2 border-y border-gray-300 text-center"
                        />
                        <button
                          type="button"
                          className="px-3 py-2 border border-gray-300 rounded-r-md bg-gray-50 hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold">Additional Information</h2>
                  <p className="text-gray-500 text-sm mt-1">Let us know if you have any special requirements or requests.</p>
                </div>
                <div className="p-6">
                  <div className="space-y-2">
                    <label htmlFor="specialRequirements" className="block font-medium text-sm">Special Requirements or Requests</label>
                    <textarea
                      id="specialRequirements"
                      name="specialRequirements"
                      placeholder="E.g., dietary restrictions, accessibility needs, etc."
                      rows="4"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold">Payment Method</h2>
                  <p className="text-gray-500 text-sm mt-1">
                    Select your preferred payment method. Payment will be processed after booking confirmation.
                  </p>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <input 
                        type="radio" 
                        id="creditCard" 
                        name="paymentMethod" 
                        value="creditCard" 
                        defaultChecked 
                        className="h-4 w-4 text-teal-600" 
                      />
                      <label htmlFor="creditCard" className="flex items-center">
                        Credit/Debit Card
                        <span className="ml-2 text-xs bg-gray-100 px-2 py-1 rounded">Recommended</span>
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input 
                        type="radio" 
                        id="bankTransfer" 
                        name="paymentMethod" 
                        value="bankTransfer" 
                        className="h-4 w-4 text-teal-600" 
                      />
                      <label htmlFor="bankTransfer">Bank Transfer</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input 
                        type="radio" 
                        id="mobileMoney" 
                        name="paymentMethod" 
                        value="mobileMoney" 
                        className="h-4 w-4 text-teal-600" 
                      />
                      <label htmlFor="mobileMoney">Mobile Money</label>
                    </div>
                  </div>

                  <div className="mt-4 bg-blue-50 p-4 rounded-lg flex items-start">
                    <Info className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-blue-700">
                      Your booking will be confirmed with a pending status. Our team will contact you with payment
                      instructions after reviewing your booking request.
                    </p>
                  </div>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="agreeToTerms"
                        name="agreeToTerms"
                        className="mt-1 mr-2"
                      />
                      <label htmlFor="agreeToTerms" className="text-sm">
                        I agree to the{" "}
                        <Link  className="text-teal-600 hover:underline">
                          Terms and Conditions
                        </Link>{" "}
                        and{" "}
                        <Link className="text-teal-600 hover:underline">
                          Privacy Policy
                        </Link>
                        . <span className="text-red-500">*</span>
                      </label>
                    </div>

                    <button 
                      type="submit" 
                      className="w-full py-3 px-4 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-md transition duration-200"
                    >
                      Complete Booking
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Tour Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold">Tour Summary</h2>
                </div>
                <div className="p-6 space-y-4">
                  {/* Tour Image */}
                  <div className="relative h-48 rounded-md overflow-hidden">
                    <img
                      src="/placeholder.svg" 
                      alt="Tour" 
                      className="object-cover" 
                      fill 
                    />
                  </div>

                  {/* Tour Details */}
                  <div>
                    <h3 className="font-bold text-lg">Kakum National Park Canopy Walkway Adventure</h3>
                    <div className="flex items-center text-gray-600 text-sm mt-1">
                      <span>Central Region</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm mt-1">
                      <span>Full day</span>
                    </div>
                  </div>

                  {/* Price Breakdown */}
                  <div className="border-t pt-4 mt-4">
                    <h4 className="font-semibold mb-2">Price Breakdown</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Adults (1 × $120)</span>
                        <span>$120</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Children (0 × $60)</span>
                        <span>$0</span>
                      </div>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="border-t pt-4 mt-4">
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>$120</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 border-t p-4">
                  <div className="cursor-pointer">
                    <div className="flex justify-between items-center py-2 font-medium text-sm">
                      <span>Cancellation Policy</span>
                      <Menu className="h-4 w-4 text-gray-500" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Need Help */}
              <div className="mt-6 bg-blue-50 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Need Help?</h3>
                <p className="text-sm text-gray-700 mb-3">
                  If you have any questions about this tour or the booking process, please don't hesitate to contact us.
                </p>
                <div className="flex items-center text-sm text-gray-700">
                  <span className="font-medium">Call:</span>
                  <a href="tel:+233123456789" className="ml-2 text-teal-600 hover:underline">
                    +233 123 456 789
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </section>
    </div>
  )
}

export default Bookings