import "./DualButtonChoice.css"

// hooks
import { useEffect, useState } from 'react';
import usePokemonData from '../../Hooks/usePokemonData';

// interface
import { IPokemon } from 'pokeapi-typescript';
import useTecnologyData, { TTecnology } from '../../Hooks/useTecnologyData';

export default function DualButtonChoice() {

    const [randomNum, setRandomNum] = useState<number>(1);
    
    const pokemon: IPokemon | null = usePokemonData(randomNum);
    const tecnology: TTecnology | null = useTecnologyData(randomNum);

    function handleReset(): void {
        const number = Math.floor(Math.random() * 1000);
        setRandomNum(number)
    }
    

    return (
        <div className='d-flex flex-column'>
            <div><button title='reset' type="button" className="btn btn-secondary mb-3" onClick={handleReset}>reset</button> </div>
            <div className={`d-flex ${randomNum % 2 ? 'flex-row-reverse' : ''}`}>
                <div className='pokeball'>
                    <div className='text-white text-capitalize'>{pokemon?.name}</div>
                </div>
                <div className="pokeball">
                    <div className='text-white text-capitalize'>{tecnology?.nome}</div>
                </div>  
            </div> 
        </div>
    );
} 