import Homepage from '../../page-objects/homepage.js'
import { timeout } from 'async';
/// <reference types="cypress" />

var homepage = new Homepage();

beforeEach('Executes before each test', () => {
    cy.visit('/BasicCalculator');
})

let selectBuild = ['Prototype', 1, 2, 3, 4, 5, 6, 7, 8, 9],

// 1 build add

it('1 build add calculation failure', () => {
    for(let i = 0, i <= selectBuild, i++);
    homepage.getSelectBuild().select(selectBuild[i]);
    homepage.getNumber1Field().type(3);
    homepage.getNumber2Field().type(-5);
    homepage.clickCalculateButton();
    homepage.checkNumberAnswerField().should('have.value', -2);
})

it('1 build add calculation success', () => {
    homepage.getSelectBuild().select('1').should('have.value', '1');
    homepage.getNumber1Field().type(3);
    homepage.getNumber2Field().type(5);
    homepage.clickCalculateButton();
    homepage.checkNumberAnswerField().should('have.value', 8);
})

it('1 build add calculation null', () => {
    homepage.getSelectBuild().select('1').should('have.value', '1');
    homepage.clickCalculateButton();
    homepage.checkNumberAnswerField().should('have.value', 0);;
})

it('1 build add calculation string', () => {
    homepage.getSelectBuild().select('1').should('have.value', '1');
    homepage.getNumber1Field().type('qwe');
    homepage.getNumber2Field().type('asd');
    homepage.clickCalculateButton();
    homepage.checkNumberAnswerField().should('have.value', 'NaN');
})

it('1 build add calculation nubers with comma', () => {
    homepage.getSelectBuild().select('1').should('have.value', '1');
    homepage.getNumber1Field().type('25.4');
    homepage.getNumber2Field().type('-13.8');
    homepage.clickCalculateButton();
    homepage.checkNumberAnswerField().should('have.value', 11.6); //faile
})


// 2 build add all tests failed

it.only('2 build add calculation failure', () => {
    homepage.getSelectBuild().select('2').should('have.value', '2');
    homepage.getNumber1Field().type(3);
    homepage.getNumber2Field().type(-5);
    homepage.clickCalculateButton();
    homepage.checkNumberAnswerField().should('have.value', -2);
})

it.only('2 build add calculation success', () => {
    homepage.getSelectBuild().select('2').should('have.value', '2');
    homepage.getNumber1Field().type(3);
    homepage.getNumber2Field().type(5);
    homepage.clickCalculateButton();
    homepage.checkNumberAnswerField().should('have.value', 8);
})

it.only('2 build add calculation null', () => {
    homepage.getSelectBuild().select('2').should('have.value', '2');
    homepage.clickCalculateButton();
    homepage.checkNumberAnswerField().should('have.value', 0);
})

it.only('2 build add calculation string', () => {
    homepage.getSelectBuild().select('2').should('have.value', '2');
    homepage.getNumber1Field().type('qwe');
    homepage.getNumber2Field().type('asd');
    homepage.clickCalculateButton();
    homepage.checkNumberAnswerField().should('have.value', 'NaN');
})

it.only('2 build add calculation nubers with comma', () => {
    homepage.getSelectBuild().select('2').should('have.value', '2');
    homepage.getNumber1Field().type('25.4');
    homepage.getNumber2Field().type('-13.8');
    homepage.clickCalculateButton();
    homepage.checkNumberAnswerField().should('have.value', 11.6);
})