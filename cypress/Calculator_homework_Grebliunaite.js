/// <reference types="cypress" />

const { type } = require("cypress/types/jquery")

it('build Prototype calculates numbers correctly', ()=> {
cy.visit('https://testsheepnz.github.io/BasicCalculator')
cy.get('.selectBuild').click()
cy.get('.number1Field').type("5")
cy.get('.number2Field').type("6")
cy.get('.selectOperationDropdown').click('.value="0"')
cy.get('calculateButton').click()
cy.get('.numberAnswerField').should("11")
})