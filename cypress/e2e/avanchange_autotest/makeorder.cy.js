describe('Must be error if Card Number is not verifed', ()=>{
    var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    var string = '';
    for(var ii=0; ii<15; ii++){
        string += chars[Math.floor(Math.random() * chars.length)];
    }
    const USER_EMAIL = (string + '@gmail.com')
    const CARD_NUMBER = 4279381920526738
    const AMOUNT = 1500
    const BTC_ADDRESS = 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh'

    it('Testing echange with unverifed card', ()=>{
        cy.visit('https://avanchange.com/ru/')

        cy.get('.take > .selected')
            .should('be.visible')
            .click()

        cy.get('#take-sid-3')
            .should('be.visible')
            .click() // Click BTC

        cy.get('#exc-give-amount')
            .type('{backspace}') // Deleting 0

        cy.get('#exc-give-amount')
            .type(AMOUNT)   
            .should('have.value', AMOUNT)

        cy.get('#exc-give-purse')
            .type(CARD_NUMBER)
            .should('have.value', CARD_NUMBER)

        cy.get('#exc-take-purse')
            .type(BTC_ADDRESS)
            .should('have.value', BTC_ADDRESS)

        cy.get('#exc-contacts').type('@testtg')

        cy.get('#exc-email').type(USER_EMAIL)

        cy.get('.button > .btn')
            .should('be.visible')
            .click()

        cy.get('.jconfirm-title')
            .should('be.visible')
            .should('contain', 'Ошибочка')
    })
})