Feature: E-commerce Automation exercice

    Pagina de testes e-commerce para prática de testes automatizados.

    Scenario: [CT1]: Register User
        Given   Que esteja na home page
        When    Clicar em signupLogin
        And     Informar nome e endereço de e-mail
        And     clicar em botão signup
        And     Preencher dados de tratamento
        And     Preencher dados de Nome
        And     Preencher dados de senha
        And     Preencher dados de data de nascimento
        And     Marcar checks newsletter e ofertas especiais
        And     Preencher dados de endereço
        And     Clicar em Criar conta
        And     Verificar se o usuario esta logado
        Then    Apagar conta do usuario

    Scenario: [CT2]: Login User with correct email and password
        Given   Que esteja na home page
        When    tiver uma conta criada
        And     logar na conta
        Then    Apagar conta do usuario     
    
    Scenario: [CT3]: Login User with incorrect email and password
        Given   Que esteja na home page
        When    Clicar em signupLogin
        When    digitar usuário e senha ERRADOS e clicar em submit
        Then    mensagem de erro deve aparecer

    Scenario: [CT4]: Loggout User
        Given   Que esteja na home page
        When    tiver uma conta criada    
        And     logar na conta
        And     Verificar se o usuario esta logado
        And     Fazer Loggout
        And     logar na conta
        Then    Apagar conta do usuario

    Scenario: [CT5]: Register User with existing email
        Given   Que esteja na home page
        When    tiver uma conta criada
        And     criar uma conta ja existente para o email
        And     Apresentará erro que email ja é cadastrado
        And     logar na conta 
        Then    Apagar conta do usuario

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

    Scenario: [TC14]: Place Order: Register while Checkout
        Given   Que esteja na home page
        When    Clicar em add to cart 
        And     Clicar no modal continue shopping
        And     Clicar no botão cart
        And     Clicar em prosseguir para Checkout
        And     Clicar em Register-Login
        And     Criar conta
        And     Validar conta criada
        And     Clicar no botão cart
        And     Clicar em prosseguir para Checkout
        And     Validar dados de endereço
        And     Validar preço total
        And     Adicionar informação
        And     Informar dados do cartão
        And     Clicar em pagar e confirmar ordem
        And     Validar mensagem de sucesso
        Then    Apagar conta do usuario
