const elHome = require('./elements').ELEMENTS
import dataLogin from "../../../fixtures/dataLogin.json"

class Home{
    scrollDown() {
        cy.scrollTo('bottom');
    }
    
    validateMsgSubscrition(){
        cy.get(elHome.fieldMsgSubscrition).should('have.text', 'Subscription');
    }
    
    fillEmailSubscription(){
        cy.get(elHome.fieldSubscribeEmail).type(dataLogin.correctEmail);
        cy.get(elHome.btnSubscribeFooter).click();
    }
    
    validadeMsgSucessSubscription(){
        cy.get(elHome.fieldMsgSucessSubscription).should('have.text', 'You have been successfully subscribed!');
    }

    contactUs(){
        cy.get(elHome.btnContactUs).               click();
        cy.get(elHome.titleFormContacUs).          should('have.text','Get In Touch');
    } 
    
    HomeAddToCart(){
        cy.get(elHome.btnAddToCart).click()
    }
}

export default new Home()