/// <reference types="Cypress" />

context('Aliasing', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    });

    it('should contain the title "Memojis"', () => {
        cy.contains("Memojis")
    });
});
