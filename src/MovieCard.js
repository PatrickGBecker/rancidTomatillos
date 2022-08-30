import React from "react"
import { Link } from 'react-router-dom';
// import MovieView from "./MovieView"
// import SingleMovie from "./SingleMovie"

import "./MovieCard.css"


const MovieCard = ({title, posterPath, findSingleMovie, id}) => {
    return(
        <div className="gridView" key={id}>
            <Link to={`/${id}`}>
            <img id={id} className="moviePoster" 
                src={posterPath}
                alt={`Poster for ${title}`}
                onClick={()=>findSingleMovie(id)}
                />
            </Link>
            <h2>{title}</h2>
        </div>
    )
}

export default MovieCard



