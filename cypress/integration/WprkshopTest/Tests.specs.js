/// <reference types="cypress" />
import Homepage from '../page_objects/homepage/homepage.js'

var homepage = new Homepage

// it("Loads the duckduckGo page", ()=>{
//     cy.visit("https://www.duckduckgo.com")
//     cy.contains("Tired of being tracked online? We can help.")
// })

// it("Can display results", ()=>{
//     cy.visit("https://www.duckduckgo.com")
//     homepage.getSearchForm().type("Test")
//     homepage.clickSearchButton()
// })

// it("Presses X and removes thing. Then also checks if it is visible or not", ()=>{
//     cy.visit("https://www.duckduckgo.com")
//     homepage.getSearchForm().type("Test")
//     homepage.clickSearchButton()
//     cy.get('.js-badge-main-msg > .ddgsi').click()
//     cy.get('.badge-link__thumb__img').should("not.be.visible")
// })

// it("Microsoft word cheat sheet", ()=>{
//     cy.visit("https://www.duckduckgo.com")
//     homepage.getSearchForm().type("microsoft word cheat sheet")
//     homepage.clickSearchButton()
//     cy.get('.c-base__title').contains("Microsoft Word 2010")
// })

// it.only("intitle search options works", () => {
//     cy.visit("https://duckduckgo.com/");
//     homepage.getSearchForm().type("intitle:panda{enter}");
//     cy.get(".result__title").each(($el) => {
//         cy.wrap($el).contains("panda", {matchCase: false});
//     });
// })

// it("should redirect to first result", ()=> {
//     cy.visit("https://www.duckduckgo.com")
//     cy.get('#search_form_homepage').type("!wiki")
//     homepage.clickSearchButton()
//     })

// it("Lets go", ()=> {
//         cy.visit("http://www.eismosaugumasbendruomenese.lt/admin/")
      
//         })