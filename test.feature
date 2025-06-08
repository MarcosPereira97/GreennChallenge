#language: pt
Feature: Login Cenários

    TC001 - Realizar login com sucesso.
        Dado que estou no site "https://www.saucedemo.com/"
        Quando insiro os dados de usuários "problem_user" e "secret_sauce"
        E clico no botão Login
        Então sou redirecionado a página de catalogo de produtos

    TC002 - Realizar login com usuários inválidos.
        Dado que estou no site "https://www.saucedemo.com/"
        Quando insiro os dados de usuários "invalid_user" e "test123"
        E clico no botão Login
        Então o erro "Epic sadface: Username and password do not match any user in this service" 

    TC003 - Realizar login com campo username em branco.
        Dado que estou no site "https://www.saucedemo.com/"
        Quando insiro os dados de usuários "" e "secret_sauce"
        E clico no botão Login
        Então o erro "Epic sadface: Username is required"

    TC004 - Realizar login com campo password em branco.
        Dado que estou no site "https://www.saucedemo.com/"
        Quando insiro os dados de usuários "problem_user" e ""
        E clico no botão Login
        Então o erro "Epic sadface: Password is required"

Feature: Homepage

    TC005 - Cada produto deve conter sua própria imagem
        Dado que estou no site "https://www.saucedemo.com/"
        Quando realizo login com o usuário "problem_user" e "secret_sauce"
        E sou redirecionado para a homepage
        Então visualizo cada produto com sua respectiva imagem

    TC006 - Deve ser possível adicionar um produto ao carrinho
        Dado que estou no site "https://www.saucedemo.com/"
        E realizo login com o usuário "problem_user" e "secret_sauce"
        E sou redirecionado para a homepage
        Quando adiciono o produto "Sauce Labs Backpack" ao carrinho
        Então o produto "Sauce Labs Backpack" deve estar no carrinho

    TC007 - Deve ser possível remover um produto do carrinho
        Dado que estou no site "https://www.saucedemo.com/"
        Quando realizo login com o usuário "problem_user" e "secret_sauce"
        E sou redirecionado para a homepage
        Quando adiciono o produto "Sauce Labs Backpack" ao carrinho
        E acesso a tela de carrinho
        Então removo o produto "Sauce Labs Backpack" do carrinho
        E o produto "Sauce Labs Backpack" não deve estar no carrinho

    TC008 - Deve exibir o valor correto do produto na homepage
        Dado que estou no site "https://www.saucedemo.com/"
        Quando realizo login com o usuário "problem_user" e "secret_sauce"
        E sou redirecionado para a homepage
        Então o produto "Sauce Labs Bike Light" deve exibir o valor "$9.99"

    TC009 - Deve ser possível acessar os detalhes de um produto
        Dado que estou no site "https://www.saucedemo.com/"
        E realizo login com o usuário "problem_user" e "secret_sauce"
        E sou redirecionado para a homepage
        Quando clico no produto "Sauce Labs Bolt T-Shirt"
        Então devo visualizar a página de detalhes do produto "Sauce Labs Bolt T-Shirt"

    TC010 - Deve ser possível realizar a ordenação dos produtos na homepage
        Dado que estou no site "https://www.saucedemo.com/"
        E realizo login com o usuário "problem_user" e "secret_sauce"
        E sou redirecionado para a homepage
        Quando clico no botão de ordenação e altero para ordenar de "Price(high to low)"
        Então os produtos são realocados pelo valor mais caro para o mais barato

