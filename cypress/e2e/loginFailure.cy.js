describe('Login Failure Test', () => {
  it('should show an error for invalid login', () => {
    cy.visit('https://www.saucedemo.com/')
    
    // Enter wrong username and password
    cy.get('[data-test="username"]').type('invalid_user')
    cy.get('[data-test="password"]').type('wrong_password')
    cy.get('[data-test="login-button"]').click()

    // Validate error message appears
    cy.get('[data-test="error"]').should('be.visible')
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match')
  })
})
