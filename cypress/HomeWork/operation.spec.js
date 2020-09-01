const prototype = ['0','1','2','3','4','5', '6', '7', '8', '9']
const firstNumber = 3
const secondNumber = 2.2
let sum = firstNumber+secondNumber
let multiply = firstNumber*secondNumber

prototype.forEach((prototype) => {
    beforeEach(() => {
       cy.visit('https://testsheepnz.github.io/BasicCalculator')
       cy.get("#selectBuild").select(prototype)
    });
  

 it('check ADD Operation results in all Prototyps', () => {
     cy.visit('https://testsheepnz.github.io/BasicCalculator')
     cy.get("#number1Field").type(firstNumber)
     cy.get("#number2Field").type(secondNumber)
     cy.get("#selectOperationDropdown").select('0')
     cy.get("#calculateButton").click()
     cy.get("#answerForm").should("equal", 'sum')
     })
    

it('check Multiply Operation results in all Prototyps', () => {
      cy.visit('https://testsheepnz.github.io/BasicCalculator')
      cy.get("#number1Field").type(firstNumber)
      cy.get("#number2Field").type(secondNumber)
      cy.get("#selectOperationDropdown").select('2')
      cy.get("#calculateButton").click()
      cy.get("#answerForm").should('equal', 'multiply')
     })
})