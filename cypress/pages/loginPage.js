class LoginPage {
  visit() { cy.visit('https://www.saucedemo.com/') }
  usernameField() { return cy.get('[data-test="username"]') }
  passwordField() { return cy.get('[data-test="password"]') }
  loginButton() { return cy.get('[data-test="login-button"]') }

  login(username, password) {
    this.usernameField().type(username)
    this.passwordField().type(password)
    this.loginButton().click()
  }
}

export default new LoginPage()
