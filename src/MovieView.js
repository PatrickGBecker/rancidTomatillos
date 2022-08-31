import React from "react"
import MovieCard from "./MovieCard"
import "./MovieView.css"

const MovieView = ({movieData, findSingleMovie}) => {

    const movieCards = movieData.map(movie => {

        return (
            <MovieCard 
                key={movie.id}
                id={movie.id}
                title={movie.title}
                posterPath={movie.poster_path}
                findSingleMovie={findSingleMovie}
                />   
        )
    })
    
    return (
        <div className="movieGrid">{movieCards} 
         {!movieCards.length && <h1 className="errorMessage">Sorry! We're working on it! </h1>}
        </div>
    )
}


export default MovieView