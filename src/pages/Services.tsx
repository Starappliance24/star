import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import ServiceAreas from '../components/ServiceAreas';

const services = [
  {
    title: 'Washer & Dryer Repair',
    path: '/services/washer-dryer-repair',
    image: 'https://images.pexels.com/photos/4700411/pexels-photo-4700411.jpeg?w=1260',
    description: 'Expert repair services for all washer and dryer brands'
  },
  {
    title: 'Refrigerator Repair',
    path: '/services/refrigerator-repair',
    image: 'https://images.pexels.com/photos/6835090/pexels-photo-6835090.jpeg?w=1260',
    description: 'Keep your food fresh with our refrigerator repair services'
  },
  {
    title: 'Dishwasher Repair',
    path: '/services/dishwasher-repair',
    image: 'https://images.pexels.com/photos/3829560/w=1260',
    description: 'Professional dishwasher repair and maintenance'
  },
  {
    title: 'Microwave Repair',
    path: '/services/microwave-repair',
    image: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    description: 'Quick and efficient microwave repair services'
  },
  {
    title: 'Viking Appliance Service',
    path: '/services/viking-service',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    description: 'Specialized repair services for Viking appliances'
  },
  {
    title: 'Commercial Appliance Repair',
    path: '/services/commercial-repair',
    image: 'https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    description: 'Comprehensive repair services for commercial establishments'
  }
];

const Services = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-emerald-900">Our Services</h1>
          <p className="text-xl text-gray-600">Expert appliance repair services within 50 miles</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-emerald-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  to={service.path}
                  className="text-emerald-600 hover:text-emerald-700 font-semibold"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Appliance Repair?</h2>
          <p className="text-xl mb-8">Our expert technicians are ready to help!</p>
          <a
            href="tel:+18477670547"
            className="inline-flex items-center bg-white text-emerald-700 px-8 py-3 rounded-md text-lg hover:bg-emerald-50 transition-colors"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call Now: (847) 767-0547
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;