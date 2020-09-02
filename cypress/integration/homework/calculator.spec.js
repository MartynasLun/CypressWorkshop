/// <reference types="cypress" />
//import Homepage from '../../page_objects/homepage/homepage2.js';
import Methods from "../../page_objects/methods.js";

var method = new Methods();
var builds = ['Prototype', '1', '2', '3', '4', '5', '6', '7', '8', '9']

beforeEach('Loads the testsheepnz.github.io page ', () => {
    cy.visit('https://testsheepnz.github.io/BasicCalculator');
});

builds.forEach((build) => {
    describe(`Testing ${build} build`, () => {
        beforeEach('Selects build', () =>
        method.selectBuild(build));

        describe('Input validation', () => {
            it.only(`1 input`, () =>
            method.validateInput('test', 7.5));
            it.only(`2 input`, () =>
            method.validateInput(7.5, 'test'));
        });

        describe('Testing add operation', () => {
            it.only(`0 + 7,5`, () =>
            method.addOperation(0,7.5));
            it.only(`0 +7,5 and selects "integers only"`, () =>
            method.addOperation(0,7.5, true));
        });        
     
        describe('Testing subtract operation', () => {
            it.only(`0 - 7.5`, () =>
            method.subtractOperation(0,7.5));
            it.only(`0 - 7.5 and selects "integers only"`, () =>
            method.subtractOperation(0,7.5, true));
        });

        describe('Testing multiply operation', () => {
            it.only(`0 * 7.5`, () =>
            method.multiplyOperation(0,7.5));
            it.only(`0 * 7.5 and selects "integers only"`, () =>
            method.multiplyOperation(0,7.5, true));
        });

        describe('Testing devision operation', () => {
            it.only(`devision by zero is not possible`, () =>
            method.divideOperation(7.5, 0));
        });
        describe('Testing concatenate operation', () => {
            it(`my + test`, () =>
            method.concatenateOperation('my', 'test'));
        });



    });
});
