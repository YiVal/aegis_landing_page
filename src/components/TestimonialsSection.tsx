import React from "react";

import Testimonial from "./Testimonial";

// Sample data for testimonials
// Sample data for testimonials
const testimonials = [
  {
    name: "Cody Fisher",
    title: "CEO of XyzCorp",
    content: "Exceptional service! I couldn't be happier with the results.",
    image: "/path/to/cody-fisher-image.jpg", // Update with the correct path to the image
  },
  {
    name: "Wade Warren",
    title: "Product Manager at Abc Inc.",
    content:
      "Reliable and trustworthy. They have earned my trust and loyalty. This company has consistently demonstrated reliability and trustworthiness.",
    image: "/path/to/wade-warren-image.jpg", // Update with the correct path to the image
  },
  {
    name: "Marvin McKinney",
    title: "Freelance Writer",
    content:
      "An absolute pleasure to work with. They made the process seamless. Working with this team was a seamless and enjoyable experience.",
    image: "/path/to/marvin-mckinney-image.jpg", // Update with the correct path to the image
  },
  // ...add more testimonials as needed
];

const TestimonialsSection: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold mb-6">
          What our clients say about us
        </h2>
        <div className="flex overflow-x-scroll scrolling-touch">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
