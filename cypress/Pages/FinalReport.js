export class FinalReportPage {

    weblocators = {


ReportAddress : '.u-text-quote--lg',
    }


    verifyingAddress(){
        return cy.get(this.weblocators.ReportAddress)
    }
VerifyingEmailContent( email,password,text){
    cy.task('checkEmail', {username: 'email', password: 'password'}).then(emails => {
        const email = emails[0]
       const emailContent = email.html
// Use Cheerio to extract and verify the email content
       const $ = cheerio.load(emailContent)
       const messageBody = $('body').text()
       expect(messageBody).to.contain('text')



        })
    }

}