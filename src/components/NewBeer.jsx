// create dependencies to display the new beer form and add the new beer to the API
import { useNavigate } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './Home'
import HomeBar from './HomeBar'


// Create a class component to display the new beer form and add the new beer to the API using a 
function NewBeer() {
    const [name, setName] = React.useState('')
    const [tagline, setTagline] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [first_brewed, setFirstBrewed] = React.useState('')
    const [brewers_tips, setBrewersTips] = React.useState('')
    const [attenuation_level, setAttenuationLevel] = React.useState('')
    const [contributed_by, setContributedBy] = React.useState('')
    const [image_url, setImageUrl] = React.useState('')
    const [newBeer, setNewBeer] = React.useState({})
    const [error, setError] = React.useState('')
    const [success, setSuccess] = React.useState('')
    const [loading, setLoading] = React.useState(false)
    const navigate = useNavigate()


    // Create a function to add the new beer to the API
    const addNewBeer = (event) => {
        event.preventDefault()
        setLoading(true)
        fetch('https://ih-beers-api2.herokuapp.com/beers/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                tagline,
                description,
                first_brewed,
                brewers_tips,
                attenuation_level,
                contributed_by,
                image_url
            })
        })
            .then(response => response.json())
            .then(data => {
                setNewBeer(data)
                setLoading(false)
                setSuccess('The beer was added successfully')
                setError('')
                navigate('/')
            })
            .catch(error => {
                setError('There was an error adding the beer')
                setSuccess('')
                setLoading(false)
            })
    }

    return ( 
        <div className='addBeer'>
            <HomeBar />
            <h1>Add a new beer</h1>
            <form className='addForm' style={{ width: '500px'}} onSubmit={addNewBeer}>

                <label htmlFor="name">Name</label>
               
                <input type="text" name="name" id="name" value={name} onChange={(event) => setName(event.target.value)} />
                <br></br>

                <label htmlFor="tagline">Tagline</label>
                <input type="text" name="tagline" id="tagline" value={tagline} onChange={(event) => setTagline(event.target.value)} />
                <br></br>

                <label htmlFor="description">Description</label>
                <input style={{height: '200px'}} type="text" name="description" id="description" value={description} onChange={(event) => setDescription(event.target.value)} />
                <br></br>

                <label htmlFor="first_brewed">First Brewed</label>
                <input type="text" name="first_brewed" id="first_brewed" value={first_brewed} onChange={(event) => setFirstBrewed(event.target.value)} />
                <br></br>

                <label htmlFor="brewers_tips">Brewers Tips</label>
                <input type="text" name="brewers_tips" id="brewers_tips" value={brewers_tips} onChange={(event) => setBrewersTips(event.target.value)} />
                <br></br>

                <label htmlFor="attenuation_level">Attenuation Level</label>
                <input type="number" name="attenuation_level" id="attenuation_level" value={attenuation_level} onChange={(event) => setAttenuationLevel(event.target.value)} />
                <br></br>

                <label htmlFor="contributed_by">Contributed By</label>
                <input type="text" name="contributed_by" id="contributed_by" value={contributed_by} onChange={(event) => setContributedBy(event.target.value)} />
                <br></br>

                <button type="submit">ADD NEW</button>
                
                
            </form>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {success && <p>{success}</p>}
        </div>
    )
}


export default NewBeer

