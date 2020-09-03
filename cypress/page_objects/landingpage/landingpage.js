class LandingPage {
  firstNumberField = '#number1Field';
  secondNumberField = '#number2Field';
  buildDropdown = '#selectBuild';
  calculateButton = '#calculateButton';
  clearButton = '#clearButton';
  operationsDropdown = '#selectOperationDropdown';
  integerSelect = '#integerSelect';
  answerField = '#numberAnswerField';
  errorMsgField = '#errorMsgField';
  additionTitle = 'Add';
  subtractionTitle = 'Subtract';
  multiplicationTitle = 'Multiply';
  divisionTitle = 'Divide';
  concatenationTitle = 'Concatenate';
  divideByZeroError = 'Divide by zero error!';

  getFirstNumberField() {
    return cy.get(this.firstNumberField);
  }

  getSecondNumberField() {
    return cy.get(this.secondNumberField);
  }

  getBuildDropdown() {
    return cy.get(this.buildDropdown);
  }

  getCalculateButton() {
    return cy.get(this.calculateButton);
  }

  getClearButton() {
    return cy.get(this.clearButton);
  }

  getOperationsDropdown() {
    return cy.get(this.operationsDropdown);
  }

  getIntegerSelect() {
    return cy.get(this.integerSelect);
  }

  getAnswerField() {
    return cy.get(this.answerField);
  }

  getErrorMessageField() {
    return cy.get(this.errorMsgField);
  }
}

export default LandingPage;
