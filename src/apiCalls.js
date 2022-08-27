
   const getData = (pathAddress) => {
        return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${pathAddress}`)
        .then(response => {
            if(!response.ok) {
                throw new Error('we can not find the data you are looking for')
            } else {
                return response.json()
            }
        })
        .catch(error => console.log(error))
    }

export default getData;