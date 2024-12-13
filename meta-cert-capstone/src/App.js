import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router";

import Navbar from "./components/Nav";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import ConfirmationPage from "./pages/Confirmation";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        {/* Define Routes for different pages */}
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Home Page route */}
          <Route path="/reservation" element={<BookingPage />} />{" "}
          {/* Booking Page route */}
          <Route path="/confirmation" element={<ConfirmationPage />} />{" "}
          {/* confirmation Page route */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
