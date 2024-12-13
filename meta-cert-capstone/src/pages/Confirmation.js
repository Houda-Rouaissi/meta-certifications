import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const ConfirmationPage = () => {
  const [reservation, setReservation] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Get reservation data from localStorage
    const storedReservation = JSON.parse(localStorage.getItem("reservation"));

    if (storedReservation) {
      setReservation(storedReservation);
    } else {
      // If no reservation exists, redirect to reservation page
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="py-16 px-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        {reservation ? (
          <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Reservation Confirmed!
            </h2>
            <p className="text-lg text-gray-700">
              Thank you, {reservation.fullName}!
            </p>
            <p className="text-md text-gray-600">
              We have successfully received your reservation for{" "}
              {reservation.occasion}.
            </p>
            <p className="text-md text-gray-600">Date: {reservation.date}</p>
            <p className="text-md text-gray-600">Time: {reservation.time}</p>
            <p className="text-md text-gray-600">
              Guest Number: {reservation.guestNumber}
            </p>
            <p className="text-md text-gray-600">
              We will send a confirmation email to {reservation.email}.
            </p>
            <p className="text-md text-gray-600">
              We look forward to seeing you!
            </p>
          </div>
        ) : (
          <div>
            <p className="text-red-500">No reservation found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfirmationPage;
