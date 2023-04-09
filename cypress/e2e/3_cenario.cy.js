/// <reference types="cypress" />

describe('Desafio @ Justa QA', () => {

    it.only('Realizar compra da camisa vermelha', () => {

        cy.realizandoLogin()

        // Clicar no botão para adicionar camisa vermelha ao carrinho
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]')
            .click()

        cy.finalizandoCompra()
    })


    it('Realizar a compra da bolsa', () => {

        cy.realizandoLogin()

        // Clicar no botão para adicionar bolsa ao carrinho
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
            .click()

        cy.finalizandoCompra()
    })
    
    
    it('Ordenar os valores do menor para o maior e realizar a compra dos dois produtos de menor valor', () => {

        cy.realizandoLogin()

        // Ordernar os valores do menor para o maior
        cy.get('[data-test="product_sort_container"]')
            .select('Price (low to high)')

        // Clicar no item de menor valor (Sauce Labs Onesie)
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]')
            .click()

        // Clicar no segundo item de menor valor (Sauce Labs Bike Light)
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]')
            .click()

        cy.finalizandoCompra()
    })

})