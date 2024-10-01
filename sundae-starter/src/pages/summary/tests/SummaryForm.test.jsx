import { render, fireEvent, screen } from '@testing-library/react';
import SummaryForm from '../SummaryForm';
import userEvent from '@testing-library/user-event';

describe('summary form tests', () => {
  test('checkbox is uncheched by default', () => {
    // const { container } = render(<SummaryForm />);
    // logRoles(container);

    render(<SummaryForm />);

    const checkbox = screen.getByRole('checkbox', {
      name: /terms and conditions/i,
    });

    expect(checkbox).not.toBeChecked();

    const confirmButton = screen.getByRole('button', {
      name: /confirm order/i,
    });
    expect(confirmButton).toBeDisabled();
  });

  test('checkbox enables button on the first click and disables on the second', async () => {
    const user = userEvent.setup();

    render(<SummaryForm />);

    const checkbox = screen.getByRole('checkbox', {
      name: /terms and conditions/i,
    });

    const confirmButton = screen.getByRole('button', {
      name: /confirm order/i,
    });

    await user.click(checkbox);
    expect(confirmButton).toBeEnabled();

    await user.click(checkbox);
    expect(confirmButton).toBeDisabled();
  });

  test('popover responds to hover', async () => {
    const user = userEvent.setup();
    render(<SummaryForm />);
    // popover start out hidden
    const nullPopover = screen.queryByText(
      /no ice cream will actually be delivered/i
    );
    expect(nullPopover).not.toBeInTheDocument();

    // appears on mousover
    const termsAndCoditions = screen.getByText(/terms and conditions/i);
    await user.hover(termsAndCoditions);
    const popover = screen.getByText(
      /no ice cream will actually be delivered/i
    );
    expect(popover).toBeInTheDocument();

    // dissapear when we mouse out
    await user.unhover(termsAndCoditions);
    expect(popover).not.toBeInTheDocument();
  });
});
