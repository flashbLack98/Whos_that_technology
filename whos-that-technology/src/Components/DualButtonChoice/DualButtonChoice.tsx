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
        <div className="col-12">
            <div className={`row justify-content-center align-items-center w-75 mx-auto ${randomNum % 2 ? 'flex-row-reverse' : ''}`}>
                <div className="col-12 col-md-5">
                    <div className='pokeball'>
                        <div className='nes-btn'>{pokemon?.name}</div>
                    </div>
                </div>

                <div className="col-12 col-md-2">
                    <button title='reset' type="button" className="nes-btn is-warning d-block mx-auto" onClick={handleReset}>reset</button>
                </div>

                <div className="col-12 col-md-5">
                    <div className="pokeball">
                        <div className='nes-btn'>{technology?.name}</div>
                    </div>
                </div>
            </div>
        </div>
    );
} 