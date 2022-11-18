// import dependencies to display the random beer from the API
//

import React, { Component } from 'react'
import HomeBar from './HomeBar'


// Create a class component to display the random beer from the API
function RandomBeer() {
    const [beer, setBeer] = React.useState({})

    React.useEffect(() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then(response => response.json())
            .then(data => {
                setBeer(data)
            })
    }, [])

    return (
        <div>
            <HomeBar />
            <img className='random-beer-img' src={beer.image_url} alt={beer.name} />
            <h1>{beer.name}</h1>
            <p style={{color: 'gray', fontSize: '1.2em'}}>{beer.tagline}</p>
            <p>{beer.first_brewed}</p>
            <p>{beer.attenuation_level}</p>
            <p style={{color: 'gray'}}>Attenuation Level: {beer.description}</p>
            <p style={{color: 'gray'}}>{beer.contributed_by}</p>
        </div>
    )
}


export default RandomBeer
