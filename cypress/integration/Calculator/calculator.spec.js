/// <reference types="cypress" />


beforeEach("Executes before each tests",()=>{
    cy.visit("https://testsheepnz.github.io/BasicCalculator")
 })

it("Add", ()=>{
    cy.get('#selectBuild').select("2")
    cy.get('#number1Field').type("0")
    cy.get('#number2Field').type("9")
    cy.get('#selectOperationDropdown').select("Add")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should("have.value", "9")
})

it("Concatenate", ()=>{
    cy.get('#selectBuild').select("2")
    cy.get('#number1Field').type("12")
    cy.get('#number2Field').type("34")
    cy.get('#selectOperationDropdown').select("Concatenate")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should("have.value", "1234")
})

it("Subtract", ()=>{
    cy.get('#selectBuild').select("7")
    cy.get('#number1Field').type("0.1")
    cy.get('#number2Field').type("10")
    cy.get('#selectOperationDropdown').select("Subtract")
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should("have.value", "-9.9")
})

it("Uncheck integers only", ()=>{
    cy.get('#selectBuild').select("4")
    cy.get('#number1Field').type("0.5")
    cy.get('#number2Field').type("100")
    cy.get('#selectOperationDropdown').select("Add")
    cy.get('#integerSelect').uncheck()
    cy.get('#calculateButton').click()
    cy.get('#numberAnswerField').should("have.value", "100.5")
})

it("Error message", ()=>{
    cy.get('#selectBuild').select("7")
    cy.get('#number1Field').type("1%$")
    cy.get('#number2Field').type("10")
    cy.get('#selectOperationDropdown').select("Multiply")
    cy.get('#calculateButton').click()
    cy.get('#errorMsgField').should("be.visible")
    cy.get('#numberAnswerField').should("have.value", "")
})

it("Navigation menu scroll down", ()=>{
    cy.get('#mainNav > .container').scrollIntoView({offset: {top:620, left: 0,}}).should("not.be.visible")
})
