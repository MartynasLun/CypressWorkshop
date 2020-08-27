import Homepage from "../../pageObjects/HomePage/homepage.js"
/// <reference types="cypress" />

const { default: Homepage } = require("../../pageObjects/HomePage/homepage")

var homepage = new Homepage();

beforeEach("Executes before each test",()=>{
    cy.visit("https://www.duckduckgo.com")

})

//galima i6kelti base url 5 konfig8racij1

it("Loads the duckduckGo page", ()=>{
    cy.visit("https://www.duckduckgo.com")
    cy.contains("Tired of being tracked online? We can help.")
   
})

it("Can display results relevant to searc term", ()=>{
    cy.visit("https://www.duckduckgo.com")
    cy.get('#search_form_input_homepage').type("Test{enter}")//mygtuka paspaudzia

})

//tas patskaip antras testas

it("Can display results relevant to searc term", ()=>{
    cy.visit("https://www.duckduckgo.com")
    cy.get('#search_form_input_homepage').type("Test")
    cy.get("#search_button_homepage").click()//mygtuka paspaudzia
    cy.contains("Speedtest by Ookla")
})

it("Navigates to results page and removes the robot banner when X is pressed", () => {
    cy.visit("https://www.duckduckgo.com")
    cy.get("#search_form_input_homepage").type("test")
    cy.get('form').submit()
    cy.get('.js-badge-main-msg > .ddgsi').click()
    cy.get('.badge-link__thumb__img').should("not.be.visible")
})

it("Navigates to results page and removes the robot banner when X is pressed", () => {
    cy.visit("https://www.duckduckgo.com")
    cy.get("#search_form_input_homepage").type("microsoft word cheat sheet")
    cy.get('form').submit()
    cy.contains("Microsoft Word 2010")
    //cy.get('.c-base__title')contains("Microsoft Word 2010")
})


//kt.pvz.
/*it.only("4 testas", ()=> {
    cy.visit("https://www.duckduckgo.com")
    cy.get("#search_form_homepage").type("microsoft word cheat sheet")
    cy.get("#search_button_homepage").click()
    cy.get('.zci__main').contains("Microsoft Word 2010")
})
*/

//gabrieliaus

it("intitle search options works, panda", () => {
    cy.visit("https://duckduckgo.com/");
    cy.get("#search_form_input_homepage").type("intitle:panda{enter}");
    cy.get(".result__title").each(($el) => {
        cy.wrap($el).contains("panda", {matchCase: false});
    });
})

//destytojo

/*cy.get('.result__title').each(($item) => { cy.get($item).contains('Panda', { matchCase: false }*/

it.only("should redirect to first result", ()=> {
    cy.visit("https://www.duckduckgo.com")
    cy.get('#search_form_homepage').type("!wiki")
    cy.get("#search_button_homepage").click()
    })

    /*import Homepage from "../../page_objects/homepage/homepage.js"
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
*/