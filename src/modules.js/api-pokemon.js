import {useEffect, useState} from 'react';
const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([]);
    const [variable, setVariable] = useState("");
    useEffect(() => {
        return () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807&offset=200')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
        }
    }, [variable]);
 
    return (
        <div>
            <button className="button" onClass="clase" value="hello!" onClick={ e => setVariable("change")}>Fetch Pokémon</button> 
            {pokemon.length > 0 && pokemon.map((pokemonID, index)=>{
                return (<ul className="ul-list"> <li>
                    <div key={index}>{pokemonID.name}</div></li></ul>)
            })}
            
        </div>
    );
}
export default Pokemon;