import { AddressPage } from "../../Pages/AddressPage"
import { AddressFoundPage } from "../../Pages/Step1";
import { PropertyDetailsPage } from "../../Pages/PropertyDetails";
import { DetailsPage } from "../../Pages/Details";
import { questionnairePage } from "../../Pages/questionnaire";
import { OwnerOccupierPage } from "../../Pages/OwnerOccupier";
import { FinalReportPage } from "../../Pages/FinalReport";
import { OwnerInvestorPage } from "../../Pages/OwnerInvestor";
import { BuyerPage } from "../../Pages/Buyer";

const AddObj = new AddressPage();
const AddFoundObj = new AddressFoundPage();
const PropertyDetailsObj = new PropertyDetailsPage();
const DetailsPageObj = new DetailsPage();
const QuestionPageObj = new questionnairePage();
const OwnerOccPageObj = new OwnerOccupierPage();
const OwnerInvPageObj = new OwnerInvestorPage();
const BuyerPageObj = new BuyerPage();
const FinalReportObj = new FinalReportPage();

//const serverID = 'o4lafzwk';
//const emailDomain = '@o4lafzwk.mailosaur.net';

import AddressData from "../../fixtures/AddressData.json"
import DetailsData from "../../fixtures/DetailsData.json"

describe ('Report generation', () => {

 beforeEach(() => {
   cy.visit('https://nurturecloud-demo.raywhite.com/property-report/address')

 })
it ('It generates report for Owner Occupier :' , () => {

   //AddObj.OpenLink()
   AddObj.enterAddress(AddressData.address)
   AddFoundObj.verifyingHeader().should('contain', 'Step 1 ')
   AddFoundObj.verifyingaddress().should('contain', AddressData.address)
   AddFoundObj.clickingStep1Next()
  //adding details
  PropertyDetailsObj.verifyStep2Heading().should('contain', 'Let us know your property details')
  
  PropertyDetailsObj.enterBedrooms(2)
  PropertyDetailsObj.enterbathrooms(1)
  PropertyDetailsObj.enterParkings(0)
  PropertyDetailsObj.clickingStep2Next() 

  //Details page
   DetailsPageObj.verifyingDetailsPage('contains','Confirm your details')
   DetailsPageObj.enterFirstName(DetailsData.FName)
   DetailsPageObj.enterLastName(DetailsData.LName)
   DetailsPageObj.enteremail(DetailsData.email)
   DetailsPageObj.enterNumber(DetailsData.Mobile)
   DetailsPageObj.clickingNext()

   //Questionnaire Page
   QuestionPageObj.verifyStep4Heading().should('contain','What is your relationship with this property?')
   QuestionPageObj.checkingradiobuttons()
   QuestionPageObj.checkingNumOfRadioButtons()
   QuestionPageObj.checkingOwnerOccupier()
   QuestionPageObj.clickingStep4Next()

   //Questionaire Owner Occupier Page
     
   OwnerOccPageObj.verifyingOCHeading().should('contain',' Help us get you the best service by telling us a bit more about you and your property. ')
   OwnerOccPageObj.checkingNumOfRadioButtons()
   OwnerOccPageObj.checkingradiobuttons()
   OwnerOccPageObj.Clicking6Month()
   OwnerOccPageObj.clickingStep5Next()

   //Final Report
   FinalReportObj.verifyingAddress().should('contain',AddressData.reportAddress)
   //Would have checked the email contents through mailosaur but it requires an iOS system and i didnt have that

  }),
 
  it ('It generates report for Owner Investor :' , () => {

    AddObj.enterAddress(AddressData.address)
    AddFoundObj.clickingStep1Next()
   //adding details
   PropertyDetailsObj.clickingStep2Skip()
   
 
   //Details page
   
    DetailsPageObj.enterFirstName(DetailsData.FName)
    DetailsPageObj.enterLastName(DetailsData.LName)
    DetailsPageObj.enteremail(DetailsData.email)
    DetailsPageObj.enterNumber(DetailsData.Mobile)
    DetailsPageObj.clickingNext()
 
    //Questionnaire Page
   
    QuestionPageObj.checkingOwnerInvestor()
    QuestionPageObj.clickingStep4Next()
 
    //Questionaire Owner Investor Page
   
      OwnerInvPageObj.Clicking6Month()
      OwnerInvPageObj.clickingStep5Next()
    
    //Final Report
    FinalReportObj.verifyingAddress().should('contain',AddressData.reportAddress)
    cy.log ('Owner Investor Report is generated')
    //Would have checked the email contents through mailosaur but it requires an iOS system and i didnt have that

   })


   it ('It generates report for Buyer :' , () => {

    AddObj.enterAddress(AddressData.address)
    AddFoundObj.clickingStep1Next()
   //adding details
   PropertyDetailsObj.clickingStep2Skip()
   
 
   //Details page
   
    DetailsPageObj.enterFirstName(DetailsData.FName)
    DetailsPageObj.enterLastName(DetailsData.LName)
    DetailsPageObj.enteremail(DetailsData.email)
    DetailsPageObj.enterNumber(DetailsData.Mobile)
    DetailsPageObj.clickingNext()
 
    //Questionnaire Page
   
    QuestionPageObj.checkingBuyer()
    QuestionPageObj.clickingStep4Next()
    cy.wait(500)
    //Questionaire Buyer Page
    
    BuyerPageObj.ClickingYes()
    

    BuyerPageObj.clickingStep5Next()
    //Final Report
    
    FinalReportObj.verifyingAddress().should('contain',AddressData.reportAddress) 
    cy.log ('Buyer Report is generated')

    
   
    //Would have checked the email contents through mailosaur but it requires an iOS system and i didnt have that
   })
 
   it ('It generates report for Tenant :' , () => {

    AddObj.enterAddress(AddressData.address)
    AddFoundObj.clickingStep1Next()
   //adding details
   PropertyDetailsObj.clickingStep2Skip()
  

   //Details page
   
    DetailsPageObj.enterFirstName(DetailsData.FName)
    DetailsPageObj.enterLastName(DetailsData.LName)
    DetailsPageObj.enteremail(DetailsData.email)
    DetailsPageObj.enterNumber(DetailsData.Mobile)
    DetailsPageObj.clickingNext()
 
    //Questionnaire Page
   
    QuestionPageObj.checkingTenant()
    QuestionPageObj.clickingStep4Next()
    cy.wait(500)
    
    FinalReportObj.verifyingAddress().should('contain',AddressData.reportAddress) 
    cy.log ('Tenant Report is generated')
    //Would have checked the email contents through mailosaur but it requires an iOS system and i didnt have that
   })
 
   it ('It checks for errors :' , () => {
    
    AddObj.ClickingGetStarted()

    
    AddObj.verifyinghelptext().should('contain', ' Please select an item from the list ')
     cy.log ('No address found error')
    
     AddObj.enterAddress(AddressData.address)
    AddFoundObj.clickingStep1Next()

    PropertyDetailsObj.clickingStep2Next()
    PropertyDetailsObj.verifyerrorbedrooms().should('contain', ' Please provide the number of bedrooms ')
    PropertyDetailsObj.verifyerrorbathrooms().should('contain', ' Please provide the number of bathrooms ')
    PropertyDetailsObj.verifyerrorparking().should('contain', ' Please provide the number of parking spaces ')
     cy.log('Errors on Property details page on clicking next without giving values')
    PropertyDetailsObj.clickingStep2Skip()
     
    DetailsPageObj.clickingNext()

    DetailsPageObj.verifyFNameError().should('contain', ' Please enter your first name ')
    DetailsPageObj.verifyLNameError().should('contain', ' Please enter your last name ')
    DetailsPageObj.verifyemailError().should('contain', ' Please enter your email address ')
    DetailsPageObj.verifymobileError().should('contain', ' Please enter a valid phone number ')
 
    cy.log ('Errors on details page for not entering data')

    DetailsPageObj.enterFirstName(DetailsData.FNameWrong)
    DetailsPageObj.enterLastName(DetailsData.LNameWrong)
    DetailsPageObj.enteremail(DetailsData.emailWrong)
    DetailsPageObj.verifyemailError().should('contain', ' Please enter your email address ')
    
    DetailsPageObj.enterNumber(DetailsData.MobileWrong)
    DetailsPageObj.verifymobileError().should('contain', ' Please enter a valid phone number ')
    DetailsPageObj.clickingNext()
    cy.log('Wrong format not accepted for email and number')
    
    DetailsPageObj.enterFirstName(DetailsData.FName)
    DetailsPageObj.enterLastName(DetailsData.LName)

    DetailsPageObj.enteremail(DetailsData.email)
   
    DetailsPageObj.enterNumber(DetailsData.Mobile)
    DetailsPageObj.clickingNext()
    cy.wait(500)
    QuestionPageObj.clickingStep4Next()
    cy.get('.c-alert').should('contain', 'Please select an answer' )
    QuestionPageObj.checkingOwnerOccupier()
    
    OwnerOccPageObj.clickingStep5Next()
    OwnerOccPageObj.Clicking6Month()
    OwnerOccPageObj.clickingStep5Next()
   })

  




})
