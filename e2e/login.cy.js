import {xpath, homePage} from '../support/xpath'
describe('Login', () => {
    it('TS001 - Successful login', () => {
        cy.successfulLogin()
    }),

    it('TS002 - Attempt to log in without providing the required data', () => {
        cy.visit('/')
        cy.xpath(xpath.login.buttonLogin).click()
        cy.xpath(xpath.login.errorMessage).contains('Epic sadface: Username is required')
    })

    it('TS003 - Attempt to log in by providing only the username', () => {
        cy.visit('/')
        cy.xpath(xpath.login.username).type(Cypress.env('username'))
        cy.xpath(xpath.login.buttonLogin).click()
        cy.xpath(xpath.login.errorMessage).contains('Epic sadface: Password is required')
    })

    it('TS004 - Attempt to log in by providing only the password', () => {
        cy.visit('/')
        cy.xpath(xpath.login.password).type(Cypress.env('password'))
        cy.xpath(xpath.login.buttonLogin).click()
        cy.xpath(xpath.login.errorMessage).contains('Epic sadface: Username is required')
    })

    it('TS005 - Attempt to log in by providing an invalid username', () => {
        cy.visit('/')
        cy.xpath(xpath.login.username).type('Yan Costa')
        cy.xpath(xpath.login.password).type(Cypress.env('password'))
        cy.xpath(xpath.login.buttonLogin).click()
        cy.xpath(xpath.login.errorMessage).contains('Epic sadface: Username and password do not match any user in this service')
    })

    it('TS006 - Attempt to log in by providing an invalid password', () => {
        cy.visit('/')
        cy.xpath(xpath.login.username).type(Cypress.env('username'))
        cy.xpath(xpath.login.password).type('TesteTeste')
        cy.xpath(xpath.login.buttonLogin).click()
        cy.xpath(xpath.login.errorMessage).contains('Epic sadface: Username and password do not match any user in this service')
    })
    it('TS007 Logging in and logging out', () => {
        cy.successfulLogin()
        cy.xpath(xpath.homePage.buttonMenu).click()
        cy.xpath(xpath.homePage.logout).click()
        cy.xpath(xpath.login.buttonLogin).should('is.visible')
    })
})