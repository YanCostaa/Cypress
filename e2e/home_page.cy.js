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

    it('TS010 - Using a filter "Name (Z to A)"', () => {
        cy.successfulLogin()
        cy.get(xpath.homePage.filter).select('Name (Z to A)')
        cy.get(xpath.homePage.First_product).should('be.visible').contains(xpath.homePage.redJacket)
    })

    it('TS011 - Using a filter "Price (low to high)"', () => {
        cy.successfulLogin()
        cy.get(xpath.homePage.filter).select('Price (low to high)')
        cy.get(xpath.homePage.First_product).should('be.visible').contains(xpath.homePage.babyClothes)
    })

    it('TS012 - using a filter "Price (high to low)"', () => {
        cy.successfulLogin()
        cy.get(xpath.homePage.filter).select('Price (high to low)')
        cy.get(xpath.homePage.First_product).should('is.visible').contains(xpath.homePage.fleceeJacket)
    })

    it.only('TS013 - Accessing the order and adding it to the cart', () => {
        cy.successfulLogin()
        cy.get(xpath.homePage.blackBagpack).click()
        cy.get(xpath.homePage.pedCartButton).click()
        cy.get(xpath.homePage.pedRemoveButton).click()
        cy.get(xpath.homePage.pedCartButton).should('be.visible')
    })

})