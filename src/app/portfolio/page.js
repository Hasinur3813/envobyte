"use client";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ServicesCard from "../components/ServicesCard/ServicesCard";
import Image from "next/image";
import PortfolioCard from "../components/PortfolioCard/PortfolioCard";

const data = {
  id: 1,
  title: "Mobile App Development",
  subtitle: "Native & Cross-Platform Apps",
  description:
    "Building high-performance mobile applications using Flutter and React Native for both iOS and Android.",
  category: "App Development",
  image: "/images/Writing.jpg",
};

const Page = () => {
  const [selected, setSelected] = useState("");
  const [portfolio, setPortfolio] = useState([]);
  const [filteredPortfolios, setFilteredPortfolios] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("/data/portfolios.json");
        const data = await response.json();
        setPortfolio(data);
        setFilteredPortfolios(data); // Initially show all services
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  useEffect(() => {
    if (selected) {
      setFilteredPortfolios(
        portfolio.filter((portfolio) => portfolio.category === selected)
      );
    } else {
      setFilteredPortfolios(portfolio); // Show all portfolio if no category is selected
    }
  }, [selected, portfolio]);
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Our Amazing <span className="text-accent">Portfolio</span>
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
            <option value="Design">UI/UX Design</option>
            <option value="Video & Animation">Video & Animation</option>
          </select>
        </div>

        {/* Services Grid */}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2  lg:grid-cols-3 mt-10">
          {filteredPortfolios.length > 0 ? (
            filteredPortfolios.map((portfolio) => (
              <PortfolioCard key={portfolio.id} portfolio={portfolio} />
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
