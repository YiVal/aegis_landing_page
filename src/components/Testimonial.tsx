// Testimonials.tsx
import React from "react";

import CommentCard from "./CommentCard";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      content: "Exceptional service! I couldn't be happier with the results.",
      author: "Cody Fisher",
      role: "CEO",
      email: "tim.jennings@example.com",
      // Assuming you have a way to import or dynamically load images
      image: "/path-to-cody-fisher-image.jpg",
    },
    // ... more testimonials
  ];

  return (
    <div className="bg-gray-900 text-white p-20">
      <h2 className="text-3xl font-semibold text-center">
        What our client say about us
      </h2>
      <p className="text-sm text-gray-400 text-center mt-2">
        We recommend building a plan that works best for you.
      </p>
      <div className="flex flex-wrap justify-center mt-8">
        {testimonials.map((testimonial, index) => (
          <CommentCard
            key={index}
            content={testimonial.content}
            author={testimonial.author}
            role={testimonial.role}
            email={testimonial.email}
            // image={testimonial.image} // Uncomment when images are available
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
