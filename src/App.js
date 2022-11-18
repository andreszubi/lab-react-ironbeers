import './App.css';
import { useEffect, useState } from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AllBeers from './components/AllBeers';
import BeerDetails from './components/BeerDetails';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';




function App() {

  const [beers, setBeers] = useState([]);
  const [randomBeer, setRandomBeer] = useState([]);
  const [newBeer, setNewBeer] = useState([]);
  const [img, setImg] = useState([]);

  useEffect(() => {
    fetch('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => response.json())
      .then((data) => {
        setBeers(data);
      });
  }, []);

  useEffect(() => {
    fetch('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => response.json())
      .then((data) => {
        setRandomBeer(data);
      });
  }, []);

  useEffect(() => {
    fetch('https://ih-beers-api2.herokuapp.com/beers/new')
      .then((response) => response.json())
      .then((data) => {
        setNewBeer(data);
      });
  }, []);

  useEffect(() => {
    fetch('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => response.json())
      .then((data) => {
        setImg(data);
      });
  }, []);


  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<AllBeers beers={beers} />} />
        <Route path="/beers/:id" element={<BeerDetails beers={beers} />} />
        <Route path="/random-beer" element={<RandomBeer randomBeer={randomBeer} />} />
        <Route path="/new-beer" element={<NewBeer newBeer={newBeer} />} />
        <Route path="/beers/:id" element={<BeerDetails img={img} />} />

      </Routes>
    </div>
  );

}

export default App;
