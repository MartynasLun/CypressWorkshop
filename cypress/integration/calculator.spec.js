//////// PREPARATION ////////

// Random values generator
const positive1 = Math.random() * 100 + 1 // Random positive value from 1 to 100
const positive2 = Math.random() * 10 + 1 // Random positive value from 1 to 10
const positiveInteger1 = Math.floor(Math.random() * 100) + 1 // Random positive integer value from 1 to 100
const positiveInteger2 = Math.floor(Math.random() * 10) + 1 // Random positive integer value from 1 to 10

// Input values used for tests
const x = positiveInteger1
const y = positiveInteger2
const x1 = positive1
const y1 = positive2

// Calculator operations used for checking results
const add = x + y // Adds positive values
const addNegative = -x + -y // Adds negative values
const subtract = x - y // Subtracts positive values
const subtractNegative = -x - -y // Subtracts negative values
const multiply = x * y // Multiplies positive values
const multiplyNegative = -x * -y // Multiplies negative values
const divide = x / y // Divides positive values
const divideNegative = -x / -y // Divides negative values
const concatenate = [x, y].join('') // Concatenates values
const integers = parseInt(x1 + y1) // Display only integer values

// Page objects import
import Calculator from 'C:/CypressWorkShop/cypress/page_objects/Calculator'
var cal = new Calculator

// BasicCalculator page load before each test
beforeEach(() => {
    cy.visit('/BasicCalculator')
})

// Build version selection (available versions: Prototype, 1, 2, 3, 4, 5, 6, 7, 8, 9)
beforeEach(() => {
    cal.getBuild().select('Prototype')
})



//////// TESTS ////////

// TC1 - Testing "Add" operation with positive values
it('Should add positive values correctly', () => {
    cal.getInput1().type(x)
    cal.getInput2().type(y)
    cal.getDropdown().select("Add")
    cal.getCalculate().click()
    cal.getAnswer().should('have.value', add)
});

// TC2 - Testing "Add" operation with negative values
it('Should add negative values correctly', () => {
    cal.getInput1().type(-x)
    cal.getInput2().type(-y)
    cal.getDropdown().select("Add")
    cal.getCalculate().click()
    cal.getAnswer().should('have.value', addNegative)
});

// TC3 - Testing "Add" operation with null values
it('Should add null values correctly', () => {
    // Testing 1st input
    cal.getInput1().type(0)
    cal.getInput2().type(y)
    cal.getDropdown().select("Add")
    cal.getCalculate().click()
    cal.getAnswer().should('have.value', y)
    cal.refreshPage()
    // Testing 2nd input
    cal.getInput1().type(x)
    cal.getInput2().type(0)
    cal.getDropdown().select("Add")
    cal.getCalculate().click()
    cal.getAnswer().should('have.value', x)
});

// TC4 - Testing "Add" operation with NaN values
it('Should display error message if trying to add NaN values', () => {
    // Testing 1st input
    cal.getInput1().type('abc')
    cal.getInput2().type(y)
    cal.getDropdown().select("Add")
    cal.getCalculate().click()
    cal.getError().should('be.visible')
    cal.getAnswer().should('have.value', '')
    cal.refreshPage()
    // Testing 2nd input
    cal.getInput1().type(x)
    cal.getInput2().type('abc')
    cal.getDropdown().select("Add")
    cal.getCalculate().click()
    cal.getError().should('be.visible')
    cal.getAnswer().should('have.value', '')
});

// TC5 - Testing "Add" operation with special characters values
it('Should display error message if trying to add values with special characters', () => {
    // Testing 1st input
    cal.getInput1().type('$@&')
    cal.getInput2().type(y)
    cal.getDropdown().select("Add")
    cal.getCalculate().click()
    cal.getError().should('be.visible')
    cal.getAnswer().should('have.value', '')
    cal.refreshPage()
    // Testing 2nd input
    cal.getInput1().type(x)
    cal.getInput2().type('$@&')
    cal.getDropdown().select("Add")
    cal.getCalculate().click()
    cal.getError().should('be.visible')
    cal.getAnswer().should('have.value', '')
});

