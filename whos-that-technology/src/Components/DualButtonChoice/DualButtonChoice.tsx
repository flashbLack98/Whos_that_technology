import { useEffect, useState } from 'react';
import usePokemonData from '../../Hooks/usePokemonData';
import { IPokemon } from 'pokeapi-typescript';
import useTecnologyData, { TTecnology } from '../../Hooks/useTecnologyData';

export default function DualButtonChoice() {

    const [randomNum, setRandomNum] = useState<number>(1);
    
    const pokemon: IPokemon | null = usePokemonData(randomNum);
    const tecnology: TTecnology | null = useTecnologyData(randomNum);

    function handleRandomNum(): void{        
        const number = Math.floor(Math.random() * 1000);
        setRandomNum(number)
    }

    useEffect(handleRandomNum,[])

    return (
        <div className='d-flex flex-column'>
            <div className="d-flex">
                <div className='square bg-success'>
                    <div className='text-warning'>{pokemon?.name}</div>
                </div>
                <div className="square bg-primary">{tecnology?.nome}</div>  
            </div>
        </div>
    );
} 