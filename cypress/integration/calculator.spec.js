/// <reference types="cypress" />

describe('Tests without loop', () => {
    beforeEach("Executes before each test",() => {
        cy.visit("/BasicCalculator")
    })

    it('Check if first build with operation "Add" works properly', () => {
        cy.get('#selectBuild').select('1')
            .get('#number1Field').type(3)
            .get('#number2Field').type(4.5)
            .get('#selectOperationDropdown').select('0')
            .get('#calculateButton').click()
            .get('#numberAnswerField').should('have.value', 7.5)
            .get('#integerSelect').click()
            .get('#numberAnswerField').should('have.value', 7)
            .get('#clearButton').click()
            .get('#numberAnswerField').should('have.value', '')
            .get('#integerSelect').should('not.be.selected')
            .get('#errorMsgField').should('not.be.visible')
    })

    it('Check if fourth build with operation "Subtract" works properly', () => {
        cy.get('#selectBuild').select('4')
            .get('#number1Field').type(4)
            .get('#number2Field').type(2.5)
            .get('#selectOperationDropdown').select('1')
            .get('#calculateButton').click()
            .get('#numberAnswerField').should('have.value', 1.5)
            .get('#integerSelect').click()
            .get('#numberAnswerField').should('have.value', 1)
            .get('#clearButton').click()
            .get('#numberAnswerField').should('have.value', '')
            .get('#integerSelect').should('not.be.selected')
            .get('#errorMsgField').should('not.be.visible')
    })


    it('Check if sixth build with operation "Multiply" works properly', () => {
        cy.get('#selectBuild').select('6')
            .get('#number1Field').type(5)
            .get('#number2Field').type(2.5)
            .get('#selectOperationDropdown').select('2')
            .get('#calculateButton').click()
            .get('#numberAnswerField').should('have.value', 12.5)
            .get('#integerSelect').click()
            .get('#numberAnswerField').should('have.value', 12)
            .get('#clearButton').click()
            .get('#numberAnswerField').should('have.value', '')
            .get('#integerSelect').should('not.be.selected')
            .get('#errorMsgField').should('not.be.visible')
    })

  

    it('Check if ninth build with operation "Divide" works properly', () => {
        cy.get('#selectBuild').select('9')
            .get('#number1Field').type(3)
            .get('#number2Field').type(2)
            .get('#selectOperationDropdown').select('3')
            .get('#calculateButton').click()
            .get('#numberAnswerField').should('have.value', 1.5)
            .get('#integerSelect').click()
            .get('#numberAnswerField').should('have.value', 1)
            .get('#clearButton').click()
            .get('#numberAnswerField').should('have.value', '')
            .get('#integerSelect').should('not.be.selected')
            .get('#errorMsgField').should('not.be.visible')
})    



const firstInputData = 6
const secondInputData = 1.5

const builds = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

const operations = ['Add', 'Subtract', 'Multiply', 'Divide', 'Concatenate']

const calculationResults = { Add: 7.5, Subtract: 4.5, Multiply: 9, Divide: 4, Concatenate: '61.5' }
const integerOnlyCalculationResults = { Add: 7, Subtract: 4, Multiply: 9, Divide: 4 }

describe('Tests with loop', () => {
    beforeEach("Executes before each test",() => {
        cy.visit("/BasicCalculator")
    })

    for (let i = 0; i < builds.length; i++) {
        for (let x = 0; x < operations.length; x++) {
            it(`Check if in ${builds[i]} build with operation ${operations[x]} works properly`, () => {
                cy.get('#selectBuild').select(builds[i])
                    .get('#number1Field').type(firstInputData)
                    .get('#number2Field').type(secondInputData)
                    .get('#selectOperationDropdown').select(`${x}`)
                    .get('#calculateButton').click()
                    .get('#numberAnswerField').should('have.value', calculationResults[operations[x]])
                    .get('#selectOperationDropdown').then((val) => {
                        if (operations[x] !== 'Concatenate') {
                            cy.get('#integerSelect').click()
                            cy.get('#numberAnswerField').should('have.value', integerOnlyCalculationResults[operations[x]])
                        }
                    })
                    .get('#clearButton').click()
                    .get('#numberAnswerField').should('have.value', '')
                    .get('#integerSelect').should('not.be.selected')
                    .get('#errorMsgField').should('not.be.visible')
                })
            }
        }
    })
})