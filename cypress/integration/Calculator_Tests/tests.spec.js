import selectors from '../../Page objects/selectors.js'
/// <reference types="cypress" />

const BuildVersions = ['0','1','2','3','4','5','6','7','8','9']
const Operations = ['0','1','2','3','4']

var selector = new selectors

beforeEach('Executes  before each test', () =>{
    cy.visit('https://testsheepnz.github.io/BasicCalculator')
})

// it('Loads the calculator page', ()=>{
//     cy.contains("Basic Calculator")
// })

describe('tests every calculator build version buttons, forms, lists and checkboxes', () => {
    BuildVersions.forEach((version) => {

        // it('select version of calculator' + version, ()=>{
        //     selector.getBuildVersion().select(version)
        // })

        it('checks if all dropdowns, forms and buttons are visible in build version ' + version, ()=>{
            selector.getBuildVersion().select(version)
            selector.getBuildVersion().should('be.visible')
            selector.getNumber1Field().should('be.visible')
            selector.getNumber2Field().should('be.visible')
            selector.getOperations().should('be.visible')
            selector.getCalculateButton().should('be.visible')
            selector.getAnswerField().should('be.visible')
            selector.getIntegerSelect().should('be.visible')
            selector.getClearButton().should('be.visible')
        })

        it('checks if all buttons or checkboxes are enabled in build version ' + version, ()=>{
            selector.getBuildVersion().select(version)
            selector.getCalculateButton().should('be.enabled')
            selector.getIntegerSelect().should('not.be.disabled')
            selector.getClearButton().should('be.enabled')
        })
    })
})

describe('tests every calculator build version calculations', () => {
    BuildVersions.forEach((version) => {
        
        describe('tests every calculation operation of build version ' + version, () =>{
            Operations.forEach((operation) => {

                it('tests if error message apears when you try to calculate not only with numbers. Build: '+version+'; Operation: '+operation, ()=>{
                    selector.getBuildVersion().select(version)
                    selector.getOperations().select(operation)
                    selector.getNumber1Field().type('2.4"%1fQx')
                    selector.getCalculateButton().click()
                    cy.get('#errorMsgField').should('be.visible')
                })

                it('tests if clear button works. Build: '+version+'; Operation: '+operation, ()=>{
                    selector.getBuildVersion().select(version)
                    selector.getOperations().select(operation)
                    selector.getNumber1Field().type('2')
                    selector.getNumber2Field().type('1')
                    selector.getCalculateButton().click()
                    selector.getClearButton().click()
                    selector.getAnswerField().should('be.empty')
                })
            })
        })

        it('tests calculator build '+version+' and operation ADD, if integer checkbox works as expected', ()=>{
            selector.getBuildVersion().select(version)
            selector.getOperations().select('0')
            selector.getIntegerSelect().should('not.be.disabled')
            selector.getIntegerSelect().check()
            selector.getNumber1Field().type('2.4')
            selector.getNumber2Field().type('2.2')
            selector.getCalculateButton().click()
            selector.getAnswerField().should('have.value','4')
        })

        it('tests calculator build '+version+' and operation SUBTRACT, if integer checkbox works as expected', ()=>{
            selector.getBuildVersion().select(version)
            selector.getOperations().select('1')
            selector.getIntegerSelect().should('not.be.disabled')
            selector.getIntegerSelect().check()
            selector.getNumber1Field().type('2.4')
            selector.getNumber2Field().type('2.2')
            selector.getCalculateButton().click()
            selector.getAnswerField().should('have.value','0')
        })

        it('tests calculator build '+version+' and operation MULTIPLY, if integer checkbox works as expected', ()=>{
            selector.getBuildVersion().select(version)
            selector.getOperations().select('2')
            selector.getIntegerSelect().should('not.be.disabled')
            selector.getIntegerSelect().check()
            selector.getNumber1Field().type('2.4')
            selector.getNumber2Field().type('2.2')
            selector.getCalculateButton().click()
            selector.getAnswerField().should('have.value','5')
        })

        it('tests calculator build '+version+' and operation DIVIDE, if integer checkbox works as expected', ()=>{
            selector.getBuildVersion().select(version)
            selector.getOperations().select('3')
            selector.getIntegerSelect().should('not.be.disabled')
            selector.getIntegerSelect().check()
            selector.getNumber1Field().type('2.4')
            selector.getNumber2Field().type('2.2')
            selector.getCalculateButton().click()
            selector.getAnswerField().should('have.value','1')
        })
        // There could be similar tests to the last four, to check if calculator calculates correctly and concatenate operation tests.
        // Those tests will be below this comment (They don't have to be evaluated)

        // it('tests calculator build '+version+' and operation ADD calculation', ()=>{
        //     selector.getBuildVersion().select(version)
        //     selector.getOperations().select('0')
        //     selector.getIntegerSelect().uncheck()
        //     selector.getNumber1Field().type('2.4')
        //     selector.getNumber2Field().type('2.2')
        //     selector.getCalculateButton().click()
        //     selector.getAnswerField().should('have.value','4.6')
        // })

        // it('tests calculator build '+version+' and operation SUBTRACT calculation', ()=>{
        //     selector.getBuildVersion().select(version)
        //     selector.getOperations().select('1')
        //     selector.getIntegerSelect().uncheck()
        //     selector.getNumber1Field().type('2.4')
        //     selector.getNumber2Field().type('2.2')
        //     selector.getCalculateButton().click()
        //     selector.getAnswerField().should('have.value','0.19999999999999973')
        // })

        // it('tests calculator build '+version+' and operation MULTIPLY calculation', ()=>{
        //     selector.getBuildVersion().select(version)
        //     selector.getOperations().select('2')
        //     selector.getIntegerSelect().uncheck()
        //     selector.getNumber1Field().type('2.4')
        //     selector.getNumber2Field().type('2.2')
        //     selector.getCalculateButton().click()
        //     selector.getAnswerField().should('have.value','5.28')
        // })

        // it('tests calculator build '+version+' and operation DIVIDE calculation', ()=>{
        //     selector.getBuildVersion().select(version)
        //     selector.getOperations().select('3')
        //     selector.getIntegerSelect().uncheck()
        //     selector.getNumber1Field().type('2.4')
        //     selector.getNumber2Field().type('2.2')
        //     selector.getCalculateButton().click()
        //     selector.getAnswerField().should('have.value','1.0909090909090908')
        // })

        // it('tests calculator build '+version+' and operation CONCATENATE calculation', ()=>{
        //     selector.getBuildVersion().select(version)
        //     selector.getOperations().select('4')
        //     selector.getIntegerSelect().uncheck()
        //     selector.getNumber1Field().type('2.4')
        //     selector.getNumber2Field().type('2.2')
        //     selector.getCalculateButton().click()
        //     selector.getAnswerField().should('have.value','2.42.2')
        // })
    })
})