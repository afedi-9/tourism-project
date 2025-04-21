import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@radix-ui/react-accordion'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@radix-ui/react-select'
import { ChevronDown, Clock, Clock1, Facebook, Instagram, Linkedin, Mail, MailIcon, MapPin, MapPinIcon, Phone, PhoneCall, X } from 'lucide-react'
import React, { useState } from 'react'
import Footer from '../../Components/Footer'
import { Link } from 'react-router'

const Contact = () => {
    const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would handle the form submission here
    setFormSubmitted(true)
    // Reset form after submission
    e.target.reset()
  }
  return (
<div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div
        className="relative h-[40vh] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-2xl">We're here to help plan your perfect Ghanaian adventure</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name*
                    </label>
                    <input id="firstName" name="firstName" required className="w-full p-2 border border-gray-300 rounded-md bg-white" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name*
                    </label>
                    <input id="lastName" name="lastName" required className="w-full p-2 border border-gray-300 rounded-md bg-white" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address*
                  </label>
                  <input id="email" name="email" type="email" required className="w-full p-2 border border-gray-300 rounded-md bg-white" />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input id="phone" name="phone" type="tel" className="w-full p-2 border border-gray-300 rounded-md bg-white" />
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-1">
                    Inquiry Type*
                  </label>
                  <select 
                    id="inquiryType" 
                    name="inquiryType" 
                    required 
                    className="w-full p-2 border border-gray-300 rounded-md bg-white"
                  >
                    <option value="" disabled selected>Select an option</option>
                    <option value="general">General Inquiry</option>
                    <option value="booking">Booking Information</option>
                    <option value="custom">Custom Tour Request</option>
                    <option value="feedback">Feedback</option>
                    <option value="partnership">Partnership Opportunity</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message*
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    required 
                    rows={5} 
                    className="w-full p-2 border border-gray-300 rounded-md bg-white" 
                  />
                </div>

                <div className="flex items-start">
                  <input type="checkbox" id="privacy" name="privacy" required className="mt-1 mr-2" />
                  <label htmlFor="privacy" className="text-sm text-gray-600">
                    I agree to the{" "}
                    <Link href="#" className="text-teal-600 hover:underline">
                      Privacy Policy
                    </Link>{" "}
                    and consent to being contacted regarding my inquiry.
                  </label>
                </div>

                <button 
                  type="submit" 
                  className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-md w-full"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPinIcon className="h-5 w-5 text-teal-600 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Office Address</h3>
                      <p className="text-gray-600">123 Tourism Road, Osu</p>
                      <p className="text-gray-600">Accra, Ghana</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <PhoneCall className="h-5 w-5 text-teal-600 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-600">+233 123 456 789</p>
                      <p className="text-gray-600">+233 987 654 321 (WhatsApp)</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MailIcon className="h-5 w-5 text-teal-600 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600">info@travelghana.com</p>
                      <p className="text-gray-600">bookings@travelghana.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock1 className="h-5 w-5 text-teal-600 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Office Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Saturday: 9:00 AM - 3:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="font-semibold mb-2">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <Link
                      href="#"
                      className="bg-gray-100 p-2 rounded-full text-gray-600 hover:bg-teal-100 hover:text-teal-600 transition-colors"
                    >
                      <Facebook className="h-5 w-5" />
                    </Link>
                    <Link
                      href="#"
                      className="bg-gray-100 p-2 rounded-full text-gray-600 hover:bg-teal-100 hover:text-teal-600 transition-colors"
                    >
                      <X className="h-5 w-5" />
                    </Link>
                    <Link
                      href="#"
                      className="bg-gray-100 p-2 rounded-full text-gray-600 hover:bg-teal-100 hover:text-teal-600 transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                    </Link>
                    <Link
                      href="#"
                      className="bg-gray-100 p-2 rounded-full text-gray-600 hover:bg-teal-100 hover:text-teal-600 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden h-[300px] relative">
                <img
                  src="/api/placeholder/800/400"
                  alt="Office Location Map"
                  className="w-full h-full object-cover"
                />
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
            {/* Custom FAQ Items without Accordion component */}
            <div className="divide-y divide-gray-200">
              <div className="py-4">
                <div className="flex justify-between items-center cursor-pointer">
                  <h3 className="text-lg font-medium">How do I book a tour?</h3>
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                </div>
                <div className="mt-2 text-gray-600">
                  <p>You can book a tour directly through our website by selecting your desired tour, choosing your
                  preferred date, and completing the checkout process. Alternatively, you can contact our customer
                  service team for assistance.</p>
                </div>
              </div>

              <div className="py-4">
                <div className="flex justify-between items-center cursor-pointer">
                  <h3 className="text-lg font-medium">What is your cancellation policy?</h3>
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                </div>
                <div className="mt-2 text-gray-600">
                  <p>Most tours can be canceled up to 24 hours before the start date for a full refund. Some tours with
                  special arrangements may have different policies, which will be clearly indicated on the tour details
                  page.</p>
                </div>
              </div>

              <div className="py-4">
                <div className="flex justify-between items-center cursor-pointer">
                  <h3 className="text-lg font-medium">Do you offer custom or private tours?</h3>
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                </div>
                <div className="mt-2 text-gray-600">
                  <p>Yes, we specialize in creating custom itineraries tailored to your interests, timeframe, and budget.
                  Contact us with your requirements, and our team will design a personalized experience for you.</p>
                </div>
              </div>

              <div className="py-4">
                <div className="flex justify-between items-center cursor-pointer">
                  <h3 className="text-lg font-medium">What should I pack for my trip to Ghana?</h3>
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                </div>
                <div className="mt-2 text-gray-600">
                  <p>We recommend bringing lightweight, breathable clothing, comfortable walking shoes, sunscreen, insect
                  repellent, a hat, and a reusable water bottle. For specific tours, additional items may be
                  recommended, which will be communicated to you after booking.</p>
                </div>
              </div>

              <div className="py-4">
                <div className="flex justify-between items-center cursor-pointer">
                  <h3 className="text-lg font-medium">Do I need a visa to visit Ghana?</h3>
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                </div>
                <div className="mt-2 text-gray-600">
                  <p>Most visitors to Ghana require a visa. We recommend checking with the Ghanaian embassy or consulate in
                  your country for the most up-to-date requirements. We can provide supporting documentation for your
                  visa application if needed.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-teal-600 py-12 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Planning Your Trip?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Our team of travel experts is ready to help you create the perfect Ghanaian adventure.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/tours">
              <button className="bg-white text-teal-600 hover:bg-teal-50 py-2 px-6 rounded-md">
                Browse Tours
              </button>
            </Link>
            <Link href="/custom-tour">
              <button className="border border-white text-white hover:bg-teal-700 py-2 px-6 rounded-md">
                Request Custom Itinerary
              </button>
            </Link>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Contact