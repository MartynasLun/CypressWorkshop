/// <reference types="cypress"/>

const builds = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


builds.forEach((buildId) => {

  describe(`Calculator With Integers Only, build: ${buildId}`, () => {

    beforeEach("Executes before each test", () => {
      cy.visit("https://testsheepnz.github.io/BasicCalculator")
      cy.get('#selectBuild').select(buildId)
      cy.get('#integerSelect').click()
    })

    it("Check: Operation Add", () => {
      cy.get('#number1Field').type("1.85{enter}")
      cy.get('#number2Field').type("1.25{enter}")
      cy.get('#selectOperationDropdown').select('0')
      cy.get('#calculateButton').click()
      cy.get('#numberAnswerField').should('exist')
      cy.get('#numberAnswerField').should('have.value', '3')
      cy.get('#clearButton').click()
    })

    it("Check: Operation Subtract", () => {
      cy.get('#number1Field').type("2.55{enter}")
      cy.get('#number2Field').type("1.40{enter}")
      cy.get('#selectOperationDropdown').select('1')
      cy.get('#calculateButton').click()
      cy.get('#numberAnswerField').should('exist')
      cy.get('#numberAnswerField').should('have.value', '1')
      cy.get('#clearButton').click()
    })

    it("Check: Operation Multiply", () => {
      cy.get('#number1Field').type("2.5{enter}")
      cy.get('#number2Field').type("3.5{enter}")
      cy.get('#selectOperationDropdown').select('2')
      cy.get('#calculateButton').click()
      cy.get('#numberAnswerField').should('exist')
      cy.get('#numberAnswerField').should('have.value', '8')
      cy.get('#clearButton').click()
    })

    it("Check: Operation Divide", () => {
      cy.get('#number1Field').type("8.8{enter}")
      cy.get('#number2Field').type("2{enter}")
      cy.get('#selectOperationDropdown').select('3')
      cy.get('#calculateButton').click()
      cy.get('#numberAnswerField').should('exist')
      cy.get('#numberAnswerField').should('have.value', '4')
      cy.get('#clearButton').click()
    })

    it("Check: Operation Concatenate", () => {
      cy.get('#number1Field').type("9{enter}")
      cy.get('#number2Field').type("0{enter}")
      cy.get('#selectOperationDropdown').select('4')
      cy.get('#calculateButton').click()
      cy.get('#numberAnswerField').should('exist')
      cy.get('#numberAnswerField').should('have.value', '90')
      cy.get('#clearButton').click()
    })
  })

  describe(`Calculator Without Integers Only, build: ${buildId}`, () => {

    beforeEach("Executes before each test", () => {
      cy.visit("https://testsheepnz.github.io/BasicCalculator")
      cy.get('#selectBuild').select(buildId)
    })

    it("Check: Operation Add", () => {
      cy.get('#number1Field').type("1.85{enter}")
      cy.get('#number2Field').type("1.25{enter}")
      cy.get('#selectOperationDropdown').select('0')
      cy.get('#calculateButton').click()
      cy.get('#numberAnswerField').should('exist')
      cy.get('#numberAnswerField').should('have.value', '3.1')
      cy.get('#clearButton').click()
    })

    it("Check: Operation Subtract", () => {
      cy.get('#number1Field').type("2.55{enter}")
      cy.get('#number2Field').type("1.40{enter}")
      cy.get('#selectOperationDropdown').select('1')
      cy.get('#calculateButton').click()
      cy.get('#numberAnswerField').should('exist')
      cy.get('#numberAnswerField').should('have.value', '1.15')
      cy.get('#clearButton').click()
    })

    it("Check: Operation Multiply", () => {
      cy.get('#number1Field').type("2.5{enter}")
      cy.get('#number2Field').type("3.5{enter}")
      cy.get('#selectOperationDropdown').select('2')
      cy.get('#calculateButton').click()
      cy.get('#numberAnswerField').should('exist')
      cy.get('#numberAnswerField').should('have.value', '8.75')
      cy.get('#clearButton').click()
    })

    it("Check: Operation Divide", () => {
      cy.get('#number1Field').type("8.8{enter}")
      cy.get('#number2Field').type("2{enter}")
      cy.get('#selectOperationDropdown').select('3')
      cy.get('#calculateButton').click()
      cy.get('#numberAnswerField').should('exist')
      cy.get('#numberAnswerField').should('have.value', '4.4')
      cy.get('#clearButton').click()
    })

    it("Check: Operation Concatenate", () => {
      cy.get('#number1Field').type("9{enter}")
      cy.get('#number2Field').type("0{enter}")
      cy.get('#selectOperationDropdown').select('4')
      cy.get('#calculateButton').click()
      cy.get('#numberAnswerField').should('exist')
      cy.get('#numberAnswerField').should('have.value', '90')
      cy.get('#clearButton').click()
    })
  })
})

