import './App.css';
import { useEffect } from 'react';
import { useState } from 'react'

function App() {

  const [pokeString, setPokeString] = useState('')
  const [pokemon, setPokemon] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    pokeFetch();
  }

  const handlePokeInput = (event) => {
    let pokeText = event.target.value;
    setPokeString(pokeText)
    console.log(pokeString);
  }

  const pokeFetch = () => {
    const pokeURL = new URL(`https://pokeapi.co/api/v2/pokemon/${pokeString}/`)

    console.log(pokeURL);

    fetch(pokeURL)
    .then((response) => {
      return response.json();
    })
    .then((jsonResponse) => {
      // setPokemon(jsonResponse.sprites.front_default);
      let node = document.createElement("img");
      node.src = jsonResponse.sprites.front_default;
      document.getElementById('list').appendChild(node);
      // console.log(pokemon)
    })

  }


  return (
    <div>
      <form action="submit" onSubmit={handleSubmit}>
        <input placeholder="pikachu" type="text" onChange={handlePokeInput}></input>
        <button type="submit">Submit</button>
      </form>

      <h1>
        POKEMON
      </h1>

      <div>
      {/* {
        pokemon ? */}
        <ul id="list">
        </ul>
        {/* // <img src={pokemon}></img>
        :
        <p>placeholder</p>
      } */}
      </div>
    </div>
  );
}

export default App;