// TC6 - Testing "Add" operation with spaces before/after values
it('Should ignore spaces when adding values', () => {
    cal.getInput1().type(' ').type(x).type('  ')
    cal.getInput2().type('  ').type(y).type(' ')
    cal.getDropdown().select("Add")
    cal.getCalculate().click()
    cal.getAnswer().should('have.value', add)
});

// TC7 - Testing "Subtract" operation with positive values
it('Should subtract positive values correctly', () => {
    cal.getInput1().type(x)
    cal.getInput2().type(y)
    cal.getDropdown().select("Subtract")
    cal.getCalculate().click()
    cal.getAnswer().should('have.value', subtract)
});

// TC8 - Testing "Subtract" operation with negative values
it('Should subtract negative values correctly', () => {
    cal.getInput1().type(-x)
    cal.getInput2().type(-y)
    cal.getDropdown().select("Subtract")
    cal.getCalculate().click()
    cal.getAnswer().should('have.value', subtractNegative)
});

// TC9 - Testing "Subtract" operation with null values
it('Should subtract null values correctly', () => {
    // Testing 1st input
    cal.getInput1().type(0)
    cal.getInput2().type(y)
    cal.getDropdown().select("Subtract")
    cal.getCalculate().click()
    cal.getAnswer().should('have.value', -y)
    cal.refreshPage()
    // Testing 2nd input
    cal.getInput1().type(x)
    cal.getInput2().type(0)
    cal.getDropdown().select("Subtract")
    cal.getCalculate().click()
    cal.getAnswer().should('have.value', x)
});

// TC10 - Testing "Subtract" operation with NaN values;
it('Should display error message if trying to subtract NaN values', () => {
    // Testing 1st input
    cal.getInput1().type('abc')
    cal.getInput2().type(y)
    cal.getDropdown().select("Subtract")
    cal.getCalculate().click()
    cal.getError().should('be.visible')
    cal.getAnswer().should('have.value', '')
    cal.refreshPage()
    // Testing 2nd input
    cal.getInput1().type(x)
    cal.getInput2().type('abc')
    cal.getDropdown().select("Subtract")
    cal.getCalculate().click()
    cal.getError().should('be.visible')
    cal.getAnswer().should('have.value', '')
});

// TC11 - Testing "Subtract" operation with special characters values
it('Should display error message if trying to subtract values with special characters', () => {
    // Testing 1st input
    cal.getInput1().type('$@&')
    cal.getInput2().type(y)
    cal.getDropdown().select("Subtract")
    cal.getCalculate().click()
    cal.getError().should('be.visible')
    cal.getAnswer().should('have.value', '')
    cal.refreshPage()
    // Testing 2nd input
    cal.getInput1().type(x)
    cal.getInput2().type('$@&')
    cal.getDropdown().select("Subtract")
    cal.getCalculate().click()
    cal.getError().should('be.visible')
    cal.getAnswer().should('have.value', '')
});

// TC12 - Testing "Subtract" operation with spaces before/after values
it('Should ignore spaces when subtracting values', () => {
    cal.getInput1().type(' ').type(x).type('  ')
    cal.getInput2().type('  ').type(y).type(' ')
    cal.getDropdown().select("Subtract")
    cal.getCalculate().click()
    cal.getAnswer().should('have.value', subtract)
});

// TC13 - Testing "Multiply" operation with positive values
it('Should multiply positive values correctly', () => {
    cal.getInput1().type(x)
    cal.getInput2().type(y)
    cal.getDropdown().select("Multiply")
    cal.getCalculate().click()
    cal.getAnswer().should('have.value', multiply)
});

// TC14 - Testing "Multiply" operation with negative values
it('Should multiply negative values correctly', () => {
    cal.getInput1().type(-x)
    cal.getInput2().type(-y)
    cal.getDropdown().select("Multiply")
    cal.getCalculate().click()
    cal.getAnswer().should('have.value', multiplyNegative)
});

