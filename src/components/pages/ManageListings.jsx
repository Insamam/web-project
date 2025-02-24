import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

const ManageListings = () => {
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCars = async () => {
      const { data, error } = await supabase.from("cars").select("*");
      if (error) {
        console.error("Error fetching cars:", error.message);
      } else {
        setCars(data);
      }
    };
    fetchCars();
  }, []);

  return (
    <div className="p-6 md:p-12 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-8">
        Manage Listings
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map((car) => (
          <div
            key={car.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={car.image || "https://via.placeholder.com/400"}
              alt={car.name}
              className="w-full h-56 object-cover rounded-t-xl"
            />
            <div className="p-5 flex flex-col gap-2">
              <h3 className="text-xl font-semibold text-gray-800">{car.name} ({car.year})</h3>
              <p className="text-red-500 text-2xl font-bold">₹ {car.price.toLocaleString()}</p>
              <div className="flex flex-wrap gap-3 text-gray-600 text-sm mt-2">
                <span className="bg-gray-100 px-3 py-1 rounded-lg">Fuel: {car.fuelType}</span>
                <span className="bg-gray-100 px-3 py-1 rounded-lg">Mileage: {car.mileage} km</span>
                <span className="bg-gray-100 px-3 py-1 rounded-lg">Transmission: {car.driverType}</span>
              </div>
              <button
                onClick={() => navigate(`/view-car/${car.id}`)}
                className="mt-5 w-full bg-gradient-to-r from-red-500 to-red-700 text-white py-3 rounded-lg text-lg font-medium shadow-md hover:shadow-lg transition duration-300 hover:from-red-600 hover:to-red-800"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageListings;
