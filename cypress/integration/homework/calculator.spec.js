// <reference types="Cypress" />

import HomePage from './classes/HomePage.js'

var homePage = new HomePage

var website = "https://testsheepnz.github.io/BasicCalculator";

var numberField1 = "#number1Field";
var numberField2 = "#number2Field";
var clearButton = "#clearButton";
var buildDropDown = "#selectBuild";
var actionDropDown = "#selectOperationDropdown";
var action = "";

describe('Calculator Homepage', () => {
    describe('Addition', () => {
        it.only("Test addition on every version of a calculator", () => {
            action = "Add";
            cy.visit(website)
            cy.get(actionDropDown).select(action)
            for (var i = 1; i <= 9; i++) {
                context(`Build ${i}`, () => {
                    cy.get(buildDropDown).select(i.toString());
                    homePage.checkIfFieldsEnabled(numberField1)
                    homePage.checkIfFieldsEnabled(numberField2)
                    homePage.checkIfFieldsEnabled(clearButton)
                    homePage.enterFieldsWith("-1", "-1", action)
                    homePage.checkAnswer('-2')
                    homePage.enterFieldsWith("1", "1", action)
                    homePage.checkAnswer('2')
                    homePage.enterFieldsWith("Ding", "Dong", action)
                    homePage.checkAnswer('NaN')
                    homePage.enterFieldsWith("3006", "-300", action)
                    homePage.checkAnswer('2706')
                    homePage.enterFieldsWith("2147483647", "1000", action)
                    homePage.checkAnswer('2147484647')
                    homePage.checkTestClearButton();
                    homePage.TestIntegersOnlyCheckbox(action);
                })
            }

        })
    })
    describe('Subtraction', () => {
        it.only("Test subtraction on every version of a calculator", () => {
            action = "Subtract";
            cy.visit(website)
            cy.get(actionDropDown).select(action)
            for (var i = 1; i <= 9; i++) {
                context(`Build ${i}`, () => {
                    cy.get(buildDropDown).select(i.toString());
                    homePage.checkIfFieldsEnabled(numberField1)
                    homePage.checkIfFieldsEnabled(numberField2)
                    homePage.checkIfFieldsEnabled(clearButton)
                    homePage.enterFieldsWith("-1", "-1", action)
                    homePage.checkAnswer('0')
                    homePage.enterFieldsWith("1", "1", action)
                    homePage.checkAnswer('0')
                    homePage.enterFieldsWith("Ding", "Dong", action)
                    homePage.checkAnswer('NaN')
                    homePage.enterFieldsWith("3006", "-300", action)
                    homePage.checkAnswer('3306')
                    homePage.enterFieldsWith("2147483647", "1000", action)
                    homePage.checkAnswer('2147482647')
                    homePage.checkTestClearButton();
                    homePage.TestIntegersOnlyCheckbox(action);
                })
            }

        })
    })
    describe('Multiply', () => {
        it.only("Test multiplication on every version of a calculator", () => {
            action = "Multiply";
            cy.visit(website)
            cy.get(actionDropDown).select(action)
            for (var i = 1; i <= 9; i++) {
                context(`Build ${i}`, () => {
                    cy.get(buildDropDown).select(i.toString());
                    homePage.checkIfFieldsEnabled(numberField1)
                    homePage.checkIfFieldsEnabled(numberField2)
                    homePage.checkIfFieldsEnabled(clearButton)
                    homePage.enterFieldsWith("-1", "-1", action)
                    homePage.checkAnswer('1')
                    homePage.enterFieldsWith("1", "1", action)
                    homePage.checkAnswer('1')
                    homePage.enterFieldsWith("Ding", "Dong", action)
                    homePage.checkAnswer('NaN')
                    homePage.enterFieldsWith("3006", "-300", action)
                    homePage.checkAnswer('-901800')
                    homePage.enterFieldsWith("2147483647", "1000", action)
                    homePage.checkAnswer('2147483647000')
                    homePage.checkTestClearButton();
                    homePage.TestIntegersOnlyCheckbox(action);
                })
            }

        })
    })
    describe('Divide', () => {
        it.only("Test division on every version of a calculator", () => {
            action = "Divide";
            cy.visit(website)
            cy.get(actionDropDown).select(action)
            for (var i = 1; i <= 9; i++) {
                context(`Build ${i}`, () => {
                    cy.get(buildDropDown).select(i.toString());
                    homePage.checkIfFieldsEnabled(numberField1)
                    homePage.checkIfFieldsEnabled(numberField2)
                    homePage.checkIfFieldsEnabled(clearButton)
                    homePage.enterFieldsWith("-1", "-1", action)
                    homePage.checkAnswer('1')
                    homePage.enterFieldsWith("1", "1", action)
                    homePage.checkAnswer('1')
                    homePage.enterFieldsWith("Ding", "Dong", action)
                    homePage.checkAnswer('NaN')
                    homePage.enterFieldsWith("3006", "-300", action)
                    homePage.checkAnswer('-10.02')
                    homePage.enterFieldsWith("2147483647", "1000", action)
                    homePage.checkAnswer('2147483.647')
                    homePage.checkTestClearButton();
                    homePage.TestIntegersOnlyCheckbox(action);
                })
            }

        })
    })
    describe('Concatenate', () => {
        it.only("Test concatenation on every version of a calculator", () => {
            action = "Concatenate";
            cy.visit(website)
            cy.get(actionDropDown).select(action)
            for (var i = 1; i <= 9; i++) {
                context(`Build ${i}`, () => {
                    cy.get(buildDropDown).select(i.toString());
                    homePage.checkIfFieldsEnabled(numberField1)
                    homePage.checkIfFieldsEnabled(numberField2)
                    homePage.checkIfFieldsEnabled(clearButton)
                    homePage.enterFieldsWith("-1", "-1", action)
                    homePage.checkAnswer('-1-1')
                    homePage.enterFieldsWith("1", "1", action)
                    homePage.checkAnswer('11')
                    homePage.enterFieldsWith("Ding", "Dong", action)
                    homePage.checkAnswer('DingDong')
                    homePage.enterFieldsWith("3006", "-300", action)
                    homePage.checkAnswer('3006-300')
                    homePage.enterFieldsWith("2147483647", "1000", action)
                    homePage.checkAnswer('21474836471000')
                    homePage.checkTestClearButton();
                    homePage.TestIntegersOnlyCheckbox(action);
                })
            }


        })
    })
})
