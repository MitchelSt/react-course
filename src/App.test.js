import { render, screen } from "@testing-library/react";
import App from "./App";

test('if transferToPerson name prop is passed, render the name', () => {
    render(<App transferToPerson="Michael Jackson" />);

    expect(screen.getByText(/send money to: michael jackson/i)).toBeInTheDocument();
});