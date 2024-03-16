import { useEffect, useState } from "react";
import tecnologies from "../technologies.json"
import { TTechnology } from "../Types/TechnologyType";

export default function useTecnolgyData(number: number): TTechnology | null {
    const [technology, settechnology] = useState<TTechnology | null >(null);

    useEffect(() => {
        const number = Math.floor(Math.random() * tecnologies.length -1);        
        settechnology(tecnologies[number]);
    }, [number]);
    
     return technology;
}
