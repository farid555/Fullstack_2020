describe('Blog app', function () {
    beforeEach(function () {
        cy.request('POST', 'http://localhost:3001/api/testing/reset')
        const user = {
            name: 'Sypress',
            username: 'CyTe',
            password: 'Centria'
        }
        cy.request('POST', 'http://localhost:3001/api/users/', user)

        cy.visit('http://localhost:3000')
    })
    it('Login form is shown', function () {
        cy.contains('login')

    })

    describe('Login', function () {
        it('succeeds with correct credentials', function () {
            cy.get('#username').type('CyTe')
            cy.get('#password').type('Centria')
            cy.get('#login-button').click()

            cy.contains('Sypress logged in')
        })

        it('fails with wrong credentials', function () {
            cy.get('#username').type('CyTe')
            cy.get('#password').type('NotThisOneererjregrehhjhjghh')
            cy.get('#login-button').click()

            cy.get('.error')
                .contains('wrong username or password')
            cy.get('.error')
                .should('have.css', 'color', 'rgb(255, 0, 0)')
            cy.get('.error')
                .should('have.css', 'border-style', 'solid')
        })
    })

})