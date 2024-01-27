import React from "react";

import albertImage from "../assets/avatars/albert.svg";
import bessieImage from "../assets/avatars/bessie.svg";
import codyImage from "../assets/avatars/cody.svg";
import ralphImage from "../assets/avatars/ellipse.svg";
import kathrynImage from "../assets/avatars/kath.svg";
import leslieImage from "../assets/avatars/lessie.svg";
import marwinImage from "../assets/avatars/marwin.svg";
import wadeImage from "../assets/avatars/wade.svg";

import CommentCard from "./CommentCard";

const testimonialsTop = [
  {
    name: "Ralph Edwards",
    content:
      "A game-changer for my business. Thank you for your expertise! The guidance and strategies provided by this team have transformed my business into a thriving success.",
    email: "dolores.chambers@example.com",
    image: ralphImage,
  },
  {
    name: "Cody Fisher",
    content: "Exceptional service! I couldn't be happier with the results.",
    email: "tim.jennings@example.com",
    image: codyImage,
  },
  {
    name: "Wade Warren",
    content:
      "Reliable and trustworthy. They have earned my trust and loyalty. This company has consistently demonstrated reliability and trustworthiness.",
    email: "jackson.graham@example.com",
    image: wadeImage,
  },
  {
    name: "Marvin Mchkinney",
    content:
      "An absolute pleasure to work with. They made the process seamless. Working with this team was a seamless and enjoyable experience.",
    email: "felicia.reid@example.com",
    image: marwinImage,
  },
];

const testimonialsBot = [
  {
    name: "Enzy Storia",
    content:
      "Reliable and trustworthy. They have earned my trust and loyalty. This company has consistently demonstrated reliability and trustworthiness.",
    email: "enzy@example.com",
    image: bessieImage,
  },
  {
    name: "Bessie Cooper",
    content:
      "Life-changing experience! I learned so much from their program. Participating in their program was a transformative experience for me.",
    email: "georgia.young@example.com",
    image: bessieImage,
  },
  {
    name: "Kathryn Murphy",
    content:
      "Efficient and professional. I will definitely use their services again. The professionalism of this team made the entire process effortless and stress-free.",
    email: "curtis.sssweav@example.com",
    image: kathrynImage,
  },
  {
    name: "Albert Flores",
    content:
      "Outstanding customer support! They went above and beyond to help.",
    email: "nathan.roberts@example.com",
    image: albertImage,
  },
  {
    name: "Leslie Alexander",
    content:
      "Exceptional service! I couldn't be happier with the results. The team went above and beyond to meet my needs and deliver outstanding outcomes.",
    email: "michelle.rivera@example.com",
    image: leslieImage,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <div id="testimonial" className="py-12">
      <p className="text-center text-xs text-blue-500">Wall of gratitude</p>
      <h2 className="text-center text-3xl font-extrabold mb-6">
        What our clients say about us
      </h2>
      <div className="flex flex-col overflow-x-hidden">
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
        <div className="flex items-start">
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
