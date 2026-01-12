import { xpath } from './xpath'

Cypress.Commands.add('successfulLogin', () => {
cy.visit('/')
cy.xpath(xpath.login.username).type(Cypress.env('username'))
cy.xpath(xpath.login.password).type(Cypress.env('password'))
cy.xpath(xpath.login.buttonLogin).click()
cy.url().should('include', '/inventory')
cy.contains('Products').should('be.visible')
})