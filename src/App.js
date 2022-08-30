import React, { Component } from "react"
import Header from "./Header"
import MovieView from "./MovieView"
import SingleMovie from "./SingleMovie"
import getData from "./apiCalls"
import { Route } from 'react-router-dom'
import './App.css'

class App extends Component {
  constructor() {
    super() 
    this.state = {
      movies: [],
      currentMovie: '',
      homeButton: false,
      error: ''
    }
  }

  componentDidMount = () => {
    // this.setState({movies: movieData.movies})
    getData('/movies')
    .then(data => this.setState({movies:data.movies}))
    .catch(error => {
      console.log(error)
      this.setState({error:`${error}`})
    })
  }


 findSingleMovie = (id) => {
   const singleMovie = this.state.movies.find(movie => {
     return movie.id === id
  })
    this.setState({currentMovie: singleMovie})
    this.setState({homeButton: true})
}

  render = () => {

      const backHome = () => {
        this.setState( { homeButton: false })
      }
      
  
       return (
        <div className='appContainer'>
        <Header homeButton={ this.state.homeButton } backHome={backHome}/>
            <Route 
             exact path="/:id"
              render={() =>  this.state.homeButton
                ? <SingleMovie selectedMovie={this.state.currentMovie}/>
                : <MovieView movieData={this.state.movies} findSingleMovie={this.findSingleMovie}/>
              }
              />

      </div>
    )
  }
}

export default App;
