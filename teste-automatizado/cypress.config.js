const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'q88zfn',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
