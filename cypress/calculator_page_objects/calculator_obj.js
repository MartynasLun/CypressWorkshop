class Calculator
{
    getBuild()
    {
        return cy.get('#selectBuild')
    }

    getFirstNr()
    {
        return cy.get('#number1Field')
    }
    getSeconstNr()
    {
        return cy.get('#number2Field')
    }

    getOperation()
    {
        return cy.get('#selectOperationDropdown')
    }

    getCalculateButton()
    {
        return cy.get('#calculateButton')
    }

    getAnswer()
    {
        return cy.get('#numberAnswerField')
    }

    getIntegerOnly()
    {
        return cy.get('#integerSelect')
    }

    getClear()
    {
        return cy.get('#clearButton')
    }
}

export default Calculator