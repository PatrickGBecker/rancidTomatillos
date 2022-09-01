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
    getData(`/movies/${this.state.id}/videos`)
        .then(data => data.videos)
        .then(videos => this.setState({ trailer: videos[0] }))
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
                    <p className='summary'>Summary: {this.state.currentMovie.overview}</p>
                    <p className='genre'>Genre: {this.state.currentMovie.genres}</p>
                    <p className='rating'>Rating: {this.state.currentMovie.average_rating}</p>
                </div>
                <div className='details'>
                    <p className='releaseDate'>Release Date: {this.state.currentMovie.release_date}</p>
                    <p className='runTime'>Run Time: {this.state.currentMovie.runtime} </p>
                    <p className='budget'>Budget: {this.state.currentMovie.budget}</p>
                </div>
                    <div className='movieTrailer'>
                        <iframe 
                            width="853"
                            height="480"
                            src={this.state.trailer && `https://www.youtube.com/embed/${this.state.trailer.key}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube" />
				</div>
            </div>
        </div>
    ) 
    }
}
    


export default SingleMovie;