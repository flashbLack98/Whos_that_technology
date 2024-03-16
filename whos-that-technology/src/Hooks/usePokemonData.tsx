import { useState, useEffect } from "react";
import PokeAPI, { IPokemon } from "pokeapi-typescript";

export default function usePokemonData(number: number): IPokemon | null {
    const [pokemon, setPokemon] = useState<IPokemon | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const pokemonData: IPokemon | undefined = await PokeAPI.Pokemon.resolve(number);
                if (pokemonData) {
                    console.log('Pokemon ottenuto:', pokemonData);
                    // Esegui le operazioni desiderate con il pokemon ottenuto
                    setPokemon(pokemonData);
                } else {
                    console.log('Nessun pokemon trovato');
                }
            } catch (error) {
                console.error('Errore durante il recupero dei dati del pokemon:', error);
            }
        };

        fetchData();
    }, [number]);

    return pokemon;
}
