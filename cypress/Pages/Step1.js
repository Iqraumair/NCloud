export class AddressFoundPage {

    weblocators = {

    Step1 : '.nav',
    confirm_address : '.address-label',
    Step1_Next : '.c-button__icon'
    }

    
    verifyingaddress(){

        return cy.get(this.weblocators.confirm_address)
    }
    
    
    verifyingHeader(){
        return cy.get(this.weblocators.Step1)
    }


    clickingStep1Next(){
        cy.get(this.weblocators.Step1_Next).click()
    }
}    

