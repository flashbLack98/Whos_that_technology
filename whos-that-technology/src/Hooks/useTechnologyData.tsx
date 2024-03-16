import { useEffect, useState } from "react";
import tecnologies from "../technologies.json"

export default function useTecnolgyData(number: number): TTechnology | null {
    const [technology, settechnology] = useState<TTechnology | null >(null);

    useEffect(() => {
        const number = Math.floor(Math.random() * tecnologies.length -1);        
        settechnology(tecnologies[number]);
    }, [number]);
    
     return technology;
}

export type TTechnology = {
    name: string;
    description: string;
    img: string;
    category: string;
}