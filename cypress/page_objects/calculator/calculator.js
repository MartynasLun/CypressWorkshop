class Calculator {
    static get OPERATIONS() {
        return {
            ADD: 'Add',
            SUBTRACT: 'Subtract',
            MULTIPLY: 'Multiply',
            DIVIDE: 'Divide',
            CONCATENATE: 'Concatenate'
        }
    }

    selectBuild = (build) => cy.get('#selectBuild').select(build);

    selectOperation = (operation) => cy.get('#selectOperationDropdown').select(operation);

    getFieldOne = () => cy.get('#number1Field');

    getFieldTwo = () => cy.get('#number2Field');

    getCalculateButton = () => cy.get('#calculateButton');

    getClearButton = () => cy.get('#clearButton');

    getErrorField = () => cy.get('#errorMsgField');

    getAnswerField = () => cy.get('#numberAnswerField');

    getIntegerSelectBox = () => cy.get('#integerSelect');

    getAnswer = (valOne, valTwo, intOnly = false) => {
        if (intOnly) {
            this.getIntegerSelectBox().should('be.enabled');
            this.getIntegerSelectBox().check();
        }
        else
            this.getIntegerSelectBox().uncheck({ force: true });

        this.getFieldOne().type(valOne);
        this.getFieldTwo().type(valTwo);
        this.getCalculateButton().click();
    }

    add = (num1, num2, intOnly = false) => {
        this.selectOperation(Calculator.OPERATIONS.ADD);

        this.getAnswer(num1, num2, intOnly);
        this.getErrorField().should('not.be.visible');
        this.getAnswerField().should('have.value', intOnly ? parseInt(num1 + num2) : num1 + num2);
    }

    subtract = (num1, num2, intOnly = false) => {
        this.selectOperation(Calculator.OPERATIONS.SUBTRACT);

        this.getAnswer(num1, num2, intOnly);
        this.getErrorField().should('not.be.visible');
        this.getAnswerField().should('have.value', intOnly ? parseInt(num1 - num2) : num1 - num2);
    }

    multiply = (num1, num2, intOnly = false) => {
        this.selectOperation(Calculator.OPERATIONS.MULTIPLY);

        this.getAnswer(num1, num2, intOnly);
        this.getErrorField().should('not.be.visible');
        this.getAnswerField().should('have.value', intOnly ? parseInt(num1 * num2) : num1 * num2);
    }

    divide = (num1, num2, intOnly = false) => {
        this.selectOperation(Calculator.OPERATIONS.DIVIDE);

        this.getAnswer(num1, num2, intOnly);

        if (num2 == 0) {
            this.getErrorField().should('be.visible').contains('Divide by zero error!');
            return;
        }
        else
            this.getErrorField().should('not.be.visible');

        this.getAnswerField().should('have.value', intOnly ? parseInt(num1 / num2) : num1 / num2);
    }

    concatenate = (valOne, valTwo) => {
        this.selectOperation(Calculator.OPERATIONS.CONCATENATE);

        this.getAnswer(valOne, valTwo);
        this.getErrorField().should('not.be.visible');
        this.getAnswerField().should('have.value', valOne.concat(valTwo));
    }

    validateInput = (valOne, valTwo) => {
        this.getAnswer(valOne, valTwo);

        if (isNaN(valOne) || isNaN(valTwo))
            this.getErrorField().should('be.visible').contains(`Number ${isNaN(valOne) ? 1 : 2} is not a number`);
        else
            this.getErrorField().should('not.be.visible');
    }
}

export default Calculator
