import LandingPage from '../../page_objects/landingpage/landingpage.js';
import * as utils from '../../utility_functions/utils.js';
/// <reference types='cypress' />

let landingPage = new LandingPage();

const builds = [...Array(10).keys()].map(String);
const integerSelectValues = [false, true];
const stringType = 'string';
const positiveIntType = 'positive_Integer';
const negativeIntType = 'negative_Integer';
const positiveFloatType = 'positive_Float';
const negativeFloatType = 'negative_Float';
const zeroType = 'zero';
const leadingZeroDigitsType = 'leading_Zero_Digits';

const randomData = [
  {
    dataGenerator: utils.generateRandomPositiveInt,
    dataType: positiveIntType
  },
  {
    dataGenerator: utils.generateRandomNegativeInt,
    dataType: negativeIntType
  },
  {
    dataGenerator: utils.generateRandomPositiveFloat,
    dataType: positiveFloatType
  },
  {
    dataGenerator: utils.generateRandomNegativeFloat,
    dataType: negativeFloatType
  },
  { dataGenerator: () => 0, dataType: zeroType },
  {
    dataGenerator: utils.generateRandomLetter,
    dataType: stringType
  },
  {
    dataGenerator: utils.generateRandomDigitWithZeroesUpfront,
    dataType: leadingZeroDigitsType
  }
];

beforeEach('Visits Basic Calculator landing page', () => {
  cy.visit('/BasicCalculator');
});

