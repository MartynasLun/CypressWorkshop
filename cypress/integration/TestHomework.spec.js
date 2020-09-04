import Calculator from '../../../pageObjects/calculator1/calculator1.js'

/// <reference types="cypress" />

var calculator = new Calculator()

beforeEach("Executes before each test", () => {

    cy.visit("testsheepnz.github.io/BasicCalculator")
})

describe("Arithmetical operations", () => {

    const num1 = Cypress._.random(-5000, 5000)
    const num2 = Cypress._.random(-5000, 5000)

    const add = num1 + num2
    const subtract = num1 - num2
    const multiply = num1 * num2
    const divide = num1 / num2

    const buildVersion = "0"

    function verifyOperation(buildVersion, operationToChoose, expectedValue) {
        cy.get("#selectBuild").select(buildVersion)
        calculator.getNum1Field().type(num1)
        calculator.getNum2Field().type(num2)
        calculator.getOperation().select(operationToChoose)
        calculator.getCalculateButton().click()
        calculator.getAnswerField().should("have.value", expectedValue)
    }

    it("Can add", () => {
        verifyOperation(buildVersion, "0", add)
    })
    it("Can subtract", () => {
        verifyOperation(buildVersion, "1", subtract)
    })
    it("Can multiply", () => {
        verifyOperation(buildVersion, "2", multiply)
    })
    it("Can divide", () => {
        verifyOperation(buildVersion, "3", divide)
    })
})

describe("Toggle function", () => {

    const buildVersion = "0"


    it("Integer toggle should not exist when concatonate was chosen", () => {

        cy.get("#selectBuild").select(buildVersion)
        calculator.getNum1Field().type("TE")
        calculator.getNum2Field().type("ST")
        calculator.getOperation().select("4")
        calculator.getCalculateButton().click()
        calculator.getAnswerField().should("not.be.visible")

    })

    it("Should toggle when answer as an integer value wanted", () => {

        const num1 = 128.59756
        const num2 = 455.000125
        const result = num1 + num2

        cy.get("#selectBuild").select(buildVersion)
        calculator.getNum1Field().type(num1)
        calculator.getNum2Field().type(num2)
        calculator.getOperation().select("0")
        calculator.getCalculateButton().click()
        calculator.getAnswerField().should("have.value", result)
        cy.get("#integerSelect").click()
        calculator.getAnswerField().should("have.value", 583)

    })

})

describe("Invalid inputs", () => {

    const buildVersion = "0"

    it("Should show error message when non-numerical values are entered and mathematical function is selected", () => {

        cy.get("#selectBuild").select(buildVersion)
        calculator.getNum1Field().type("TEst")
        calculator.getNum2Field().type("@@@###")
        calculator.getOperation().select("2")
        calculator.getCalculateButton().click()
        cy.get("#errorMsgField").contains("Number 1 is not a number")

    })


    it("Should show error message when integer is divided by zero", () => {

        cy.get("#selectBuild").select(buildVersion)
        calculator.getNum1Field().type(Cypress._.random(-1000, 1000))
        calculator.getNum2Field().type("0")
        calculator.getOperation().select("3")
        calculator.getCalculateButton().click()
        cy.get("#errorMsgField").contains("Divide by zero error!")

    })
})


it("Should concatonate two strings", () => {

    const myString1 = "TE"
    const myString2 = "st2"
    const result = myString1 + myString2

    cy.get("#selectBuild").select("0")
    calculator.getNum1Field().type(myString1)
    calculator.getNum2Field().type(myString2)
    calculator.getOperation().select("4")
    calculator.getCalculateButton().click()
    calculator.getAnswerField().should("have.value", result)

})

it("Should show empty answer field when Clear button was clicked", () => {

    cy.get("#selectBuild").select("0")
    calculator.getNum1Field().type("10")
    calculator.getNum2Field().type("5")
    calculator.getOperation().select("0")
    cy.get("#clearButton").click()
    calculator.getAnswerField().should("be.empty")
    //last line of code could also be:
    //cy.get("#numberAnswerField").should("have.value", "")

})

/*pakeitimas
*/