// TC15 - Testing "Multiply" operation with null values
it('Should multiply null values correctly', () => {
    // Testing 1st input
    cal.getInput1().type(0)
    cal.getInput2().type(y)
    cal.getDropdown().select("Multiply")
    cal.getCalculate().click()
    cal.getAnswer().should('have.value', 0)
    cal.refreshPage()
    // Testing 2nd input
    cal.getInput1().type(x)
    cal.getInput2().type(0)
    cal.getDropdown().select("Multiply")
    cal.getCalculate().click()
    cal.getAnswer().should('have.value', 0)
});

// TC16 - Testing "Multiply" operation with NaN values
it('Should display error message if trying to multiply NaN values', () => {
    // Testing 1st input
    cal.getInput1().type('abc')
    cal.getInput2().type(y)
    cal.getDropdown().select("Multiply")
    cal.getCalculate().click()
    cal.getError().should('be.visible')
    cal.getAnswer().should('have.value', '')
    cal.refreshPage()
    // Testing 2nd input
    cal.getInput1().type(x)
    cal.getInput2().type('abc')
    cal.getDropdown().select("Multiply")
    cal.getCalculate().click()
    cal.getError().should('be.visible')
    cal.getAnswer().should('have.value', '')
});

// TC17 - Testing "Multiply" operation with special characters values
it('Should display error message if trying to multiply values with special characters', () => {
    // Testing 1st input
    cal.getInput1().type('$@&')
    cal.getInput2().type(y)
    cal.getDropdown().select("Multiply")
    cal.getCalculate().click()
    cal.getError().should('be.visible')
    cal.getAnswer().should('have.value', '')
    cal.refreshPage()
    // Testing 2nd input
    cal.getInput1().type(x)
    cal.getInput2().type('$@&')
    cal.getDropdown().select("Multiply")
    cal.getCalculate().click()
    cal.getError().should('be.visible')
    cal.getAnswer().should('have.value', '')
});

// TC18 - Testing "Multiply" operation with spaces before/after values
it('Should ignore spaces when multiplying values', () => {
    cal.getInput1().type(' ').type(x).type('  ')
    cal.getInput2().type('  ').type(y).type(' ')
    cal.getDropdown().select("Multiply")
    cal.getCalculate().click()
    cal.getAnswer().should('have.value', multiply)
});

// TC19 - Testing "Divide" operation with positive values
it('Should divide positive values correctly', () => {
    cal.getInput1().type(x)
    cal.getInput2().type(y)
    cal.getDropdown().select("Divide")
    cal.getCalculate().click()
    cal.getAnswer().should('have.value', divide)
});

// TC20 - Testing "Divide" operation with negative values
it('Should divide negative values correctly', () => {
    cal.getInput1().type(-x)
    cal.getInput2().type(-y)
    cal.getDropdown().select("Divide")
    cal.getCalculate().click()
    cal.getAnswer().should('have.value', divideNegative)
});

// TC21 - Testing "Divide" operation with null values
it('Should divide null values correctly', () => {
    // Testing 1st input
    cal.getInput1().type(0)
    cal.getInput2().type(y)
    cal.getDropdown().select("Divide")
    cal.getCalculate().click()
    cal.getAnswer().should('have.value', 0)
    cal.refreshPage()
    // Testing 2nd input
    cal.getInput1().type(x)
    cal.getInput2().type(0)
    cal.getDropdown().select("Divide")
    cal.getCalculate().click()
    cal.getError().should('be.visible')
    cal.getAnswer().should('have.value', '')
});

// TC22 - Testing "Divide" operation with NaN values
it('Should display error message if trying to divide NaN values', () => {
    // Testing 1st input
    cal.getInput1().type('abc')
    cal.getInput2().type(y)
    cal.getDropdown().select("Divide")
    cal.getCalculate().click()
    cal.getError().should('be.visible')
    cal.getAnswer().should('have.value', '')
    cal.refreshPage()
    // Testing 2nd input
    cal.getInput1().type(x)
    cal.getInput2().type('abc')
    cal.getDropdown().select("Divide")
    cal.getCalculate().click()
    cal.getError().should('be.visible')
    cal.getAnswer().should('have.value', '')
});

