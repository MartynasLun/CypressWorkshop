class Calculator {
    getNum1Field() {
        return cy.get("#number1Field")
    }
    getNum2Field() {
        return cy.get("#number2Field")
    }
    getCalculateButton() {
        return cy.get("#calculateButton")
    }
    getOperation() {
        return cy.get("#selectOperationDropdown")
    }
    getAnswerField() {
        return cy.get("#numberAnswerField")
    }
    getBuild() {
        return cy.get("#selectBuild")
    }
}
export default Calculator

