/// <reference types="Cypress"/>
import dataLogin            from "../../../fixtures/dataLogin.json"
import mensages             from "../../../fixtures/mensages.json"
import formularioLogin      from "../../../fixtures/formularioLogin.json"
import formularioLoginUS    from "../../../fixtures/formularioLoginUS.json"
const elLogin = require('./elements').ELEMENTS

class Login {
    clickLogin() {
        cy.get(elLogin.carrouselhome).              should("be.visible");
        cy.get(elLogin.btnSignupLogin).             click();
        cy.get(elLogin.formSignupLogin).            should("be.visible");
    };
    loginWrongNameEmail() {
        cy.get(elLogin.fieldLoginEmail).            click().type(dataLogin.failEmail);
        cy.get(elLogin.fieldLoginPasswd).           click().type(dataLogin.correctPassword);
        cy.get(elLogin.btnLogin).                   click();
    };
    loginNameEmail() {
        cy.get(elLogin.fieldLoginEmail).            click().type(dataLogin.correctEmail);
        cy.get(elLogin.fieldLoginPasswd).           click().type(dataLogin.correctPassword);
        cy.get(elLogin.btnLogin).                   click();
    };

    failMsgSignup() {
        cy.get(elLogin.fieldMsgSignup).             should('have.text', mensages.failMsgSignup);
    };

    signupNameEmail() {
        cy.get(elLogin.fieldSignupName).            click().type(formularioLogin.nameSignup);
        cy.get(elLogin.fieldSignupEmail).           click().type(dataLogin.correctEmail);
    };

    clickBtnSignupLogin() {
        cy.get(elLogin.btnSignupLogin).             click();    
    };

    clickBtnSignup() {
        cy.get(elLogin.btnSignup).                  click();    
    };

    clickGender() {
        cy.get(elLogin.rdbGenderMasc).              click();
    };

    FormSignupName() {
        cy.get(elLogin.fieldFormNameSignup).        click().clear().type(formularioLogin.informationName);    
    };

    FormSignupPassword() {
        cy.get(elLogin.fieldFormPasswordSignup).    click().type(formularioLogin.infomationPassword);
    };

    FormSignupDateOfBirth() {
        cy.get(elLogin.fieldFormDayBirthSignup).    select(formularioLogin.informationDay);
        cy.get(elLogin.fieldFormMonthBirthSignup).  select(formularioLogin.informationMonth);
        cy.get(elLogin.fieldFormYearBirthSignup).   select(formularioLogin.informationYear);
    };

    FormSignupNewsletterOtions() {
        cy.get(elLogin.fieldFormNewsletterSignup).  check();
        cy.get(elLogin.fieldFormOptionSignup).      check();    
    };

    FormSignupAddress() {
        if(Cypress.env('country')==="BR"){
            cy.get(elLogin.fieldFormFirstName).     click().type(formularioLogin.adressName);
            cy.get(elLogin.fieldFormLastName).      click().type(formularioLogin.adressLastName);
            cy.get(elLogin.fieldFormCompany).       click().type(formularioLogin.adressCompany);
            cy.get(elLogin.fieldFormAddress).       click().type(formularioLogin.adress);
            cy.get(elLogin.fieldFormAddress2).      click().type(formularioLogin.adress2);
            cy.get(elLogin.fieldFormCountry).             select(formularioLogin.adressCountry);
            cy.get(elLogin.fieldFormState).         click().type(formularioLogin.adressState);
            cy.get(elLogin.fieldFormCity).          click().type(formularioLogin.adressCity);
            cy.get(elLogin.fieldFormZipcode).       click().type(formularioLogin.adressZipcode);
            cy.get(elLogin.fieldFormMobileNumber).  click().type(formularioLogin.adressPhone);
        }else if(Cypress.env('country')==="US"){
            cy.get(elLogin.fieldFormFirstName).     click().type(formularioLoginUS.adressName);
            cy.get(elLogin.fieldFormLastName).      click().type(formularioLoginUS.adressLastName);
            cy.get(elLogin.fieldFormCompany).       click().type(formularioLoginUS.adressCompany);
            cy.get(elLogin.fieldFormAddress).       click().type(formularioLoginUS.adress);
            cy.get(elLogin.fieldFormAddress2).      click().type(formularioLoginUS.adress2);
            cy.get(elLogin.fieldFormCountry).             select(formularioLoginUS.adressCountry).should("have.value", "Australia");
            cy.get(elLogin.fieldFormState).         click().type(formularioLoginUS.adressState);
            cy.get(elLogin.fieldFormCity).          click().type(formularioLoginUS.adressCity);
            cy.get(elLogin.fieldFormZipcode).       click().type(formularioLoginUS.adressZipcode);
            cy.get(elLogin.fieldFormMobileNumber).  click().type(formularioLoginUS.adressPhone);

        }
    };  

    createAccount() {
        cy.get(elLogin.btnCreateAccount).           click();
        cy.get(elLogin.msgActionAccount).           should('have.text', mensages.MsgAccountCreated);
        cy.get(elLogin.btnContinue).                click();    
    };
    
    isUserLogged() {
        cy.get(elLogin.btnLogout).                  should('have.text', ' Logout');
        cy.get(elLogin.avatarLogged).               should('be.visible');
        cy.get(elLogin.avatarLogged).               should('have.text', ' Logged in as Dionisio Teste');
    };
    
    deleteAccount() {
        cy.get(elLogin.btnDeleteAccount).           click();
        cy.get(elLogin.msgActionAccount).           should('have.text', 'Account Deleted!');
        cy.get(elLogin.btnContinue).                click();    
    };

    logoutAccount(){
        cy.get(elLogin.btnLogout).                  click();
    };

    validateLoggout(){
        cy.get(elLogin.clickBtnSignupLogin).        should("have.text", "Signup / Login");
    }

    validateMsgExistingAccount(){
        cy.get(elLogin.fieldMsgExistEmail).         should('be.visible');
        cy.get(elLogin.fieldMsgExistEmail).         should('have.text', mensages.failMsgCreateAccount);
    }

};



export default new Login();


