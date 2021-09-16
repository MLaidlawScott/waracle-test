import { getCards } from '../support/app.po';

describe('cakes-web', () => {
  it('should display cards', () => {
    cy.intercept('GET', '/api/cakes', {
      fixture: '../fixtures/cakes.json',
    }).as('getCakes');
    cy.visit('/');
    getCards().should('have.length', 2);
  });
});
