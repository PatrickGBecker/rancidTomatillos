import React from "react"
// import MovieView from "./MovieView"
// import SingleMovie from "./SingleMovie"

import "./MovieCard.css"


const MovieCard = ({title, posterPath, findSingleMovie, id}) => {
    return(
        <div className="gridView" key={id}>
            <img id={id} className="moviePoster" 
                src={posterPath}
                alt={`Poster for ${title}`}
                onClick={()=>findSingleMovie(id)}
                />
            <h2>{title}</h2>
        </div>
    )
}

export default MovieCard



