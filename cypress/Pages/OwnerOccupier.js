export class OwnerOccupierPage {

    weblocators = {

    Step5NextButton : '.button-inner',
    Step5Heading_OC : '.help-text',
    SixMonthRadio : ':nth-child(4) > .is-full-width > .radio-container',
    erroralert : '.content'



    }
    verifyingOCHeading (){
        return cy.get(this.weblocators.Step5Heading_OC)
  
      }
   
     verifyingerroralert(){
     return cy.get(this.weblocators.erroralert)

     }
     
     
      

     clickingStep5Next(){
        cy.get(this.weblocators.Step5NextButton).click({force:true})
    }


    checkingNumOfRadioButtons(){
        if( cy.get('input[type="radio"]').should('have.length', 7)) {
         cy.log('Number of Options on Step 5 (Owner Occupier) are same');
        }  else {
          cy.log ('The number of options on Step 5(Owner Occupier) have changed');
        }
        }
     
     
     
      checkingradiobuttons () {
        if (cy.get('input[type="radio"]').each(($el) => {
         cy.wrap($el).should('not.be.checked')
       })) {
       cy.log ('All radio buttons are unchecked on Owner Occupier Questionnaire');
       } else{
      cy.log ('Not all radio buttons are unchecked on Owner Occupier Questionnaire');
     
       }
     }

   
    Clicking6Month() {
    cy.get(this.weblocators.SixMonthRadio).click()

    }


}