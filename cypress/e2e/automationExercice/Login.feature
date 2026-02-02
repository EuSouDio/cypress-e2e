Feature: Login Tests

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
