import "./Pokedex.css"

export default function Pokedex(): JSX.Element {

    return(
        <div className="col-12 my-5">
            <div className="gameboy m-auto text-white">
                <div className="pokemon-container m-auto">
                    <img className="pokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png" alt="" />
                </div>
                <div className="description-container px-4">
                    <p className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, quisquam error? Fuga asperiores alias inventore. Nostrum odio quos corrupti! Velit harum excepturi cupiditate porro corrupti dolore beatae laudantium in nulla.</p>
                </div>

            </div>
        </div>
    )
} 