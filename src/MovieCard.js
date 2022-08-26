import React from "react"
import MovieView from "./MovieView"
import SingleMovie from "./SingleMovie"
import "./MovieCard.css"


const MovieCard = ({movieData}) => {
    return(
        <div className="MovieView">
            <img 
                src={movieData.poster_path}
                alt={`Poster for ${movieData.title}`}
                />
            <h2>{movieData.title}</h2>
        </div>
    )
}

export default MovieCard



