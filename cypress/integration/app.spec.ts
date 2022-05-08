it('should render app', () => {
  cy.visit('http://localhost:3000')
  cy.get('.App').should('be.visible')
})
