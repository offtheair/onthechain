import { Button } from 'ui'

describe('Button', () => {
  it('should have text', () => {
    cy.mount(<Button />)
    cy.get('button').should('have.text', 'Boop')
  })
})
