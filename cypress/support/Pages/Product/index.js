const elProduct = require('./elements').ELEMENTS
const elCart    = require('../Cart/elements').ELEMENTS

class Product {

    clickBtnProducts() {
        cy.get(elProduct.btnProducts).click();
        cy.get(elProduct.txtAllProducts).should('be.visible');
    }
    
    clickbtnViewProducts() {
        cy.get(elProduct.btnViewProduct).click();
    }

    validateInformationProduct() {
        cy.get(elProduct.txtProductName).should('be.visible');
        cy.get(elProduct.txtProductCategory).should('be.visible');
        cy.get(elProduct.txtProductPrice).should('be.visible');
        cy.get(elProduct.txtProductAvailability).should('be.visible');
        cy.get(elProduct.txtProductCondition).should('be.visible');
        cy.get(elProduct.txtProductBrand).should('be.visible');
    }

    seachProduct() {
        cy.get(elProduct.fieldSearchProduct).type('top');
        cy.get(elProduct.btnSeachProduct).click();
    }

    validateSeachProducts() {
        cy.get(elProduct.msgSeachedProducts).should('have.text', 'Searched Products');
        cy.get(elProduct.fieldnNameProduct).should('have.text', 'Winter Top');
    }

    addToCart() {
        cy.get(elProduct.btnFirstAddToCart).trigger('mouseover').click()
    }

    addSecondToCart() {
        cy.get(elProduct.btnSecondAddToCart).trigger('mouseover').click()
    }

    clickModalContinueShopping() {
        cy.get(elProduct.btnModalContinueShopping).click()
    }

    validadeQuantityAndPrice() {
        cy.get(elProduct.txtProductBlueTop).should('have.text','Blue Top');
        cy.get(elProduct.fieldQuantityBlueTop).should('have.text', '1')
        cy.get(elProduct.txtPriceTotalBlueTop).should('have.text', 'Rs. 500')
        cy.get(elProduct.txtProductMenTshirt).should('have.text', 'Men Tshirt');
        cy.get(elProduct.fieldQuantityMenTshirt).should('have.text', '1')
        cy.get(elProduct.txtPriceTotalMenTshirt).should('have.text', 'Rs. 400')    
    }

    addQuantityProducts() {
        cy.get(elProduct.fieldQuantity).click();
        cy.get(elProduct.fieldQuantity).clear().type("4");
    }

    buttonAddToCart() {
        cy.get(elProduct.buttonAddToCart).click();
    }

    validateQuantityIsFour() {
        cy.get(elCart.fieldQuantity).should('have.text',"4")
    }
}

export default new Product();