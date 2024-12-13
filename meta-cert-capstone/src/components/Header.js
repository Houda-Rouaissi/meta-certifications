import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import img from '../images/home.jpg'

const Header = () => {
    const navigate = useNavigate();  

    const handleClick = () => {
        console.log('btn clicked')
        navigate('/reservation');  // Navigate to the /reservation page
    };

    return (
        <div id="about" className="mx-auto px-6 py-8 bg-gray-100">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Grid: Description, Titles, and Button */}
                <div className="flex flex-col justify-center items-center space-y-6 text-center">
                    <h1 className="text-4xl font-bold text-gray-800">Little Lemon</h1>
                    <h3 className="text-2xl font-semibold text-gray-600">Chicago</h3>
                    <p className="text-lg text-gray-600 max-w-lg">
                        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>
                    <button
                        onClick={handleClick}
                        className="py-2 px-4 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition"
                    >
                        Reserve a table
                    </button>
                </div>

                {/* Right Grid: Image */}
                <div className="flex justify-center">
                    <img
                        className="w-full max-w-md object-cover rounded-lg shadow-lg"
                        src={img}
                        alt="restaurant"
                    />
                </div>
            </div>
        </div>
    );
}

export default Header;
