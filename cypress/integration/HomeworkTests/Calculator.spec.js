import Calculator from "../../page_objects/homepage/calculator.js";
/// <reference types="cypress" />

var calculator = new Calculator()

var firstInput = 2.5;
var secondInput = 2;

var sumInputs = firstInput + secondInput;
var subtractInputs = firstInput - secondInput;
var multiplyInputs = firstInput * secondInput;
var divideInputs = firstInput / secondInput;
var concatenateInputs = firstInput.toString() + secondInput.toString();


var buildVersions = ['Prototype', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

beforeEach("", () => {
    cy.visit("https://testsheepnz.github.io/BasicCalculator")
    calculator.getInputFieldFirst().type(firstInput)
    calculator.getInputFieldSecond().type(secondInput)
});

buildVersions.forEach((buildVersion) => {

    it("1.2 Checks if two input forms exists", () => {
        calculator.getbuildVersion().select(buildVersion)
        calculator.getInputFieldFirst().should('exist')
        calculator.getInputFieldSecond().should('exist')

    });


    it.only("2.1 Checks functionality of 'Add' with two provided inputs", () => {
        calculator.getbuildVersion().select(buildVersion)
        calculator.selectDropDown().select('Add')
        calculator.calculateButton().click()
        calculator.getAnswerField().should('have.value', sumInputs)

    });

    it("2.2 Checks functionality of 'Add' with two provided inputs when 'Integers only' is selected", () => {
        calculator.getbuildVersion().select(buildVersion)
        calculator.selectDropDown().select('Add')
        calculator.onlyIntegers().click()
        calculator.calculateButton().click()
        calculator.getAnswerField().should('have.value', Math.floor(sumInputs))
    });

    it("3.1 Checks functionality of 'Subtract' with two provided inputs", () => {
        calculator.getbuildVersion().select(buildVersion)
        calculator.selectDropDown().select('Subtract')
        calculator.calculateButton().click()
        calculator.getAnswerField().should('have.value', subtractInputs)
    });

    it.only("3.2 Checks functionality of 'Subtract' with two provided inputs when 'Integers only' is selected", () => {
        calculator.getbuildVersion().select(buildVersion)
        calculator.selectDropDown().select('Subtract')
        calculator.onlyIntegers().click()
        calculator.calculateButton().click()
        calculator.getAnswerField().should('have.value', Math.floor(subtractInputs))
    });

    it("4.1 Checks functionality of 'Multiply' with two provided inputs", () => {
        calculator.getbuildVersion().select(buildVersion)
        calculator.selectDropDown().select('Multiply')
        calculator.calculateButton().click()
        calculator.getAnswerField().should('have.value', multiplyInputs)
    });

    it.only("4.2 Checks functionality of 'Multiply' with two provided inputs when 'Integers only' is selected", () => {
        calculator.getbuildVersion().select(buildVersion)
        calculator.selectDropDown().select('Multiply')
        calculator.onlyIntegers().click()
        calculator.calculateButton().click()
        calculator.getAnswerField().should('have.value', Math.floor(multiplyInputs))
    });

    it.only("5.1 Checks functionality of 'Divide' with two provided inputs", () => {
        calculator.getbuildVersion().select(buildVersion)
        calculator.selectDropDown().select('Divide')
        calculator.calculateButton().click()
        calculator.getAnswerField().should('have.value', divideInputs)
    });

    it.only("5.2 Checks functionality of 'Divide' with two provided inputs when 'Integers only' is selected", () => {
        calculator.getbuildVersion().select(buildVersion)
        calculator.selectDropDown().select('Divide')
        calculator.onlyIntegers().click()
        calculator.calculateButton().click()
        calculator.getAnswerField().should('have.value', Math.floor(divideInputs))
    });

    it.only("6.1 Checks functionality of 'Concatenate' with two provided inputs", () => {
        calculator.getbuildVersion().select(buildVersion)
        calculator.selectDropDown().select('Concatenate')
        calculator.calculateButton().click()
        calculator.getAnswerField().should('have.value', concatenateInputs)
    });

});