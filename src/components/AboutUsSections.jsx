import React, { useState } from "react";
import scheduleImg from "../assets/schedule.webp";
import monitorImg from "../assets/monitor.webp";

const AboutUsSections = () => {
  const [productCount, setProductCount] = useState(50);

  const starterPrice = productCount * 80;
  const businessPrice = productCount * 150;

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 space-y-24">
      {/* Schedule Section */}
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <img
            src={scheduleImg}
            alt="Schedule"
            className="rounded-xl shadow-md"
          />
        </div>
        <div className="flex-1 space-y-4">
          <p className="text-orange-600 font-semibold uppercase">Schedule</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Streamline Your Business With Smart Scheduling Solutions
          </h2>
          <p className="text-gray-600">
            Take control of your time and boost productivity with our intelligent
            scheduling system. Automate appointments, manage team availability, and
            deliver exceptional customer experiences through seamless calendar management.
          </p>
          <a href="#" className="text-blue-600 font-medium hover:underline">
            Explore scheduling features →
          </a>
        </div>
      </div>

      {/* Monitor Section */}
      <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
        <div className="flex-1">
          <img
            src={monitorImg}
            alt="Monitor"
            className="rounded-xl shadow-md"
          />
        </div>
        <div className="flex-1 space-y-4">
          <p className="text-green-600 font-semibold uppercase">Monitor</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Introducing best mobile carousels
          </h2>
          <p className="text-gray-600">
            Before the ship is really back. Round, round, all around the world. Round, all
            around the world. Round, all around the world. Round, all around the world.
          </p>
          <a href="#" className="text-blue-600 font-medium hover:underline">
            Learn more about monitoring →
          </a>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="text-center space-y-8">
        <h2 className="text-3xl font-bold">Pricing</h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="bg-white rounded-lg shadow-lg px-10 py-8 text-left">
            <p className="text-gray-500">Starter</p>
            <h3 className="text-2xl font-bold">${starterPrice}/mo</h3>
            <p className="text-sm text-gray-400 mt-2">
              ${80} per product × {productCount}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg px-10 py-8 text-left">
            <p className="text-gray-500">Business</p>
            <h3 className="text-2xl font-bold">${businessPrice}/mo</h3>
            <p className="text-sm text-gray-400 mt-2">
              ${150} per product × {productCount}
            </p>
          </div>
        </div>

        <div className="w-full max-w-md mx-auto">
          <label htmlFor="products" className="block text-gray-600 mb-2">
            {productCount} products
          </label>
          <input
            id="products"
            type="range"
            min="1"
            max="50"
            value={productCount}
            onChange={(e) => setProductCount(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div className="pt-6">
          <p className="text-gray-700 mb-3">Ready to get started?</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSections;
