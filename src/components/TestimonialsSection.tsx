import React from "react";

import codyImage from "../assets/avatars/cody.svg";

import CommentCard from "./CommentCard";

// Sample data for testimonials
const testimonialsTop = [
  {
    name: "Cody Fisher",
    content: "Exceptional service! I couldn't be happier with the results.",
    email: "tim.jennings@example.com",
    image: codyImage, // Update with the correct path to the image
  },
  {
    name: "Wade Warren",
    content:
      "Reliable and trustworthy. They have earned my trust and loyalty. This company has consistently demonstrated reliability and trustworthiness.",
    email: "Jackson.graham@example.com",
    image: codyImage, // Update with the correct path to the image
  },
];

const testimonialsBot = [
  {
    name: "Kathryn Murphy",
    content:
      "Efficient and professional. I will definitely use their services again. The professionalism of this team made the entire process effortless and stress-free.",
    email: "curtis.weaver@example.com",
    image: codyImage, // Update with the correct path to the image
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <div className="py-12">
      <p className="text-center text-xs text-blue-500">Wall of gratitude</p>
      <h2 className="text-center text-3xl font-extrabold mb-6">
        What our clients say about us
      </h2>
      <div className="flex flex-col">
        <div className="flex items-start">
          {testimonialsTop.map((testimonial) => (
            <CommentCard
              key={testimonial.email}
              content={testimonial.content}
              author={testimonial.name}
              email={testimonial.email}
              image={testimonial.image} // Uncomment when images are available
            />
          ))}
        </div>
        <div className="flex align-top">
          {testimonialsBot.map((testimonial) => (
            <CommentCard
              key={testimonial.email}
              content={testimonial.content}
              author={testimonial.name}
              email={testimonial.email}
              image={testimonial.image} // Uncomment when images are available
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
