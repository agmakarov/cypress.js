describe('Check all buttons to be visible and correct', ()=>{
    it('Checking buttons on review page', ()=>{
        Cypress.config('requestTimeout', 10000);
        cy.visit('https://avanchange.com/ru/')
        cy.get(':nth-child(6) > .eas')
            .should('be.visible')
            .click()

        cy.get('body > div.wrapper.wrapper-inner > div.reviews-ext > div > div:nth-child(3) > ul > li:nth-child(1) > a')
            .should('be.visible')
            .should('have.attr', 'href', 'https://www.bestchange.ru/avanchange-exchanger.html')

        cy.get('body > div.wrapper.wrapper-inner > div.reviews-ext > div > div:nth-child(3) > ul > li:nth-child(2) > a')
            .should('be.visible')
            .should('have.attr', 'href', 'https://exchangesumo.com/exchanger/955/Avanchange/')
        
        cy.get('body > div.wrapper.wrapper-inner > div.reviews-ext > div > div:nth-child(3) > ul > li:nth-child(3) > a')
            .should('be.visible')
            .should('have.attr', 'href', 'https://kurs.expert/ru/obmennik/avanchange-com/feedbacks.html')
        
        cy.get('body > div.wrapper.wrapper-inner > div.reviews-ext > div > div:nth-child(3) > ul > li:nth-child(4) > a')
            .should('be.visible')
            .should('have.attr', 'href', 'https://pro-obmen.ru/avanchange')
        
        cy.get('body > div.wrapper.wrapper-inner > div.reviews-ext > div > div:nth-child(3) > ul > li:nth-child(5) > a')
            .should('be.visible')
            .should('have.attr', 'href', 'https://topmonitoring.ru/exchangers/493/')
        
        cy.get('body > div.wrapper.wrapper-inner > div.reviews-ext > div > div:nth-child(3) > ul > li:nth-child(6) > a')
            .should('be.visible')
            .should('have.attr', 'href', 'https://pro-ex.club/ru/exchangers/Avanchange')
        
        cy.get('body > div.wrapper.wrapper-inner > div.reviews-ext > div > div:nth-child(4) > ul > li:nth-child(1) > a')
            .should('be.visible')
            .should('have.attr', 'href', 'https://forum.bits.media/index.php?/topic/168602-avanchangecom-обмен-btcethusdtqiwi/')
        
        cy.get('body > div.wrapper.wrapper-inner > div.reviews-ext > div > div:nth-child(4) > ul > li:nth-child(2) > a')
            .should('be.visible')
            .should('have.attr', 'href', 'https://mmgp.com/threads/avanchange-com-nadezhnyj-obmen-btc-dash-xmr-eth-xrp-usdt-qiwi-karty-cashin-qr-nalichnye.655475/')
        
        cy.get('body > div.wrapper.wrapper-inner > div.reviews-ext > div > div:nth-child(4) > ul > li:nth-child(3) > a')
            .should('be.visible')
            .should('have.attr', 'href', 'https://cryptotalk.org/topic/316773-avanchangecom-надежный-обмен-криптовалют/')
        
        cy.get('body > div.wrapper.wrapper-inner > div.reviews-ext > div > div:nth-child(4) > ul > li:nth-child(4) > a')
            .should('be.visible')
            .should('have.attr', 'href', 'https://searchengines.guru/ru/forum/1032951')

        cy.get('body > div.wrapper.wrapper-inner > div.reviews-ext > div > div:nth-child(5) > ul > li:nth-child(1) > a')
            .should('be.visible')
            .should('have.attr', 'href', 'https://www.trustpilot.com/review/avanchange.com')

        cy.get('body > div.wrapper.wrapper-inner > div.reviews-ext > div > div:nth-child(5) > ul > li:nth-child(2) > a')
            .should('be.visible')
            .should('have.attr', 'href', 'https://www.mywot.com/scorecard/avanchange.com')
        

    })
})