import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { apiUpdateTour } from '../../services/tours';

const UpdateTour = () => {

  const navigate = useNavigate();


  const [successMessage, setSuccessMessage] = useState("");

  const { id } = useParams();

  const [ad, setAd] = useState({});

  const getAd = async () => {
    try {
      const response = await apiUpdateTour(id);
      setAd(response.data);

      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAd();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    try {
      const response = await apiUpdateAdverts(id, data);
      console.log(response);

      setSuccessMessage("Product added successfully!"); // Set success message

      // Clear message after 3 seconds
    setTimeout(() => {
      setSuccessMessage("");
      navigate('/dashboard/ads');
    }, 2000);
    
    
      
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
  <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
    <div className="bg-blue-600 p-6">
      <h1 className="text-2xl font-bold text-white">Update Tour Experience</h1>

      {successMessage && (
      <div className="bg-green-100 text-green-700 p-3 rounded mb-4 text-center">
        {successMessage}
      </div>
    )}
      <p className="text-blue-100 mt-2">Update the details of your tour below</p>
    </div>

    <form onSubmit={handleSubmit} className="p-6 space-y-8">
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Tour Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Tour Title</label>
            <input 
              type="text" 
              id="title" 
              name="title"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500"
            
              defaultValue={ad.title}
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
            <input 
              type="text" 
              id="location" 
              name="location"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500"
             
              defaultValue={ad.location}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="rateCard" className="block text-sm font-medium text-gray-700">Rate Card</label>
            <input 
              type="text" 
              id="rateCard" 
              name="rateCard"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500"
            
              defaultValue={ad.rateCard}
            />
          </div>

          <div>
            <label htmlFor="availableSlots" className="block text-sm font-medium text-gray-700">Available Slots</label>
            <input 
              type="number" 
              id="availableSlots" 
              name="availableSlots"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500"
              
              defaultValue={ad.availableSlots}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Tour Date</label>
            <input 
              type="date" 
              id="date" 
              name="date"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500"
              defaultValue={ad.date}
            />
          </div>

          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image (Optional)</label>
            <input 
              type="file" 
              id="image" 
              name="image"
              accept="image/*"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500"
              defaultValue={ad.image}
            />
          </div>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea 
            id="description" 
            name="description"
            rows="4"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:ring-blue-500 focus:border-blue-500"
            
            defaultValue={ad.description}
          ></textarea>
        </div>
      </section>

      <div className="text-center">
        <button type="submit" className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Update Tour
        </button>
      </div>
    </form>
  </div>
</div>

    </div>

  )
}

export default UpdateTour