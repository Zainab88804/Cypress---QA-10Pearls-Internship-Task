describe('Product Navigation Test using Custom Command', () => {
  it('should login and view product details', () => {
    // Using custom login command
    cy.login('standard_user', 'secret_sauce')

    // Verify homepage (product list)
    cy.url().should('include', '/inventory.html')
    cy.get('.inventory_item').should('have.length.greaterThan', 0)

    // Click first product
    cy.get('.inventory_item_name').first().click()

    // Verify product detail page
    cy.get('.inventory_details_name').should('be.visible')
    cy.get('.inventory_details_desc').should('be.visible')
    cy.get('.inventory_details_price').should('contain', '$')

    // Go back
    cy.get('[data-test="back-to-products"]').click()
    cy.url().should('include', '/inventory.html')
  })
})
