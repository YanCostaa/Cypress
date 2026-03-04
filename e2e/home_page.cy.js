import { xpath } from "../support/xpath";

describe('Home page scenario', () => {
    it('TS008 - Adding the product to the cart', () => {
        cy.successfulLogin()
        cy.get(xpath.homePage.backpackAddCart).click()
        cy.get(xpath.homePage.removeCartButton).should('is.visible')
    })

    it.only('TS009 - Removing the product to the cart', () => {
        cy.successfulLogin()
        cy.get(xpath.homePage.backpackAddCart).click()
        cy.get(xpath.homePage.removeCartButton).click()
        cy.get(xpath.homePage.backpackAddCart).should('is.visible')
    })
})