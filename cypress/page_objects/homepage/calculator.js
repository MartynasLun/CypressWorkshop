class Calculator {
    getInputFieldFirst() {
        return cy.get('#number1Field');
    }
    getInputFieldSecond() {
        return cy.get('#number2Field');
    }
    selectDropDown() {
        return cy.get('#selectOperationDropdown');
    }
    calculateButton() {
        return cy.get('#calculateButton');
    }
    getAnswerField() {
        return cy.get('#numberAnswerField');
    }
    onlyIntegers() {
        return cy.get('#integerSelect');
    }
    getbuildVersion() {
        return cy.get('#selectBuild');
    }
}
export default Calculator