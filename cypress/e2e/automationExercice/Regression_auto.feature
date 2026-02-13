Feature: E-commerce Automation exercice

    Pagina de testes e-commerce para prática de testes automatizados.



    Scenario: [CT6]: Contact Us Form
        Given   Que esteja na home page
        When    Clicar no botão Contact Us
        And     informar dados para contato
        And     clicar em submit
        Then    Devo validar a mensagem de sucesso
        And     clicar no botão home

    Scenario: [CT7]: Verificação da pagina Test Cases
        Given   Que esteja na home page
        When    Quando eu clicar no botão test Cases
        Then    Devo estar na pagina de test cases

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

    Scenario: [CT10]: Verify Subscription in home page
        Given   Que esteja na home page
        When    scrolar a pagina ate o footer
        And     verificar o texto Subscription
        And     informar email no campo Subscription e clicar no botão
        Then    receber mensagem de cadastro com sucesso

    Scenario: [CT11]: Verify Subscription in Cart page
        Given   Que esteja na home page 
        When    Clicar no botão cart
        Then    Devo enviar email para receber novidades

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


