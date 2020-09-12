import CalculatorOB from "../../Page_objects/Calculator_objects/calculatorOB.js";
/// <reference types="cypress" />

var calculatorOB = new CalculatorOB();

const build = ["Prototype", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const digit1 = "1.5";
const digit2 = "2";
const abc = "a";
const mathAction = ["Add", "Subtract", "Multiply", "Divide", "Concatenate"];
const calcValue = ["3.5", "-0.5", "3", "0.75", "1.52"];
const calcValueInteger = ["3", "0", "3", "0"];

describe("verify calculator performs calculations", () => {
  beforeEach(() => {
    cy.visit("/BasicCalculator");
  });

  build.forEach((build) => {
    mathAction.forEach((mathAction) => {
      it("contains all calculation actions on every build", () => {
        calculatorOB.getBuild(build);
        calculatorOB.getOperationDropdown(mathAction);
      });
    });

    it("contains fields, buttons, they are active, enabled on every build", () => {
      calculatorOB.getBuild(build);
      calculatorOB.getNumber1().clear().type(digit1);
      calculatorOB.getNumber2().clear().type(digit2);
      calculatorOB.getCalculateButton();
      calculatorOB.getAnswerFiled();
      calculatorOB.getClearButton();
    });

    it.only("shows the first number field's error message when alphabet symbol is calculating", () => {
      calculatorOB.getBuild(build);
      calculatorOB.getNumber1().clear().type(abc);
      calculatorOB.getCalculateButton();
      calculatorOB.getErrorMessage();
    });

    it("shows the second number field's error message when alphabet symbol is calculating", () => {
      calculatorOB.getBuild(build);
      calculatorOB.getNumber2().clear().type(abc);
      calculatorOB.getCalculateButton();
      calculatorOB.getErrorMessage();
    });

    it.only("contains integer checkbox enabled on every build", () => {
      calculatorOB.getBuild(build);
      calculatorOB.getInteger().should("to.be.enabled");
    });

    it.only("performs addition action correctly on every build", () => {
      const additionAction = mathAction[0];
      const result = calcValue[0];
      const resultInteger = calcValueInteger[0];
      calculatorOB.getBuild(build);
      calculatorOB.getNumber1().clear().type(digit1);
      calculatorOB.getNumber2().clear().type(digit2);
      calculatorOB.getOperationDropdown(additionAction);
      calculatorOB.getCalculateButton();
      calculatorOB.getInteger().uncheck({ force: true });
      calculatorOB.getAnswerFiled().should("have.value", result);
      calculatorOB.getInteger().check({ force: true });
      calculatorOB.getAnswerFiled().should("have.value", resultInteger);
      calculatorOB.getClearButton();
    });
    it.only("performs subtract action correctly on every build", () => {
      const subtractAction = mathAction[1];
      const result = calcValue[1];
      const resultInteger = calcValueInteger[1];
      calculatorOB.getBuild(build);
      calculatorOB.getNumber1().clear().type(digit1);
      calculatorOB.getNumber2().clear().type(digit2);
      calculatorOB.getOperationDropdown(subtractAction);
      calculatorOB.getCalculateButton();
      calculatorOB.getInteger().uncheck({ force: true });
      calculatorOB.getAnswerFiled().should("have.value", result);
      calculatorOB.getInteger().check({ force: true });
      calculatorOB.getAnswerFiled().should("have.value", resultInteger);
      calculatorOB.getClearButton();
    });

    it.only("performs concatenate action correctly on every build", () => {
      const concatenateAction = mathAction[4];
      const result = calcValue[4];
      calculatorOB.getBuild(build);
      calculatorOB.getNumber1().clear().type(digit1);
      calculatorOB.getNumber2().clear().type(digit2);
      calculatorOB.getOperationDropdown(concatenateAction);
      calculatorOB.getCalculateButton();
      calculatorOB.getAnswerFiled().should("have.value", result);
      calculatorOB.getClearButton();
    });
  });
});
