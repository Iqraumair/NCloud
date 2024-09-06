export class DetailsPage {

    weblocators = {
    
        FName: '#sign-up-first-name-input',
        LName : '#sign-up-last-name-input',
        email : '#sign-up-email-input',
        mobile : '#phone-number-input',
        Details_Next : '.c-button__icon',
        Step3_Back : '.back-button',
        DetailsPageHeading : '.u-text-heading--lg',
        FNameError: ':nth-child(1) > up-help-text.ng-star-inserted > .help-text',
        LNameError: ':nth-child(2) > up-help-text.ng-star-inserted > .help-text',
        EmailError : ':nth-child(3) > up-help-text.ng-star-inserted > .help-text',
        MobileError: ':nth-child(4) > up-help-text.ng-star-inserted > .help-text'
        
      
    }

    

    
    
    enterFirstName(Fname){
    
        cy.get(this.weblocators.FName).type(Fname)

    }
    
    enterLastName(Lname){
    
        cy.get(this.weblocators.LName).type(Lname)

    }
    
    enteremail(email){
        cy.get(this.weblocators.email).type(email)
 
     }
 
    enterNumber(Mobile){
        
        cy.get(this.weblocators.mobile).clear()
        cy.get(this.weblocators.mobile).type(Mobile)

    }
    
    


    verifyingDetailsPage(){
    
        return cy.get(this.weblocators.DetailsPageHeading)
    }
    
    clickingNext(){

        cy.get(this.weblocators.Details_Next).click()
    }

verifyFNameError(){

    return cy.get(this.weblocators.FNameError)
}

verifyLNameError(){

    return cy.get(this.weblocators.LNameError)
}

verifyemailError(){

    return cy.get(this.weblocators.EmailError)
}

verifymobileError(){

    return cy.get(this.weblocators.MobileError)
    
}






    
    }
    
    
    