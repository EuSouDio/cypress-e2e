const elCheckout = require('./elements').ELEMENTS
import formularioLoginUS from "../../../fixtures/formularioLoginUS.json"
import mensages          from "../../../fixtures/mensages.json"
/// <reference types="cypress"/>


class Checkout {

    validadeAdressCheckout(){
        cy.get(elCheckout.fieldFirstName)
        .should("contain.text", formularioLoginUS.adressName+" "+formularioLoginUS.adressLastName);
        cy.get(elCheckout.fieldAdressCompany).should("contain.text", formularioLoginUS.adressCompany);
        cy.get(elCheckout.fieldAdress).should("contain.text", formularioLoginUS.adress);
        cy.get(elCheckout.fieldAdress2).should("contain.text", formularioLoginUS.adress2);
        cy.get(elCheckout.fieldAdressCity)
        .should("contain.text", formularioLoginUS.adressCity+" "+formularioLoginUS.adressState+"\n\t\t\t\t\t\t\t\t"+formularioLoginUS.adressZipcode);
        cy.get(elCheckout.fieldCountryName).should("contain.text", formularioLoginUS.adressCountry);
        cy.get(elCheckout.fieldAdressPhone).should("contain.text", formularioLoginUS.adressPhone);
    }
    validateTotalPrice(){
        cy.get(elCheckout.fieldTotalPrice).should("contain.text", "Rs. 500")
    }
    addInformationTextArea(){
        cy.get(elCheckout.fieldTextAreaDescription).type(mensages.MsgDescriptionCheckout);
        cy.get(elCheckout.btnPlaceOrder).click();
        
    }
    dataPayment(){
        cy.get(elCheckout.fieldNameCard).type("Dionisio Teste Automacao");
        cy.get(elCheckout.fieldNumberCard).type("1111222233334444");
        cy.get(elCheckout.fieldCvcCard).type('123');
        cy.get(elCheckout.fieldDataExpiryMonthCard).type("01");
        cy.get(elCheckout.fieldExpiryYearCard).type("2029")
    }

    clickPayAndConfirmOrder(){
        cy.get(elCheckout.btnPayAndConfirmOrder).click()
    }

    validadeMsgSucessPlaced(){
        cy.get(elCheckout.msgSucessPlaced).should("have.text", mensages.MsgSucessPlaced)
    }

}

export default new Checkout()