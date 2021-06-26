import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithClient } from '../../tests/utils.jsx';
import SetUser from './SetUser';

test('if a user is created, show the user name', async () => {
    const result = renderWithClient(<SetUser />);

    userEvent.click(screen.getByRole('button', { name: /mutate/i }));

    expect(await result.findByText(/Chuck Norris/i)).toBeInTheDocument();
});