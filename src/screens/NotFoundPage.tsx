// NotFoundPage.tsx
import React from "react";

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-gray-800">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-2 text-xl">Page Not Found</p>
    </div>
  );
};

export default NotFoundPage;
