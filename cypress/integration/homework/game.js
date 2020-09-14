import { timeout } from 'async';
/// <reference types="cypress" />

it('Game', () => {
    cy.visit('http://jis.robobeau.com/');
    cy.wait(1000);
    cy.get('body', {force: true})
    .type('{uparrow}{rightarrow}{rightarrow}')
})