/// <reference types='Cypress'/>
import dataLogin            from "../../../fixtures/dataLogin.json"
import formularioLogin      from "../../../fixtures/formularioLogin.json"
import formularioContact    from "../../../fixtures/formularioContact.json"


const elContact = require('./elements').ELEMENTS
const elLogin   = require('../Login/elements').ELEMENTS
class Contact {

    contactUs(){
        cy.get(elContact.btnContactUs).click();
        cy.get(elContact.titleFormContacUs).should('have.text','Get In Touch');
    }

    fillFormContactUs(){
        cy.get(elContact.fieldFormNameContact).click()
        .type(`${formularioLogin.adressName} ${formularioLogin.adressLastName}`);
        cy.get(elContact.fieldFormEmailContact).click().type(dataLogin.correctEmail);
        cy.get(elContact.fieldFormSubjectContact).click().type(formularioContact.subjectTitle);
        cy.get(elContact.fieldFormMensageContact).click().type(formularioContact.mensageContact);
        cy.get(elContact.fieldAtachment).selectFile('cypress/anexos/boasVindas.png')
    }    

    clickBtnSubmitContact(){
        cy.get(elContact.btnSubmitContact).click()
        
    }

    validadeSucessfullyMsg(){
        cy.get(elContact.msgStatusContact)
        .should('have.text','Success! Your details have been submitted successfully.')
    }

    clickBtnHomeContact(){
        cy.get(elContact.btnHomeContact).click()
        cy.get(elLogin.carrouselhome).should('be.visible')
    }


}

export default new Contact();

