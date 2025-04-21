import { Facebook, Instagram, Landmark, Link, Linkedin, Mail, MapPin, Phone, X } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div>
      {/* Footer - New Addition */}
      <footer className="bg-gray-800 text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-4">
                <Landmark className="h-6 w-6 text-teal-400 mr-2" />
                <span className="font-bold text-lg">TravelGhana</span>
              </div>
              <p className="text-gray-400 mb-4">
                Discover the beauty and culture of Ghana with our curated travel experiences.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <X className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Destinations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Tours & Activities
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Customer Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-teal-400 mr-2 mt-0.5" />
                  <span className="text-gray-400">123 Tourism Road, Accra, Ghana</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-teal-400 mr-2" />
                  <span className="text-gray-400">+233 123 456 789</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-teal-400 mr-2" />
                  <span className="text-gray-400">info@travelghana.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6 mt-6 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} TravelGhana. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer