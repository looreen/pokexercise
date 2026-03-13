import { useState } from "react";
import Rectangle from "./components/Rectangle";
import Card from "./components/Card";
import "./App.css";

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

const poke_types = [
  { type: "All", color: "darkgrey" },
  { type: "Water", color: "#539ae2" },
  { type: "Grass", color: "#71c558" },
  { type: "Fire", color: "#ea7a3c" },
  { type: "Electric", color: "#e5c531" },
  { type: "Psychic", color: "#e5709b" },
  { type: "Normal", color: "#aab09f" },
  { type: "Ghost", color: "#846ab6" },
  { type: "Dragon", color: "#6a7baf" },
  { type: "Fighting", color: "#cb5f48" },
  { type: "Rock", color: "#b2a061" },
];

const typeColorMap = Object.fromEntries(
  poke_types.map((p) => [p.type, p.color]),
);

function App() {
  const [showType, setShowType] = useState("All");

  return (
    <>
      <h1>Pokemon around the world.</h1>

      <div>
        {poke_types.map((p) => (
          <button
            onClick={() => setShowType(p.type)}
            key={p.type}
            style={{ backgroundColor: p.color }}
          >
            <b>{p.type}</b>
          </button>
        ))}
      </div>
      <Card>
        {showType && (
          <div className="flex">
            {pokemons
              .filter((d) => showType === "All" || d.type === showType)
              .map((d, i) => (
                <Rectangle
                  key={i}
                  title={d.name}
                  id={d.id}
                  type={d.type}
                  hp={d.hp}
                  attack={d.attack}
                  color={typeColorMap[d.type]}
                />
              ))}
          </div>
        )}
      </Card>
      <br></br>
      <a href="https://www.flaticon.com/free-icons/heart" title="heart icons">
        Heart icons created by frelayasia - Flaticon
      </a>
      <a
        href="https://www.flaticon.com/free-icons/thunder"
        title="thunder icons"
      >
        Thunder icons created by Freepik - Flaticon
      </a>
    </>
  );
}

export default App;
