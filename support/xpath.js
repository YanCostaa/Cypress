export const xpath = {

    login: {
    username: "//input[@id='user-name']",
    password: "//input[@id='password']",
    buttonLogin: "//input[@id='login-button']",
    errorMessage: "//h3[@data-test='error']"
    },

    homePage: {
    buttonMenu: "//button[@id='react-burger-menu-btn']",
    logout: "//a[@id='logout_sidebar_link']",
    backpackAddCart: '[data-test="add-to-cart-sauce-labs-backpack"]',
    removeCartButton: '[data-test="remove-sauce-labs-backpack"]',
    filter : '[data-test="product-sort-container"]',
    First_product: ':nth-child(1) > [data-test="inventory-item-description"]',
    blackBagpack: '[data-test="item-4-title-link"] > [data-test="inventory-item-name"]',
    redJacket: 'Test.allTheThings() T-Shirt (Red)',
    babyClothes: 'Sauce Labs Onesie',
    fleceeJacket: 'Sauce Labs Fleece Jacket',
    pedCartButton: '[data-test="add-to-cart"]',
    pedRemoveButton: '[data-test="remove"]'
    }
}