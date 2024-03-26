import './App.css';
import DualButtonChoice from './Components/dualButtonChoice/DualButtonChoice';
import Pokedex from './Components/pokedex/Pokedex';

function App(): JSX.Element {
  return (
    <div className="App">
      <div className='container p-5'>
        <div className="row">
          <h1 className='text-center'>Who's that technology?</h1>
        </div>
        
        <div className="my-5 nes-container with-title">
              <div className="title">Choose what you think is a technology...</div>
              <div className="row">
                <DualButtonChoice></DualButtonChoice>
                <Pokedex></Pokedex>
              </div>
        </div>
      </div>

    </div>
  );
}

export default App;
