describe('App test', () => {
  it('should show \'Hello World\'', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Hello World')
  })
})
