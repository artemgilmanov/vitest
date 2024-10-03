import { http, HttpResponse } from 'msw';
import { server } from '../../../mocks/server';
import { render, screen } from '@testing-library/react';
import OrderEntry from '../OrderEntry';

// run this test only
test.only('Handles error for scoops and toppings routes', async () => {
  server.resetHandlers(
    http.get('http://localhost:3030/scoops', () => {
      return new HttpResponse(null, { status: 500 });
    }),
    http.get('http://localhost:3030/toppings', () => {
      return new HttpResponse(null, { status: 500 });
    })
  );

  render(<OrderEntry />);

  const alerts = await screen.findAllByRole('alert');
  expect(alerts).toHaveLength(2);
});

// skip the test
test.skip('Skip one', () => {});

test('Skip two', () => {});
