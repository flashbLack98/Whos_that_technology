import "./DualButtonChoice.css";

// hooks
import { useState } from 'react';
import usePokemonData from '../../Hooks/usePokemonData';
import useTechnologyData from '../../Hooks/useTechnologyData';

// interface
import { IPokemon } from 'pokeapi-typescript';
import { TTechnology } from "../../Types/TechnologyType";

export default function DualButtonChoice(): JSX.Element {

    const [randomNum, setRandomNum] = useState<number>(1);

    const pokemon: IPokemon | null = usePokemonData(randomNum);
    const technology: TTechnology | null = useTechnologyData(randomNum);

    function handleReset(): void {
        const number = Math.floor(Math.random() * 1000);
        setRandomNum(number);
    }


    return (
        <div className='d-flex flex-column'>
            <div className={`d-flex align-items-center ${randomNum % 2 ? 'flex-row-reverse' : ''}`}>
                <div className='pokeball'>
                    <div className='pokeball-text'>{pokemon?.name}</div>
                </div>

                <div className="mx-5"><button title='reset' type="button" className="btn btn-secondary" onClick={handleReset}>reset</button> </div>

                <div className="pokeball">
                    <div className='pokeball-text'>{technology?.name}</div>
                </div>
            </div>
        </div>
    );
} 