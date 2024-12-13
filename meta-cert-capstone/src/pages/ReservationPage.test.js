import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ReservationPage from './ReservationPage';

beforeEach(() => {
  // Clear localStorage before each test to avoid residual state
  localStorage.clear();
  jest.useFakeTimers();  // Mock timers if your component uses any
});

afterEach(() => {
  jest.runOnlyPendingTimers();  // Ensure all pending timers are run
  jest.useRealTimers();  // Restore original timers
});

test('renders ReservationPage and submits the form', () => {
  render(
    <MemoryRouter initialEntries={['/reservation']}>
      <ReservationPage />
    </MemoryRouter>
  );

  // Check that the page title and form fields are rendered
  expect(screen.getByText(/Make a Reservation/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Guest Number/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Time/i)).toBeInTheDocument();

  // Simulate user input for the form fields
  fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: 'John Doe' } });
  fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john.doe@example.com' } });
  fireEvent.change(screen.getByLabelText(/Phone Number/i), { target: { value: '123-456-7890' } });
  fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'Birthday' } });
  fireEvent.change(screen.getByLabelText(/Guest Number/i), { target: { value: '2' } });
  fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: '2024-12-15' } });
  fireEvent.change(screen.getByLabelText(/Time/i), { target: { value: '18:30' } });

  // Verify the submit button is present
  const submitButton = screen.getByText(/Confirm Reservation/i);
  expect(submitButton).toBeInTheDocument();

  // Simulate form submission
  fireEvent.click(submitButton);

  // Check that the reservation is saved in localStorage
  const reservation = JSON.parse(localStorage.getItem('reservation'));
  expect(reservation).toEqual({
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    phoneNumber: '123-456-7890',
    occasion: 'Birthday',
    guestNumber: '2',
    date: '2024-12-15',
    time: '18:30',
  });
});

test('shows error message when required fields are missing', () => {
  render(
    <MemoryRouter initialEntries={['/reservation']}>
      <ReservationPage />
    </MemoryRouter>
  );

  // Simulate form submission without filling in required fields
  fireEvent.click(screen.getByText(/Confirm Reservation/i));

  // Check if the error message is displayed for missing fields
  expect(screen.getByText(/All fields are required/i)).toBeInTheDocument();
});
