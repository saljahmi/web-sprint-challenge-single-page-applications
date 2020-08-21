describe('Ordering Pizza', () => {

    beforeEach(() => {
    })
  
    describe('Inputs, checkboxes, submit button', () => {
      
      it('can navigate to http://localhost:3002/Form', () => {
        cy.visit('http://localhost:3002/Form')
        cy.url().should('include', 'localhost')
      })
  
      it('can type something in the name input', () => {
        cy.get("input[name='name']")
          .type('Meaty')
          .should('have.value', 'Meaty')
      })

      it('can select a size', () => {
        cy.get('select[name="size"]')
          .select('Small')
          .should('have.value', 'small')
      })

      it('can check multiple toppings', () => {
          cy.get('[type="checkbox"]')
          .check()  
        })
  
      it('submit button is enabled', () => {
          cy.get("button[id='submit']").should('be.enabled')
        })
  
        it('can submit the form data', () => {
          cy.get("button[id='submit']").click()
          cy.contains('h2','Meaty').should('exist')
          cy.contains('p','Size: small').should('exist')
        })
  
        it('check form validation for name input', () => {
            cy.get("input[name='name']")
                .type('i')
            cy.get("div[id='name_error']")
                .contains('Name must be at least 2 characters long').should('exist')
        })
   })
})