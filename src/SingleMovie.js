import React, { Component } from 'react'
import getData from './apiCalls'
import "./SingleMovie.css"


class SingleMovie extends Component {
    constructor(selectedMovie) {
    super(selectedMovie)
        this.state = {
            currentMovie: ' ',
            id: selectedMovie.selectedMovie.id,
            // movieTrailers: [ ],  Movie Trailer functionality is intentionally unused but kept for future iterations.
            // currentMovieTrailer: { }, While it is close to being done, it is not necessary for the MVP.
        }
    }


componentDidMount = () => {
    getData(`/movies/${this.state.id}`)
        .then(data => data.movie)
        .then(movie => this.setState({currentMovie: movie}))
    getData(`/movies/${this.state.id}/videos`)
        .then(data => data.videos)
        .then( videos => this.setState( { movieTrailers: videos } ) )
		.then( ( ) => this.setState( { currentMovieTrailer: this.state.movieTrailers[ 0 ] } ) )
        .catch(error => {
            console.log(error)
            this.setState({error:`${error}`})
          })
}

// selectDifferentTrailer = ( video ) => {
//     this.setState( { currentMovieTrailer: video } )
// }

render = () => {

let allGenres = [this.state.currentMovie.genres];

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
                    <p className='genre'>Genre: {allGenres.join(', ')}</p>
                    <p className='rating'>Average Rating: { parseInt( this.state.currentMovie.average_rating ).toFixed( 1 ) }/10</p>
                </div>
                <div className='details'>
                    <p className='releaseDate'>Release Date: {this.state.currentMovie.release_date}</p>
                    <p className='runTime'>Run Time: {this.state.currentMovie.runtime} minutes</p>
                    { this.state.currentMovie.budget > 0 && <p className='budget'>Budget: ${ parseInt( this.state.currentMovie.budget ).toLocaleString( ) }</p> }
                </div>
                {/* { this.state.currentMovieTrailer &&
							<div className='movie-trailer'>
								<iframe
									src={ this.state.currentMovieTrailer && `https://www.youtube.com/embed/${ this.state.currentMovieTrailer.key }` }
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
									title="Embedded youtube"/>
							</div> }

							<div className='selectDifferentTrailerContainer'>
								{ this.state.movieTrailers.length > 1 && this.state.movieTrailers.map( trailer => <button 
									key={ `${ trailer.id }` } 
									src={ `https://www.youtube.com/embed/${ trailer.key }` }
									onClick={ ( ) => this.selectDifferentTrailer( trailer ) }
									className='movieTrailerButtons'>
										{ `${ trailer.type }` }
									</button> ) }
							</div> */}
            </div>
        </div>
    ) 
    }
}
    


export default SingleMovie;