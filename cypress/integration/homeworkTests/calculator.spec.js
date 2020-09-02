import Calculator from '../../page_objects/home_page/calculator_obj.js'
/// <reference types="cypress" />

var calculator = new Calculator()

before("Visit URL", () => {
    cy.visit("https://testsheepnz.github.io/BasicCalculator")
})

beforeEach("Clear all fields", () => {
    calculator.getFirstNumber().clear()
    calculator.getSecondNumber().clear()

    if(calculator.getCheckBoxForIntegersOnly().should('have.be.visible') && calculator.getCheckBoxForIntegersOnly().should('have.be.enabled')){
        calculator.getCheckBoxForIntegersOnly().uncheck()
    }
})

describe("Tests main calculator functions with different build versions", () => {
    //Commented, because in thoose builds some elements are missing, then actions in beforeEach fail (we can see the issue why it fails)
    //and stop running
    [0,1,2,3,/*4,*/5,6,7,8 /*,9*/].forEach((buildVersion) => {

        //Tests for 'Add' function ----------------------------------------------------------------
        it("Add two integers", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getFirstNumber().type(1)
            calculator.getSecondNumber().type(15)
            calculator.getCalculateButton().click()
            calculator.getAnswer().should('have.value', 16)
        })

        it("Add integer with letter", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getFirstNumber().type(1)
            calculator.getSecondNumber().type('A')
            calculator.getCalculateButton().click()
            calculator.getErrorMsg().contains('Number 2 is not a number')
        })

        it("Add two letters", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getFirstNumber().type('D')
            calculator.getSecondNumber().type('A')
            calculator.getCalculateButton().click()
            calculator.getErrorMsg().contains('Number 1 is not a number')
        })

        it.only("Add symbol with number", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getFirstNumber().type('+')
            calculator.getSecondNumber().type(5)
            calculator.getCalculateButton().click()
            calculator.getErrorMsg().contains('Number 1 is not a number')
        })

        it("Add two empty fields", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getCalculateButton().click()
            calculator.getAnswer().should('have.value', 0)
        })

        //Failed on 'PROTOTYPE' with specific decimal numbers
        it.only("Add two decimal numbers", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getFirstNumber().type(2.8)
            calculator.getSecondNumber().type(3.9)
            calculator.getCalculateButton().click()
            calculator.getAnswer().should('have.value', 6.7)
        })

        it("Add two decimal numbers + selected just integers", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getFirstNumber().type(2.45)
            calculator.getSecondNumber().type(0.15)
            calculator.getCheckBoxForIntegersOnly().click()
            calculator.getCalculateButton().click()
            calculator.getAnswer().should('have.value', 2)
        })

        it("Add two decimal numbers + selected just integers + the fraction forms an integer", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getFirstNumber().type(2.5)
            calculator.getSecondNumber().type(0.5)
            calculator.getCheckBoxForIntegersOnly().click()
            calculator.getCalculateButton().click()
            calculator.getAnswer().should('have.value', 3)
        })

        it("Add decimal with integer + selected just integers", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getFirstNumber().type(2.9)
            calculator.getSecondNumber().type(2)
            calculator.getCheckBoxForIntegersOnly().click()
            calculator.getCalculateButton().click()
            calculator.getAnswer().should('have.value', 4)
        })

        it("Add decimal with symbol + selected just integers", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getFirstNumber().type(2.9)
            calculator.getSecondNumber().type('/')
            calculator.getCheckBoxForIntegersOnly().click()
            calculator.getCalculateButton().click()
            calculator.getErrorMsg().contains('Number 2 is not a number')
        })

        it("Add two integers + selected just integers", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getFirstNumber().type(2)
            calculator.getSecondNumber().type(150)
            calculator.getCheckBoxForIntegersOnly().click()
            calculator.getCalculateButton().click()
            calculator.getAnswer().should('have.value', 152)
        })

        it("Add two integers of maximum length + selected just integers", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getFirstNumber().type(9999999999)
            calculator.getSecondNumber().type(9999999999)
            calculator.getCheckBoxForIntegersOnly().click()
            calculator.getCalculateButton().click()
            calculator.getAnswer().should('have.value', 19999999998)
        })

        it("Add two decimals of maximum length + selected just integers", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getFirstNumber().type(9999999.99)
            calculator.getSecondNumber().type(9999999.99)
            calculator.getCheckBoxForIntegersOnly().click()
            calculator.getCalculateButton().click()
            calculator.getAnswer().should('have.value', 19999999)
        })

        it("Add empty field with decimal + selected just integers", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getSecondNumber().type(9999999.99)
            calculator.getCheckBoxForIntegersOnly().click()
            calculator.getCalculateButton().click()
            calculator.getAnswer().should('have.value', 9999999)
        })

        it("Add empty field with decimal", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getFirstNumber().type(9999999.99)
            calculator.getCalculateButton().click()
            calculator.getAnswer().should('have.value', 9999999.99)
        })

        it("Add two negative numbers", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getFirstNumber().type(-10)
            calculator.getSecondNumber().type(-20)
            calculator.getCalculateButton().click()
            calculator.getAnswer().should('have.value', -30)
        })

        it("Add decimal number with ',' instead of '.' ", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getFirstNumber().type('5,2')
            calculator.getSecondNumber().type('3,2')
            calculator.getCalculateButton().click()
            calculator.getErrorMsg().contains('Number 1 is not a number')
        })

        //Tests for 'Subtract' function ----------------------------------------------------------------

        it("Subtract two empty fields", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getOperation().select('1')
            calculator.getCalculateButton().click()
            calculator.getAnswer().should('have.value', 0)
        })

        it("Subtract letter and integer", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getFirstNumber().type('A')
            calculator.getSecondNumber().type(5)
            calculator.getOperation().select('1')
            calculator.getCalculateButton().click()
            calculator.getErrorMsg().contains('Number 1 is not a number')
        })

        it("Subtract zero and 10", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getFirstNumber().type(0)
            calculator.getSecondNumber().type(10)
            calculator.getOperation().select('1')
            calculator.getCalculateButton().click()
            calculator.getAnswer().should('have.value', -10)
        })

        it("Subtract two negative numbers (first greater that second)", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getFirstNumber().type(-10)
            calculator.getSecondNumber().type(-20)
            calculator.getOperation().select('1')
            calculator.getCalculateButton().click()
            calculator.getAnswer().should('have.value', 10)
        })

        it("Subtract two negative numbers (second greater that first)", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getFirstNumber().type(-20)
            calculator.getSecondNumber().type(-10)
            calculator.getOperation().select('1')
            calculator.getCalculateButton().click()
            calculator.getAnswer().should('have.value', -10)
        })

        it("Subtract two strings", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getFirstNumber().type('ABC')
            calculator.getSecondNumber().type('ABC')
            calculator.getOperation().select('1')
            calculator.getCalculateButton().click()
            calculator.getErrorMsg().contains('Number 1 is not a number')
        })

        it.only("Subtract two decimals (second grater that first)", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getFirstNumber().type(10.5)
            calculator.getSecondNumber().type(15.5)
            calculator.getOperation().select('1')
            calculator.getCalculateButton().click()
            calculator.getAnswer().should('have.value', -5)
        })

        //Failed on 'PROTOTYPE' expected 5.2, actual 5.1999999999....
        it.only("Subtract two decimals (first grater that second)", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getFirstNumber().type(15.5)
            calculator.getSecondNumber().type(10.3)
            calculator.getOperation().select('1')
            calculator.getCalculateButton().click()
            calculator.getAnswer().should('have.value', 5.2)
        })

        it("Subtract two decimals (first grater that second) + selected just integers", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getFirstNumber().type(15.9)
            calculator.getSecondNumber().type(10.8)
            calculator.getOperation().select('1')
            calculator.getCheckBoxForIntegersOnly().click()
            calculator.getCalculateButton().click()
            calculator.getAnswer().should('have.value', 5)
        })

        it("Subtract symbol and integer + selected just integers", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getFirstNumber().type('*')
            calculator.getSecondNumber().type(10)
            calculator.getOperation().select('1')
            calculator.getCheckBoxForIntegersOnly().click()
            calculator.getCalculateButton().click()
            calculator.getErrorMsg().contains('Number 1 is not a number')
        })

        it("Subtract two equal decimals", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getFirstNumber().type(2.9)
            calculator.getSecondNumber().type(2.9)
            calculator.getOperation().select('1')
            calculator.getCalculateButton().click()
            calculator.getAnswer().should('have.value', 0)
        })

        it("Subtract two decimal numbers with ',' instead of '.' ", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getFirstNumber().type('5,2')
            calculator.getSecondNumber().type('3,2')
            calculator.getOperation().select('1')
            calculator.getCalculateButton().click()
            calculator.getErrorMsg().contains('Number 1 is not a number')
        })

        //Tests for 'Multiply' function ----------------------------------------------------------------

        it("Multiply two integers", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getFirstNumber().type(2)
            calculator.getSecondNumber().type(8)
            calculator.getOperation().select('2')
            calculator.getCalculateButton().click()
            calculator.getAnswer().should('have.value', 16)
        })

        it("Multiply two integers + selected just integers", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getFirstNumber().type(2)
            calculator.getSecondNumber().type(0)
            calculator.getOperation().select('2')
            calculator.getCheckBoxForIntegersOnly().click()
            calculator.getCalculateButton().click()
            calculator.getAnswer().should('have.value', 0)
        })

        it("Multiply two decimals + selected just integers", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getFirstNumber().type(2.4)
            calculator.getSecondNumber().type(3.2)
            calculator.getOperation().select('2')
            calculator.getCheckBoxForIntegersOnly().click()
            calculator.getCalculateButton().click()
            calculator.getAnswer().should('have.value', 7)
        })

        //Failed on 'PROTOTYPE' with specific numbers
        it.only("Multiply decimal with integer", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getFirstNumber().type(2.02)
            calculator.getSecondNumber().type(6)
            calculator.getOperation().select('2')
            calculator.getCalculateButton().click()
            calculator.getAnswer().should('have.value', 12.12)
        })

        it("Multiply decimals with integer + selected just integers", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getFirstNumber().type(2.02)
            calculator.getSecondNumber().type(6)
            calculator.getOperation().select('2')
            calculator.getCheckBoxForIntegersOnly().click()
            calculator.getCalculateButton().click()
            calculator.getAnswer().should('have.value', 12)
        })

        it("Multiply sumbol with integer + selected just integers", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getFirstNumber().type('*')
            calculator.getSecondNumber().type(6)
            calculator.getOperation().select('2')
            calculator.getCheckBoxForIntegersOnly().click()
            calculator.getCalculateButton().click()
            calculator.getErrorMsg().contains('Number 1 is not a number')
        })

        it("Multiply decimal with symbol", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getFirstNumber().type(2.02)
            calculator.getSecondNumber().type('/')
            calculator.getOperation().select('2')
            calculator.getCalculateButton().click()
            calculator.getErrorMsg().contains('Number 2 is not a number')
        })

        it("Multiply empty fields", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getOperation().select('2')
            calculator.getCalculateButton().click()
            calculator.getAnswer().should('have.value', 0)
            
        })

        //Failed on 'PROTOTYPE' expected that web will display some kind of message when answer is too long o write it in scientific format
        it.only("Multiply two integers of maximus length", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getFirstNumber().type(9999999999)
            calculator.getSecondNumber().type(9999999999)
            calculator.getOperation().select('2')
            calculator.getCalculateButton().click()
            calculator.getAnswer().should('have.value', 9.99e+19)
        })

        it("Multiply string with decimal + selected just integers", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getFirstNumber().type('ABC')
            calculator.getSecondNumber().type(2.5)
            calculator.getOperation().select('2')
            calculator.getCheckBoxForIntegersOnly().click()
            calculator.getCalculateButton().click()
            calculator.getErrorMsg().contains('Number 1 is not a number')
        })

        it("Multiply two decimal numbers with ',' instead of '.' ", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getFirstNumber().type('5,2')
            calculator.getSecondNumber().type('3,2')
            calculator.getOperation().select('2')
            calculator.getCalculateButton().click()
            calculator.getErrorMsg().contains('Number 1 is not a number')
        })

        it("Multiply two negative decimal numbers", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getFirstNumber().type(-5.5)
            calculator.getSecondNumber().type(-5.5)
            calculator.getOperation().select('2')
            calculator.getCalculateButton().click()
            calculator.getAnswer().should('have.value', 30.25)
        })

        it("Multiply negative integer with decimal number", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getFirstNumber().type(-5)
            calculator.getSecondNumber().type(0.1)
            calculator.getOperation().select('2')
            calculator.getCalculateButton().click()
            calculator.getAnswer().should('have.value', -0.5)
        })
        //Tests for 'Divide' function ----------------------------------------------------------------

        it("Divide two integers - first greater than second", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getFirstNumber().type(10)
            calculator.getSecondNumber().type(100)
            calculator.getOperation().select('3')
            calculator.getCalculateButton().click()
            calculator.getAnswer().should('have.value', 0.1)
        })

        it("Divide two decimal numbers with ',' instead of '.' ", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getFirstNumber().type('5,2')
            calculator.getSecondNumber().type('3,2')
            calculator.getOperation().select('3')
            calculator.getCalculateButton().click()
            calculator.getErrorMsg().contains('Number 1 is not a number')
        })

        it("Divide two negative decimal numbers", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getFirstNumber().type(-30.25)
            calculator.getSecondNumber().type(-5.5)
            calculator.getOperation().select('3')
            calculator.getCalculateButton().click()
            calculator.getAnswer().should('have.value', 5.5)
        })

        it("Divide two decimal numbers + selected just integers", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getFirstNumber().type(30.25)
            calculator.getSecondNumber().type(5.5)
            calculator.getOperation().select('3')
            calculator.getCheckBoxForIntegersOnly().click()
            calculator.getCalculateButton().click()
            calculator.getAnswer().should('have.value', 5)
        })

        it("Divide two integers (positive/negative) + selected just integers", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getFirstNumber().type(25)
            calculator.getSecondNumber().type(-5)
            calculator.getOperation().select('3')
            calculator.getCheckBoxForIntegersOnly().click()
            calculator.getCalculateButton().click()
            calculator.getAnswer().should('have.value', -5)
        })

        it("Divide decimal by integer", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getFirstNumber().type(25.02)
            calculator.getSecondNumber().type(1)
            calculator.getOperation().select('3')
            calculator.getCalculateButton().click()
            calculator.getAnswer().should('have.value', 25.02)
        })

        it("Divide by zero", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getFirstNumber().type(25)
            calculator.getSecondNumber().type(0)
            calculator.getOperation().select('3')
            calculator.getCalculateButton().click()
            calculator.getErrorMsg().contains('Divide by zero error!')
        })

        it("Divide zero by decimal", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getFirstNumber().type(0)
            calculator.getSecondNumber().type(1.98)
            calculator.getOperation().select('3')
            calculator.getCalculateButton().click()
            calculator.getAnswer().should('have.value', 0)
        })

        it("Divide string by decimal", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getFirstNumber().type('ABC')
            calculator.getSecondNumber().type(1.98)
            calculator.getOperation().select('3')
            calculator.getCalculateButton().click()
            calculator.getErrorMsg().contains('Number 1 is not a number')
        })

        it("Divide zero by symbol", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getFirstNumber().type(0)
            calculator.getSecondNumber().type('-')
            calculator.getOperation().select('3')
            calculator.getCalculateButton().click()
            calculator.getErrorMsg().contains('Number 2 is not a number')
        })

        it("Divide two empty fields", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getOperation().select('3')
            calculator.getCalculateButton().click()
            calculator.getErrorMsg().contains('Divide by zero error!')
        })

        it("Divide two empty fields", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getOperation().select('3')
            calculator.getCalculateButton().click()
            calculator.getErrorMsg().contains('Divide by zero error!')
        })

        it("Divide smaller integer of maximum length by other integer of maximum length", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getFirstNumber().type(1111111111)
            calculator.getSecondNumber().type(5555555555)
            calculator.getOperation().select('3')
            calculator.getCalculateButton().click()
            calculator.getAnswer().should('have.value', 0.2)
        })

        //Tests for 'Concatenate' function ----------------------------------------------------------------

        it("Concatenate two negative decimals", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getFirstNumber().type(-10.5)
            calculator.getSecondNumber().type(-11.1)
            calculator.getOperation().select('4')
            calculator.getCalculateButton().click()
            calculator.getAnswer().should('have.value', '-10.5-11.1')
        })

        it("Concatenate two strings", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getFirstNumber().type('ABC')
            calculator.getSecondNumber().type('EFG')
            calculator.getOperation().select('4')
            calculator.getCalculateButton().click()
            calculator.getAnswer().should('have.value', 'ABCEFG')
        })

        it("Search for checkbox for 'Integers only' when Concatenate operation is selected", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getOperation().select('4')
            calculator.checkIfContainsCheckBoxForIntegersOnly().should("not.be.visible");
        })

        it("Concatenate integer with symbol", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getFirstNumber().type(12)
            calculator.getSecondNumber().type(' *--')
            calculator.getOperation().select('4')
            calculator.getCalculateButton().click()
            calculator.getAnswer().should('have.value', '12 *--')
        })

        it("Concatenate two empty fields", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getOperation().select('4')
            calculator.getCalculateButton().click()
            calculator.getAnswer().should('have.be.empty')
        })

        it("Concatenate two strings of maximum length", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getFirstNumber().type('AAAAAAAAAA')
            calculator.getSecondNumber().type('BBBBBBBBBB')
            calculator.getOperation().select('4')
            calculator.getCalculateButton().click()
            calculator.getAnswer().should('have.value', 'AAAAAAAAAABBBBBBBBBB')
        })

        //Tests for 'Clear' button
        it("Check if answer field is empty after 'Clear' button is clicked", () => {
            calculator.getBuild().select(`${buildVersion}`);
            calculator.getFirstNumber().type('AAAAAAAAAA')
            calculator.getSecondNumber().type('BBBBBBBBBB')
            calculator.getOperation().select('3')
            calculator.getCheckBoxForIntegersOnly().click();
            calculator.getCalculateButton().click()
            
            calculator.getClearButton().click()

            calculator.getAnswer().should('have.be.empty')
        })


        it("Check if checkbox is unchecked after 'Clear' button is clicked", () => {
            calculator.getBuild().select(`${buildVersion}`)
            calculator.getFirstNumber().type('AAAAAAAAAA')
            calculator.getSecondNumber().type('BBBBBBBBBB')
            calculator.getOperation().select('3')
            calculator.getCheckBoxForIntegersOnly().click();
            calculator.getCalculateButton().click()
            
            calculator.getClearButton().click()

            calculator.getCheckBoxForIntegersOnly().should('have.be', 1)
        })

    })
})

