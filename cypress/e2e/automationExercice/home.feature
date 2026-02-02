Feature: Home Tests

    Scenario: [CT10]: Verify Subscription in home page
        Given   Que esteja na home page
        When    scrolar a pagina ate o footer
        And     verificar o texto Subscription
        And     informar email no campo Subscription e clicar no botão
        Then    receber mensagem de cadastro com sucesso

