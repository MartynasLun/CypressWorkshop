import Homepage from '../../page_objects/homepage/homepage.js'

/// <reference types="cypress" />

var homepage = new Homepage()

beforeEach("Executes before each test",()=>{
    cy.visit("/")
})


it("loads the duckduckGo page", ()=> {
    cy.contains("Tired of being tracked online? We can help.")
})

it("Can display search result", ()=> {
   homepage.getSearchInputField().type("Test{enter}")
    cy.contains("Speedtest by Ookla")
})

it("Can display results relevant v2", ()=> {
    cy.get("#search_form_homepage").type("Test")
    homepage.getSearchButton().click()
})

it("removes the banner when x is pressed", ()=> {
    cy.get("#search_form_homepage").type("whatever")
    homepage.getSearchButton().click()
    cy.get('.js-badge-main-msg > .ddgsi').click()
    cy.get('.js-badge-main-msg').should("not.be.visible")
})


// it("opens cheat sheet", ()=> {
//     cy.visit("https://www.duckduckgo.com")
//     cy.get("#search_form_homepage").type("microsoft word cheat sheet")
//     homepage.getSearchButton().click()
//     cy.get('.zci__body').should("be.visible")
//     cy.get('.c-base__title').contains("Microsoft Word 2010")
// })


// it("intitle search options works", () => {
//     cy.visit("https://duckduckgo.com/");
//     cy.get("#search_form_input_homepage").type("intitle:panda{enter}");
//     cy.get(".result__title").each(($el) => {
//         cy.wrap($el).contains("panda", {matchCase: false}); //wrap($each) visus elementus apima?
//     });
// })

// it("loads the wiki page", ()=> {
//     cy.visit("https://www.duckduckgo.com")
//     cy.get("#search_form_input_homepage").type("!wiki");
//     homepage.getSearchButton().click()
// })