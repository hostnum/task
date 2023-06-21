Cypress.Commands.add('searchProduct', (keyword) => {
    cy.get('#search-input').type(keyword)
    cy.get('#search-input').type('{enter}')
  })
  