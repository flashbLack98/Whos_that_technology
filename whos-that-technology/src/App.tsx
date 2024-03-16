import React from 'react';
import logo from './logo.svg';
import './App.css';
import DualButtonChoice from './Components/DualButtonChoice/DualButtonChoice';

function App() {
  return (
    <div className="App">
      <h1>Who's that technology</h1>
      
      <div className='container'>
        <div className="d-flex justify-content-center my-5">
           <DualButtonChoice></DualButtonChoice>
        </div>
      </div>

    </div>
  );
}

export default App;
