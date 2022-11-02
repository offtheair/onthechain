import { LandingPage } from 'ui'

describe('LandingPage', () => {
  it.skip('user should see LandingPage', () => {
    cy.mount(<LandingPage />)
    cy.get('home').should('not.throw')
  })

  it.skip('user should see video', () => {
    cy.mount(<LandingPage />)
    cy.get('video').should('not.throw')
  })
})
