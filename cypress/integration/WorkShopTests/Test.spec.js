import Homepage from "../../page_objects/homepage/homepage.js"
/// <reference types="cypress" />

var homepage = new Homepage

beforeEach("Executes before each test", ()=> {
    cy.visit("/")
})

it("Loads the duckduckGo page", ()=> {
    cy.contains("Tired of being tracked online? We can help.")
})


it("Can display results relevant to search term", ()=> {
    homepage.getSearchInputField().type("test")
    homepage.getSearchButton().click()
    cy.get(".js-badge-main-msg > .ddgsi").click() 
    cy.contains("Speedtest by Ookla")

})

it("Can display results relevant to search term and close the banner", ()=> {
    cy.visit("https://www.duckduckgo.com")
    homepage.getSearchInputField().type("test") 
    homepage.getSearchButton().click()
    cy.get(".js-badge-main-msg > .ddgsi").click() 

})

it("Navigates to result page and removes the banner when X is pressed", () => {
    cy.visit("https://www.duckduckgo.com")
    homepage.getSearchInputField().type("test")
    homepage.getSearchButton().click()
    cy.get('.js-badge-main-msg > .ddgsi').click()
    cy.get('.badge-link__thumb__img').should("not.be.visible")
})

it("Navigates to result page and checks if shortcut field is visible", () => {
    cy.visit("https://www.duckduckgo.com")
    cy.get('body').type("microsoft word cheat sheet")
    cy.get('form').submit()
    cy.get('#zci-cheat_sheets > .cw').should("be.visible")
})

it("intitle search options works", () => {
    cy.visit("https://duckduckgo.com/");
    cy.get("#search_form_input_homepage").type("intitle:panda{enter}");
    cy.get(".result__title").each(($el) => {
        cy.wrap($el).contains("panda", {matchCase: false});
    });
})

it("navigates to results and clicks first result", () => {
    cy.visit("https://www.duckduckgo.com")
    cy.get('body').type("wiki")
    cy.get('form').submit()
    cy.get('#r1-1 > .result__body > .result__title > .result__a').click()
})

it("should redirect to first result", () => {
    cy.get('#search_form_homepage').type("!wiki")
    cy.get('#search_button_homepage').click();
    cy.title().should('eq', 'Wikipedia, the free encyclopedia')
   })

describe('should generate secure passwords', () => {
    [8, 32, 64].forEach((passwordLenght) => {
it('generates password with length: ' + passwordLenght, () => {
        cy.get('#search_form_homepage').type("password " + passwordLenght)
        cy.get('#search_button_homepage').click();
        cy.get('.c-base__title').then(($title) => {
        cy.get($title).invoke('text').its('length').should('be.eq', passwordLenght)
    })
    })
    })
   })

describe('should ignore generating secure passwords', () => {
    [1, 7, 65, 512].forEach((event) => {
it.only('triggers event: ' + event, () => {
    cy.get('#search_form_homepage').type("password " + event)
    cy.get('#search_button_homepage').click();
    cy.get('.c-base__title').should('not.exist');
    })
    })
   })
   