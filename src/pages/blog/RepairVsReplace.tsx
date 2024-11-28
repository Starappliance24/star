import React from "react";
import { Link } from "react-router-dom";
import { Clock, User, ArrowLeft, AlertTriangle } from "lucide-react";

const RepairVsReplace = () => {
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
            When to Repair vs Replace Your Appliances
          </h1>
          <div className="flex items-center text-gray-600 mb-8">
            <div className="flex items-center mr-6">
              <User className="h-4 w-4 mr-2" />
              {/* <span>By Mike Anderson</span> */}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>March 5, 2024</span>
            </div>
          </div>

          <img
            src="https://images.pexels.com/photos/3829560/pexels-photo-3829560.jpeg?w=1260"
            alt="Appliance Repair Decision"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />

          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              Making the decision between repairing or replacing an appliance
              can be challenging. Here's a comprehensive guide to help you make
              the right choice.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">The 50% Rule</h2>
            <p className="mb-4">
              If the cost of repair is more than 50% of the cost of a new
              appliance, and the unit is more than halfway through its expected
              lifespan, replacement is often the better choice.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              Average Appliance Lifespans
            </h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Refrigerator: 10-13 years</li>
              <li>Washing Machine: 8-12 years</li>
              <li>Dryer: 8-12 years</li>
              <li>Dishwasher: 8-10 years</li>
              <li>Microwave: 7-10 years</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">When to Repair</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Appliance is still under warranty</li>
              <li>Problem is minor and repair cost is reasonable</li>
              <li>
                Appliance is less than halfway through its expected lifespan
              </li>
              <li>Unit has been reliable with minimal past repairs</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">When to Replace</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Multiple repairs needed in recent past</li>
              <li>Parts are obsolete or hard to find</li>
              <li>
                Energy efficiency of new models offers significant savings
              </li>
              <li>Repair costs are close to replacement costs</li>
            </ul>

            <div className="bg-yellow-50 p-6 rounded-lg mt-8">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-6 w-6 text-yellow-600 mr-2" />
                <h3 className="text-xl font-bold">Need Expert Advice?</h3>
              </div>
              <p className="mb-4">
                Our technicians can provide a professional assessment of your
                appliance's condition and help you make an informed decision.
              </p>
              <a
                href="tel:+15551234567"
                className="inline-block bg-yellow-600 text-white px-6 py-3 rounded-md hover:bg-yellow-700"
              >
                Get Professional Assessment
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default RepairVsReplace;
