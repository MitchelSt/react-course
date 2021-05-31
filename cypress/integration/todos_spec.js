describe('todos', () => {
    beforeEach(() => {
        cy.login();
    });

    it('user can add, check and delete todos', () => {
        cy.findByRole('textbox', { name: /title/i })
            .type('Todo1')
            .type('{enter}');

        cy.findByRole('textbox', { name: /title/i })
            .type('Todo2')
            .type('{enter}');

        cy.findByText(/todo1/i).should('exist');
        cy.findByText(/todo2/i).should('exist');
        cy.findByText(/total todos: 2/i).should('exist');

        cy.findByRole('checkbox', { name: /todo2/i }).check();
        cy.findByText(/selected todos: 1/i).should('exist');

        cy.get('[data-cy=todo-Todo1]').within(() => {
            cy.findByRole('button', { name: /remove/i }).click();
        });

        cy.findByText(/total todos: 1/i).should('exist');
    });

})