import React, { Component } from "react"
import Header from "./Header"
import MovieView from "./MovieView"
import SingleMovie from "./SingleMovie"
import MovieCard from "./MovieCard"
import  fetchMovies  from "./apiCalls"
// import movieData from "./sample-data"
import './App.css'

class App extends Component {
  constructor() {
    super() 
    this.state = {
      movies: [],
      currentMovie: '',
      error: ''
    }
  }

  componentDidMount = () => {
    // this.setState({movies: movieData.movies})
    fetchMovies.getAllMovieData()
    .then(data => this.setState({movies:data.movies}))
    .catch(error => {
      console.log(error)
      this.setState({error:`${error}`})
    })
  }

  handleChange = (event) => {
    this.setState({currentMovie:event.target.value})
  }

 findSingleMovie = (id) => {
  fetchMovies.getCurrentMovieData(id)
    .then(data => this.setState({ currentMovie: data.movie }))
    // .catch(error => {
    //   console.log(error)
    //   this.setState({ error: `${error}` })
    // })
  //  const singleMovie = this.state.movies.find(movie => {
  //    return movie.id === parseInt(event.target.id)
 }
 
 displayAllMovies = () => {
  this.setState({currentMovie: ''})
 }

  render = () => {
    let display
    if(this.state.currentMovie) {
      display = <SingleMovie currentMovie={this.state.currentMovie} displayAllMovies={this.displayAllMovies}/>
    } else {
      display = <MovieView movieData={this.state.movies} findSingleMovie={this.findSingleMovie} />
    }


    return (
      <div>
        <Header />
        {display}
      </div>
    )
  }
}
export default App;