builds.forEach(build => {
  describe(`Build: ${build}`, () => {
    describe('Should perform addition correctly', () => {
      randomData.forEach(testCase => {
        integerSelectValues.forEach(intSelectValue => {
          it.only(`Performs addition correctly with ${testCase.dataType}, 
          integers only: ${intSelectValue}`, () => {
            let seed = 100;
            let precision = 5;

            let firstNumber, secondNumber, answer;

            switch (testCase.dataType) {
              case zeroType:
                firstNumber = testCase.dataGenerator();
                secondNumber = testCase.dataGenerator();
                answer = firstNumber + secondNumber;
                break;
              case stringType:
                firstNumber = testCase.dataGenerator();
                secondNumber = testCase.dataGenerator();
                answer = '';
                break;
              case leadingZeroDigitsType:
                firstNumber = testCase.dataGenerator(seed);
                secondNumber = testCase.dataGenerator(seed);
                answer = parseInt(firstNumber) + parseInt(secondNumber);
                break;
              default:
                firstNumber = parseFloat(
                  testCase.dataGenerator(seed).toPrecision(precision)
                );
                secondNumber = parseFloat(
                  testCase.dataGenerator(seed).toPrecision(precision)
                );
                answer = firstNumber + secondNumber;
            }

            if (intSelectValue === true && typeof answer !== 'string') {
              answer = parseInt(answer);
              landingPage.getIntegerSelect().click();
            }

            landingPage.getBuildDropdown().select(build);
            landingPage.getFirstNumberField().type(firstNumber);
            landingPage.getSecondNumberField().type(secondNumber);
            landingPage
              .getOperationsDropdown()
              .select(landingPage.additionTitle);
            landingPage.getCalculateButton().click();

            landingPage.getAnswerField().should('have.value', answer);
          });
        });
      });
    });

    describe('Should perform subtraction correctly', () => {
      randomData.forEach(testCase => {
        integerSelectValues.forEach(intSelectValue => {
          it.only(`Performs subtraction correctly with ${testCase.dataType}, 
          integers only: ${intSelectValue}`, () => {
            let seed = 100;
            let precision = 5;

            let firstNumber, secondNumber, answer;

            switch (testCase.dataType) {
              case zeroType:
                firstNumber = testCase.dataGenerator();
                secondNumber = testCase.dataGenerator();
                answer = firstNumber + secondNumber;
                break;
              case stringType:
                firstNumber = testCase.dataGenerator();
                secondNumber = testCase.dataGenerator();
                answer = '';
                break;
              case leadingZeroDigitsType:
                firstNumber = testCase.dataGenerator(seed);
                secondNumber = testCase.dataGenerator(seed);
                answer = parseInt(firstNumber) - parseInt(secondNumber);
                break;
              default:
                firstNumber = parseFloat(
                  testCase.dataGenerator(seed).toPrecision(precision)
                );
                secondNumber = parseFloat(
                  testCase.dataGenerator(seed).toPrecision(precision)
                );
                answer = firstNumber - secondNumber;
            }

            if (intSelectValue === true && typeof answer !== 'string') {
              answer = parseInt(answer);
              landingPage.getIntegerSelect().click();
            }

            landingPage.getBuildDropdown().select(build);
            landingPage.getFirstNumberField().type(firstNumber);
            landingPage.getSecondNumberField().type(secondNumber);
            landingPage
              .getOperationsDropdown()
              .select(landingPage.subtractionTitle);
            landingPage.getCalculateButton().click();

            landingPage.getAnswerField().should('have.value', answer);
          });
        });
      });
    });

    describe('Should perform multiplication correctly', () => {
      randomData.forEach(testCase => {
        integerSelectValues.forEach(intSelectValue => {
          it.only(`Performs multiplication correctly with ${testCase.dataType}, 
        integers only: ${intSelectValue}`, () => {
            let seed = 100;
            let precision = 5;

            let firstNumber, secondNumber, answer;

            switch (testCase.dataType) {
              case zeroType:
                firstNumber = testCase.dataGenerator();
                secondNumber = testCase.dataGenerator();
                answer = firstNumber + secondNumber;
                break;
              case stringType:
                firstNumber = testCase.dataGenerator();
                secondNumber = testCase.dataGenerator();
                answer = '';
                break;
              case leadingZeroDigitsType:
                firstNumber = testCase.dataGenerator(seed);
                secondNumber = testCase.dataGenerator(seed);
                answer = parseInt(firstNumber) * parseInt(secondNumber);
                break;
              default:
                firstNumber = parseFloat(
                  testCase.dataGenerator(seed).toPrecision(precision)
                );
                secondNumber = parseFloat(
                  testCase.dataGenerator(seed).toPrecision(precision)
                );
                answer = firstNumber * secondNumber;
            }

            if (intSelectValue === true && typeof answer !== 'string') {
              answer = parseInt(answer);
              landingPage.getIntegerSelect().click();
            }

            landingPage.getBuildDropdown().select(build);
            landingPage.getFirstNumberField().type(firstNumber);
            landingPage.getSecondNumberField().type(secondNumber);
            landingPage
              .getOperationsDropdown()
              .select(landingPage.multiplicationTitle);
            landingPage.getCalculateButton().click();

            landingPage.getAnswerField().should('have.value', answer);
          });
        });
      });
    });

    describe('Should perform division correctly', () => {
      randomData.forEach(testCase => {
        integerSelectValues.forEach(intSelectValue => {
          it.only(`Performs division correctly with ${testCase.dataType}, 
        integers only: ${intSelectValue}`, () => {
            let seed = 100;
            let precision = 5;

            let firstNumber, secondNumber, answer;

            switch (testCase.dataType) {
              case zeroType:
                firstNumber = testCase.dataGenerator();
                secondNumber = testCase.dataGenerator();
                break;
              case stringType:
                firstNumber = testCase.dataGenerator();
                secondNumber = testCase.dataGenerator();
                answer = '';
                break;
              case leadingZeroDigitsType:
                firstNumber = testCase.dataGenerator(seed);
                secondNumber = testCase.dataGenerator(seed);
                answer = parseInt(firstNumber) / parseInt(secondNumber);
                break;
              default:
                firstNumber = parseFloat(
                  testCase.dataGenerator(seed).toPrecision(precision)
                );
                secondNumber = parseFloat(
                  testCase.dataGenerator(seed).toPrecision(precision)
                );
                answer = firstNumber / secondNumber;
            }

            if (intSelectValue === true && typeof answer !== 'string') {
              answer = parseInt(answer);
              landingPage.getIntegerSelect().click();
            }

            landingPage.getBuildDropdown().select(build);
            landingPage.getFirstNumberField().type(firstNumber);
            landingPage.getSecondNumberField().type(secondNumber);
            landingPage
              .getOperationsDropdown()
              .select(landingPage.divisionTitle);
            landingPage.getCalculateButton().click();

            if (secondNumber === 0) {
              landingPage
                .getErrorMessageField()
                .contains(landingPage.divideByZeroError);
            } else {
              landingPage.getAnswerField().should('have.value', answer);
            }
          });
        });
      });
    });

    describe('Should perform concatenation correctly', () => {
      randomData.forEach(testCase => {
        it.only(`Performs concatenation correctly with ${testCase.dataType} `, () => {
          let seed = 100;
          let precision = 5;

          let firstNumber, secondNumber, answer;

          switch (testCase.dataType) {
            case zeroType:
              firstNumber = testCase.dataGenerator();
              secondNumber = testCase.dataGenerator();

              break;
            case stringType:
              firstNumber = testCase.dataGenerator();
              secondNumber = testCase.dataGenerator();

              break;
            case leadingZeroDigitsType:
              firstNumber = testCase.dataGenerator(seed);
              secondNumber = testCase.dataGenerator(seed);

              break;
            default:
              firstNumber = parseFloat(
                testCase.dataGenerator(seed).toPrecision(precision)
              );
              secondNumber = parseFloat(
                testCase.dataGenerator(seed).toPrecision(precision)
              );
          }

          answer = firstNumber.toString().concat(secondNumber.toString());

          landingPage.getBuildDropdown().select(build);
          landingPage.getFirstNumberField().type(firstNumber);
          landingPage.getSecondNumberField().type(secondNumber);
          landingPage
            .getOperationsDropdown()
            .select(landingPage.concatenationTitle);
          landingPage.getCalculateButton().click();

          landingPage.getAnswerField().should('have.value', answer);
        });
      });
    });

    it(`Can click 'Clear' button`, () => {
      landingPage.getBuildDropdown().select(build);
      landingPage.getClearButton().should('not.be.disabled');
    });

    it(`Can choose 'Integers only'`, () => {
      landingPage.getBuildDropdown().select(build);
      let ops = landingPage.getOperationsDropdown();
      ops.each(op => {
        if (op.value !== landingPage.concatenationTitle) {
          ops.select(op.val());
          landingPage.getIntegerSelect().should('not.be.disabled');
        }
      });
    });
  });
});
