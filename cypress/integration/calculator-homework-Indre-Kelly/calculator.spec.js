import Calculator from '../../page_objects/calculator_main/Calculator.js';

var calculator = new Calculator;
const builds = ["Prototype", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

describe("Test Suit", () => {
    beforeEach("Visit BasicCalculator", () => {
        cy.visit("https://testsheepnz.github.io/BasicCalculator")
    })
        for (let i = 0; i < builds.length; i++) {
            it.only("Can add numbers", () => {
                cy.get("#selectBuild").select(builds[i]);
                calculator.getFirstNumberField().type("8");
                calculator.getSecondNumberField().type("2");
                calculator.getOperationDropdown().select("Add");
                calculator.getCalculateButton().click();
                calculator.getAnswerField().should("have.value", "10");
                calculator.getIntegerCheckBox().click();
                calculator.getClearButton();
            })

            it.only("Can subtract numbers", () => {
                cy.get("#selectBuild").select(builds[i]);
                calculator.getFirstNumberField().type("8");
                calculator.getSecondNumberField().type("2");
                calculator.getOperationDropdown().select("Subtract");
                calculator.getCalculateButton().click();
                calculator.getAnswerField().should("have.value", "6");
                calculator.getIntegerCheckBox().click();
                calculator.getClearButton();
            })

            it.only("Can multiply numbers", () => {
                cy.get("#selectBuild").select(builds[i]);
                calculator.getFirstNumberField().type("8");
                calculator.getSecondNumberField().type("2");
                calculator.getOperationDropdown().select("Multiply");
                calculator.getCalculateButton().click();
                calculator.getAnswerField().should("have.value", "16");
                calculator.getIntegerCheckBox().click();
                calculator.getClearButton();
            })

            it.only("Can divide numbers", () => {
                cy.get("#selectBuild").select(builds[i]);
                calculator.getFirstNumberField().type("8");
                calculator.getSecondNumberField().type("2");
                calculator.getOperationDropdown().select("Divide");
                calculator.getCalculateButton().click();
                calculator.getAnswerField().should("have.value", "4");
                calculator.getIntegerCheckBox().click();
                calculator.getClearButton();
            })

            it.only("Can concatenate numbers", () => {
                cy.get("#selectBuild").select(builds[i]);
                calculator.getFirstNumberField().type("8");
                calculator.getSecondNumberField().type("2");
                calculator.getOperationDropdown().select("Concatenate");
                calculator.getCalculateButton().click();
                calculator.getAnswerField().should("have.value", "82");
                calculator.getIntegerCheckBox().click();
                calculator.getClearButton();
            })
        }
    }) 