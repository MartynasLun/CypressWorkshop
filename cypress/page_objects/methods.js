var operation = ["Add", "Subtract", "Multiply", "Divide", "Concatenate"];
class Method {

    //select metodai:

    selectBuild = (build) => cy.get('#selectBuild').select(build);
    selectOperation = (build) => cy.get('#selectOperationDropdown').select(build);  
    

    // get metodai:    
     
    getErrorField = () => cy.get('#errorMsgField');
   
    getIntegerSelect = () => cy.get('#integerSelect');

    get1Field = () => cy.get('#number1Field');    

    get2Field = () => cy.get('#number2Field');

    getAnswerField = () => cy.get('#numberAnswerField');

    getCalculateButton = () => cy.get('#calculateButton');


    validateInput = (number1, number2) => {
        this.calculate(number1, number2);
        if (isNaN(number1) || isNaN(number2))
            this.getErrorField().should('be.visible')           
        else
            this.getErrorField().should('not.be.visible');
    }
    
    addOperation = (number1, number2, integersOnly) => {
        this.selectOperation(operation[0]);
        this.calculate(number1, number2, integersOnly);
        this.getErrorField().should('not.be.visible');
        this.getAnswerField().should('have.value', integersOnly ? parseInt(number1 + number2) : number1 + number2);
    }

    calculate= (number1, number2, integersOnly) => {
        if (integersOnly) {
            this.getIntegerSelect().should('be.enabled');
            this.getIntegerSelect().check();
        }
        else
            this.getIntegerSelect().uncheck();
        this.get1Field().type(number1);
        this.get2Field().type(number2);        
        this.getCalculateButton().click();
    }
    subtractOperation = (number1, number2, integersOnly) => {
        this.selectOperation(operation[1]);
        this.calculate(number1, number2, integersOnly);
        this.getErrorField().should('not.be.visible');
        this.getAnswerField().should('have.value', integersOnly ? parseInt(number1- number2) : number1- number2);
    }
    multiplyOperation = (number1, number2, integersOnly) => {
        this.selectOperation(operation[2]);
        this.calculate(number1, number2, integersOnly);
        this.getErrorField().should('not.be.visible');
        this.getAnswerField().should('have.value', integersOnly? parseInt(number1* number2) : number1* number2);
    }
    concatenateOperation = (number1, number2) => {        
        this.calculate(number1, number2);      
        this.getAnswerField().should('have.value', number1.concat(number2));
    }
    
    divideOperation = (number1, number2, integersOnly) => {
        this.selectOperation(operation[3]);
        this.calculate(number1, number2, integersOnly);
        if (number2 == 0) {
            this.getErrorField().should('be.visible');
            return;
        }
        else
            this.getErrorField().should('not.be.visible');
        this.getAnswerField().should('have.value', integersOnly ? parseInt(number1 / number2) : number1 / number2);
    }

   

   
}

export default Method