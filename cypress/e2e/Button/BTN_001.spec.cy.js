describe('Click Follow Button', () => {
    it('Clicks Follow Button on TYS tab', () => {
        cy.visit('https://www.cnarios.com/concepts/button#try-it-yourself')
        cy.get(':nth-child(4) > .MuiPaper-root > .MuiCardContent-root > [aria-label="Follow"] > .MuiButtonBase-root').click()
        cy.get('[aria-label="Unfollow"] > .MuiButtonBase-root').should('contain', 'Following')
        //cy.get('MuiButton-icon MuiButton-startIcon MuiButton-iconSizeMedium css-cveorv').should('be.visible')
        cy.get('[aria-label="Unfollow"] > .MuiButtonBase-root > .MuiButton-icon > .MuiSvgIcon-root > path').should('be.visible')
    })      
})
