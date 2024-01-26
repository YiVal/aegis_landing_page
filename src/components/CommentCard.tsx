// CommentCard.tsx
import React from "react";

type CommentCardProps = {
  content: string;
  author: string;
  email: string;
  image: string; // URL of the user's image
};

const CommentCard: React.FC<CommentCardProps> = ({
  content,
  author,
  email,
  image,
}) => {
  return (
    <div className="flex flex-col w-72 justify-between bg-white rounded-lg p-8 m-4 shadow-lg">
      <p className="text-gray-800 text-sm">{content}</p>
      <div className="flex items-center border-t border-gray-300 pt-4 mt-4">
        <img src={image} alt={author} className="w-10 h-10 rounded-full mr-4" />
        <div>
          <p className="text-sm text-gray-900">{author}</p>
          <p className="text-gray-500 text-xs">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
