Feature: Checkout Tests

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