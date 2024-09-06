const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    env : {

      Link : 'individual-rise@o4lafzwk.mailosaur.net',
      MAILOSAUR_API_KEY: "sQ9ECLJNVbk1yO0fAQeILrkI8WME4lJ4"


    },
    setupNodeEvents(on, config) {
     //implement node event listeners here
      

    },
  },
//env:{
//baseUrl : 'https://nurturecloud-demo.raywhite.com/property-report/address'

//}

});


