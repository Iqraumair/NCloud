export class questionnairePage{

   weblocators = {

    OwnerOccupier : ':nth-child(1) > .is-full-width > .radio-container > .radio-label',
    OwnerInvestor : ':nth-child(2) > .is-full-width > .radio-container',
    Buyer : ':nth-child(3) > .is-full-width > .radio-container',
    Tenant : ':nth-child(4) > .is-full-width > .radio-container',
    Step4_Next : '.c-button__icon',
    Step4Heading : '.u-text-heading--lg',
    erroralert : '.content'
   }

   checkingNumOfRadioButtons(){
   if( cy.get('input[type="radio"]').should('have.length', 4)) {
    cy.log('Number of Options on Step 4 are same');
   }  else {
     cy.log ('The number of options on Step 4 have changed');
   }
   }



 checkingradiobuttons () {
   if (cy.get('input[type="radio"]').each(($el) => {
    cy.wrap($el).should('not.be.checked')
  })) {
  cy.log ('All radio buttons are unchecked');
  } else{
 cy.log ('Not all radio buttons are unchecked');

  }
}
  
verifyStep4Heading () {
    return cy.get(this.weblocators.Step4Heading)

   }

clickingStep4Next(){
    cy.get(this.weblocators.Step4_Next).click()

}

clickingStep4Next(){
    cy.get(this.weblocators.Step4_Next).click()
}

checkingOwnerOccupier(){
    cy.get(this.weblocators.OwnerOccupier).click()
}

checkingOwnerInvestor(){
    cy.get(this.weblocators.OwnerInvestor).click()
}

checkingBuyer(){
    cy.get(this.weblocators.Buyer).click()
}

checkingTenant(){
    cy.get(this.weblocators.Tenant).click()
}

verifyingerroralert(){
    return cy.get(this.weblocators.erroralert).invoke('show')
}











}