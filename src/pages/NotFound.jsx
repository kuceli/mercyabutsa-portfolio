import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="px-4 lg:py-12">
        <div className="lg:gap-4 lg:flex">
          <div className="flex flex-col items-center justify-center md:py-24 lg:py-32">
            <h1 className="font-bold text-[#07363C] text-9xl">404</h1>
            <p className="mb-2 text-2xl font-bold text-center text-[#07363C] md:text-3xl">
              <span className="text-[#F48D3F]">Oops!</span> Page Not Found
            </p>
            <p className="mb-8 text-center text-gray-500 md:text-lg">
              The page you’re looking for doesn’t exist.
            </p>
            <Link
              to="/"
              className="mb-8 text-center text-[#F48D3F] md:text-base hover:text-[#07363C]"
            >
              Go back home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
