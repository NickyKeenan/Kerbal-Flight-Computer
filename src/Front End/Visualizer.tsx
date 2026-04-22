// Visualizer.tsx
//3D Visualizer which displays the solar system along with the projected
//manuever path of the ship

import React, {useRef} from "react";
import { useFrame } from "@react-three/fiber"
import {Canvas} from "@react-three/fiber";
import {Line, OrbitControls} from "@react-three/drei";
import {planetsMoons} from "../Back End/PlanetData";

const SCALE_RADIUS = 1e-6
const SCALE_DISTANCE = 1e-9

const OrbitRing = ( { radius, color }: { radius: number; color: string } ) => {

    const points: [number, number, number][] = [];
    const segments = 128;

    for ( let i = 0; i <= segments; i++ ) {

        const angle = ( i / segments ) * Math.PI * 2;

        points.push ([

            Math.cos(angle) * radius, 0, Math.sin(angle) * radius

        ])

    }

    return (

        <Line

            points={points}
            color = {color}
            lineWidth = {1}

        />

    );

};

const Visualizer: React.FC = () => {

    const kerbol = planetsMoons.find( p => p.name === "Kerbol" );
    const bodies = planetsMoons.filter( p => p.name !== "Kerbol" );

    return (

        <Canvas camera={{ position: [0, 200, 0], up: [0, 0, -1] }}>
            <ambientLight intensity={0.4} />
            <pointLight position={[0, 0, 0]} intensity={2} />
            <OrbitControls maxPolarAngle = { Math.PI / 2 } minPolarAngle = { Math.PI / 2 } />

            {planetsMoons.map((body, i) => {

                console.log("visualizer loaded");

                const radius = 1.5;
                const distance = body.semiMajorAxis * SCALE_DISTANCE;

                const angle = ( i / bodies.length ) * Math.PI * 2;
                const x = Math.cos(angle) * distance;
                const z = Math.sin(angle) * distance;

                {kerbol && (

                    <mesh position = { [ 0,0,0 ] }>

                        <sphereGeometry args={[5, 32, 32]} />
                        <meshBasicMaterial color = "yellow"/>

                    </mesh>

                )}

                return (

                    <React.Fragment key = { body.id }>

                        <OrbitRing radius = { distance } color = {body.color}/>

                        <mesh position = { [ x, 0, z ] }>

                            <sphereGeometry args={[radius, 16, 16]} />
                            <meshStandardMaterial color = {body.color} />

                        </mesh>

                    </React.Fragment>

                );
            })}
        </Canvas>

        );
};

export default Visualizer;