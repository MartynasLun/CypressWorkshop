class Homepage{
 
    getSearchButton(){
        return cy.get("#search_form_homepage")
    }   
    getSearchInputField(){
        return cy.get("#search_form_input_homepage")
    }   
}

export default Homepage