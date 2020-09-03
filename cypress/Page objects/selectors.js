class selectors{
    BuildVersion = '#selectBuild'
    Operations = '#selectOperationDropdown'
    Number1Field = '#number1Field'
    Number2Field = '#number2Field'
    Answer = '#numberAnswerField'
    CheckBox = '#integerSelect'
    ClearButton = '#clearButton'
    Calculate = '#calculateButton'


    getBuildVersion(){
        return cy.get(this.BuildVersion)
    }

    getOperations(){
        return cy.get(this.Operations)
    }

    getNumber1Field(){
        return cy.get(this.Number1Field)
    }

    getNumber2Field(){
        return cy.get(this.Number2Field)
    }

    getAnswerField(){
        return cy.get(this.Answer)
    }

    getIntegerSelect(){
        return cy.get(this.CheckBox)
    }

    getClearButton(){
        return cy.get(this.ClearButton)
    }
    
    getCalculateButton(){
        return cy.get(this.Calculate)
    }
}

export default selectors