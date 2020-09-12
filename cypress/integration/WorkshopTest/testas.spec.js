import homepage from "../../Page_objects/Home_page/homepage.js"


/// <reference types="cypress" />
var Home_page = new homepage()

beforeEach("executes before each test", ()=>{ 
cy.visit('https://www.duckduckgo.com')
})

it("Loads the duckduckgo page", ()=>
{
cy.contains("Tired of being tracked online? We can help.")
    
})

it("Can display results relevent to search term",  ()=>
{
homepage.getSearchInputField().type("Test{enter}")
cy.contains("Speedtest by Ookla")
})

it("Can display results relevent to search term", ()=> {
homepage.getSearchInputField().type("Test")
homepage.getSearchButton().click()
cy.contains("Speedtest by Ookla")
})

it("Navigates to results page and removes the banner when X is pressed", ()=> {
    homepage.getSearchInputField().type("test")
    cy.get("#search_form_input_homepage").type("test")
    cy.get('form').submit()
    cy.get('.js-badge-main-msg > .ddgsi').click()
    cy.get('.badge-link__thumb__img').should("not.be.visible")
})


it("Microsoft word cheat sheat appears in seach", ()=> {
    cy.get('#search_form_homepage').type("microsoft word cheat sheet")
    cy.get('#search_button_homepage').click()
    cy.get('.c-base__title').contains("Microsoft Word 2010")
})


it('redirect to the foirst result', () => {
    cy.visit("https://www.duckduckgo.com")
    cy.get("#search_form_input_homepage").type("!wiki")
    cy.get("#search_button_homepage").click() 
    })

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
    
    
    
    
    /* 
    
    it.only('intitle:Panda',()=>{
    cy.visit("https://www.duckduckgo.com")
    cy.get("#search_form_homepage").type("intitle:Panda{enter}")
    cy.get("#search_button_homepage").click()
    
    
    it.only("intitle search options works", () => {
        cy.visit("https://duckduckgo.com/");
        cy.get("#search_form_input_homepage").type("intitle:panda{enter}");
        cy.get(".result__title").each(($el) => {
            cy.wrap($el).contains("panda", {matchCase: false});
        }); */
    
    /* cy.get('.result__title').each(($item) => { 
        cy.get($item).contains('Panda', { matchCase: false 
        }) */
     