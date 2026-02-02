const elCart = require('./elements').ELEMENTS
import dataLogin from "../../../fixtures/dataLogin.json"

class Cart{
    clickBtnCart() {
        cy.get(elCart.btnCart).click();
    }
    
    sendSubscribe() {
        cy.get(elCart.fieldSubscribeEmail).type(dataLogin.correctEmail);
        cy.get(elCart.btnSubscribeFooter).click();
        cy.get(elCart.msgAlertSubscribe).should('have.text', 'You have been successfully subscribed!')    
    }

    proceedToCheckout(){
        cy.get(elCart.btnProceedToCheckout).click();
    }

    linkRegisterLogin(){
        cy.get(elCart.linkRegisterLogin).click();
    }
}

export default new Cart();