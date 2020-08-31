/// <reference types="cypress" />

import Calculator from '../../calculator_page_objects/calculator_obj.js'
var calc = new Calculator()

// Array for builts
let builds_array = ['Prototype', '1','2','3','4','5','6','7','8','9']

// function everytime generates random numbers
function randomIntsToTest()
{
    return Math.floor(Math.random() * (100- (-100) +1))
}


beforeEach('Executes before each test', () =>
{
    cy.visit('https://testsheepnz.github.io/BasicCalculator')
})


it("Adds numbers correctly", () => {
    calc.getBuild().select('1')
    calc.getFirstNr().type('25')
    calc.getSeconstNr().type('25')
    calc.getOperation().select('Add')
    calc.getCalculateButton().click() 
}) 

it("Subtracts numbers correctly", () =>{
    calc.getBuild().select('1')
    calc.getFirstNr().type('25')
    calc.getSeconstNr().type('25')
    calc.getOperation().select('Subtract')
    calc.getCalculateButton().click()
})


it("Can choose built", () => {
    for(let i = 0; i < builds_array.length; i++)
    {
        calc.getBuild().select(builds_array[i])
        cy.wait(3000)
    }
})


for (let i = 0; i < builds_array.length; i++) 
{
    it.only("Adds numbers correctly in built nr. " + i, () => {
        calc.getBuild().select(builds_array[i])
        let num1 = randomIntsToTest(), num2 = randomIntsToTest()
        calc.getFirstNr().type(num1.toString())
        calc.getSeconstNr().type(num2.toString())
        calc.getOperation().select('Add')
        calc.getCalculateButton().click()
        calc.getAnswer().invoke('val').then(text => expect(text).to.eq((num1 + num2).toString()))
        calc.getFirstNr().clear()
        calc.getSeconstNr().clear()
    })
}

for (let i = 0; i < builds_array.length; i++) 
{
    it.only("Subtracts numbers correctly in built nr. " + i, () => {
        calc.getBuild().select(builds_array[i])
        let num1 = randomIntsToTest(), num2 = randomIntsToTest()
        calc.getFirstNr().type(num1.toString())
        calc.getSeconstNr().type(num2.toString())
        calc.getOperation().select('Subtract')
        calc.getCalculateButton().click()
        calc.getAnswer().invoke('val').then(text => expect(text).to.eq((num1 - num2).toString()))
        calc.getFirstNr().clear()
        calc.getSeconstNr().clear()
    })
}

for (let i = 0; i < builds_array.length; i++) 
{
    it.only("Multiply numbers correctly in built nr. " + i, () => {
        calc.getBuild().select(builds_array[i])
        let num1 = randomIntsToTest(), num2 = randomIntsToTest()
        calc.getFirstNr().type(num1.toString())
        calc.getSeconstNr().type(num2.toString())
        calc.getOperation().select('Multiply')
        calc.getCalculateButton().click()
        calc.getAnswer().invoke('val').then(text => expect(text).to.eq((num1 * num2).toString()))
        calc.getFirstNr().clear()
        calc.getSeconstNr().clear()
    })
}

for (let i = 0; i < builds_array.length; i++) 
{
    it.only("Conc. letters correctly in built nr. " + i, () => {
        calc.getBuild().select(builds_array[i])
        let num1 = 'Abc', num2 = 'def'
        calc.getFirstNr().type(num1.toString())
        calc.getSeconstNr().type(num2.toString())
        calc.getOperation().select('Concatenate')
        calc.getCalculateButton().click()
        calc.getAnswer().invoke('val').then(text => expect(text).to.eq((num1 + num2).toString()))
        calc.getFirstNr().clear()
        calc.getSeconstNr().clear()
    })
}


for (let i = 0; i < builds_array.length; i++) 
{
    it.only("Divide numbers correctly in built nr. " + i, () => {
        calc.getBuild().select(builds_array[i])
        let num1 = randomIntsToTest(), num2 = randomIntsToTest()
        calc.getFirstNr().type(num1.toString())
        calc.getSeconstNr().type(num2.toString())
        calc.getOperation().select('Divide')
        calc.getCalculateButton().click()
        calc.getAnswer().invoke('val').then(text => expect(text).to.eq((num1 / num2).toString()))
        calc.getFirstNr().clear()
        calc.getSeconstNr().clear()
    })
}











