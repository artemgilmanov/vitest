import { render, screen, logRoles, fireEvent } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpaces } from './helpers';

test('button starts with correct label and color', () => {
  /**
   * Destracting container helps to identify
   * the role of a testing element.
   * logRoles(container) prints all
   * roles in the App.
   */
  const { container } = render(<App />);
  logRoles(container);
  // find the button
  const buttonElement = screen.getByRole('button', { name: /blue/i });
  // check initial color
  expect(buttonElement).toHaveClass('medium-violet-red');
});

test('button has correct label and color after click', () => {
  // render App
  render(<App />);
  // find the button
  const buttonElement = screen.getByRole('button', { name: /blue/i });

  // check initial color
  expect(buttonElement).toHaveClass('medium-violet-red');

  // click the button
  fireEvent.click(buttonElement);

  // check button text
  expect(buttonElement).toHaveTextContent(/red/i);

  // check the button color
  expect(buttonElement).toHaveClass('midnight-blue');
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

test('button is grey when disabled', () => {
  // render App
  render(<App />);

  // find elements
  const buttonElement = screen.getByRole('button', { name: /blue/i });
  const checkBoxElement = screen.getByRole('checkbox', {
    name: /disable button/i,
  });

  // click checkbox to disable button
  fireEvent.click(checkBoxElement);
  expect(buttonElement).toBeDisabled();
  expect(buttonElement).toHaveClass('grey');

  // click checkbox again to re-enable button
  fireEvent.click(checkBoxElement);
  expect(buttonElement).toBeEnabled();
  expect(buttonElement).toHaveClass('medium-violet-red');
});

describe('kebabCaseToTitleCase', () => {
  test('works for a single word', () => {
    expect(replaceCamelWithSpaces('red')).toBe('Red');
  });
  test('works for one hyphenated word', () => {
    expect(replaceCamelWithSpaces('midnight-blue')).toBe('Midnight Blue');
  });
  test('works for multiple hyphens', () => {
    expect(replaceCamelWithSpaces('medium-violet-red')).toBe(
      'Medium Violet Red'
    );
  });
});
