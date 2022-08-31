describe('App', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2' )
    cy.visit('http://localhost:3000')
  })
  
  it('Should load main page with title', () => {
    cy.get('header').find('h1').contains('Rancid Tomatillos')
    
  })
})