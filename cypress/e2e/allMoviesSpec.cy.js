describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  
  it('Should load main page with title', () => {
    cy.get('header').find('h1').contains('Rancid Tomatillos')
  })
  
  it('Should load main page by fetching all the movie posters with movie titles', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    cy.get('.moviePoster').should('have.length', 40)
    cy.get('div').should('have.class', 'appContainer').children('div').contains('Money Plane')
  })
  
  it('should display an error message if page load fails', () => {
    cy.get('h1').should('have.class', 'errorMessage').contains('Sorry! We\'re working on it!')
  })
  
  it('Should be able to click on a movie poster and taken to that selected movie/s page', () => {
    cy.get('.moviePoster').first().click()
    cy.url().should('include', '/694919')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {statusCode: 201, body: {
      id: 694919,
      title: "Money Plane",
      poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
    }})
    
  })
})

describe('Single Movie', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.get('.moviePoster').first().click()
    cy.url().should('include', '/694919')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', {}) 
  })

  it('should load the selected movie/s details', () => {
    cy.get('div').should('have.class', 'singleMovie')
  })

  it('should load details page with title and home button', () => {
    cy.get('header').find('h1').contains('Rancid Tomatillos')
    cy.get('header').find('button').contains('Home')
  })

  it('should display all movie details', () => {
    cy.get('.title').contains('Money Plane')
    cy.get('.miniPoster').should('have.attr', 'src').should('include', 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI')
    cy.get('.summary').contains("A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.")
    cy.get('.movieInfo').contains('Action')
    cy.get('iframe').should('have.attr', 'src').should('include', 'https://www.youtube.com/embed/aETz_dRDEys')
  })

  it('should have a home button that brings you back to main page', () => {
    cy.get('.homeButton').click()
    cy.get('header').find('h1').contains('Rancid Tomatillos')
    cy.get('.moviePoster').should('have.length', 40)
    cy.get('button').should('not.exist');
    cy.location().should((loc) => {
      expect(loc.host).to.eq('localhost:3000')
      expect(loc.hostname).to.eq('localhost')
      })
    })
   })
