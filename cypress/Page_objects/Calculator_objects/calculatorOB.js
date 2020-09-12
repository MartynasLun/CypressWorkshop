class CalculatorOB{
    
    getBuild(build){
        return cy.get("#selectBuild").select(build)
    }

    getNumber1(){
        return cy.get("#number1Field").should("be.visible").should("to.be.enabled")
    }

    getNumber2(){
        return cy.get('#number2Field').should('be.visible').should('to.be.enabled')
    }
    
    getOperationDropdown(mathAction){  
        return cy.get('#selectOperationDropdown').should('be.visible').select(mathAction)
    }
 
    getCalculateButton(){
        return cy.get('#calculateButton').should("to.exist").should("be.visible").should("to.be.enabled").click()
    }

    getAnswerFiled(){
        return cy.get('#numberAnswerField').should("to.exist").should("be.enabled")
    }

    getInteger(){
        return cy.get('#integerSelect').should("to.exist").should("be.visible")
    }

    getClearButton(){
        return cy.get('#clearButton').should("to.exist").should("be.visible").click()
    }
    
    getErrorMessage(){
        return cy.get('#errorMsgField').should('be.visible')
    }

}
    
export default CalculatorOB


