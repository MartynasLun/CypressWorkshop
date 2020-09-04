class HomePage {


    clearButton = "#clearButton";
    actionDropDown = "#selectOperationDropdown";
    calculateButton = "#calculateButton";
    numberField1 = "#number1Field";
    numberField2 = "#number2Field";
    integersOnlyCheckbox = "#integerSelect";


    checkIfFieldsEnabled(field) {
        cy.get(field).should('be.enabled')
    }

    enterFieldsWith(number1, number2, action) {
        cy.get(this.numberField1).clear()
        cy.get(this.numberField1).type(number1)
        cy.get(this.numberField2).clear()
        cy.get(this.numberField2).type(number2)
        cy.get(this.actionDropDown).select(action)
        cy.get(this.calculateButton).click()
    }
    checkAnswer(answer) {
        cy.get('input[name="numberAnswer"]').invoke('val').should('eq', answer)
    }
    checkTestClearButton() {
        this.checkIfFieldsEnabled(this.clearButton)
        cy.get(this.clearButton).click()
        cy.get('input[name="numberAnswer"]').invoke('val').should('eq', '')
    }
    TestIntegersOnlyCheckbox(action) {
        var number = '0.0'
        var number2 = '0'
        cy.get(this.numberField1).clear()
        cy.get(this.numberField1).type('69.69')
        cy.get(this.numberField2).clear()
        cy.get(this.numberField2).type('2')
        cy.get(this.actionDropDown).select(action)
        cy.get(this.calculateButton).click()
        switch (action) {
            case "Add":
                number = '71.69'
                number2 = '71'
                break;
            case "Subtract":
                number = '67.69'
                number2 = '67'
                break;
            case "Multiply":
                number = '139.38'
                number2 = '139'
                break;
            case "Divide":
                number = '34.845'
                number2 = '34'
                break;
            case "Concatenate":
                number = '69.692'
                number2 = '69'
                break;
        }
        cy.get('input[name="numberAnswer"]').invoke('val').should('eq', number)
        this.checkIfFieldsEnabled(this.integersOnlyCheckbox)
        cy.get(this.integersOnlyCheckbox).check()
        cy.get('input[name="numberAnswer"]').invoke('val').should('eq', number2)
    }
}

export default HomePage