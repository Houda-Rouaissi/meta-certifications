import React from "react";
import MenuCard from "./MenuCard";
import dish1 from "../images/salad.png";
import dish2 from "../images/brochette.png";
import dish3 from "../images/dessert.png";

const dishes = [
  {
    name: "Greek salad",
    image: dish1,
    price: "12.99",
    description:
      "Our famous Greek Salad with crispy lettuce, fresh peppers, olives, and Chicago-style feta cheese, topped with crunchy garlic and rosemary croutons.",
  },
  {
    name: "Bruchetta",
    image: dish2,
    price: "5.99",
    description:
      "Our Bruschetta features grilled bread brushed with garlic, seasoned with salt, and drizzled with olive oil.",
  },
  {
    name: "Lemon Dessert",
    image: dish3,
    price: "5.00",
    description:
      "Inspired by Grandma’s timeless recipe, every ingredient is carefully selected to ensure the most authentic taste possible.",
  },
];

const Menu = () => {
  return (
    <div id="menu" className="container mx-auto px-6 py-8">
      {/* Flex container for title and button, spaced evenly */}
      <div className="flex justify-between items-center px-6 py-8">
        <h3 className="text-2xl font-semibold text-gray-600">
          Our special menu
        </h3>
        <button className="py-2 px-4 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition">
          Online menu
        </button>
      </div>

      {/* Grid layout for menu items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-8 ">
        {dishes.map((dish, index) => (
          <MenuCard key={index} dish={dish} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
