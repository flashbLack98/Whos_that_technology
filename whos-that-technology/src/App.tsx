import './App.css';
import DualButtonChoice from './Components/dualButtonChoice/DualButtonChoice';
import Pokedex from './Components/pokedex/Pokedex';

function App(): JSX.Element {
  return (
    <div className="App">
      <div className='container'>
        <div className="row my-3">
          <h1 className='text-center'>Who's that technology</h1>
        </div>
      
        <div className="row">
           <DualButtonChoice></DualButtonChoice>
           <Pokedex></Pokedex>
        </div>
      </div>

    </div>
  );
}

export default App;
