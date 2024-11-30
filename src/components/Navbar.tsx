import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Wrench, ChevronDown, Menu, X, Phone, Crown, Star } from "lucide-react";

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
      if (blogRef.current && !blogRef.current.contains(event.target as Node)) {
        setIsBlogOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsServicesOpen(false);
    setIsBlogOpen(false);
    setIsMobileMenuOpen(false);
  }, [location]);

  const services = [
    { name: "Washer & Dryer Repair", path: "/services/washer-dryer-repair" },
    { name: "Refrigerator Repair", path: "/services/refrigerator-repair" },
    { name: "Dishwasher Repair", path: "/services/dishwasher-repair" },
    { name: "Air Conditioner & Oven Repair", path: "/services/microwave-repair" },
    { name: "Viking Appliance Service", path: "/services/viking-service" },
    {
      name: "Commercial Appliance Repair",
      path: "/services/commercial-repair",
    },
    { name: "Sub-Zero Service", path: "/services/subzero-service" },
    { name: "Furnace Repair", path: "/services/furnace-repair" },
  ];

  const blogs = [
    { name: "Appliance Care Guide", path: "/blog/appliance-care" },
    { name: "Energy Saving Tips", path: "/blog/energy-saving" },
    { name: "Repair vs Replace", path: "/blog/repair-vs-replace" },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Star className="h-8 w-8 text-emerald-600" />
              <span className="text-xl font-bold text-gray-800">
                Star Appliance
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="font-bold text-gray-600 hover:text-emerald-600"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="font-bold text-gray-600 hover:text-emerald-600"
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div ref={servicesRef} className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center font-bold text-gray-600 hover:text-emerald-600"
              >
                Services
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              {isServicesOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      className="block px-4 py-2 text-gray-600 hover:bg-emerald-50 hover:text-emerald-600"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Blog Dropdown */}
            <div ref={blogRef} className="relative">
              <button
                onClick={() => setIsBlogOpen(!isBlogOpen)}
                className="flex items-center font-bold text-gray-600 hover:text-emerald-600"
              >
                Blog
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              {isBlogOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
                  {blogs.map((blog, index) => (
                    <Link
                      key={index}
                      to={blog.path}
                      className="block px-4 py-2 text-gray-600 hover:bg-emerald-50 hover:text-emerald-600"
                    >
                      {blog.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="font-bold text-gray-600 hover:text-emerald-600"
            >
              Contact
            </Link>

            <a
              href="tel:+18477670547"
              className="inline-flex items-center bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700"
            >
              <Phone className="h-4 w-4 mr-2" />
              (847) 767-0547
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-emerald-600"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="font-bold text-gray-600 hover:text-emerald-600"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="font-bold text-gray-600 hover:text-emerald-600"
              >
                About
              </Link>

              <div className="space-y-2">
                <p className="font-bold text-gray-800">Services</p>
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className="block pl-4 text-gray-600 hover:text-emerald-600"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              <div className="space-y-2">
                <p className="font-bold text-gray-800">Blog</p>
                {blogs.map((blog, index) => (
                  <Link
                    key={index}
                    to={blog.path}
                    className="block pl-4 text-gray-600 hover:text-emerald-600"
                  >
                    {blog.name}
                  </Link>
                ))}
              </div>

              <Link
                to="/contact"
                className="font-bold text-gray-600 hover:text-emerald-600"
              >
                Contact
              </Link>

              <a
                href="tel:+18477670547"
                className="inline-flex items-center bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700"
              >
                <Phone className="h-4 w-4 mr-2" />
                (847) 767-0547
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
