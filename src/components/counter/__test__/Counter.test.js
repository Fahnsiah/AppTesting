import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from '../Counter';

describe('Counter', () => {
  it('renders counter with initial count of 0', () => {
    const { getByText } = render(<Counter />);
    const countElement = getByText(/Count: 0/i);
    expect(countElement).toBeInTheDocument();
  });

  it('increments count when Increment button is clicked', () => {
    const { getByText } = render(<Counter />);
    const incrementButton = getByText(/Increment/i);
    fireEvent.click(incrementButton);
    const countElement = getByText(/Count: 1/i);
    expect(countElement).toBeInTheDocument();
  });

  it('decrements count when Decrement button is clicked', () => {
    const { getByText } = render(<Counter />);
    const decrementButton = getByText(/Decrement/i);
    fireEvent.click(decrementButton);
    const countElement = getByText(/Count: -1/i);
    expect(countElement).toBeInTheDocument();
  });
});

// import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
// import Counter from '../Counter';


// test('renders counter with initial count of 0', () => {
//   const { getByText } = render(<Counter />);
//   const countElement = getByText(/Count: 0/i);
//   expect(countElement).toBeInTheDocument();
// });

// test('increments count when Increment button is clicked', () => {
//   const { getByText } = render(<Counter />);
//   const incrementButton = getByText(/Increment/i);
//   fireEvent.click(incrementButton);
//   const countElement = getByText(/Count: 1/i);
//   expect(countElement).toBeInTheDocument();
// });

// test('decrements count when Decrement button is clicked', () => {
//   const { getByText } = render(<Counter />);
//   const decrementButton = getByText(/Decrement/i);
//   fireEvent.click(decrementButton);
//   const countElement = getByText(/Count: -1/i);
//   expect(countElement).toBeInTheDocument();
// });
