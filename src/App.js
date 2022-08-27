import React, { Component } from "react"
import Header from "./Header"
import MovieView from "./MovieView"
import SingleMovie from "./SingleMovie"
import MovieCard from "./MovieCard"
//import getData from "./apiCalls"
import movieData from "./sample-data"
import './App.css'

class App extends Component {
  constructor() {
    super() 
    this.state = {
      movies: [],
      currentMovie: ''
    }
  }

  componentDidMount = () => {
    this.setState({movies: movieData.movies})
  }

 findSingleMovie = (event) => {
   const singleMovie = this.state.movies.find(movie => {
     console.log(movie.id)
     console.log(event.target.id);
     return movie.id === parseInt(event.target.id)
   })
   
   this.setState({currentMovie:singleMovie})
   console.log(this.state)
 }
 

  render = () => {
    return (
      <div>
        <Header />
        <MovieView 
          movieData={this.state.movies}
          findSingleMovie={this.findSingleMovie}/>
        <SingleMovie 
          id={this.state.movies}  />
      </div>
    )
  }
}
export default App;
