import Cart from "../Pages/Cart";





When(/^Clicar no botão cart$/, () => {
	Cart.clickBtnCart();
    cy.get('.active').should('have.text', 'Shopping Cart')
});

Then(/^Devo enviar email para receber novidades$/, () => {
    Cart.sendSubscribe();
});

When(/^Clicar em prosseguir para Checkout$/, () => {
    Cart.proceedToCheckout();
});


When(/^Clicar em Register-Login$/, () => {
    Cart.linkRegisterLogin();
});


