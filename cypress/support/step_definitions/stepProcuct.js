import Product from "../Pages/Product";

When(/^Clicar no botão Products$/, () => {
    Product.clickBtnProducts();
});

When(/^Clicar em view product do primeiro produto$/, () => {
	Product.clickbtnViewProducts();
});

Then(/^Os detalhes do produto deverão estar visiveis$/, () => {
	Product.validateInformationProduct();
});


When(/^Pesquisar por um produto determinado$/, () => {
   Product.seachProduct();
});


Then(/^Devo validar que os produtos são apresentados$/, () => {
    Product.validateSeachProducts();
});


When(/^Adicionar produto ao cart$/, () => {
	Product.addToCart();
});

When(/^Adicionar segundo produto ao cart$/, () => {
	Product.addSecondToCart();
});


When(/^Clicar no modal continue shopping$/, () => {
    Product.clickModalContinueShopping();
});


Then(/^Devo validar os produtos no cart$/, () => {
    Product.validadeQuantityAndPrice();
});


When(/^adicionar 4 quantidades do produto$/, () => {
	Product.addQuantityProducts();
});


When(/^clicar no botão add to cart$/, () => {
	Product.buttonAddToCart();
});


Then(/^Devo validar a quantidade de 4 itens do produto$/, () => {
	Product.validateQuantityIsFour();
});






