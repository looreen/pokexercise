import { useState } from "react";
import RowStats from "./RowStats";

const Rectangle = ({ title, id, type, hp, attack, color = "snow" }) => {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  const [sizeRectangle, setSizeRectangle] = useState({
    width: 180,
    height: 270,
  });

  return (
    <div
      style={{
        width: sizeRectangle.width,
        height: sizeRectangle.height,
        backgroundColor: color,
        textAlign: "left",
        color: "white",
        borderRadius: 10,
        border: "1px solid black",
        margin: 4,
        padding: 18,
        display: "flex",
        transition: "all 0.2s ease", // Smooth transition beim Hover
        flexDirection: "column", // alles von oben nach unten
        justifyContent: "space-between", // Platz zwischen Titel und Stats
        boxSizing: "border-box", // Padding korrekt berücksichtigen
      }}
      onMouseEnter={() => setSizeRectangle({ width: 210, height: 310 })}
      onMouseLeave={() => setSizeRectangle({ width: 180, height: 270 })}
    >
      <div>
        <p>
          <strong>{title}</strong>
        </p>
        <p>{type}</p>

        <img
          src={imageUrl}
          alt={title}
          style={{
            width: "100%",
            margin: 10,
          }}
        />
      </div>
      <RowStats hp={hp} attack={attack} />
    </div>
  );
};

export default Rectangle;
