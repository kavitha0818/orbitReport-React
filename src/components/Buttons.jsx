import React from "react";
import satData from "./satData";
import './styling.css'

const Buttons = ({ filterByType, setSat, orbitTypes }) => {
  return (
    <div className = 'flex-container'>
      {orbitTypes.map((sat, id) => {
        return (
          <button onClick={() => filterByType(sat)} key={id}>
            {sat} Orbit
          </button>
        );
      })}

      <button onClick={() => setSat(satData)}>All Orbits</button>

    </div>
  );
};

export default Buttons;