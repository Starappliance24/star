import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-emerald-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:+18477670547">(847) 767-0547</a>
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:starappliance24@gmail.com">
                  starappliance24@gmail.com
                </a>
              </p>
              <p className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Serving Chicago and Surrounding Areas
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Hours</h3>
            <div className="space-y-2">
              <p>Monday - Saturday: 6:00 AM - 8:00 PM</p>
              <p className="mt-4">24/7 Available</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Service Area</h3>
            <p>Serving Chicago area within a 50-mile radius</p>
            <p className="mt-4">Licensed & Insured</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>
            &copy; {new Date().getFullYear()} Star Appliance. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
