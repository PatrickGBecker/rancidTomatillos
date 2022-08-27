import React from "react"
// import MovieView from "./MovieView"
// import SingleMovie from "./SingleMovie"

import "./MovieCard.css"


const MovieCard = ({movieData, findSingleMovie, id}) => {
    return(
        <div className="gridView">
            <img id={movieData.id} className="moviePoster" 
                src={movieData.poster_path}
                alt={`Poster for ${movieData.title}`}
                onClick={()=>findSingleMovie(id)}
                />
            <h2>{movieData.title}</h2>
        </div>
    )
}

export default MovieCard



