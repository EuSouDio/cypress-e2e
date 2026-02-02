const { defineConfig } = require("cypress");                          //Mochawesome report
const cucumber = require('cypress-cucumber-preprocessor').default;
const allureWriter = require('@shelex/cypress-allure-plugin/writer'); //report allure

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',                           //Mochawesome report
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);             //Mochawesome report
      on('file:preprocessor', cucumber())
      allureWriter(on, config);                                       //report allure
      return config;                                                  //report allure
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}"
  },
  env:{
    country: "US" //BR, US, DEU
  }
});
