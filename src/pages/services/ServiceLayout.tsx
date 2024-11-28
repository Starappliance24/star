import React from "react";
import {
  Phone,
  Shield,
  Clock,
  Wrench,
  Star,
  MapPin,
  DollarSign,
  CheckCircle,
} from "lucide-react";

interface ServiceLayoutProps {
  title: string;
  image: string;
  description: string;
  features: string[];
  commonIssues: string[];
}

const ServiceLayout: React.FC<ServiceLayoutProps> = ({
  title,
  image,
  description,
  features,
  commonIssues,
}) => {
  const benefits = [
    {
      icon: <Shield className="h-8 w-8 text-emerald-600" />,
      title: "Licensed & Insured",
      description:
        "All our technicians are fully licensed and insured for your peace of mind",
    },
    {
      icon: <Clock className="h-8 w-8 text-emerald-600" />,
      title: "Same Day Service",
      description: "Fast response times with same-day service availability",
    },
    {
      icon: <Wrench className="h-8 w-8 text-emerald-600" />,
      title: "Expert Technicians",
      description: "Factory-trained professionals with years of experience",
    },
    {
      icon: <Star className="h-8 w-8 text-emerald-600" />,
      title: "Satisfaction Guaranteed",
      description:
        "We stand behind our work with a 100% satisfaction guarantee",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Schedule Service",
      description: "Call us to schedule a convenient appointment time",
    },
    {
      number: "2",
      title: "Diagnosis",
      description:
        "Our technician will perform a thorough diagnostic assessment",
    },
    {
      number: "3",
      title: "Upfront Pricing",
      description: "Receive a clear quote before any work begins",
    },
    {
      number: "4",
      title: "Expert Repair",
      description: "Professional repair using quality replacement parts",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[400px] mb-12">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="max-w-7xl mx-auto px-4 text-center text-white">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">{description}</p>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center bg-emerald-600 text-white px-8 py-3 rounded-md text-lg hover:bg-emerald-700"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now: (555) 123-4567
            </a>
          </div>
        </div>
      </div>

       {/* Features and Issues Grid */}
       <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Our Service Features</h2>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-3" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Common Issues We Fix</h2>
            <ul className="space-y-4">
              {commonIssues.map((issue, index) => (
                <li key={index} className="flex items-center">
                  <Wrench className="h-5 w-5 text-emerald-600 mr-3" />
                  <span>{issue}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      {/* Service Images Section */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Professional Service
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.pexels.com/photos/9606744/pexels-photo-9606744.jpeg?w=1260"
              alt="Professional Repair Service"
              className="w-full h-64 object-cover"
            />
            <div className="p-4 bg-white">
              <p className="font-semibold">Expert Repairs</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.pexels.com/photos/19895885/pexels-photo-19895885/free-photo-of-man-with-white-helmet-in-factory.jpeg?w=1260"
              alt="Expert Technicians"
              className="w-full h-64 object-cover"
            />
            <div className="p-4 bg-white">
              <p className="font-semibold">Certified Technicians</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.pexels.com/photos/9017746/pexels-photo-9017746.jpeg?w=1260"
              alt="Quality Service"
              className="w-full h-64 object-cover"
            />
            <div className="p-4 bg-white">
              <p className="font-semibold">Quality Guaranteed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mb-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Our Service
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-lg"
              >
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Process */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-black">Our Service Process</h2>
            <p className="text-xl text-gray-600">Simple, efficient, and professional</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative bg-white p-6 rounded-lg shadow-lg">
                <div className="bg-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-2 text-emerald-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-8 h-0.5 bg-emerald-300 transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
     

        {/* Call to Action */}
        <div className="bg-emerald-600 text-white rounded-xl p-8 text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Need {title}?</h2>
          <p className="text-xl mb-8">
            Our expert technicians are ready to help. Call now for fast,
            reliable service!
          </p>
          <a
            href="tel:+15551234567"
            className="inline-flex items-center bg-white text-emerald-600 px-8 py-3 rounded-md text-lg hover:bg-gray-100"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call for Service: (555) 123-4567
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceLayout;
