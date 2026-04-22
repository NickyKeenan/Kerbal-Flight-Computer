// Visualizer.tsx
//3D Visualizer which displays the solar system along with the projected
//manuever path of the ship

import React, {useRef} from "react";
import { useFrame } from "@react-three/fiber"
import * as THREE from "three";
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

    const Planet_Moon = ( { body, distance }: any ) => {

        const meshRef = useRef<THREE.Mesh | null>(null);

        const timeRef = useRef ( 0 );

        useFrame ( ( _, delta ) => {

            const t = timeRef.current;
            const period = body.siderealOrbitalPeriod;

            const safePeriod = period && period > 0 ? period: 1;
            
            const angle = ( t / safePeriod ) * Math.PI * 2;

            meshRef.current?.position.set(

                Math.cos ( angle ) * distance,
                0,
                Math.sin ( angle ) * distance

            );

        } );

        return (

            <mesh ref = { meshRef }>

                <sphereGeometry args = { [ 1.5, 16, 16 ] }/>
                <meshStandardMaterial color = { body.color }/>

            </mesh>

        );

    };

    return (

        <Canvas camera={{ position: [200, 120, 200] }}>
            <ambientLight intensity={0.4} />
            <pointLight position={[0, 0, 0]} intensity={2} />
            <OrbitControls 
            
                target = {[0, 0, 0]}

                minPolarAngle = {0}
                maxPolarAngle = {Math.PI}

                enableDamping
                dampingFactor = {0.05}
                zoomSpeed = {0.6}
                zoomToCursor = {true}
            
            />

            {kerbol && (

                    <mesh position = { [ 0,0,0 ] }>

                        <sphereGeometry args={[5, 32, 32]} />
                        <meshBasicMaterial color = "yellow"/>

                    </mesh>

                )}

            {planetsMoons.map((body, i) => {

                console.log("visualizer loaded");

                const radius = 1.5;
                const distance = body.semiMajorAxis * SCALE_DISTANCE;

                const angle = ( i / bodies.length ) * Math.PI * 2;
                const x = Math.cos(angle) * distance;
                const z = Math.sin(angle) * distance;

                return (

                    <React.Fragment key = { body.id }>

                        <OrbitRing radius = { distance } color = {body.color}/>
                        <Planet_Moon body = { body } distance = { distance }/>

                    </React.Fragment>

                );
            })}
        </Canvas>

        );
};

export default Visualizer;