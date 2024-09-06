const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    env : {

      Link : 'individual-rise@o4lafzwk.mailosaur.net',
      


    },
    setupNodeEvents(on, config) {
     //implement node event listeners here
      

    },
  },
//env:{
//baseUrl : 'https://nurturecloud-demo.raywhite.com/property-report/address'

//}

});


