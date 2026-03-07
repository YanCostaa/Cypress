import { xpath } from "../support/xpath";

describe('Home page scenario', () => {
    it('TS008 - Adding the product to the cart', () => {
        cy.successfulLogin()
        cy.get(xpath.homePage.backpackAddCart).click()
        cy.get(xpath.homePage.removeCartButton).should('is.visible')
    })

    it('TS009 - Removing the product to the cart', () => {
        cy.successfulLogin()
        cy.get(xpath.homePage.backpackAddCart).click()
        cy.get(xpath.homePage.removeCartButton).click()
        cy.get(xpath.homePage.backpackAddCart).should('is.visible')
    })

    it.only('TS010 - Using a filter name Name (Z to A)', () => {
        cy.successfulLogin()
        cy.get(xpath.homePage.filter).select('Name (Z to A)')
        cy.get(xpath.homePage.First_product).should('is.visible').contains('Test.allTheThings() T-Shirt (Red)')
        
    })
})