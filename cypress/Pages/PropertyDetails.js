export class PropertyDetailsPage {

    weblocators = {

    Bedrooms : '#input-3',
    Bathrooms : '#input-4',
    Parking : '#input-5',
    Step2_Next : '.c-button__icon',
    Step2_Skip : ':nth-child(5) > .inner > up-button > .c-button > .button-inner > .c-button__content',
    Step2Heading : '.u-text-heading--lg',

    Errorbedrooms: ':nth-child(1) > up-help-text.ng-star-inserted > .help-text',
    Errorbathrooms: ':nth-child(2) > up-help-text.ng-star-inserted > .help-text',
    ErrorParking: '.u-margin-bottom--xl > up-help-text.ng-star-inserted > .help-text'


    }

    
    enterBedrooms(beds){

        cy.get(this.weblocators.Bedrooms).type(beds)
        
    
    }
    enterbathrooms(baths){

        cy.get(this.weblocators.Bathrooms).type(baths)
    }

    enterParkings(parkings){

        cy.get(this.weblocators.Parking).type(parkings)
        
    }
    clickingStep2Next(){
        cy.get(this.weblocators.Step2_Next).click()

    }

    clickingStep2Skip(){
        cy.get(this.weblocators.Step2_Skip).click()
    }

    verifyStep2Heading () {
     return cy.get(this.weblocators.Step2Heading)

    }

   verifyerrorbedrooms() {

    return cy.get(this.weblocators.Errorbedrooms)
   }

   verifyerrorbathrooms() {

    return cy.get(this.weblocators.Errorbathrooms)
   }

   verifyerrorparking() {

    return cy.get(this.weblocators.ErrorParking)
   }



}

