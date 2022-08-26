import React from "react"
import MovieCard from "./MovieCard"
import "./MovieView.css"

const MovieView = ({movieData}) => {
    console.log('movieData', movieData)
    const movieCards = movieData.map(movie => {
        console.log('movie: ', movie)
        return (
            <MovieCard 
                movieData={movie}
                src={movie.poster_path}
                name={movie.title}
                />   
        )
    })
    return (
        <div>{movieCards}</div>
    )
}


export default MovieView