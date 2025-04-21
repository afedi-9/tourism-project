import { Calendar, Globe, Shield } from 'lucide-react'
import React from 'react'

const ChooseCard = () => {
  return (
    <div>
        <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-teal-50 p-4 rounded-full mb-4">
              <Globe className="h-8 w-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Worldwide Coverage</h3>
            <p className="text-gray-600">Access to over 300,000 travel experiences across the globe.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-teal-50 p-4 rounded-full mb-4">
              <Shield className="h-8 w-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure Booking</h3>
            <p className="text-gray-600">Your data is protected with industry-standard encryption.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-teal-50 p-4 rounded-full mb-4">
              <Calendar className="h-8 w-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
            <p className="text-gray-600">Reserve now and pay later with free cancellation options.</p>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default ChooseCard