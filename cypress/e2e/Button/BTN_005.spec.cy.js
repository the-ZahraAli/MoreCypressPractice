describe('Remove Suggestions From List', () => {
    it('Removes suggestion from list when X is clicked', () => {
        cy.visit('https://www.cnarios.com/concepts/button#try-it-yourself')
        cy.get(':nth-child(1) > .MuiPaper-root > .absolute > .MuiButtonBase-root').click()
        cy.contains('h6', 'Unknown').should('not.exist')

    })     
})