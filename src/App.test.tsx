import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CIRCASSIMILATE heading', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading', { name: /CIRCASSIMILATE/i, level: 1 });
  expect(headingElement).toBeTruthy();
});
