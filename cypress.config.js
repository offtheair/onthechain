const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '2t2yru',
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: false,
  },
  component: {
    specPattern: 'cypress/component/**/*.cy.{ts,tsx}',
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
    video: false,
  },
})
