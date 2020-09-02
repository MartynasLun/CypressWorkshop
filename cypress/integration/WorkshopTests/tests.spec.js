/// <reference types="cypress" />
import Homepage from '/Users/ieva/CypressWorkshop/cypress/page_objects/homepage/Homepage.js'

var homepage = new Homepage();

beforeEach("Executes before each test", ()=>{
    cy.visit("/");
})

it("Loads the DuckDuckGo website", ()=>{
    cy.contains("Tired of being tracked online? We can help.");
})

it("enters \'test\'", ()=>{
    cy.get("#search_form_homepage").type("test");
    homepage.getSearchButton().click();
    cy.contains("Speedtest by Ookla - The Global Broadband Speed Test");
})

it("closes banner when X is pressed", ()=>{
    cy.get("#search_form_homepage").type("whatever");
    cy.get("#search_button_homepage").click();
    cy.get('.js-badge-main-msg > .ddgsi').click();
    cy.get('.badge-link__thumb__img').should("not.be.visible");
})
it("displays table with commands", ()=>{
    cy.get("#search_form_homepage").type("microsoft word cheat sheet");
    homepage.getSearchButton().click();
    cy.contains('Microsoft Word 2010').should("be.visible");
})

it("intitle search options works", () => {
    cy.get("#search_form_input_homepage").type("intitle:panda{enter}");
    cy.get(".result__title").each(($el) => {
        cy.wrap($el).contains("panda", {matchCase: false});
    });
})

it("navigates to wikipedia main page", ()=>{
    cy.get("#search_form_input_homepage").type("!wiki");
    homepage.getSearchButton().click();
})