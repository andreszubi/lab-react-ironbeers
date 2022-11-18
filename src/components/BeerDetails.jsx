// Import all the dependencies to display the details of a beer from the API using a function and fetch the data from the API
import React, { Component } from 'react'
import { useParams } from 'react-router-dom'
import HomeBar from './HomeBar'

function BeerDetails(props) {
    const [beer, setBeer] = React.useState({})
    const {id} = useParams()

    React.useEffect(() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
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
            <p style={{color: 'gray'}}>Attenuation Level: {beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p style={{color: 'gray'}}>{beer.contributed_by}</p>
        </div>
    )
}

export default BeerDetails
