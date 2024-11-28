import React from "react";
import { Link } from "react-router-dom";
import { Clock, User, ArrowLeft, Lightbulb } from "lucide-react";

const EnergySaving = () => {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <Link
          to="/blog"
          className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>

        <article>
          <h1 className="text-4xl font-bold mb-4">
            Energy-Saving Tips for Your Appliances
          </h1>
          <div className="flex items-center text-gray-600 mb-8">
            <div className="flex items-center mr-6">
              <User className="h-4 w-4 mr-2" />
              {/* <span>By Sarah Johnson</span> */}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>March 10, 2024</span>
            </div>
          </div>

          <img
            src="https://images.pexels.com/photos/5591646/pexels-photo-5591646.jpeg?w=1260"
            alt="Energy Efficient Appliances"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />

          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              Reducing energy consumption not only helps the environment but
              also saves you money on utility bills. Here are some effective
              tips to make your appliances more energy-efficient.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              Refrigerator Efficiency
            </h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Keep the temperature between 37-40°F</li>
              <li>Clean coils regularly</li>
              <li>Check door seals for proper closure</li>
              <li>Avoid placing hot food directly in the refrigerator</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              Washing Machine Tips
            </h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Use cold water when possible</li>
              <li>Run full loads only</li>
              <li>Choose the appropriate water level</li>
              <li>Clean the lint filter regularly</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Dishwasher Savings</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Skip the heat-dry cycle</li>
              <li>Run full loads only</li>
              <li>Use eco-mode when available</li>
              <li>Scrape plates instead of pre-rinsing</li>
            </ul>

            <div className="bg-green-50 p-6 rounded-lg mt-8">
              <div className="flex items-center mb-4">
                <Lightbulb className="h-6 w-6 text-green-600 mr-2" />
                <h3 className="text-xl font-bold">Pro Tip</h3>
              </div>
              <p className="mb-4">
                Regular maintenance of your appliances can significantly improve
                their energy efficiency. Schedule annual check-ups to ensure
                optimal performance.
              </p>
              <a
                href="tel:+15551234567"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700"
              >
                Schedule Maintenance
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default EnergySaving;
