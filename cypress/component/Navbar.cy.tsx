import { Navbar } from 'ui'

describe('Navbar', () => {
  it.skip('user should see navbar/sidebar', () => {
    cy.mount(<Navbar />)
    cy.get('nav').should('not.throw')
  })

  it.skip('user should see channels', () => {
    cy.mount(<Navbar />)
    cy.get('channel-1').should('not.throw')
  })
})
