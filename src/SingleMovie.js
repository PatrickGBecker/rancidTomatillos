import React from 'react'

import "./SingleMovie.css"

const SingleMovie = ({ currentMovie, displayAllMovies }) => {
    return (
        <div className='singleMovie'>
            <div className="backDropContainer">
                <img className='backdrop' src={currentMovie.backdrop_path} alt="Backdrop Image"></img>
                <h2 className='title'>{currentMovie.title}</h2>
            </div>
            <div className="detailsContainer">
                <img className="miniPoster" src={currentMovie.poster_path} alt="Mini poster image"></img>
                <div className='movieInfo'>
                    <p>{currentMovie.average_rating.toFixed(2)}</p>
                    <p>{currentMovie.release_date}</p>
                </div>
                <div className='details'>
                </div>
            <button onClick={() => displayAllMovies()}>Back to All Movies</button>
            </div>
        </div>
    )
}
    


export default SingleMovie;