export class AddressPage {

weblocators = {

    Address: '#nc-address-finder-1-autocomplete-input',
    click_search : '.list > :nth-child(1) > span',
    Step1 : '.nav',
    confirm_address : '.address-label',
    GetStarted : '#nc-address-finder-1-autocomplete > .autocomplete > .search-button',
    helptext: '.help-text'
}

openLink() {
//cy.visit('https://nurturecloud-demo.raywhite.com/property-report/address')

cy.visit(Cypress.env('Link'))


}

enterAddress(address){

    //cy.get(this.weblocators.Address).type(address)
    cy.get(this.weblocators.Address).type(address)
    cy.get(this.weblocators.click_search).click()
}


verifyingaddress(){

    return cy.get(this.weblocators.confirm_address)
}


verifyingHeader(){
    return cy.get(this.weblocators.Step1)
}

ClickingGetStarted(){

    cy.get(this.weblocators.GetStarted).click()
}

verifyinghelptext(){
 return cy.get(this.weblocators.helptext)

}
}


