 class Homepage {
    getbuiltVersion() {
         return cy.get('#selectBuild')
    }
    getfirstNumberField() {
        return cy.get ("#number1Field")
    }
    getsecondNumberField(){
        return cy.get ("#number2Field")
    }
    getcalculateButton (){
        return cy.get('#calculateButton')
     }
    getanswerField (){
        return cy.get ('#numberAnswerField')
    }
    getoperationField(){
        return cy.get('#selectOperationDropdown')
    }
    getintegersSelector (){
        return cy.get('#integerSelect')
    }
    geterrorMessageField(){
        return cy.get ('#errorMsgField')
    }
    getclearButton(){
        return cy.get('#clearButton')
    }
}
export default Homepage