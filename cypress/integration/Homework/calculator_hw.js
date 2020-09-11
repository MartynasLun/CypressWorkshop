import Calculator from "../../page_objects/homepage/Calculator.js"
/// <reference types="cypress" />
 
var calculator = new Calculator

let firstNumberField = [2, 0.2, -0.4, 'a'];
let secondNumberField = [7, 0.7, -3, 'b'];
let buildSelection = ["Prototype", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let calculatorAction = ["Add", "Subtract", "Multiply", "Divide", "Concatenate"]
let selectionFields = ['#selectBuild', '#number1Field', '#number2Field', '#selectOperationDropdown', '#calculateButton', '#numberAnswerField', '#integerSelect']

beforeEach("Executes before each test and checks correct landing page", ()=> {
    cy.visit("https://testsheepnz.github.io/BasicCalculator")
    cy.contains("The following page is a very basic calculator")
})

describe("All Calculator builds contain all the fields necessary", () => {
    buildSelection.forEach((eachBuildSelection) => {
it('Check fields are visible in build ' + eachBuildSelection, () => {
    calculator.getBuild().select(eachBuildSelection)
    calculator.getFirstNumber().should('be.visible')
    calculator.getSecondNumber().should('be.visible')
    calculator.getOperation().should('be.visible')
    calculator.getCalculateButton().should('be.visible')
    calculator.getAnswer().should('be.visible')
    calculator.getInteger().should('be.visible')
        })
    })
})

describe('Checks if add function works on all builds correctly and 4 variables (integers, fractions, negatives, letters)', () => {
    buildSelection.forEach((eachBuildSelection) => {
    for (let i=0; i<4; i++){
        it('Testing if ' + firstNumberField[i] +' ' + calculatorAction[0] + ' ' + secondNumberField[i] + ' works in build number ' + eachBuildSelection, () => {
            calculator.getBuild().select(eachBuildSelection)
            calculator.getFirstNumber().type(firstNumberField[i])
            calculator.getSecondNumber().type(secondNumberField[i])
            calculator.getOperation().select(calculatorAction[0])
            calculator.getCalculateButton().click()
            calculator.getAnswer().should('have.value', calculator.calculatorActionOutcome(calculatorAction[0],firstNumberField[i],secondNumberField[i]))
                })
            }
    })
})

describe('Checks if subtract function works on all builds correctly and 4 variables (integers, fractions, negatives, letters)', () => {
    buildSelection.forEach((eachBuildSelection) => {
    for (let i=0; i<4; i++){
        it('Testing if ' + firstNumberField[i] +' ' + calculatorAction[0] + ' ' + secondNumberField[i] + ' works in build number ' + eachBuildSelection, () => {
            calculator.getBuild().select(eachBuildSelection)
            calculator.getFirstNumber().type(firstNumberField[i])
            calculator.getSecondNumber().type(secondNumberField[i])
            calculator.getOperation().select(calculatorAction[1])
            calculator.getCalculateButton().click()
            calculator.getAnswer().should('have.value', calculator.calculatorActionOutcome(calculatorAction[0],firstNumberField[i],secondNumberField[i]))
                })
            }
    })
})


describe('Checks if Multiply function works on all builds correctly and 4 variables (integers, fractions, negatives, letters)', () => {
    buildSelection.forEach((eachBuildSelection) => {
    for (let i=0; i<4; i++){
        it('Testing if ' + firstNumberField[i] +' ' + calculatorAction[0] + ' ' + secondNumberField[i] + ' works in build number ' + eachBuildSelection, () => {
            calculator.getBuild().select(eachBuildSelection)
            calculator.getFirstNumber().type(firstNumberField[i])
            calculator.getSecondNumber().type(secondNumberField[i])
            calculator.getOperation().select(calculatorAction[2])
            calculator.getCalculateButton().click()
            calculator.getAnswer().should('have.value', calculator.calculatorActionOutcome(calculatorAction[0],firstNumberField[i],secondNumberField[i]))
                })
            }
    })
})

describe('Checks if Divide function works on all builds correctly and 4 variables (integers, fractions, negatives, letters)', () => {
    buildSelection.forEach((eachBuildSelection) => {
    for (let i=0; i<4; i++){
        it('Testing if ' + firstNumberField[i] +' ' + calculatorAction[0] + ' ' + secondNumberField[i] + ' works in build number ' + eachBuildSelection, () => {
            calculator.getBuild().select(eachBuildSelection)
            calculator.getFirstNumber().type(firstNumberField[i])
            calculator.getSecondNumber().type(secondNumberField[i])
            calculator.getOperation().select(calculatorAction[3])
            calculator.getCalculateButton().click()
            calculator.getAnswer().should('have.value', calculator.calculatorActionOutcome(calculatorAction[0],firstNumberField[i],secondNumberField[i]))
                })
            }
    })
})