// Visualizer.tsx
//3D Visualizer which displays the solar system along with the projected
//manuever path of the ship

import React from "react";
import {planetsMoons} from "./Back End/PlanetData";

const Visualizer: React.FC = () => {
    return (

        <div>
            <h1>3D Visualizer</h1>

            {planetsMoons.map ( ( planet ) => (
                <div key = { planet.id }>
                    <h2>{ planet.name }</h2>
                    <p>This is where the 3D visualizer will be implemented.</p>
                </div>
            ))}
        </div>
    );
}