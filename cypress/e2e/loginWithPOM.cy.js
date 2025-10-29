import loginPage from '../pages/loginPage'

describe('Login with POM', () => {
  it('logs in using POM', () => {
    loginPage.visit()
    loginPage.login('standard_user', 'secret_sauce')
    cy.url().should('include', '/inventory.html')
    cy.get('.title').should('contain', 'Products')
  })
})
