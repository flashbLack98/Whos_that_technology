import { useEffect, useState } from "react";
import tecnologies from "../tecnologies.json"

export default function useTecnolgyData(number: number): TTecnology | null {
    const [tecnology, setTecnology] = useState<TTecnology | null >(null);

    useEffect(() => {
        const number = Math.floor(Math.random() * tecnologies.length -1);        
        setTecnology(tecnologies[number]);
    }, [number]);
    
     return tecnology;
}

export type TTecnology = {
    nome: string;
    descrizione: string;
    img: string;
    categoria: string;
}