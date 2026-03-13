import { useState } from 'react';
import Rectangle from './components/Rectangle';
import './App.css'; 

const pokemons = [
  { id: 1, name: "Bulbasaur", type: "Grass", hp: 45, attack: 49 },
  { id: 4, name: "Charmander", type: "Fire", hp: 39, attack: 52 },
  { id: 7, name: "Squirtle", type: "Water", hp: 44, attack: 48 },
  { id: 25, name: "Pikachu", type: "Electric", hp: 35, attack: 55 },
  { id: 6, name: "Charizard", type: "Fire", hp: 78, attack: 84 },
  { id: 9, name: "Blastoise", type: "Water", hp: 79, attack: 83 },
  { id: 3, name: "Venusaur", type: "Grass", hp: 80, attack: 82 },
  { id: 150, name: "Mewtwo", type: "Psychic", hp: 106, attack: 110 },
  { id: 39, name: "Jigglypuff", type: "Normal", hp: 115, attack: 45 },
  { id: 143, name: "Snorlax", type: "Normal", hp: 160, attack: 110 },
  { id: 94, name: "Gengar", type: "Ghost", hp: 60, attack: 65 },
  { id: 131, name: "Lapras", type: "Water", hp: 130, attack: 85 },
  { id: 133, name: "Eevee", type: "Normal", hp: 55, attack: 55 },
  { id: 149, name: "Dragonite", type: "Dragon", hp: 91, attack: 134 },
  { id: 59, name: "Arcanine", type: "Fire", hp: 90, attack: 110 },
  { id: 65, name: "Alakazam", type: "Psychic", hp: 55, attack: 50 },
  { id: 68, name: "Machamp", type: "Fighting", hp: 90, attack: 130 },
  { id: 76, name: "Golem", type: "Rock", hp: 80, attack: 120 },
  { id: 130, name: "Gyarados", type: "Water", hp: 95, attack: 125 },
  { id: 148, name: "Dragonair", type: "Dragon", hp: 61, attack: 84 },
];

// Sprite image URL pattern:
// `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

function App() {

  /*
  const [selectType, setSelectType] = useState('Water');
  const [adaptColor, setAdaptColor] = useState('snow');
  */

  return (
    <>
    <h1>Pokemon around the world.</h1>
    <p>This is where the Pokemon live.</p>

<div className='flex' >
  {pokemons.map((d, i) => (
    <Rectangle
    key={i} 
    title={d.name} 
    id={d.id} 
    type={d.type} 
    hp={d.hp} 
    attack={d.attack}
    />
  ))}
</div>
<a href="https://www.flaticon.com/free-icons/heart" title="heart icons">Heart icons created by frelayasia - Flaticon</a>    
<a href="https://www.flaticon.com/free-icons/thunder" title="thunder icons">Thunder icons created by Freepik - Flaticon</a>
</>
  )
}

export default App
