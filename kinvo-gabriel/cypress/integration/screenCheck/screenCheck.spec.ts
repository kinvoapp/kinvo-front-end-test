/* eslint-disable no-undef */

describe('Check texts', () => {
  it('Visit the home page and check texts', () => {
    cy.intercept('**/getFixedIncomeClassData').as('apiData');
    cy.visit('/');
    cy.wait('@apiData');
    cy.contains('Renda Fixa').should('exist');
    cy.contains('Rentabilidade dos títulos').should('exist');
    cy.contains('Minhas Rendas Fixas').should('exist');
    cy.contains('Divisão de Carteira por Tipos').should('exist');
    cy.contains('Divisão de Carteira por Título').should('exist');
  });
});
