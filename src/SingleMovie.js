import React, { Component } from 'react'
import getData from './apiCalls'
import "./SingleMovie.css"


class SingleMovie extends Component {
    constructor(selectedMovie) {
    super(selectedMovie)
        this.state = {
            currentMovie: '',
            id: selectedMovie.selectedMovie.id,
            trailer: ''
        }
    }


componentDidMount = () => {
    getData(`/movies/${this.state.id}`)
        .then(data => data.movie)
        .then(movie => this.setState({currentMovie: movie}))
}

render = () => {
    return (
        <div className='singleMovie'>
            <div className="backDropContainer">
                <img className='backdrop' src={this.state.currentMovie.backdrop_path} alt="Backdrop Image"></img>
                <h2 className='title'>{this.state.currentMovie.title}</h2>
            </div>
            <div className="detailsContainer">
                <img className="miniPoster" src={this.state.currentMovie.poster_path} alt="Mini poster image"></img>
                <div className='movieInfo'>
                    <p>Summary: {this.state.currentMovie.overview}</p>
                    <p>Genre: {this.state.currentMovie.genres}</p>
                    <p>Rating: {this.state.currentMovie.average_rating}</p>
                </div>
                <div className='details'>
                    <p>Release Date: {this.state.currentMovie.release_date}</p>
                    <p>Run Time: {this.state.currentMovie.runtime} </p>
                    <p>Budget: {this.state.currentMovie.budget}</p>
                </div>
            </div>
        </div>
    )
}
}
    


export default SingleMovie;