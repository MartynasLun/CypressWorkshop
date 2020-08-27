import Homepage from '../../page_objects/Landingpage/homepage.js'
/// <reference types="cypress" />

var homepage = new Homepage()
it("Loads the duckduckGo page", ()=>{
    cy.visit("https://www.duckduckgo.com")
    cy.contains("Tired of being tracked online? We can help.")
});

it("Can display results relevant to search term", ()=>{
    cy.visit("https://www.duckduckgo.com")
    cy.get('#search_form_homepage').type("Test")
    cy.get('#search_button_homepage').click()
    cy.contains('Speedtest by Ookla - The Global Broadband Speed Test')
});

it("Can close banner after search result", ()=>{
    cy.visit("https://www.duckduckgo.com")
    cy.get('#search_form_homepage').type("Test")
    cy.get('#search_button_homepage').click()
    cy.get('.js-badge-main-msg > .ddgsi').click()
    cy.get('.badge-link__thumb__img').should("not.be.visible")
});

it("Microsoft cheet sheat appears in search", ()=>{
    cy.visit("https://www.duckduckgo.com")
    cy.get('#search_form_homepage').type("Microsoft Word Cheat Sheet")
    cy.get('#search_button_homepage').click()
    cy.contains('Microsoft Word 2010')
});

it("Should contain panda in every search result", ()=>{
    cy.visit("https://www.duckduckgo.com")
    cy.get('#search_form_homepage').type("intitle:panda")
    cy.get('#search_button_homepage').click()
    cy.get('.result__title').each(($el)=>{cy.get($el).contains('Panda',{matchCase:false})})
});