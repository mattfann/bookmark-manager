describe("Bookmark manager app", () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it("shows three inputs at the top", () => {
        cy.get('#url').should('be.visible');
        cy.get('#comment').should('be.visible');
        cy.get('#tags').should('be.visible');
    })

    it("shows the submit button", () => {
        cy.get('#submit-button').should('be.visible');
    })

    it("submits a new bookmark", () => {
        cy.get('#url').type('www.facebook.com');
        cy.get('#comment').type('Facebook homepage');
        cy.get('#tags').type('Social media');
        cy.get('#submit-button').click();
        cy.contains('www.facebook.com');
        cy.contains('Facebook homepage');
        cy.contains('Social media');
    })

    it("shows the table headings", () => {
        cy.contains('URL');
        cy.contains('Comments');
        cy.contains('Tags');
    })

    it("shows the delete buttons for every bookmark", () => {
        cy.get('#delete-button').should('be.visible');
    })
})