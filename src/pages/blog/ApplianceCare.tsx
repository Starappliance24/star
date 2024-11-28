import React from "react";
import { Link } from "react-router-dom";
import { Clock, User, ArrowLeft } from "lucide-react";

const ApplianceCare = () => {
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
            Common Washing Machine Problems and Solutions
          </h1>
          <div className="flex items-center text-gray-600 mb-8">
            <div className="flex items-center mr-6">
              <User className="h-4 w-4 mr-2" />
              {/* <span>By John Smith</span> */}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>March 15, 2024</span>
            </div>
          </div>

          <img
            src="https://images.pexels.com/photos/5591640/pexels-photo-5591640.jpeg?w=1260"
            alt="Washing Machine Repair"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />

          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              Washing machines are essential household appliances that we rely
              on daily. Understanding common problems and their solutions can
              help you maintain your machine and know when to call a
              professional.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              1. Machine Not Starting
            </h2>
            <p className="mb-4">
              If your washing machine won't start, first check if it's properly
              plugged in and the circuit breaker hasn't tripped. Also, ensure
              the door is completely closed as machines have safety locks that
              prevent operation when open.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Unusual Noises</h2>
            <p className="mb-4">
              Banging, squealing, or grinding noises often indicate loose or
              damaged components. Common culprits include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Loose drum or motor mount</li>
              <li>Worn bearings</li>
              <li>Foreign objects in the drum</li>
              <li>Damaged pump</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Water Leaks</h2>
            <p className="mb-4">
              Leaks can occur from several places and may indicate different
              problems:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Damaged door seal</li>
              <li>Loose or damaged hoses</li>
              <li>Cracked tub</li>
              <li>Clogged drain pump</li>
            </ul>

            <div className="bg-emerald-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-bold mb-4">
                Need Professional Help?
              </h3>
              <p className="mb-4">
                If you're experiencing any of these issues, our expert
                technicians are here to help. We provide fast, reliable service
                for all major washing machine brands.
              </p>
              <a
                href="tel:+15551234567"
                className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-md hover:bg-emerald-700"
              >
                Call Now: (555) 123-4567
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ApplianceCare;
