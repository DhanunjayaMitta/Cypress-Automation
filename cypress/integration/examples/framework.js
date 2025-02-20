describe('e2ecommercetest', () => {
    it('submit order', () => {
        cy.visit('https://rahulshettyacademy.com/loginpagePractise/')
        const productName= "Nokia Edge"
        cy.get('input[name="username"]').type('rahulshettyacademy')
        cy.get('input[name="password"]').type('learning')
        cy.get('.customradio input[value="admin"]').check()
        //cy.get('#okayBtn').click()
        cy.get('.form-control').each(($e1, index)=>{
            if ($e1.text()=="Consultant"){
                cy.wrap($e1).find('button').click()
            }
        })
        cy.get('input[name="terms"]').check()
        cy.get('input[type="submit"]').click()
        cy.get('app-card').should('have.length',4)
        /*cy.get('app-card').filter(`:contains("${productName}")`).then($element =>{
            cy.wrap($element).contains('Button', 'Add').click()
        })*/
        cy.get('app-card').eq(0).contains('Button', 'Add').click()
        cy.get('app-card').eq(2).contains('Button', 'Add').click()
        cy.get('.btn-primary').click()
        cy.contains('button', 'Checkout').click()
        cy.get('#country').type('Germany')
        cy.wait(6000)
        cy.get('.suggestions > ul > li > a').click()
        cy.get('.checkbox').click()
        cy.get('.btn-success').click()
        cy.get('.alert-success').should('contain','Success')
    })
})