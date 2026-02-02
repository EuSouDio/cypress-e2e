import Checkout from "../Pages/Checkout";


When(/^Validar dados de endereço$/, () => {
	Checkout.validadeAdressCheckout();
});

When(/^Validar preço total$/, () => {
	Checkout.validateTotalPrice();
});


When(/^Adicionar informação$/, () => {
	Checkout.addInformationTextArea();
});


When(/^Informar dados do cartão$/, () => {
	Checkout.dataPayment();
});


When(/^Clicar em pagar e confirmar ordem$/, () => {
	Checkout.clickPayAndConfirmOrder();
});


When(/^Validar mensagem de sucesso$/, () => {
	Checkout.validadeMsgSucessPlaced();
});








