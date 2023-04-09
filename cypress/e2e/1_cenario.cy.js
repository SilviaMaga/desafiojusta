/// <reference types="cypress" />

describe('tarefas', () => {

    it('Realizar compra da camisa vermelha', () => {

        const userName = 'standard_user'
        const password = 'secret_sauce'
        const nome = 'Silvia'
        const sobrenome = 'Magalhães'
        const cep = '123456789'

        cy.visit('https://www.saucedemo.com/')
        
        // Preenchendo o nome do usuário
        cy.get('#user-name')
            .type(userName)

        // Preenchendo a senha
        cy.get('#password')
            .type(password)

        // Clicar no botão login
        cy.get('[data-test="login-button"]')
            .click()

        // Clicar no botão para adicionar camisa vermelha ao carrinho
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]')
            .click()

        // Clicar para ir ao carrinho
        cy.get('.shopping_cart_link')
            .click()

        // Clicar no botão checkout para ir a tela de confirmação de dados
        cy.get('[data-test="checkout"]')
            .click()

        // Preenchendo o nome
        cy.get('[data-test="firstName"]')
            .type(nome)
        
        // Preenchendo o sobrenome
        cy.get('[data-test="lastName"]')
            .type(sobrenome)

        // Preenchendo o CEP
        cy.get('[data-test="postalCode"]')
            .type(cep)

        // Clicar em continue para pagamento
        cy.get('[data-test="continue"]')
            .click()

        // Clicar no botão finish para finalizar a compra
        cy.get('[data-test="finish"]')
            .click()
    })

})