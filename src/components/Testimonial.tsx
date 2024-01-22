import React from "react";

type TestimonialProps = {
  name: string;
  title: string;
  content: string;
  image: string; // URL of the user's image
};

const Testimonial: React.FC<TestimonialProps> = ({
  name,
  title,
  content,
  image,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-4">
      <div className="flex items-center space-x-4">
        <img src={image} alt={name} className="w-14 h-14 rounded-full" />
        <div>
          <p className="text-lg font-bold">{name}</p>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>
      <p className="mt-4 text-gray-600">{content}</p>
    </div>
  );
};

export default Testimonial;
