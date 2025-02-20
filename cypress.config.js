const { defineConfig } = require("cypress");
const mochawesome = require('cypress-mochawesome-reporter/plugin');

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  projectId: "e1j6yq",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
  },
  video: true, // Enable video recording
  screenshotOnRunFailure: true, // Capture screenshots on test failure
  trashAssetsBeforeRuns: false, // ✅ Prevent Cypress from deleting videos
  videoCompression: false, // ✅ Prevent Cypress from compressing/trimming video
  //videoUploadOnPasses: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/integration/examples/*.js'
  },
});
