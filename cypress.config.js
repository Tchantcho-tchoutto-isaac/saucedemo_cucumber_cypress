

const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default; //a ajouter

module.exports = defineConfig({
  // reporter: "cypress-mochawesome-reporter",
  e2e: {
    chromeWebSecurity: false,
    specPattern: "cypress/features/**/*.feature", // a ajouter
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber()); // ajouter
      // require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
});