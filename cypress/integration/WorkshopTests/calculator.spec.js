/// <reference types="cypress" />

import Calculator from "../../page_objects/calculator/calculator.js";

var calculator = new Calculator();
const builds = Cypress._.range(1, 10).map(String);
builds.unshift('Prototype');

beforeEach('Visit site before each test', () => {
    cy.visit('https://testsheepnz.github.io/BasicCalculator');
});

builds.forEach((build) => {
    describe(`Build ${build}`, () => {
        beforeEach('Select build before each test', () =>
            calculator.selectBuild(build));

        describe('Number addition', () => {
            it(`can add -1.5 + 2.6`, () =>
                calculator.add(-1.5, 2.6));

            it(`can add -1.5 + 2.6 with integers only`, () =>
                calculator.add(-1.5, 2.6, true));
        });

        describe('Number subtraction', () => {
            it.only(`can subtract 2.5 - 5`, () =>
                calculator.subtract(2.5, 5));

            it.only(`can subtract 2.5 - 5 with integers only`, () =>
                calculator.subtract(2.5, 5, true));
        });

        describe('Number multiplication', () => {
            it(`can multiply 2.5 * 5`, () =>
                calculator.multiply(2.5, 5));

            it(`can multiply 2.5 * 5  with integers only`, () =>
                calculator.multiply(2.5, 5, true));
        });

        describe('Number division', () => {
            it(`can divide 2.5 / 5`, () =>
                calculator.divide(2.5, 5));

            it(`can divide 2.5 / 5  with integers only`, () =>
                calculator.divide(2.5, 5, true));
        });

        describe('Input validation', () => {
            it.only(`validates first input`, () =>
                calculator.validateInput('asd', 2));

            it.only(`validates second input`, () =>
                calculator.validateInput(2, 'asd'));
        });

        describe('Clear button', () => {
            it.only(`clears answer`, () => {
                calculator.getClearButton().should('not.be.disabled');

                calculator.getAnswer(1, 1);
                calculator.getAnswerField().invoke('val').should('not.be.empty');
                calculator.getClearButton().click();
                calculator.getAnswerField().invoke('val').should('be.empty');
            });
        });

        describe('String concatenation', () => {
            it.only(`can concatenate strings 'qwe' and 'asd'`, () =>
                calculator.concatenate('qwe', 'asd'));
        });

        describe('Division by zero', () => {
            it.only(`can handle division by zero error`, () =>
                calculator.divide(0, 0));
        });
    });
});
