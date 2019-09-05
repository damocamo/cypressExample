describe('My First Few Tests', function () {
    it('Go to AFL and click Melbourne link', function () {
        expect(true).to.equal(true)
        cy.visit("http://www.afl.com.au")
        cy.get('a[href*="melbourne"]').first().click()

    })

    it('Go to Melbourne site page and check title', function () {
        cy.visit("https://www.melbournefc.com.au/")
        cy.title().should("eq", 'Official AFL Website of the Melbourne Football Club - melbournefc.com.au')
    })



})