import Homepage from "../../page_objects/homepage/homepage.js"
/// <reference types="cypress" />
var homepage = new Homepage()
beforeEach("Executes before each test",()=>{
    cy.visit("/")
})
it("Loads the duckduckGo page", ()=> {
    cy.contains("Tired of being tracked online? We can help.")
})
it("Can display results relevent to search term", ()=> {
    homepage.getSearchInputField().type("Test{enter}")
    cy.contains("Speedtest by Ookla")
})
it("Can display results relevent to search term", ()=> {
    homepage.getSearchInputField().type("Test")
    homepage.getSearchButton().click()
    cy.contains("Speedtest by Ookla")
})
it("Navigates to results page and removes the robot banner when X is pressed", () => {
    homepage.getSearchInputField().type("test")
    cy.get("#search_form_input_homepage").type("test")
    cy.get('form').submit()
    cy.get('.js-badge-main-msg > .ddgsi').click()
    cy.get('.badge-link__thumb__img').should("not.be.visible")
})
it("Navigates to results page and removes the robot banner when X is pressed", () => {
    cy.get("#search_form_input_homepage").type("test")
    cy.get('form').submit()
    cy.get('.js-badge-main-msg > .ddgsi').click()
    cy.get('.badge-link__thumb__img').should("not.be.visible")
})
it("Microsoft cheat sheet appears in search", () => {
    cy.get('#search_form_homepage').type("microsoft word cheat sheet")
    cy.get('#search_button_homepage').click()
    cy.get('.c-base__title').contains("Microsoft Word 2010")
});
it("should contain search criteria in search results title", () => {
    cy.get('#search_form_homepage').type("intitle:panda")
    cy.get('#search_button_homepage').click();
})
it("intitle search options works", () => {
    cy.get("#search_form_input_homepage").type("intitle:panda{enter}");
    cy.get(".result__title").each(($el) => {
    cy.wrap($el).contains("panda", {matchCase: false});
    });
})
it("should redirect to first result", () => {
    cy.get('#search_form_homepage').type("!wiki")
    cy.get('#search_button_homepage').click();
})