// TC23 - Testing "Divide" operation with special characters values
it('Should display error message if trying to divide values with special characters', () => {
    // Testing 1st input
    cal.getInput1().type('$@&')
    cal.getInput2().type(y)
    cal.getDropdown().select("Divide")
    cal.getCalculate().click()
    cal.getError().should('be.visible')
    cal.getAnswer().should('have.value', '')
    cal.refreshPage()
    // Testing 2nd input
    cal.getInput1().type(x)
    cal.getInput2().type('$@&')
    cal.getDropdown().select("Divide")
    cal.getCalculate().click()
    cal.getError().should('be.visible')
    cal.getAnswer().should('have.value', '')
});

// TC24 - Testing "Divide" operation with spaces before/after values
it('Should ignore spaces when dividing values', () => {
    cal.getInput1().type(' ').type(x).type('  ')
    cal.getInput2().type('  ').type(y).type(' ')
    cal.getDropdown().select("Divide")
    cal.getCalculate().click()
    cal.getAnswer().should('have.value', divide)
});

// TC25 - Testing "Concatenate" operation with positive values
it('Should concatenate positive values correctly', () => {
    cal.getInput1().type(x)
    cal.getInput2().type(y)
    cal.getDropdown().select("Concatenate")
    cal.getCalculate().click()
    cal.getAnswer().should('have.value', concatenate)
});

// TC26 - Testing "Concatenate" operation with null values
it('Should concatenate null values correctly', () => {
    // Testing 1st input
    cal.getInput2().type(y)
    cal.getDropdown().select("Concatenate")
    cal.getCalculate().click()
    cal.getAnswer().should('have.value', y)
    cal.refreshPage()
    // Testing 2nd input
    cal.getInput1().type(x)
    cal.getDropdown().select("Concatenate")
    cal.getCalculate().click()
    cal.getAnswer().should('have.value', x)
});

// TC27 - Testing "Concatenate" operation with NaN values
it('Should concatenate NaN values correctly', () => {
    cal.getInput1().type('abc')
    cal.getInput2().type('abc')
    cal.getDropdown().select("Concatenate")
    cal.getCalculate().click()
    cal.getAnswer().should('have.value', 'abcabc')
});

// TC28 - Testing "Concatenate" operation with special characters values
it('Should concatenate values with special characters correctly', () => {
    cal.getInput1().type('$@&')
    cal.getInput2().type('$@&')
    cal.getDropdown().select("Concatenate")
    cal.getCalculate().click()
    cal.getAnswer().should('have.value', '$@&$@&')
});

// TC29 - Testing "Concatenate" operation with spaces before/after values
it('Should include spaces when concatenating values', () => {
    cal.getInput1().type(' ').type('abc').type('  ')
    cal.getInput2().type('  ').type('abc').type(' ')
    cal.getDropdown().select("Concatenate")
    cal.getCalculate().click()
    cal.getAnswer().should('have.value', ' abc    abc ')
});

// TC30 - Testing "Integers only" feature
it('Should display only integers values correctly', () => {
    cal.getInput1().type(x1)
    cal.getInput2().type(y1)
    cal.getDropdown().select("Add")
    cal.getCalculate().click()
    cal.getAnswer()
    cal.getIntegers().click()
    cal.getAnswer().should('have.value', integers)
});

// TC31 - Testing [Clear] button
it('[Clear] button should clear "Answer" output and "Integers only" input', () => {
    cal.getInput1().type(x1)
    cal.getInput2().type(y1)
    cal.getDropdown().select("Add")
    cal.getCalculate().click()
    cal.getIntegers().click()
    cal.getAnswer().should('be.not.null')
    cal.getClear().click()
    cal.getAnswer().should('have.value', '')
    cal.getIntegers().should('be.not.checked')
});

