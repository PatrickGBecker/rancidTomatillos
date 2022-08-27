const fetchMovies = {
    getAllMovieData() {
        return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
        .then(response => {
            if(!response.ok) {
                throw new Error('we can not find the data you are looking for')
            } else {
                return response.json()
            }
        })
    },
    getCurrentMovieData(id) {
        return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
        .then(response => {
            if(!response.ok) {
                throw new Error('we can not find the data you are looking for')
            } else {
                return response.json()
            }
        })
    }
}

export default fetchMovies;