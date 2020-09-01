class Calculator {

    // Gets "Build" drop-down menu
    getBuild() {
        return cy.get('#selectBuild')
    };
    // Gets "First Number" input field
    getInput1() {
        return cy.get('#number1Field')
    };
    // Gets "Second Number" input field
    getInput2() {
        return cy.get('#number2Field')
    };
    // Gets "Operation" drop-down menu
    getDropdown() {
        return cy.get('#selectOperationDropdown')
    };
    // Gets [Calculate] button
    getCalculate() {
        return cy.get('#calculateButton')
    };
    // Gets "Answer" output field
    getAnswer() {
        return cy.get('#numberAnswerField')
    };
    // Gets "Integers only" checkbox
    getIntegers() {
        return cy.get('#integerSelect')
    };
    // Gets [Clear] button
    getClear() {
        return cy.get('#clearButton')
    };
    // Gets Error message
    getError() {
        return cy.get('#errorMsgField')
    };
    // Reloads page
    refreshPage() {
        return cy.visit('/BasicCalculator')
    };

}

export default Calculator