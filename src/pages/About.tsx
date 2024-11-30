import React from "react";
import {
  Shield,
  Users,
  Award,
  Wrench,
  Phone,
  Star,
  CheckCircle,
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Shield className="h-12 w-12 text-emerald-600" />,
      title: "Integrity",
      description: "We believe in honest, transparent service and fair pricing",
    },
    {
      icon: <Users className="h-12 w-12 text-emerald-600" />,
      title: "Customer First",
      description: "Your satisfaction is our top priority",
    },
    {
      icon: <Award className="h-12 w-12 text-emerald-600" />,
      title: "Excellence",
      description: "Committed to delivering the highest quality service",
    },
    {
      icon: <Star className="h-12 w-12 text-emerald-600" />,
      title: "Experience",
      description: "Over 20 years of industry expertise",
    },
  ];

  const achievements = [
    { number: "20+", label: "Years Experience" },
    { number: "50k+", label: "Repairs Completed" },
    { number: "98%", label: "Customer Satisfaction" },
    { number: "24/7", label: "Emergency Service" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[400px] mb-16">
        <img
          src="https://images.pexels.com/photos/5463587/pexels-photo-5463587.jpeg?w=1260"
          alt="About Us Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 to-emerald-600/80 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">About Star Appliance</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Your trusted partner in appliance repair and maintenance since
              2012
            </p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-emerald-900">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                Founded in 2012, Star Appliance has grown from a small local
                repair service to one of the most trusted names in appliance
                repair. Our journey began with a simple mission: to provide
                honest, reliable, and professional appliance repair services to
                our community.
              </p>
              <p className="text-gray-600 mb-4">
                With over a decade of experience, we've built a reputation for
                excellence in both residential and commercial appliance repair.
                Our team of certified technicians brings expertise,
                professionalism, and dedication to every service call.
              </p>
              <p className="text-gray-600">
                Today, we continue to grow while maintaining our commitment to
                quality service and customer satisfaction. We're proud to be
                your local appliance repair experts, serving Chicago and
                surrounding areas.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/29226620/pexels-photo-29226620/free-photo-of-professional-plumber-installing-a-radiator-pipe.jpeg?w=1260"
                alt="Our Team"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="py-16 bg-gradient-to-br from-emerald-50 to-emerald-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-emerald-900">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide our service excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-emerald-900">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-emerald-900">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600">
              Experience the Star Appliance difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-emerald-900">
                Our Commitment
              </h3>
              <ul className="space-y-4">
                {[
                  "Licensed and certified technicians",
                  "Upfront, honest pricing",
                  "Same-day service available",
                  "90-day warranty on parts and labor",
                  "24/7 emergency service",
                  "Satisfaction guaranteed",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/9607048/pexels-photo-9607048.jpeg?w=1260"
                alt="Professional Service"
                className="rounded-lg shadow-lg h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Experience Professional Service?
          </h2>
          <p className="text-xl mb-8">
            Contact us today for all your appliance repair needs
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
    </div>
  );
};

export default About;
