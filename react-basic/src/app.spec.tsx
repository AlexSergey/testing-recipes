import { render, screen } from '@testing-library/react';
import { App } from './app';

test('renders Hello world link', () => {
  render(<App />);
  const element = screen.getByText(/Hello world/i);
  expect(element).toBeInTheDocument();
});
