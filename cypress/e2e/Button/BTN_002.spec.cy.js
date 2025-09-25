describe('Hover over follow botton', () => {
    it('Hovers over Follow Button on TYS tab', () => {
        cy.visit('https://www.cnarios.com/concepts/button#try-it-yourself')
cy.get(':nth-child(2) > .MuiPaper-root > .MuiCardContent-root > [aria-label="Follow"] > .MuiButtonBase-root')
            .trigger('mouseover')
    cy.get('.MuiTooltip-tooltip').should('be.visible').and('have.text', 'Follow')
                
    
    })







})