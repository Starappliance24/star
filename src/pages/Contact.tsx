import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Need help with your appliances? Our expert technicians are ready to
            assist you 24/7.
          </p>
        </div>

        {/* Emergency Contact Banner */}
        <div className="bg-emerald-600 text-white rounded-xl p-8 text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">24/7 Emergency Service</h2>
          <p className="text-lg mb-6">
            Available for urgent repairs and service needs
          </p>
          <a
            href="tel:+18477670547"
            className="inline-flex items-center bg-white text-emerald-600 px-8 py-3 rounded-md text-lg hover:bg-gray-100 transition-colors"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call Now: (847) 767-0547
          </a>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

          <div className="space-y-6">
            <div className="flex items-start">
              <Phone className="h-6 w-6 text-emerald-600 mr-4 mt-1" />
              <div>
                <h4 className="font-bold mb-1">Phone</h4>
                <a
                  href="tel:+18477670547"
                  className="text-emerald-600 hover:text-emerald-700"
                >
                  (847) 767-0547
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <Mail className="h-6 w-6 text-emerald-600 mr-4 mt-1" />
              <div>
                <h4 className="font-bold mb-1">Email</h4>
                <a
                  href="mailto:starappliance24@gmail.com"
                  className="text-emerald-600 hover:text-emerald-700"
                >
                  starappliance24@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <Clock className="h-6 w-6 text-emerald-600 mr-4 mt-1" />
              <div>
                <h4 className="font-bold mb-1">Hours</h4>
                <p className="text-gray-600">
                  Monday - Friday: 8:00 AM - 6:00 PM
                </p>
                <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
                <p className="text-gray-600 mt-2">
                  24/7 Emergency Service Available
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-emerald-600 mr-4 mt-1" />
              <div>
                <h4 className="font-bold mb-1">Service Area</h4>
                <p className="text-gray-600">
                  Serving Chicago and surrounding suburbs within a 50-mile
                  radius
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
