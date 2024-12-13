import React, { useState } from "react";
import { useNavigate } from "react-router";
import reserve from "../images/reservation1.jpg";

const ReservationPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [occasion, setOccasion] = useState("");
  const [guestNumber, setGuestNumber] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation check for empty fields
    if (
      !fullName ||
      !email ||
      !phoneNumber ||
      !occasion ||
      !guestNumber ||
      !date ||
      !time
    ) {
      setErrorMessage("All fields are required.");
      return;
    }

    // Store the reservation in localStorage
    const newReservation = {
      fullName,
      email,
      phoneNumber,
      occasion,
      guestNumber,
      date,
      time,
    };

    localStorage.setItem("reservation", JSON.stringify(newReservation));

    // Navigate to the confirmation page
    navigate("/confirmation");
  };

  return (
    <div className="py-12 px-4 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Grid: Form */}
        <div className="bg-white p-4 rounded-lg shadow-lg space-y-6">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
            Make a Reservation
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name Input */}
            <div>
              <label htmlFor="fullName" className="block text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Phone Number Input */}
            <div>
              <label htmlFor="phoneNumber" className="block text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Occasion Dropdown */}
            <div>
              <label htmlFor="occasion" className="block text-gray-700">
                Occasion
              </label>
              <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                required
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="">Select an Occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Wedding">Wedding</option>
                <option value="Graduation">Graduation</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Guest Number Input */}
            <div>
              <label htmlFor="guestNumber" className="block text-gray-700">
                Guest Number
              </label>
              <input
                type="number"
                id="guestNumber"
                value={guestNumber}
                onChange={(e) => setGuestNumber(e.target.value)}
                required
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Date Input */}
            <div>
              <label htmlFor="date" className="block text-gray-700">
                Date
              </label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Time Input */}
            <div>
              <label htmlFor="time" className="block text-gray-700">
                Time
              </label>
              <input
                type="time"
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Error Message */}
            {errorMessage && (
              <p className="text-red-500 text-sm">{errorMessage}</p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="py-3 px-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition"
            >
              Confirm Reservation
            </button>
          </form>
        </div>

        {/* Right Grid: Image (Hidden on Small Screens) */}
        <div className="lg:block hidden rounded-lg shadow-lg space-y-6">
          <img
            src={reserve}
            alt="restaurant"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ReservationPage;
