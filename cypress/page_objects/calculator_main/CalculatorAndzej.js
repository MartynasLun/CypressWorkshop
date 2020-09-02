class Homepage{

    getBuildDropdown(){
        return cy.get('#selectBuild');
    }
    getFirstNumberField(){
        return cy.get('#number1Field');
    }
    getSecondNumberField(){
        return cy.get('#number2Field');
    }
    getOperationDropdown(){
        return cy.get('#selectOperationDropdown');
    }
    getCalculateButton(){
        return cy.get('#calculateButton');
    }
    getAnswerField(){
        return cy.get('#numberAnswerField');
    }
    getIntegerCheckBox(){
        return cy.get('#integerSelect');
    }
    getClearButton(){
        return cy.get('#clearButton');
    }
    
}

export default Homepage