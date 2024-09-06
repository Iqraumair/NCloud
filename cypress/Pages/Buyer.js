export class BuyerPage {

    weblocators = {

    Step5_Next_OC : '.c-button__icon',
    Step5Heading_OC : '.help-text',
    Yesbutton : ':nth-child(2) > .is-full-width > .radio-container'
    }

    checkingNumOfRadioButtons(){
        if( cy.get('input[type="radio"]').should('have.length', 2)) {
         cy.log('Number of Options on Step 5 (Buyer) are same');
        }  else {
          cy.log ('The number of options on Step 5(Buyer) have changed');
        }
        }
     
     
     
      checkingradiobuttons () {
        if (cy.get('input[type="radio"]').each(($el) => {
         cy.wrap($el).should('not.be.checked')
       })) {
       cy.log ('All radio buttons are unchecked on Buyer Questionnaire');
       } else{
      cy.log ('Not all radio buttons are unchecked on Buyer Questionnaire');
     
       }
     }

     
      

     clickingStep5Next(){
        cy.get(this.weblocators.Step5_Next_OC).click()
    }

   
    ClickingYes() {
    cy.get(this.weblocators.Yesbutton).first().click({force:true})

    }


}