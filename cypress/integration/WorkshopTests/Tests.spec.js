import Homepage from '../../page_objects/homepage.js'
/// <reference types="cypress" />

var homepage = new Homepage();

beforeEach('Executes before each test', () => {
    cy.visit('');
})

it('Loads the duckduckGo page', () => {
    cy.contains('Tired of being tracked online? We can help.')
})

it('Can display results relevent to search term', () => {
    // cy.get('#search_form_homepage').type("test{enter}");
    homepage.getSearchInputField().type('test');
    homepage.getSearchButton().click();
    cy.contains("Speedtest by Ookla");
    cy.get('.js-badge-main-msg > .ddgsi').click();
    cy.get('.badge-link__thumb__img').should('not.be.visible');
    cy.contains('Clear your cookies often?');
})

it('Microsoft cheat sheet appears in search', () => {
    homepage.getSearchInputField().type('microsoft word cheat sheet');
    homepage.getSearchButton().click();
    cy.contains('Microsoft Word 2010').should('be.visible');
})

it("intitle search options works", () => {
    homepage.getSearchInputField().type("intitle:panda{enter}");
    cy.get(".result__title").each(($el) => {
        cy.wrap($el).contains("panda", {matchCase: false});
    });
})

it('Microsoft cheat sheet appears in search', () => {
    homepage.getSearchInputField().type('!wiki');
    cy.get('#search_button_homepage').click();
})

