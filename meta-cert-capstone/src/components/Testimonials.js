import React from "react";

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sophia Lee",
    rating: 5,
    review:
      "Absolutely loved the food! The flavors were fresh and vibrant. Will definitely be back for more!",
  },
  {
    id: 2,
    name: "Liam Carter",
    rating: 4,
    review:
      "Great ambiance and friendly staff. The pasta was amazing, but a bit too salty for my taste.",
  },
  {
    id: 3,
    name: "Olivia Martinez",
    rating: 5,
    review:
      "Incredible experience! The Mediterranean flavors are authentic and the service was top-notch!",
  },
  {
    id: 4,
    name: "Ethan Thompson",
    rating: 4,
    review:
      "The food was great, but I wish the portions were a little bigger for the price.",
  },
];

const TestimonialCarousel = () => {
  return (
    <div className="container mx-auto px-8 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        What Our Customers Say
      </h2>

      <div className="relative">
        {/* Flex container for items */}
        <div className="flex overflow-x-auto space-x-8 pb-6 px-6 scroll-smooth snap-x snap-mandatory">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center w-80 flex-shrink-0 transition-transform transform hover:scale-105 duration-300 ease-in-out snap-start"
            >
              {/* Rating Stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={`w-5 h-5 ${
                      index < testimonial.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Header */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-custom-green p-4 flex items-center justify-center text-white font-bold text-lg">
                  {/* Display the first letter of the name */}
                  {testimonial.name.charAt(0)}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {testimonial.name}
                </h3>
              </div>

              {/* Testimonial Review */}
              <p className="text-sm text-gray-600">{testimonial.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
