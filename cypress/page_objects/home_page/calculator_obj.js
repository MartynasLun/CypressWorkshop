class Calculator {

    getBuild(){
        return cy.get('#selectBuild');
    }

    getFirstNumber(){
        return cy.get('#number1Field');
    }

    getSecondNumber() {
        return cy.get("#number2Field");
    }

    getOperation() {
        return cy.get("#selectOperationDropdown");
    }

    getBuild() {
        return cy.get("#selectBuild");
    }

    getCalculateButton() {
        return cy.get("#calculateButton");
    }

    getAnswer() {
        return cy.get("#numberAnswerField");
    }

    getCheckBoxForIntegersOnly() {
        return cy.get("#integerSelect");
    }

    checkIfContainsCheckBoxForIntegersOnly() {
        return cy.contains("#integerSelect");
    }

    getClearButton() {
        return cy.get("#clearButton");
    }

    getErrorMsg() {
        return cy.get("#errorMsgField");
    }
}

export default Calculator