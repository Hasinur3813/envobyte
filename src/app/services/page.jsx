"use client";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ServicesCard from "../components/ServicesCard/ServicesCard";

const Page = () => {
  const [selected, setSelected] = useState("");
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("/data/services.json");
        const data = await response.json();
        setServices(data);
        setFilteredServices(data); // Initially show all services
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  useEffect(() => {
    if (selected) {
      setFilteredServices(
        services.filter((service) => service.category === selected)
      );
    } else {
      setFilteredServices(services); // Show all services if no category is selected
    }
  }, [selected, services]);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
          Choose a <span className="text-accent">service</span> that you need
        </h1>

        {/* Category Selection */}
        <div className="mt-10">
          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className="px-5 py-4 rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-blue-300 transition-all bg-white text-gray-700"
          >
            <option value="">-- Select Category --</option>
            <option value="Graphic Design">Graphic Design</option>
            <option value="Web Development">Web Development</option>
            <option value="App Development">App Development</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Video & Animation">Video & Animation</option>
          </select>
        </div>

        {/* Services Grid */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10">
          {filteredServices.length > 0 ? (
            filteredServices.map((service) => (
              <ServicesCard key={service.id} service={service} />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full mt-5">
              No services found for this category.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Page;
