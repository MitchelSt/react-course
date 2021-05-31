import '@testing-library/cypress/add-commands';

Cypress.Commands.add('login', () => {
    cy.visit('/');
    cy.findByRole('button', { name: /click here to login/i }).click();
});