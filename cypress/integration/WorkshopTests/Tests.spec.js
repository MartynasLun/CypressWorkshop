import Homepage from '../../page_objects/homepage/homepage.js'

/// <reference types="cypress" />

var homepage = new Homepage;
beforeEach("Executes before each test", ()=>{
    cy.visit("/")
})
/*it("Loads the duckduckGO page", () =>{
    //cy.visit("https://www.duckduckgo.com")
    cy.contains("Tired of being tracked online? We can help.")
})
it("Can display results relevant to search term", () =>{
   // cy.visit("https://www.duckduckgo.com")
    cy.get("#search_form_input_homepage").type("test");
    cy.get("#search_button_homepage").click();
    cy.contains("Speedtest by Ookla");
})
it ("Removes the banner from test results when X is pressed", () =>{
  //  cy.visit("https://www.duckduckgo.com")
   homepage.getSearchInputField().type("Test{enter}");
    cy.get('.js-badge-main-msg > .ddgsi').click();
   // cy.contains("Clear your cookies often?");
   cy.get('.badge-link__thumb__img').should("not.be.visible")
})
//cy.visit("https://www.duckduckgo.com")
//cy.get('body').type("test");
//cy.get('form').submit();
it("Microsoft Word 2010", () =>{
   // cy.visit("https://www.duckduckgo.com")
    cy.get("#search_form_input_homepage").type("Microsoft word cheat sheet{enter}");
    cy.contains("Microsoft Word 2010")
})
// cy.get('.c-base__title').contains("Microsoft Word 2010")
it("intitle search options works", () => {
  //  cy.visit("https://duckduckgo.com/");
    cy.get("#search_form_input_homepage").type("intitle:panda{enter}");
    cy.get(".result__title").each(($el) => {
        cy.wrap($el).contains("panda", {matchCase: false});
        //cy.get('.result__title').each(($item) => { cy.get($item).contains('Panda', { matchCase: false })
    });
})

it("should redirect to first result", () => {
   // cy.visit("https://duckduckgo.com/");
    cy.get("#search_form_input_homepage").type("intitle:panda{enter}");
    cy.get(".result__title").each(($el) => {
        cy.wrap($el).contains("panda", {matchCase: false});
        //cy.get('.result__title').each(($item) => { cy.get($item).contains('Panda', { matchCase: false })
    });
})
it("should redirect to first result", ()=> {
   // cy.visit("https://www.duckduckgo.com")
    homepage.getSearchButton().type("!wiki")
    cy.get("#search_button_homepage").click()
    })

 describe('should generate secure passwords', () => {
        [8, 32, 64].forEach((passwordLenght) => {
        it('generates password with length: ' + passwordLenght, () => {
            cy.visit("https://www.duckduckgo.com")
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
    it('triggers event: ' + event, () => {
        cy.visit("https://www.duckduckgo.com")
    cy.get('#search_form_homepage').type("password " + event)
    cy.get('#search_button_homepage').click();
    cy.get('.c-base__title').should('not.exist');
    })
    })
    })

  
    it.only("should launch a stop watch", () => {
        cy.visit("https://www.duckduckgo.com")
    cy.get('#search_form_homepage').type("stopwatch")
    cy.get('#search_button_homepage').click();
    cy.get('#total_time').contains("00:00.00");
    cy.get('.start').click();
    cy.get('.stop').click();
    }) */
const sizes = ['iphone-6', 'ipad-2', [1024, 768]]
sizes.forEach((size) => {
it(`Should display logo on ${size} screen`, () => {
if (Cypress._.isArray(size)) {
cy.viewport(size[0], size[1])
} else {
cy.viewport(size)
}
cy.visit("https://www.duckduckgo.com")
cy.get('#search_form_input_homepage').type("stopwatch")
cy.get('#search_button_homepage').click({ force: true });
})
})