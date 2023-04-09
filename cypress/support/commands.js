/// <reference types="cypress" />

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const userName = 'standard_user'
const password = 'secret_sauce'
const nome = 'Silvia'
const sobrenome = 'Magalhães'
const cep = '123456789'

Cypress.Commands.add('realizandoLogin', ()=> {

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
})

Cypress.Commands.add('finalizandoCompra', ()=> {

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