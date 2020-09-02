/// <reference types="cypress" />
import Homepage from '../../page_objects/calculator_main/CalculatorAndzej.js';

const homepage = new Homepage();
const selection = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const firstNumber = 12;
const secondNumber = 3; 

beforeEach("Executes before each test", ()=>{
    cy.visit("https://testsheepnz.github.io/BasicCalculator");
})

it("Checks ADD function in every version", ()=>{
    selection.forEach((selection) => {
        homepage.getBuildDropdown().select(selection);
        homepage.getFirstNumberField().type(firstNumber);
        homepage.getSecondNumberField().type(secondNumber);
        homepage.getOperationDropdown().select('Add');
        homepage.getCalculateButton().click();
        homepage.getAnswerField().should('have.value', '15');
        homepage.getClearButton().click();
    })
})

it("Checks SUBTRACT function in every version", ()=>{
    selection.forEach((selection) => {
        homepage.getBuildDropdown().select(selection);
        homepage.getFirstNumberField().type(firstNumber);
        homepage.getSecondNumberField().type(secondNumber);
        homepage.getOperationDropdown().select('Subtract');
        homepage.getCalculateButton().click();
        homepage.getAnswerField().should('have.value', '9');
        homepage.getClearButton().click();
    })
})

it("Checks MULTIPLY function in every version", ()=>{
    selection.forEach((selection) => {
        homepage.getBuildDropdown().select(selection);
        homepage.getFirstNumberField().type(firstNumber);
        homepage.getSecondNumberField().type(secondNumber);
        homepage.getOperationDropdown().select('Multiply');
        homepage.getCalculateButton().click();
        homepage.getAnswerField().should('have.value', '36');
        homepage.getClearButton().click();
    })
})

it("Checks Divide function in every version", ()=>{
    selection.forEach((selection) => {
        homepage.getBuildDropdown().select(selection);
        homepage.getFirstNumberField().type(firstNumber);
        homepage.getSecondNumberField().type(secondNumber);
        homepage.getOperationDropdown().select('Divide');
        homepage.getCalculateButton().click();
        homepage.getAnswerField().should('have.value', '4');
        homepage.getClearButton().click();
    })
})

it("Checks CONCATENATE function in every version", ()=>{
    selection.forEach((selection) => {
        homepage.getBuildDropdown().select(selection);
        homepage.getFirstNumberField().type(firstNumber);
        homepage.getSecondNumberField().type(secondNumber);
        homepage.getOperationDropdown().select('Concatenate');
        homepage.getCalculateButton().click();
        homepage.getAnswerField().should('have.value', '123');
        homepage.getClearButton().click();
    })
})
