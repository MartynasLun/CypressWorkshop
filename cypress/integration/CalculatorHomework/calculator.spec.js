import Homepage from '../../calculator_page_objects/homepage/homepage.js'
/// <reference types="cypress" />

var homepage = new Homepage

beforeEach("Executes before each test", ()=> {
    cy.visit("https://testsheepnz.github.io/BasicCalculator")
})

it("Check if there's heading that contains 'Basic Calculator' text", ()=>{
    cy.get(".intro-heading").contains("Basic Calculator", { matchCase: false })
})

var build = ['Prototype','1','2','3','4','5','6','7','8','9']

build.forEach((item) => {
    describe(`Testing ${item} build`, () => {
it("After reload all input fields should be empty", ()=>{
    homepage.getnumber1field().clear()
    homepage.getnumber1field().type(1)
    homepage.getnumber2field().clear()
    homepage.getnumber2field().type(2)
    cy.get("#selectOperationDropdown").select("Add")
    homepage.ClickClaculateButton()
    cy.reload()
    cy.get("#numberAnswerField").should('have.value', '')
    homepage.getnumber1field().should('have.value', '')
    homepage.getnumber2field().should('have.value', '')
})

it("Test if all required fields are visible", ()=>{
    cy.get("#selectBuild").select(item)
    cy.get("#selectBuild").should("be.visible")
    homepage.getnumber1field().should("be.visible")
    homepage.getnumber2field().should("be.visible")
    cy.get("#selectOperationDropdown").should("be.visible")
    cy.get("#calculateButton").should("be.visible")
    cy.get("#numberAnswerField").should("be.visible")
    cy.get("#integerSelect").should("be.visible")
    cy.get("#clearButton").should("be.visible")
})

it("Enter string in both number fields and test 'add' operation", ()=>{
    cy.get("#selectBuild").select(item)
    homepage.getnumber1field().clear()
    homepage.getnumber1field().clear().type("one")
    homepage.getnumber2field().clear()
    homepage.getnumber2field().type("two")
    cy.get("#selectOperationDropdown").select("Add")
    homepage.ClickClaculateButton()
    cy.get("#errorMsgField").contains('Number 1 is not a number')
})

it("Enter numeric value in first number field and string in second number field, test 'add' operation", ()=>{
    cy.get("#selectBuild").select(item)
    homepage.getnumber1field().clear()
    homepage.getnumber1field().clear().type(1)
    homepage.getnumber2field().clear()
    homepage.getnumber2field().type("two")
    cy.get("#selectOperationDropdown").select("Add")
    homepage.ClickClaculateButton()
    cy.get("#errorMsgField").contains('Number 2 is not a number')
})

it.only("Enter both numbers together with arithmetic operators and test 'add' operation", ()=>{
    cy.get("#selectBuild").select(item)
    homepage.getnumber1field().clear()
    homepage.getnumber1field().clear().type(1+)
    homepage.getnumber2field().clear()
    homepage.getnumber2field().type(*2)
    cy.get("#selectOperationDropdown").select("Add")
    homepage.ClickClaculateButton()
    cy.get("#errorMsgField").contains('Number 1 is not a number')
})

it("Enter integer numbers and test 'add' operation", ()=>{
    cy.get("#selectBuild").select(item)
    homepage.getnumber1field().clear()
    homepage.getnumber1field().clear().type(1)
    homepage.getnumber2field().clear()
    homepage.getnumber2field().type(2)
    cy.get("#selectOperationDropdown").select("Add")
    homepage.ClickClaculateButton()
    cy.get("#numberAnswerField").should('have.value', 3)
})

it("Enter negative integer numbers and test 'add' operation", ()=>{
    cy.get("#selectBuild").select(item)
    homepage.getnumber1field().clear()
    homepage.getnumber1field().clear().type(-1)
    homepage.getnumber2field().clear()
    homepage.getnumber2field().type(-2)
    cy.get("#selectOperationDropdown").select("Add")
    homepage.ClickClaculateButton()
    cy.get("#numberAnswerField").should('have.value', -3)
})

it("Enter two integers, one negative, one positive and test 'add' operation", ()=>{
    cy.get("#selectBuild").select(item)
    homepage.getnumber1field().clear()
    homepage.getnumber1field().clear().type(-1)
    homepage.getnumber2field().clear()
    homepage.getnumber2field().type(2)
    cy.get("#selectOperationDropdown").select("Add")
    homepage.ClickClaculateButton()
    cy.get("#numberAnswerField").should('have.value', 1)
})

it("Enter integer numbers and test 'Subtract' operation", ()=>{
    cy.get("#selectBuild").select(item)
    homepage.getnumber1field().clear()
    homepage.getnumber1field().clear().type(3)
    homepage.getnumber2field().clear()
    homepage.getnumber2field().type(2)
    cy.get("#selectOperationDropdown").select("Subtract")
    homepage.ClickClaculateButton()
    cy.get("#numberAnswerField").should('have.value', 1)
})

it("Enter negative integer numbers and test 'Subtract' operation", ()=>{
    cy.get("#selectBuild").select(item)
    homepage.getnumber1field().clear()
    homepage.getnumber1field().clear().type(-3)
    homepage.getnumber2field().clear()
    homepage.getnumber2field().type(2)
    cy.get("#selectOperationDropdown").select("Subtract")
    homepage.ClickClaculateButton()
    cy.get("#numberAnswerField").should('have.value', -5)
})

it("Enter two integers, one negative, one positive and test 'Subtract' operation", ()=>{
    cy.get("#selectBuild").select(item)
    homepage.getnumber1field().clear()
    homepage.getnumber1field().clear().type(-3)
    homepage.getnumber2field().clear()
    homepage.getnumber2field().type(-2)
    cy.get("#selectOperationDropdown").select("Subtract")
    homepage.ClickClaculateButton()
    cy.get("#numberAnswerField").should('have.value', -1)
})

it("Enter integer numbers and test 'Multiply' operation", ()=>{
    cy.get("#selectBuild").select(item)
    homepage.getnumber1field().clear()
    homepage.getnumber1field().clear().type(3)
    homepage.getnumber2field().clear()
    homepage.getnumber2field().type(2)
    cy.get("#selectOperationDropdown").select("Multiply")
    homepage.ClickClaculateButton()
    cy.get("#numberAnswerField").should('have.value', 6)
})

it("Enter negative integer numbers and test 'Multiply' operation", ()=>{
    cy.get("#selectBuild").select(item)
    homepage.getnumber1field().clear()
    homepage.getnumber1field().clear().type(-3)
    homepage.getnumber2field().clear()
    homepage.getnumber2field().type(2)
    cy.get("#selectOperationDropdown").select("Multiply")
    homepage.ClickClaculateButton()
    cy.get("#numberAnswerField").should('have.value', -6)
})

it("Enter two integers, one negative, one positive and test 'Multiply' operation", ()=>{
    cy.get("#selectBuild").select(item)
    homepage.getnumber1field().clear()
    homepage.getnumber1field().clear().type(-3)
    homepage.getnumber2field().clear()
    homepage.getnumber2field().type(-2)
    cy.get("#selectOperationDropdown").select("Multiply")
    homepage.ClickClaculateButton()
    cy.get("#numberAnswerField").should('have.value', 6)
})

it("Enter integer numbers and test 'Divide' operation", ()=>{
    cy.get("#selectBuild").select(item)
    homepage.getnumber1field().clear()
    homepage.getnumber1field().clear().type(3)
    homepage.getnumber2field().clear()
    homepage.getnumber2field().type(2)
    cy.get("#selectOperationDropdown").select("Divide")
    homepage.ClickClaculateButton()
    cy.get("#numberAnswerField").should('have.value', 1.5)
})

it("Enter negative integer numbers and test 'Divide' operation", ()=>{
    cy.get("#selectBuild").select(item)
    homepage.getnumber1field().clear()
    homepage.getnumber1field().clear().type(-3)
    homepage.getnumber2field().clear()
    homepage.getnumber2field().type(2)
    cy.get("#selectOperationDropdown").select("Divide")
    homepage.ClickClaculateButton()
    cy.get("#numberAnswerField").should('have.value', -1.5)
})

it("Enter two integers, one negative, one positive and test 'Divide' operation", ()=>{
    cy.get("#selectBuild").select(item)
    homepage.getnumber1field().clear()
    homepage.getnumber1field().clear().type(-3)
    homepage.getnumber2field().clear()
    homepage.getnumber2field().type(-2)
    cy.get("#selectOperationDropdown").select("Divide")
    homepage.ClickClaculateButton()
    cy.get("#numberAnswerField").should('have.value', 1.5)
})

it("Enter 0 divide it by integer number and test 'Divide' operation", ()=>{
    cy.get("#selectBuild").select(item)
    homepage.getnumber1field().clear()
    homepage.getnumber1field().clear().type(0)
    homepage.getnumber2field().clear()
    homepage.getnumber2field().type(2)
    cy.get("#selectOperationDropdown").select("Divide")
    homepage.ClickClaculateButton()
    cy.get("#numberAnswerField").should('have.value', 0)
})

it("Enter integer number and divide by 0 by using 'Divide' operation", ()=>{
    cy.get("#selectBuild").select(item)
    homepage.getnumber1field().clear()
    homepage.getnumber1field().clear().type(3)
    homepage.getnumber2field().clear()
    homepage.getnumber2field().type(0)
    cy.get("#selectOperationDropdown").select("Divide")
    homepage.ClickClaculateButton()
    cy.get("#errorMsgField").contains('Divide by zero error!')
})

    })
})