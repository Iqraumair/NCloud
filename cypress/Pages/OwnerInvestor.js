export class OwnerInvestorPage {

    weblocators = {

    Step5_Next_OC :'.c-icon',

    Invlast:':nth-child(7) > .is-full-width > .radio-container'
    


    }

    checkingNumOfRadioButtons(){
        if( cy.get('input[type="radio"]').should('have.length', 7)) {
         cy.log('Number of Options on Step 5 (Owner Investor) are same');
        }  else {
          cy.log ('The number of options on Step 5(Owner Investor) have changed');
        }
        }
     
     
     
      checkingradiobuttons () {
        if (cy.get('input[type="radio"]').each(($el) => {
         cy.wrap($el).should('not.be.checked')
       })) {
       cy.log ('All radio buttons are unchecked on Owner Investor Questionnaire');
       } else{
      cy.log ('Not all radio buttons are unchecked on Owner Investor Questionnaire');
     
       }
     }

     clickingStep5Next(){
        cy.get(this.weblocators.Step5_Next_OC).click({force:true})
    }

   
    Clicking6Month() {
    cy.get(this.weblocators.Invlast).last().click()

    }


}