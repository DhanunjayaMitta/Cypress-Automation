/// <reference types="Cypress"/>

describe('Test suite', ()=>{

    it('My First Case', ()=>{
        
        cy.visit('https://rahulshettyacademy.com/seleniumPractise')
        cy.get('.search-keyword').type('ca')
        cy.get(':nth-child(1) > .product-action > button').dblclick()
        cy.get('.product:visible').should('have.length',4)
        cy.get('.products').find('.product').should('have.length',4)
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()
        cy.get('.products').find('.product').each(($e1, index, $list) => {
            const textveg=$e1.find('h4.product-name').text()
            if(textveg.includes('Cashews')){
               cy.wrap($e1).find('button').click()
            }

        } )
        cy.get('.brand').should('have.text','GREENKART')
        cy.get('.brand').then(function(logoelement){
            cy.log(logoelement.text())
        })
        cy.get('.products').find('h4.product-name').then(function(element){
            cy.log(element.text())
        })
        //cy.log(logo.text())
        cy.get('a.cart-icon').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
        cy.get('select').select('Germany').should('have.value', 'Germany')
        cy.get('.chkAgree').click()
        cy.get('button').click()

    })
})
