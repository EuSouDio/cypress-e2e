Feature: Product Tests

    Pagina de produtos

    Scenario: [CT8]: Verify All Products and product detail page
        Given   Que esteja na home page
        When    Clicar no botão Products
        And     Clicar em view product do primeiro produto
        Then    Os detalhes do produto deverão estar visiveis

    Scenario: [TC9]: Search Product
        Given    Que esteja na home page
        When     Clicar no botão Products
        And      Pesquisar por um produto determinado
        Then     Devo validar que os produtos são apresentados 

    Scenario: [TC12]: Add Products in Cart
        Given    Que esteja na home page
        When     Clicar no botão Products
        And      Adicionar produto ao cart
        And      Clicar no modal continue shopping
        And      Adicionar segundo produto ao cart
        And      Clicar no modal continue shopping
        And      Clicar no botão cart
        Then     Devo validar os produtos no cart

    Scenario: [TC13]: Verify Product quantity in Cart
        Given   Que esteja na home page
        When    Clicar em view product do primeiro produto
        And     Os detalhes do produto deverão estar visiveis
        And     adicionar 4 quantidades do produto
        And     clicar no botão add to cart
        And     Clicar no modal continue shopping
        And     Clicar no botão cart
        Then    Devo validar a quantidade de 4 itens do produto