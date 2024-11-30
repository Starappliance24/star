import React from "react";
import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import ServiceAreas from '../components/ServiceAreas2';

const blogs = [
  {
    title: "Common Washing Machine Problems and Solutions",
    date: "March 15, 2024",
    image:
      "https://images.pexels.com/photos/5591640/pexels-photo-5591640.jpeg?w=1260",
    excerpt:
      "Learn about the most common washing machine issues and how to fix them. From strange noises to leaks, we cover everything you need to know.",
    path: "/blog/appliance-care",
  },
  {
    title: "Energy-Saving Tips for Your Appliances",
    date: "March 10, 2024",
    image:
      "https://images.pexels.com/photos/5591646/pexels-photo-5591646.jpeg?w=1260",
    excerpt:
      "Discover how to reduce your energy bills with these simple appliance maintenance tips. Save money while helping the environment.",
    path: "/blog/energy-saving",
  },
  {
    title: "When to Replace vs Repair Your Appliances",
    date: "March 5, 2024",
    image:
      "https://images.pexels.com/photos/3829560/pexels-photo-3829560.jpeg?w=1260",
    excerpt:
      "Make informed decisions about whether to repair or replace your home appliances. Learn about the factors to consider and when each option makes sense.",
    path: "/blog/repair-vs-replace",
  },
];

const Blog = () => {
  return (<>
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
          <p className="text-xl text-gray-600">
            Expert advice and tips for maintaining your appliances
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <article
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{blog.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                <Link
                  to={blog.path}
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-700"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
    <ServiceAreas/></>
  );
};

export default Blog;
