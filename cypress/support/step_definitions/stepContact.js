import Contact from "../Pages/Contact";

When(/^clicar em submit$/, () => {
	Contact.clickBtnSubmitContact();
});


When(/^informar dados para contato$/, () => {
	Contact.fillFormContactUs();
});


Then(/^Devo validar a mensagem de sucesso$/, () => {
	Contact.validadeSucessfullyMsg();
});


When(/^clicar no botão home$/, () => {
	Contact.clickBtnHomeContact();
});
