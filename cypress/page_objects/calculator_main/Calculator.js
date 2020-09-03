class Calculator{

    constructor(build_mode, first_number, second_number, operation_choice, is_result_integer){
        this.build_mode_ = build_mode;
        this.first_number_ = first_number;
        this.second_number_ = second_number;
        this.operation_choice_ = operation_choice;
        this.is_result_integer = is_result_integer;
    }

    operationOutcome(){
        if(this.operation_choice_ === "Add"){
            //return this.first_number_  + this.second_number_;
            if(this.is_result_integer){ return Math.floor(this.first_number_  + this.second_number_); }
            else{ return this.first_number_  + this.second_number_; }
        }
        else if(this.operation_choice_ === "Subtract"){
            //return this.first_number_  - this.second_number_;
            if(this.is_result_integer){ return Math.ceil(this.first_number_  - this.second_number_); }
            else{ return this.first_number_  - this.second_number_; }
        }
        else if(this.operation_choice_ === "Multiply"){
            //return this.first_number_  * this.second_number_;
            if(this.is_result_integer){ return Math.floor(this.first_number_  * this.second_number_); }
            else{ return this.first_number_  * this.second_number_; }
        }
        else if(this.operation_choice_ === "Divide"){
            if(this.is_result_integer){ return Math.floor(this.first_number_  / this.second_number_); }
            else{ return this.first_number_  / parseFloat(this.second_number_); }
            
        }
        else if(this.operation_choice_ === "Concatenate"){
            let concatenation_result = "" + this.first_number_  + this.second_number_;
            return concatenation_result;
        }
    }

    getBuilMode(){
        return this.build_mode_;
    }
    getFirstNumber(){
        return this.first_number_;
    }
    getSecondNumber(){
        return this.second_number_;
    }
    getOperationChoice(){
        return this.operation_choice_;
    }
    getIsResultInteger(){
        return this.is_result_integer_;
    }

    setBuildMode(build_mode){
        this.build_mode_ = build_mode;
    }
    setFirstNumber(first_number){
        this.first_number_ = first_number;
    }
    setSecondNumber(second_number){
        this.second_number_ = second_number;
    }
    setOperationChoice(operation_choice){
        this.operation_choice_ = operation_choice;
    }
    setIsResultInteger(is_result_integer){
        this.is_result_integer = is_result_integer;
    }

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

export default Calculator;