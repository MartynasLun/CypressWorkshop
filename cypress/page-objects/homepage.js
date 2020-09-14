class Homepage {

    getSelectBuild() {
        return cy.get('#selectBuild');
    };

    getNumber1Field() {
        return cy.get('#number1Field');
    }

    getNumber2Field() {
        return cy.get('#number2Field');
    }

    clickCalculateButton() {
        return cy.get('#calculateButton').click();
    }

    checkNumberAnswerField() {
        return cy.get('#numberAnswerField');
    }
}

export default Homepage;