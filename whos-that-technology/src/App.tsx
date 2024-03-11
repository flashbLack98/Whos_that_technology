import React from 'react';
import logo from './logo.svg';
import './App.css';
import Pokemon from './Components/Pokemon/Pokemon';

function App() {
  return (
    <div className="App">
      <h1>Who's that tecnology</h1>
      
      <div className='container'>
        <div className="d-flex justify-content-center my-5">
           <Pokemon></Pokemon>
          <div className="square bg-primary">Technology</div>  
        </div>
      </div>

    </div>
  );
}

export default App;
