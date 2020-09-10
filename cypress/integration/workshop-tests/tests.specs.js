import Homepage from '../../page_objects/homepage/homepage'
import Resultpage from '../../page_objects/resultpage/resultpage'
/// <reference types="cypress"/>

var homepage = new Homepage()
var resultpage = new Resultpage()

beforeEach("Executes before each test", () =>{
    cy.visit("https://duckduckgo.com")
})

it("Loads the duckduckGo page", ()=>{
    cy.contains("Tired of being tracked online? We can help.")
})

it("Can display results relevant to search term", ()=>{
    homepage.getSearchInputField().type("Test{enter}")
})

it("Can display results relevant to search term", ()=>{
    homepage.getSearchInputField().type("Test")
    homepage.getSearchButton().click()
    cy.contains("Speedtest by Ookla")
})

it("Navigates to results page and removes the robot banner when X is pressed", ()=>{
    homepage.getSearchInputField().type("test")
    cy.get('form').submit();
    cy.get('.js-badge-main-msg > .ddgsi').click()
    resultpage.getBadgeLink().should("not.be.visible")
})

it("Microsoft cheat sheet appears in search", ()=>{
    homepage.getSearchInputField().type("microsoft word cheat sheet")
    homepage.getSearchButton().click()
    cy.contains('Microsoft Word 2010')
})

it("Should contain search criteria in search results title", ()=>{
    homepage.getSearchInputField().type("intitle:panda")
    homepage.getSearchButton().click();
})

it("Intitle search options works", () => {
    homepage.getSearchInputField().type("intitle:panda{enter}");
    cy.get(".result__title").each(($el) => {
        cy.wrap($el).contains("panda", {matchCase: false});
    });
})

it("should redirect to first result", () => {
    homepage.getSearchInputField().type("!wiki")
    homepage.getSearchButton().click();
})
