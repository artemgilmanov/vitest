import { render, screen, logRoles, fireEvent } from '@testing-library/react';
import App from './App';

test('button starts with correct label and color', () => {
  /**
   * Destrycting container helps to identify
   * the role of a testing element.
   * logRoles(container) prints all
   * roles in the App.
   */
  const { container } = render(<App />);
  logRoles(container);
  // find the button
  const buttonElement = screen.getByRole('button', { name: /blue/i });
  // check initial color
  expect(buttonElement).toHaveClass('red');
});

test('button has correct label and color after click', () => {
  // render App
  render(<App />);
  // find the button
  const buttonElement = screen.getByRole('button', { name: /blue/i });

  // click the button
  fireEvent.click(buttonElement);

  // check button text
  expect(buttonElement).toHaveTextContent(/red/i);

  // check the button color
  expect(buttonElement).toHaveClass('blue');
});

test('checkbox initial state', () => {
  render(<App />);
  // find elements
  const buttonElement = screen.getByRole('button', { name: /blue/i });
  const checkBoxElement = screen.getByRole('checkbox', {
    name: /disable button/i,
  });
  // check initial conditions
  expect(buttonElement).toBeEnabled();
  expect(checkBoxElement).not.toBeChecked();
});

test('checkbox enable and disable', () => {
  render(<App />);
  // find elements
  const buttonElement = screen.getByRole('button', { name: /blue/i });
  const checkBoxElement = screen.getByRole('checkbox', {
    name: /disable button/i,
  });
  // check initial conditions
  expect(buttonElement).toBeEnabled();
  expect(checkBoxElement).not.toBeChecked();

  // click checkbox to disable button
  fireEvent.click(checkBoxElement);
  expect(buttonElement).toBeDisabled();

  // click checkbox again to re-enable button
  fireEvent.click(checkBoxElement);
  expect(buttonElement).toBeEnabled();
});
