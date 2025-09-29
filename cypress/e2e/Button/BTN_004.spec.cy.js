describe('Follow button text display after click', () => {
    beforeEach(() => {
        cy.visit('https://www.cnarios.com/concepts/button#try-it-yourself')
    })
    it('Displays "Following" after clicking Follow Button', () => {
        
        cy.get(':nth-child(4) > .MuiPaper-root > .MuiCardContent-root > [aria-label="Follow"] > .MuiButtonBase-root').click()
        cy.get('[aria-label="Unfollow"] > .MuiButtonBase-root').should('contain', 'Following')
        //cy.get('MuiButton-icon MuiButton-startIcon MuiButton-iconSizeMedium css-cveorv').should('be.visible')
        //cy.get('[aria-label="Unfollow"] > .MuiButtonBase-root > .MuiButton-icon > .MuiSvgIcon-root > path').should('be.visible')
    })   
    it('Displays "Follow" after clicking Unfollow Button', () => {   
        cy.get(':nth-child(3) > .MuiPaper-root > .MuiCardContent-root > [aria-label="Follow"] > .MuiButtonBase-root')
            .click()
        cy.get('[aria-label="Unfollow"] > .MuiButtonBase-root').click()
        cy.get(':nth-child(3) > .MuiPaper-root > .MuiCardContent-root > [aria-label="Follow"] > .MuiButtonBase-root')
            .should('contain', 'Follow')

    })
})
