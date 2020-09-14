import { timeout } from 'async';
/// <reference types="cypress" />

Cypress.Commands.add("dragTo", { prevSubject: "element" }, (subject, targetEl) => {
    cy.wrap(subject).trigger("dragstart");
    cy.get(targetEl).trigger("drop");
  }
);
 
it('Select element', () => {
    cy.visit('https://www.enchambered.com/puzzles/escape-sacramento-landmark-puzzle-capital/game/');
    cy.get('.intro').click();
    cy.get('#postcard1').click();
    cy.get('#postcard2').click();
    cy.get('#postcard3').click();
    cy.get('#postcard4').click();
    cy.get('#tv').click();
    for(let n = 0; n < 4; n ++){
        cy.get('.dial1').click()
    }
    for(let n = 0; n < 5; n ++){
    cy.get('.dial2').click()
    }
    cy.get('.key3').click(); //c
    cy.get('.key1').click(); //a
    cy.get('.key9').click(); //p
    cy.get('.key6').click(); //i
    cy.get('.key2').click(); //t
    cy.get('.key7').click(); //a
    cy.get('.key8').click(); //l
    cy.get('#star1').dragTo('#holes');
    cy.get('#star1').trigger('mousedown', {which: 1})
    cy.get('#star1').dragTo('#holes').click();
    cy.get('#star2').trigger('mousedown', {which: 1})
    cy.get('#star2').dragTo('#holes').click();
    cy.get('#star3').trigger('mousedown', {which: 1})
    cy.get('#star3').dragTo('#holes').click();
    cy.get('#tvdial').trigger('mousedown', {which: 1})
    cy.get('#tvdial').dragTo('#tv').click();
    cy.get('#last_key').trigger('mousedown', {which: 1})
    cy.get('#last_key').dragTo('.capital_secret').click();
    cy.screenshot()
})