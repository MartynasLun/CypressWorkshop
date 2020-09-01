import homepage from '../../integration/homework/varhomepage.spec'
const localhomepage = new homepage();

// <reference types="cypress" />

const maxInputValue = 9999999999
const minInputValue = -999999999
const zeroInputValue = 0
const digitInputValue = 45
const textInputValue = 'aaaaaaaaaa'
const decimalInputValue = 1.2


const valuesArray = [maxInputValue,minInputValue,zeroInputValue, digitInputValue];



beforeEach (() => {
    cy.visit ('/BasicCalculator')
  })

describe('Should test on different builds', () => {
    ['0','1','2','3','4','5','6','7','8','9'].forEach((buildas) => {
        
//Tests, that check visability of fields
        it.only('Checks if all fields and buttons are enabled. While build is set to: ' + buildas, ()=>{
            localhomepage.getbuiltVersion().select(buildas)
            localhomepage.getbuiltVersion().should('not.be.disabled')
            localhomepage.getfirstNumberField().should('not.be.disabled')
            localhomepage.getsecondNumberField().should('not.be.disabled')
            localhomepage.getoperationField().should('not.be.disabled')
            localhomepage.getintegersSelector().should('not.be.disabled')
            localhomepage.getcalculateButton().should('not.be.disabled')
            localhomepage.getanswerField().should('not.be.disabled')
            localhomepage.getclearButton().should ('not.be.disabled')
        })
//Tests summing up with different variables
        //Tests summing up valid input values
        
    // describe('Should test summing up with valid input values.While build is set to: ' + buildas , () => {
        valuesArray.forEach((validInputValue) => {
            it.only('Sums ' + validInputValue + ' with ' + validInputValue + '. While build is set to: ' + buildas, ()=>{
                 localhomepage.getbuiltVersion().select(buildas)
                    localhomepage.getfirstNumberField().type(validInputValue)
                    localhomepage.getsecondNumberField().type(validInputValue)
                    localhomepage.getoperationField().select('0')
                    localhomepage.getcalculateButton().click()
                    localhomepage.getanswerField().should('have.value', validInputValue+validInputValue)
                 })
            }) 
        //  })
        //Tests summing up with text input values
     
        it('It checks that answer field stays empty, when summing up with invalid first number field. While build is set to: ' + buildas, ()=>{
            localhomepage.getbuiltVersion().select(buildas)
            localhomepage.getfirstNumberField().type(textInputValue)
            localhomepage.getsecondNumberField().type(digitInputValue)
            localhomepage.getoperationField().select('0')
            localhomepage.getcalculateButton().click()
            localhomepage.getanswerField().should('have.value', "")  
        })

        it('It checks that error field provides corect message, when summing up with invalid first number field. While build is set to: ' + buildas, ()=>{
            localhomepage.getbuiltVersion().select(buildas)
            localhomepage.getfirstNumberField().type(textInputValue)
            localhomepage.getsecondNumberField().type(digitInputValue)
            localhomepage.getoperationField().select('0')
            localhomepage.getcalculateButton().click()
            cy.get('#errorMsgField').contains('Number 1 is not a number')
        
        })

        it('It checks that answer field stays empty, when summing up with invalid second number field. While build is set to: ' + buildas, ()=>{
            localhomepage.getbuiltVersion().select(buildas)
            localhomepage.getfirstNumberField().type(digitInputValue)
            localhomepage.getsecondNumberField().type(textInputValue)
            localhomepage.getoperationField().select('0')
            localhomepage.getcalculateButton().click()
            localhomepage.getanswerField().should('have.value', "")  
        })

        it('It checks that error field provides corect message, when summing up with invalid first number field. While build is set to: ' + buildas, ()=>{
            localhomepage.getbuiltVersion().select(buildas)
            localhomepage.getfirstNumberField().type(digitInputValue)
            localhomepage.getsecondNumberField().type(textInputValue)
            localhomepage.getoperationField().select('0')
            localhomepage.getcalculateButton().click()
            cy.get('#errorMsgField').contains('Number 2 is not a number')
        
        })

        it('It checks that answer field stays empty, when summing up with both input fields invalid. While build is set to: ' + buildas, ()=>{
            localhomepage.getbuiltVersion().select(buildas)
            localhomepage.getfirstNumberField().type(textInputValue)
            localhomepage.getsecondNumberField().type(textInputValue)
            localhomepage.getoperationField().select('0')
            localhomepage.getcalculateButton().click()
            localhomepage.getanswerField().should('have.value', "")  
        })

        it('It checks that error field provides corect message, when summing up with both input fields invalidd. While build is set to: ' + buildas, ()=>{
            localhomepage.getbuiltVersion().select(buildas)
            localhomepage.getfirstNumberField().type(textInputValue)
            localhomepage.getsecondNumberField().type(textInputValue)
            localhomepage.getoperationField().select('0')
            localhomepage.getcalculateButton().click()
            cy.get('#errorMsgField').contains('Number 1 is not a number')
        
        })

//  //Tests that check deduction with different variable
        //Tests deducting with valid input values
        
        describe('Should test deducting with valid input values.While build is set to: ' + buildas , () => {
            valuesArray.forEach((validInputValue) => {
                it('Deducts ' + validInputValue + ' from ' + validInputValue, ()=>{
                    localhomepage.getbuiltVersion().select(buildas)
                    localhomepage.getfirstNumberField().type(validInputValue)
                    localhomepage.getsecondNumberField().type(validInputValue)
                    localhomepage.getoperationField().select('1')
                    localhomepage.getcalculateButton().click()
                    localhomepage.getanswerField().should('have.value', validInputValue-validInputValue)
                })
            }) 
        })
        //Tests deducting with text input values
     
        it.only('It checks that answer field stays empty, when deducting with invalid first number input field. While build is set to: ' + buildas, ()=>{
            localhomepage.getbuiltVersion().select(buildas)
            localhomepage.getfirstNumberField().type(textInputValue)
            localhomepage.getsecondNumberField().type(digitInputValue)
            localhomepage.getoperationField().select('1')
            localhomepage.getcalculateButton().click()
            localhomepage.getanswerField().should('have.value', '')  
        })

        it('It checks that error field provides corect message, when deducting with invalid first number input field. While build is set to: ' + buildas, ()=>{
            localhomepage.getbuiltVersion().select(buildas)
            localhomepage.getfirstNumberField().type(textInputValue)
            localhomepage.getsecondNumberField().type(digitInputValue)
            localhomepage.getoperationField().select('1')
            localhomepage.getcalculateButton().click()
            cy.get('#errorMsgField').contains('Number 1 is not a number')
        
        })

        it('It checks that answer field stays empty, when deducting with invalid second number input field. While build is set to: ' + buildas, ()=>{
            localhomepage.getbuiltVersion().select(buildas)
            localhomepage.getfirstNumberField().type(digitInputValue)
            localhomepage.getsecondNumberField().type(textInputValue)
            localhomepage.getoperationField().select('1')
            localhomepage.getcalculateButton().click()
            localhomepage.getanswerField().should('have.value', "")  
        })

        it('It checks that error field provides corect message, when deducting with invalid second number input field. While build is set to: ' + buildas, ()=>{
            localhomepage.getbuiltVersion().select(buildas)
            localhomepage.getfirstNumberField().type(digitInputValue)
            localhomepage.getsecondNumberField().type(textInputValue)
            localhomepage.getoperationField().select('1')
            localhomepage.getcalculateButton().click()
            cy.get('#errorMsgField').contains('Number 2 is not a number')
        
        })

        it('It checks that answer field stays empty, when deducting with both input fields invalid. While build is set to: ' + buildas, ()=>{
            localhomepage.getbuiltVersion().select(buildas)
            localhomepage.getfirstNumberField().type(textInputValue)
            localhomepage.getsecondNumberField().type(textInputValue)
            localhomepage.getoperationField().select('1')
            localhomepage.getcalculateButton().click()
            localhomepage.getanswerField().should('have.value', "")  
        })

        it('It checks that error field provides corect message, when deducting with both input fields invalid. While build is set to: ' + buildas, ()=>{
            localhomepage.getbuiltVersion().select(buildas)
            localhomepage.getfirstNumberField().type(textInputValue)
            localhomepage.getsecondNumberField().type(textInputValue)
            localhomepage.getoperationField().select('1')
            localhomepage.getcalculateButton().click()
            cy.get('#errorMsgField').contains('Number 1 is not a number')
        
        })

        describe('Should test multiplying with valid input values.While build is set to: ' + buildas , () => {
            valuesArray.forEach((validInputValue) => {
                it('Multiplies ' + validInputValue + ' with ' + validInputValue, ()=>{
                    localhomepage.getbuiltVersion().select(buildas)
                    localhomepage.getfirstNumberField().type(validInputValue)
                    localhomepage.getsecondNumberField().type(validInputValue)
                    localhomepage.getoperationField().select('2')
                    localhomepage.getcalculateButton().click()
                    localhomepage.getanswerField().should('have.value', validInputValue*validInputValue)
                })
            })
        }) 
        it.only('Checks error message when dividing ' + digitInputValue + ' by ' + zeroInputValue + '. While build is set to: ' + buildas, ()=>{
            localhomepage.getbuiltVersion().select(buildas)
            localhomepage.getfirstNumberField().type( digitInputValue)
            localhomepage.getsecondNumberField().type(zeroInputValue)
            localhomepage.getoperationField().select('3')
            localhomepage.getcalculateButton().click()
            localhomepage.geterrorMessageField().contains('Divide by zero error!')
            
        })

 

        it.only('It checks rounding up, when summing up ' + decimalInputValue + ' with ' + decimalInputValue + ' . While build is set to: ' + buildas, ()=>{
            localhomepage.getbuiltVersion().select(buildas)
            localhomepage.getfirstNumberField().type(decimalInputValue)
            localhomepage.getsecondNumberField().type(decimalInputValue)
            localhomepage.getoperationField().select('0')
            localhomepage.getcalculateButton().click()
            localhomepage.getintegersSelector().click()
            localhomepage.getanswerField().should('have.value', Math.round(decimalInputValue+decimalInputValue))
        })
    })
})

