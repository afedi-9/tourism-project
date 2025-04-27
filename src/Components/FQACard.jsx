import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react'

const FQACard = () => {


    // Create state for each FAQ item to track open/closed status
  const [openItems, setOpenItems] = useState({});

  // Toggle function for FAQ items
  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // FAQ data
  const faqItems = [
    {
      id: 1,
      question: "How do I book a tour?",
      answer: "You can book a tour directly through our website by selecting your desired tour, choosing your preferred date, and completing the checkout process. Alternatively, you can contact our customer service team for assistance."
    },
    {
      id: 2,
      question: "What is your cancellation policy?",
      answer: "Most tours can be canceled up to 24 hours before the start date for a full refund. Some tours with special arrangements may have different policies, which will be clearly indicated on the tour details page."
    },
    {
      id: 3,
      question: "Do you offer custom or private tours?",
      answer: "Yes, we specialize in creating custom itineraries tailored to your interests, timeframe, and budget. Contact us with your requirements, and our team will design a personalized experience for you."
    },
    {
      id: 4,
      question: "What should I pack for my trip to Ghana?",
      answer: "We recommend bringing lightweight, breathable clothing, comfortable walking shoes, sunscreen, insect repellent, a hat, and a reusable water bottle. For specific tours, additional items may be recommended, which will be communicated to you after booking."
    },
    {
      id: 5,
      question: "Do I need a visa to visit Ghana?",
      answer: "Most visitors to Ghana require a visa. We recommend checking with the Ghanaian embassy or consulate in your country for the most up-to-date requirements. We can provide supporting documentation for your visa application if needed."
    }
  ];
  return (
    <div>
        <section className="bg-white py-8 md:py-16 w-full">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-800">
          Frequently Asked Questions
        </h2>

        <div className="w-full">
          <div className="divide-y divide-gray-200">
            {faqItems.map((item) => (
              <div key={item.id} className="py-4">
                <div 
                  className="flex justify-between items-center cursor-pointer" 
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={openItems[item.id]}
                >
                  <h3 className="text-base md:text-lg font-medium text-gray-900">{item.question}</h3>
                  {openItems[item.id] ? (
                    <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  )}
                </div>
                
                {openItems[item.id] && (
                  <div className="mt-2 text-sm md:text-base text-gray-600">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default FQACard