import React from 'react';
import logo from './logo.svg';
import './App.css';
import DualButtonChoice from './Components/dualButtonChoice/DualButtonChoice';
import Pokedex from './Components/pokedex/Pokedex';

function App() {
  return (
    <div className="App">
      <h1>Who's that technology</h1>
      
      <div className='container'>
        <div className="d-flex flex-column align-items-center my-5">
           <DualButtonChoice></DualButtonChoice>
           <Pokedex></Pokedex>
        </div>
      </div>

    </div>
  );
}

export default App;
