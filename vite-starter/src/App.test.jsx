/**
 * Render:
 * creates simulated DOM for argument component
 * Access simulated DOM via screen global
 */
import { render, screen } from '@testing-library/react';
import App from './App';

test('App contains correct heading', () => {
  render(<App />);
  /**
   * screen.getByText()
   * find element by display text
   *
   * /learn react/i
   * regular expression, case insensitive(i), could be string "learn React"
   */
  const headingElement = screen.getByText(/learn react/i);
  /**
   * expect()
   * global, starts the assertion
   * expect argument (subject of the assertion)
   *
   * toBeInTheDocument() - matcher
   * type of assertion
   * this matcher comes from Jest-DOM
   */
  expect(headingElement).toBeInTheDocument();
});

/**
 * Empty test always pass
 */
test('Empty test', () => {});

/**
 * Empty test always pass
 */
test('App contains correct heading', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading', { name: /learn react/i });
  expect(headingElement).toBeInTheDocument();
});

/**
 * Jest/Vitest
 *
 * React Testing Library
 * - Renders components into simulated DOM
 * - Makes simulated DOM available for assertions and interactions
 * Needs a test runner
 * - Finds tests, runs them, makes assertion
 */

/**
 * Jest vs. Vitest
 *
 * Vitest faster than Jest (3x-5x)
 * Jest isn't easy to get working with Vite
 */

/**
 * How does Jest/Vitest Work?
 *
 * global test method has two arguments:
 * - string description
 * - test function
 * test fails if error os thrown when running function
 * - assertions throw errors when expectation fails
 * No error -> test pass
 * - empty test passes
 */

/**
 * TDD (Test Driven Development)
 * Write tests before writing code
 * - then write code according to "spec" set by tests
 * "red-green" testing
 * - tests fail before code is written
 * makes a huge difference in how it feels to write tests
 * - part of the coding process, not a "chore" to do at the end
 * More efficient
 * - Re-run tests "for free" after changes
 */

/**
 * React testing Library Phylosophy
 *
 * What does React Testing Library Do?
 * Creates virtual DOM for testing
 * - and utilities for interacting with DOM
 * Allows testing without a browser
 *
 * Types of Tests
 * Unit tests
 * - tests one unit of code in isolation
 * Integration tests
 * - How multiple units work together
 * Functional Tests
 * - Tests a particular function of software
 * Acceptance/End-to-end (E2E) tests
 * - Use actual browser ans server (Cypress, Selenium)
 *
 * Functional Testing vs Unit Testing
 *
 * Unit Testing: Isolated, mock dependencies, test internals
 * + easy to pinpoint failures
 * - Further from how users interact with software
 * - More likely to break with refactoring
 *
 * Functional Testing: Include all relevant units, test behaviour
 * + Close to how users interact with software
 * + Robust tests
 * - More difficult to debug failing tests
 */
