// Import all the dependencies to display the beers from the API
import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import HomeBar from './HomeBar'
import BeerDetails from './BeerDetails'

// Create a class component to display all the beers from the API and to show the details of each beer when you click on the details link by using a function and linking to the BeerDetails component

function AllBeers() {
    const [beers, setBeers] = React.useState([])
    const [search, setSearch] = React.useState('')
    const [filteredBeers, setFilteredBeers] = React.useState([])

    React.useEffect(() => {
        fetch('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => response.json())
            .then(data => {
                setBeers(data)
                setFilteredBeers(data)
            })
    }, [])

    const handleSearch = (event) => {
        setSearch(event.target.value)
        const filteredBeers = beers.filter(beer => beer.name.toLowerCase().includes(event.target.value.toLowerCase()))
        setFilteredBeers(filteredBeers)
    }

    return (
        <div>
            <HomeBar />
            <input style={{margin: '30px', width: '200px', borderRadius: '30px', height: '20px'}} placeholder="Search" type="text" value={search} onChange={handleSearch} />
            {filteredBeers.map(beer => {
                return (
                    <div style={{margin: "30px"}} key={beer._id}>
                       
                        <Link style={{textDecoration: 'none', color: 'black'}} to={`/beers/${beer._id}`}> <img className='all-beers-img' src={beer.image_url} alt={beer.name} /><h1>{beer.name}</h1></Link>
                        <p style={{color: "gray", fontSize: "1.5em"}}>{beer.tagline}</p>
                        <p>{beer.contributed_by}</p>
                        <hr />
                    </div>
                )
            })}
        </div>
    )
}




export default AllBeers
