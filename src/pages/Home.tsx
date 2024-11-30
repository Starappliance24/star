import React from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  Clock,
  Wrench,
  Star,
  Phone,
  CheckCircle,
  MapPin,
  Check,
  Award,
  Tool,
} from "lucide-react";
import ImageSlider from "../components/ImageSlider";

const Home = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      content:
        "Excellent service! Fixed my refrigerator same day. Very professional and knowledgeable.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "Mike Thompson",
      role: "Restaurant Owner",
      content:
        "Their commercial repair service is outstanding. Quick response and reliable work.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "Emily Davis",
      role: "Property Manager",
      content:
        "We use ProFix for all our properties. Always dependable and great value.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
    },
  ];
  const features = [
    {
      icon: <Shield className="h-12 w-12 text-emerald-600" />,
      title: "Licensed & Insured",
      description: "All our technicians are fully licensed and insured",
    },
    {
      icon: <Clock className="h-12 w-12 text-emerald-600" />,
      title: "24/7 Service",
      description: "Emergency repairs available any time, day or night",
    },
    {
      icon: <Wrench className="h-12 w-12 text-emerald-600" />,
      title: "Expert Repairs",
      description: "Experienced technicians for all major brands",
    },
    {
      icon: <Star className="h-12 w-12 text-emerald-600" />,
      title: "Satisfaction Guaranteed",
      description: "100% satisfaction guarantee on all repairs",
    },
  ];

  const services = [
    {
      title: "Residential Services",
      items: [
        "Washer & Dryer",
        "Refrigerator",
        "Dishwasher",
        "Air Conditioner",
        "Furnace",
      ],
    },
    {
      title: "Commercial Services",
      items: [
        "Restaurant Equipment",
        "Industrial Appliances",
        "HVAC Systems",
        "Walk-in Coolers",
      ],
    },
    {
      title: "Luxury Brands",
      items: ["Viking", "Sub-Zero", "Wolf", "Thermador", "Miele"],
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Contact Us",
      description: "Call us for immediate assistance with your appliance needs",
    },
    {
      number: "2",
      title: "Diagnosis",
      description: "Expert technician performs thorough diagnostic assessment",
    },
    {
      number: "3",
      title: "Clear Quote",
      description: "Receive transparent pricing before any work begins",
    },
    {
      number: "4",
      title: "Expert Repair",
      description: "Professional repair with quality parts and warranty",
    },
  ];

  return (
    <div>
      <ImageSlider />

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-emerald-900">
              Why Choose Star Appliance?
            </h2>
            <p className="text-xl text-gray-600">
              Your trusted partner in appliance repair and maintenance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-emerald-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="py-16 bg-gradient-to-br from-emerald-50 to-emerald-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-emerald-900">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive appliance repair solutions for every need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-emerald-900">
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex justify-center items-center">
              <img
                src="https://images.pexels.com/photos/6720517/pexels-photo-6720517.jpeg?w=1260"
                alt="Professional Technician"
                className="rounded-lg shadow-lg h-[500px] w-[500px] object-cover"
              />
            </div>
            <div className="space-y-8">
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Categories We Serve</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4">
                      1
                    </div>
                    <p>Kitchen Appliances</p>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4">
                      2
                    </div>
                    <p>Laundry Appliances</p>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4">
                      3
                    </div>
                    <p>Commercial Appliances</p>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4">
                      4
                    </div>
                    <p>Preventative Maintenance</p>
                  </div>
                </div>
              </div>
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Emergency Service</h3>
                <p className="mb-4">Available 24/7 for urgent repairs</p>
                <a
                  href="tel:+18479877366"
                  className="inline-flex items-center bg-emerald-600 text-white px-6 py-3 rounded-md hover:bg-emerald-700"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call for Emergency Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service Process */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-emerald-900">
              Our Process
            </h2>
            <p className="text-xl text-gray-600">
              Simple, efficient, and professional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="bg-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-2 text-emerald-900">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-8 h-0.5 bg-emerald-300 transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Testimonials Section */}
      <div className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  {/* <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  /> */}
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Appliance Repair?</h2>
          <p className="text-xl mb-8">
            Our expert technicians are ready to help!
          </p>
          <a
            href="tel:+18477670547"
            className="inline-flex items-center bg-white text-emerald-700 px-8 py-3 rounded-md text-lg hover:bg-emerald-50 transition-colors"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call Now: (847) 767-0547
          </a>
        </div>
      </div>
      {/* Service Area Map */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Areas We Serve</h2>
            <p className="text-xl text-gray-600">
              Serving all areas within a 50-mile radius
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/1823680/pexels-photo-1823680.jpeg?w=1260"
                alt="Service Area Map"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-emerald-600 mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Coverage Area</h3>
                  <p className="text-gray-600">
                    We provide service to all major cities and suburbs within a
                    50-mile radius of Chicago location.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-emerald-600 mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Response Time</h3>
                  <p className="text-gray-600">
                    Same-day service available for most locations within our
                    service area.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
