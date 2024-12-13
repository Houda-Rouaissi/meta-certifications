import React from "react";
import img from "../images/home.jpg";

const Main = () => {
  return (
    <div id="main" className="py-16 px-6 bg-gray-100">
      <div className="max-w-screen-xl container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Grid: Description, Titles, and Button */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-4xl font-bold text-gray-800 sm:text-5xl md:text-6xl">
            Little Lemon
          </h1>
          <h3 className="text-2xl font-semibold text-gray-600 sm:text-3xl">
            Chicago
          </h3>
          <p className="text-lg text-gray-600 sm:text-xl">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit.{" "}
          </p>
        </div>

        {/* Right Grid: Image */}
        <div className="flex justify-center">
          <img
            className="w-full max-w-md object-cover rounded-lg shadow-lg sm:max-w-lg md:max-w-xl lg:max-w-2xl"
            src={img}
            alt="restaurant"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
