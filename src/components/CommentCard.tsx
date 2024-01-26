// CommentCard.tsx
import React from "react";

type CommentCardProps = {
  content: string;
  author: string;
  role: string;
  email: string;
};

const CommentCard: React.FC<CommentCardProps> = ({
  content,
  author,
  role,
  email,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-4">
      <p className="text-gray-600 text-justify">{content}</p>
      <div className="flex items-center mt-6">
        <div className="flex-1">
          <p className="text-lg font-bold">{author}</p>
          <p className="text-sm text-gray-500">{role}</p>
          <p className="text-xs text-gray-400">{email}</p>
        </div>
        {/* Placeholder for profile image */}
        <div className="w-14 h-14 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
};

export default CommentCard;
