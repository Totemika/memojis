/// <reference types="Cypress" />

context('First execution', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    });

    it('should contain the title "Memojis"', () => {
        cy.contains("Memojis")
    });

    it('should contain at least a pair of cards', () => {
        const numberOfSymbols = 5;
        cy.get('.Card').should('have.length', numberOfSymbols*2);
    });
});
