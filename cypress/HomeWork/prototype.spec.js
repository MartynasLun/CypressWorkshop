const prototype = ['0','1','2','3','4','5', '6', '7', '8', '9']
const firstNumber = 3
const secondNumber = 2.2
const operation = ['0', '1', '2', '3', '4']


prototype.forEach((prototype) => {
    beforeEach(() => {
       cy.visit('https://testsheepnz.github.io/BasicCalculator')
       cy.get('#selectBuild').select(prototype)
    });
operation.forEach((operation) => {
      beforeEach(() => {
        cy.get('#selectBuild').select(operation)
    });

  it('check all field availability in all Prototyps', () => {
    cy.get("#number1Field").type(firstNumber)
    cy.get("#number2Field").type(secondNumber)
    cy.get("#selectOperationDropdown").select(operation)
    cy.get("#calculateButton").click()
    cy.get("#answerForm").should('have.value','')
    cy.get("#integerSelect")
    cy.get("#clearButton").click()
      })
  });

 it('check ADD Operation results in all Prototyps', () => {
     cy.get("#number1Field").type(firstNumber)
     cy.get("#number2Field").type(secondNumber)
     cy.get("#selectOperationDropdown").select('0')
     cy.get("#calculateButton").click()
     cy.get("#answerForm").should('have.value','firstNumber+secondnumber')
     })
  });
