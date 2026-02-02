import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import Login from "../Pages/Login"

//-------------------------- LOGIN ------------------------------------

Given(/^Que esteja na home page$/, () => {
	cy.visit("https://automationexercise.com");
});


When(/^Clicar em signupLogin$/, () => {
	Login.clickBtnSignupLogin();
});


When(/^clicar em botão signup$/, () => {
	Login.clickBtnSignup();
});


When(/^digitar usuário e senha ERRADOS e clicar em submit$/, () => {
    Login.loginWrongNameEmail();  
});

Then(/^mensagem de erro deve aparecer$/, () => {
	Login.failMsgSignup();
});

When(/^Informar nome e endereço de e-mail$/, () => {
	Login.signupNameEmail();
});


When(/^Preencher dados de tratamento$/, () => {
	Login.clickGender();
});


When(/^Preencher dados de Nome$/, () => {
	Login.FormSignupName(); 
});

When(/^Preencher dados de senha$/, () => {
	Login.FormSignupPassword();
});

When(/^Preencher dados de data de nascimento$/, () => {
	Login.FormSignupDateOfBirth();
});

When(/^Marcar checks newsletter e ofertas especiais$/, () => {
	Login.FormSignupNewsletterOtions();
});

When(/^Preencher dados de endereço$/, () => {
	Login.FormSignupAddress();
});
 
When(/^Clicar em Criar conta$/, () => {
    Login.createAccount();
});

When(/^Verificar se o usuario esta logado$/, () => {
    Login.isUserLogged();
});

Then(/^Apagar conta do usuario$/, () => {
    Login.deleteAccount();
});


When(/^tiver uma conta criada$/, () => {
    Login.clickBtnSignupLogin();
    Login.signupNameEmail();
    Login.clickBtnSignup();
    Login.clickGender();
    Login.FormSignupName();
    Login.FormSignupPassword();
    Login.FormSignupDateOfBirth();
    Login.FormSignupNewsletterOtions();
    Login.FormSignupAddress();
    Login.createAccount();
    Login.isUserLogged();
    Login.logoutAccount();
});


Then(/^logar na conta$/, () => {
	Login.loginNameEmail();
});


When(/^Fazer Loggout$/, () => {
    Login.logoutAccount();
});


When(/^Loggout deve ter sido realizado$/, () => {
	Login.validateLoggout();
});

When(/^criar uma conta ja existente para o email$/, () => {
    Login.clickBtnSignupLogin();
    Login.signupNameEmail();
    Login.clickBtnSignup();
});


When(/^Apresentará erro que email ja é cadastrado$/, () => {
	Login.validateMsgExistingAccount();
});


When(/^Criar conta$/, () => {
    Login.clickBtnSignupLogin();
    Login.signupNameEmail();
    Login.clickBtnSignup();
    Login.clickGender();
    Login.FormSignupName();
    Login.FormSignupPassword();
    Login.FormSignupDateOfBirth();
    Login.FormSignupNewsletterOtions();
    Login.FormSignupAddress();
    Login.createAccount();
    Login.isUserLogged();
});

When(/^Validar conta criada$/, () => {
	Login.isUserLogged();
});
