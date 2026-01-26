const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalStudio: false,
    video: true,
    baseUrl: 'http://localhost:3000',
    // viewportWidth: 1440,
    // viewportHeight: 900 //uma vez que eu defino essas viewport, elas passam a ser absolutas
    //então caso eu queira testar na dimensão de um iphone por exemplo, teria que abdicar disso

  },
});
