describe('Login Success Test', () => {
  it('should login successfully and show homepage', () => {
    cy.visit('https://www.saucedemo.com/')
    
    // Enter correct username and password
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    // Verify that we reached the homepage
    cy.url().should('include', '/inventory.html')
    cy.get('.title').should('contain', 'Products')
  })
})
