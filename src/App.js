import React, { Component } from "react"
import Header from "./Header"
import MovieView from "./MovieView"
 //import MovieCard from "./MovieCard"
//import getData from "./apiCalls"
import movieData from "./sample-data"
import './App.css'

class App extends Component {
  constructor() {
    super() 
    this.state = {
      movies: []
    }
  }

  componentDidMount = () => {
    this.setState({movies: movieData.movies})
  }

  render() {
    return (
      <div>
        <Header />
        <MovieView 
          movieData={this.state.movies}/>
      </div>
    )
  }
}
export default App;
