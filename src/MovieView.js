import React from "react"
import MovieCard from "./MovieCard"
import "./MovieView.css"

const MovieView = ({movieData, findSingleMovie}) => {

    const movieCards = movieData.map(movie => {

        return (
            <MovieCard 
                key={movie.id}
                movieData={movie}
                src={movie.poster_path}
                name={movie.title}
                findSingleMovie={findSingleMovie}
                />   
        )
    })
    return (
        <div className="movieGrid">{movieCards}</div>
    )
}


export default MovieView