class Homepage{

    getSearchButton(){
        return cy.get('#search_button_homepage')
    }
    getSearchInputField(){
        return cy.get('#search_form_homepage')
    }
}

export default Homepage;