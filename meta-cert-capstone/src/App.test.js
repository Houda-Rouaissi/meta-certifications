import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Use MemoryRouter to simulate routing
import App from './App';

test('renders Navbar and routes correctly', () => {
  // Render the App with MemoryRouter to handle routing
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );

  // Check if Navbar is rendered
  const navbarElement = screen.getByRole('navigation');
  expect(navbarElement).toBeInTheDocument();

  // Check if HomePage is displayed by default (on initial route '/')
  const homePageElement = screen.getByText(/Make a Reservation/i);
  expect(homePageElement).toBeInTheDocument();

  // Simulate navigating to the reservation page
  const reservationLink = screen.getByText(/Reservations/i);
  fireEvent.click(reservationLink);

  // Check if we are on the ReservationPage
  const reservationPageElement = screen.getByText(/Confirm Reservation/i);
  expect(reservationPageElement).toBeInTheDocument();

  // Simulate navigating to the confirmation page
  const confirmationLink = screen.getByText(/Confirm Reservation/i);
  fireEvent.click(confirmationLink);

  // Check if we are on the ConfirmationPage
  const confirmationPageElement = screen.getByText(/Reservation Confirmed/i);
  expect(confirmationPageElement).toBeInTheDocument();
});
