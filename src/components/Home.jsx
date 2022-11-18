// Create a home page which loads other components with React links to the other pages when clicked
import {Link} from 'react-router-dom'
import beers from "../assets/beers.png";
import randombeer from "../assets/random-beer.png";
import newbeer from "../assets/new-beer.png";





function Home() {
    return (
    <>
    <Link className='links' to="/beers"> <img
         src={beers}
            alt="all-beers"
            style={{ width: "500px" }}
            /><h1>All Beers</h1></Link>
                
                <p>
                    Click here too see all of our amazing craft beers!
                </p>
                
                
                <br></br>

                
                
                <Link className='links' to="/random-beer"><img
                    src={randombeer}
                    alt="random-beer"
                    style={{ width: "500px" }}
                    /><h1>Random Beer</h1></Link>
                    <p>
                    Click here to randomly select one of our amazing craft beers!
                </p>

              
            
                
                <Link className='links' to="/new-beer">  <img
                    src={newbeer}
                    alt="new-beer"
                    style={{ width: "500px" }}
                    /><h1>New Beer</h1></Link>
                <p>
                    Click here to add a new craft beer to our database!
                </p>
    </>
    )
}


export default Home

