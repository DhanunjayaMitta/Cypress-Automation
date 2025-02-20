describe('dateassertion',()=>{
    it('daTestCase', ()=>{
        const monthNumber = "6"
        const date = "15"
        const year = "2027"
        const expectedList = [monthNumber, date, year]
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')
        cy.get('.react-date-picker__inputGroup').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.get('span[class="react-calendar__navigation__label__labelText react-calendar__navigation__label__labelText--from"]').click()
        cy.contains("button", year).click()
        //cy.get('button[class="react-calendar__tile react-calendar__decade-view__years__year"]').eq(5).click()
        cy.get('button[class="react-calendar__tile react-calendar__year-view__months__month"]').eq(Number(monthNumber)-1).click()
        cy.contains("button",date).click()
        //cy.get('button[class="react-calendar__tile react-calendar__month-view__days__day"]').eq(10).click()
        //Assertion 
        cy.get('.react-date-picker__inputGroup__input').each(($e1, index)=>{
            cy.wrap($e1).invoke('val').should('eq',expectedList[index])
            })

        })
    })