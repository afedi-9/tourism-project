import { Briefcase, Calendar, Globe, MapPin, Star, User, Users } from 'lucide-react'
import React from 'react'
import TestimoniyCard from '../../Components/TestimoniyCard'
import Footer from '../../Components/Footer'

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div
        className="relative h-[50vh] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About TravelGhana</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Connecting travelers with authentic Ghanaian experiences since 2015
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                TravelGhana was founded in 2015 by a group of passionate Ghanaian tourism professionals who saw the need
                to showcase the authentic beauty and culture of Ghana to the world.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small tour operation in Accra has grown into Ghana's premier travel platform,
                connecting travelers with unique experiences across the country while supporting local communities and
                sustainable tourism practices.
              </p>
              <p className="text-gray-600 mb-4">
                Our mission is to provide unforgettable, authentic experiences that showcase Ghana's rich cultural
                heritage, stunning landscapes, and warm hospitality while promoting responsible tourism that benefits
                local communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <div className="flex items-center">
                  <div className="bg-teal-100 p-2 rounded-full mr-3">
                    <User className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">10,000+</h4>
                    <p className="text-sm text-gray-500">Happy Travelers</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-teal-100 p-2 rounded-full mr-3">
                    <MapPin className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">50+</h4>
                    <p className="text-sm text-gray-500">Destinations</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-teal-100 p-2 rounded-full mr-3">
                    <Calendar className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">8+ Years</h4>
                    <p className="text-sm text-gray-500">Experience</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="Our team" className="object-cover" fill />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="Kwame Mensah" width={150} height={150} className="mx-auto mb-4 rounded-full object-cover" />
              <h3 className="font-semibold text-lg">Kwame Mensah</h3>
              <p className="text-sm text-gray-500 mb-2">Founder & CEO</p>
              <p className="text-sm text-gray-600">With 15+ years in tourism, Kwame founded TravelGhana to showcase his country's beauty to the world.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="Ama Darko" width={150} height={150} className="mx-auto mb-4 rounded-full object-cover" />
              <h3 className="font-semibold text-lg">Ama Darko</h3>
              <p className="text-sm text-gray-500 mb-2">Head of Operations</p>
              <p className="text-sm text-gray-600">Ama ensures all tours run smoothly and exceed expectations with her attention to detail.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="Kojo Boateng" width={150} height={150} className="mx-auto mb-4 rounded-full object-cover" />
              <h3 className="font-semibold text-lg">Kojo Boateng</h3>
              <p className="text-sm text-gray-500 mb-2">Lead Tour Guide</p>
              <p className="text-sm text-gray-600">Kojo brings Ghana to life with his deep knowledge and engaging storytelling.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="Efua Asare" width={150} height={150} className="mx-auto mb-4 rounded-full object-cover" />
              <h3 className="font-semibold text-lg">Efua Asare</h3>
              <p className="text-sm text-gray-500 mb-2">Customer Experience Manager</p>
              <p className="text-sm text-gray-600">Efua ensures our guests have seamless, memorable journeys from start to finish.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Community Support</h3>
              <p className="text-teal-100">
                We've partnered with 15+ local communities, providing sustainable income through tourism.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Local Employment</h3>
              <p className="text-teal-100">
                We've created over 50 full-time jobs and work with 100+ local guides and service providers.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Environmental Initiatives</h3>
              <p className="text-teal-100">
                We've planted 5,000+ trees and support conservation efforts in Ghana's national parks.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-white text-teal-600 hover:bg-teal-50">Learn More About Our Impact</button>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What People Say About Us</h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4'>
        {
            [1,2,3,4].map((test, index)=>{
                return(
                    <TestimoniyCard
                    key={index}
                    
                    />
                )
            })
        }

        </div>
        

        
      </div>
    </section>

    <Footer/>
    </div>
  )
}

export default About