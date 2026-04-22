// Visualizer.tsx
//3D Visualizer which displays the solar system along with the projected
//manuever path of the ship

import React, {useRef} from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {planetsMoons} from "../Back End/PlanetData";

const SCALE_RADIUS = 1e-6
const SCALE_DISTANCE = 1e-9

const Visualizer: React.FC = () => {
    return (

    <Canvas camera={{ position: [0, 30, 60] }}>
    <ambientLight intensity={0.4} />
    <pointLight position={[0, 0, 0]} intensity={2} />
    <OrbitControls />

    const kerbol = planetsMoons.find ( p => p.name === "Kerbol" );
    const bodies = planetsMoons.filter ( p => p.name !== "Kerbol" );

    {planetsMoons.map((body, i) => {

        console.log("visualizer loaded");

        const radius = body.planetRadius * SCALE_RADIUS;
        const distance = body.semiMajorAxis * SCALE_DISTANCE;

        console.log(body.name, body.semiMajorAxis);

        return (
            <mesh
                key={body.id}
                position={[distance, 0, 0]}
            >
            <sphereGeometry args={[radius, 32, 32]} />
            <meshStandardMaterial
                color={body.hasOxygen ? "cyan" : "gray"}
            />
            </mesh>
        );
    })}
    </Canvas>

    );
};

export default Visualizer;