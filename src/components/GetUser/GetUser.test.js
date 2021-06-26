import { renderWithClient } from "../../tests/utils";
import GetUser from './GetUser.jsx';
import { server } from '../../setupTests';
import { rest } from "msw";

test('if the user is fetched, the name is shown', async () => {
    const result = renderWithClient(<GetUser />);

    expect(await result.findByText(/John Doe/i)).toBeInTheDocument();
});

test('if the user fetch fails, show the error message', async () => {
    server.use(
        rest.get('*', (req, res, ctx) => {
            return res(ctx.status(500));
        })
    );

    const result = renderWithClient(<GetUser />);

    expect(await result.findByText(/Could not fetch user.../i)).toBeInTheDocument();
});