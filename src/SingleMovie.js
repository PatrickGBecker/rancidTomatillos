import React from 'react'

import "./SingleMovie.css"

const SingleMovie = ({currentMovie, displayAllMovies}) => {
    return (
        <div className='singleMovie'>
            <img className='backdrop' src={currentMovie.backdrop_path} alt="Backdrop Image"></img>
            <h2 className='title'>{currentMovie.title}</h2>
            <button onClick={()=> displayAllMovies()}>Back to All Movies</button>
        </div>

    )
}
    


export default SingleMovie;