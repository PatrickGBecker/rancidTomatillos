import { Component } from "react"

import "./SingleMovie.css"

class SingleMovie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.id,
            individualMovie: {},
        }
    }
    

    render() {
        // const {
        //     title,
        //     backdrop_path,
        //     release_date,
        //     average_rating,
        //     overview,
        //     poster_path, 
        // } = this.state.individualMovie

        return(
            <div onChange={event => this.handleChange(event)}>
               <p>hello</p>
            </div>
        )
    }
}

export default SingleMovie;