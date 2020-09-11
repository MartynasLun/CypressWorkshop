class Calculator{
    
    selectionFields = ['#selectBuild', '#number1Field', '#number2Field', '#selectOperationDropdown', '#calculateButton', '#numberAnswerField', '#integerSelect']

    //Selection fields
    getBuild(){
        return cy.get('#selectBuild')
    }
    getFirstNumber(){
        return cy.get('#number1Field')
    }
    getSecondNumber(){
        return cy.get('#number2Field')
    }
    getOperation(){
        return cy.get('#selectOperationDropdown')
    }
    getCalculateButton(){
        return cy.get('#calculateButton')
    }
    getAnswer(){
        return cy.get('#numberAnswerField')
    }
    getInteger(){
        return cy.get('#integerSelect')
    }

    //Calculator functions
    calculatorActionOutcome(calculatorAction,a,b){
        if(calculatorAction === 'Add'){
            return a+b 
        }
        else if(calculatorAction === 'Subtract') {
            return a-b
        } 
        else if(calculatorAction === 'Multiply') {
            return a*b
        }
        else if(calculatorAction === 'Divide') {
            return a/b
        }
    }
   
    // Checks visibility test

    
    checkVisible(selectionFields) {
        cy.get(selectionFields).should('be.visible')
    }
       
}

export default Calculator