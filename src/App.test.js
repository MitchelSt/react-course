import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test('if $500 is sent, the current account balance will be updated', () => {
    render(<App />);

    userEvent.type(screen.getByRole('spinbutton', { name: /transfer amount/i }), '500');
    userEvent.click(screen.getByRole('button', { name: /send/i }));

    expect(screen.getByText(/current account balance: 4500/i)).toBeInTheDocument();
});