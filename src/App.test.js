import { render, screen } from '@testing-library/react';
import App from './App';

test('renders VH link', () => {
  render(<App />);
  const linkElement = screen.getByText(/VH/i);
  expect(linkElement).toBeInTheDocument();
});
