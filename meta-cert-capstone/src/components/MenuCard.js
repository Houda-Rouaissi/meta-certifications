import React from "react";

const MenuCard = ({ dish }) => {
  return (
    <div className="max-w-sm  rounded-lg overflow-hidden shadow-lg bg-white flex-col flex justify-between items-center">
      {/* Dish Image */}
      <img
        className="w-full h-50 object-cover"
        src={dish.image}
        alt={dish.name}
      />

      <div className="px-4 py-3 flex flex-col justify-between flex-grow m-4">
        {/* Dish Name and Price on the same line */}
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-800">{dish.name}</h3>
          <p className="text-lg font-semibold text-gray-900">{`$${dish.price}`}</p>
        </div>

        {/* Dish Description */}
        <p className="text-sm text-gray-600 mt-2 justify-center">
          {dish.description}
        </p>

        {/* Order Button */}
        <button className="py-2 px-4 m-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition">
          Order for Delivery
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
