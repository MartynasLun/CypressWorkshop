class homepage{


getSearchButton(){
    return cy.get("#search_button_homepage")
}
getSearchInputField(){
    return cy.get("#search_input_field")
}
}

export default homepage 