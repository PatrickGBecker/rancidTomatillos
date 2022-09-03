import React, { Component } from "react"
import Header from "./Header"
import MovieView from "./MovieView"
import SingleMovie from "./SingleMovie"
import getData from "./apiCalls"
import { Route, Switch } from 'react-router-dom'
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
          <Switch>
            <Route exact path="/movies/:id" render={() => <SingleMovie selectedMovie={this.state.currentMovie}/> }/>
            <Route path="/" render={() => <MovieView movieData={this.state.movies} findSingleMovie={this.findSingleMovie} /> } />
          </Switch>
      </div>
    )
  }
}

export default App;
