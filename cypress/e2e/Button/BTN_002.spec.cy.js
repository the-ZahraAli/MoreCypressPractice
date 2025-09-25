describe('Tool-tip visible while hovering over follow/unfollow botton', () => {
    beforeEach(() => {
        cy.visit('https://www.cnarios.com/concepts/button#try-it-yourself')
    })
    it('Shows "Follow" tool-tip', () => {
        cy.get(':nth-child(2) > .MuiPaper-root > .MuiCardContent-root > [aria-label="Follow"] > .MuiButtonBase-root')
            .trigger('mouseover')
        cy.get('.MuiTooltip-tooltip').should('be.visible').and('have.text', 'Follow')
                
    })

it('Shows "Unfollow" tool-tip', () => { 
    cy.get(':nth-child(2) > .MuiPaper-root > .MuiCardContent-root > [aria-label="Follow"] > .MuiButtonBase-root').click()
    cy.get('[aria-label="Unfollow"] > .MuiButtonBase-root')
            .realHover()
    cy.get('.MuiTooltip-tooltip').should('be.visible').and('have.text', 'Unfollow')
})





})