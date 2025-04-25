import {  FacebookIcon, Instagram,  X, Youtube } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'
import WanderNestLogoCard from './WanderNestLogoCard'

const Footer = () => {
  return (

    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
            <Link to="/" className="flex items-center gap-2">
              <WanderNestLogoCard className="h-8 w-8" />
              <span className="text-xl font-bold text-slate-700">
                Wander<span className="text-teal-500">Nest</span>
              </span>
            </Link>
            </h3>
            <p className="text-slate-300 mb-4">
              Discover the beauty and culture of Ghana with our expertly curated travel experiences.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                <FacebookIcon className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                <X className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Destinations</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                  Accra
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                  Cape Coast
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                  Kumasi
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                  Tamale
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                  Volta Region
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                  Travel Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-slate-300 space-y-2">
              <p>123 Tourism Road</p>
              <p>Accra, Ghana</p>
              <p className="mt-4">
                <a href="tel:+233123456789" className="hover:text-white transition-colors">
                  +233 12 345 6789
                </a>
              </p>
              <p>
                <a href="mailto:info@ghanatravel.com" className="hover:text-white transition-colors">
                  info@ghanatravel.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
          <p>© {new Date().getFullYear()} GhanaTravel. All rights reserved.</p>
        </div>
      </div>
    </footer>
    
  )
}

export default Footer