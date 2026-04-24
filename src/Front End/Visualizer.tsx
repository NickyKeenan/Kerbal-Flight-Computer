// Visualizer.tsx
//3D Visualizer which displays the solar system along with the projected
//manuever path of the ship

import React, {useRef} from "react";
import { useFrame } from "@react-three/fiber"
import * as THREE from "three";
import {Canvas} from "@react-three/fiber";
import {Line, OrbitControls, Stars, Html} from "@react-three/drei";
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

const OrbitPath = ({ body, bodyMap }: any) => {

    const points: [number, number, number][] = [];
    const segments = 256;

    const deg2rad = Math.PI / 180;

    const e = body.orbitalEccentricity || 0;
    const a = body.semiMajorAxis * SCALE_DISTANCE;

    const ω = (body.argumentOfPeriapsis || 0) * deg2rad;
    const i = (body.orbitalInclination || 0) * deg2rad;
    const Ω = (body.longitudeOfAscendingNode || 0) * deg2rad;

    const cosω = Math.cos(ω);
    const sinω = Math.sin(ω);

    const cosi = Math.cos(i);
    const sini = Math.sin(i);

    const cosΩ = Math.cos(Ω);
    const sinΩ = Math.sin(Ω);

    for (let j = 0; j <= segments; j++) {

        const M = (j / segments) * Math.PI * 2;

        const r =
            a * (1 - e * e) /
            (1 + e * Math.cos(M));

        // orbital plane
        let px = r * Math.cos(M);
        let py = 0;
        let pz = r * Math.sin(M);

        // ω
        let x1 = px * cosω - pz * sinω;
        let z1 = px * sinω + pz * cosω;
        let y1 = py;

        // i
        let x2 = x1;
        let y2 = y1 * cosi - z1 * sini;
        let z2 = y1 * sini + z1 * cosi;

        // Ω
        let x3 = x2 * cosΩ - z2 * sinΩ;
        let z3 = x2 * sinΩ + z2 * cosΩ;
        let y3 = y2;

        // parent offset
        let parentX = 0;
        let parentY = 0;
        let parentZ = 0;

        if (body.orbiting && body.orbiting !== "Kerbol") {
            const parent = bodyMap.get(body.orbiting);
            if (parent) {
                const pa = parent.semiMajorAxis * SCALE_DISTANCE;
                parentX = pa; // simple static placement for path
            }
        }

        points.push([
            x3 + parentX,
            y3 + parentY,
            z3 + parentZ
        ]);
    }

    return (
        <Line
            points={points}
            color={body.color}
            lineWidth={1}
        />
    );
};

const Visualizer: React.FC = () => {

    const kerbol = planetsMoons.find( p => p.name === "Kerbol" );
    const [hoveredBody, setHoveredBody] = React.useState<any>(null);
    const bodies = planetsMoons.filter( p => p.name !== "Kerbol" );

    const bodyMap = new Map(planetsMoons.map(b => [b.name, b]));

    const getParentPosition = (body: any, time: number) => {

    if (!body.orbiting || body.orbiting === "Kerbol") {
        return new THREE.Vector3(0, 0, 0);
    }

    const parent = bodyMap.get(body.orbiting);
    if (!parent) return new THREE.Vector3(0, 0, 0);

    const a = parent.semiMajorAxis * SCALE_DISTANCE;

    const t = time;
    const period = parent.siderealOrbitPeriod || 1;

    const angle = (t / period) * Math.PI * 2;

    return new THREE.Vector3(
        Math.cos(angle) * a,
        0,
        Math.sin(angle) * a
    );
};


    const Planet_Moon = ( { body, distance, bodyMap, hoveredBody, setHoveredBody }: any ) => {

        const meshRef = useRef<THREE.Mesh | null>(null);

        const timeRef = useRef ( 0 );

        useFrame(() => {

            const t = timeRef.current;

            const period = body.siderealOrbitPeriod;
            const safePeriod = period && period > 0 ? period : 1;

            const meanAnomaly =
                (t / safePeriod) * Math.PI * 2 + (body.meanAnomaly || 0);

            const e = body.orbitalEccentricity || 0;
            const a = body.semiMajorAxis * SCALE_DISTANCE;

            const r =
                a * (1 - e * e) /
                (1 + e * Math.cos(meanAnomaly));

            let px = r * Math.cos(meanAnomaly);
            let py = 0;
            let pz = r * Math.sin(meanAnomaly);

            const deg2rad = Math.PI /180;

            const ω = (body.argumentOfPeriapsis || 0) * deg2rad;
            const i = (body.orbitalInclination || 0) * deg2rad;
            const Ω = (body.longitudeOfAscendingNode || 0) * deg2rad;

            // 1. argument of periapsis
            const cosω = Math.cos(ω);
            const sinω = Math.sin(ω);

            let x1 = px * cosω - pz * sinω;
            let z1 = px * sinω + pz * cosω;
            let y1 = py;

            // 2. inclination
            const cosi = Math.cos(i);
            const sini = Math.sin(i);

            let x2 = x1;
            let y2 = y1 * cosi - z1 * sini;
            let z2 = y1 * sini + z1 * cosi;

            // 3. longitude of ascending node
            const cosΩ = Math.cos(Ω);
            const sinΩ = Math.sin(Ω);

            let x3 = x2 * cosΩ - z2 * sinΩ;
            let z3 = x2 * sinΩ + z2 * cosΩ;
            let y3 = y2;

            const parentPos = getParentPosition(body, t);

            meshRef.current?.position.set(
                x3 + parentPos.x,
                y3 + parentPos.y,
                z3 + parentPos.z
            );

        });

        return (

            <mesh 
                ref = { meshRef }
                
                onPointerOver = { ( e ) => {

                    e.stopPropagation();
                    setHoveredBody ( body );

                } }

                onPointerOut = { () => {

                    setHoveredBody ( null );

                } }
                
                >

                <sphereGeometry args = { [ 1.5, 16, 16 ] }/>
                <meshStandardMaterial color = { body.color }/>

                { hoveredBody?.id === body.id && (

                    <Html distanceFactor = { 10 }>

                        <div
                            style = {{

                                color: "white",
                                background: "rgba(0,0,0,0.7)",
                                padding: "4px 8px",
                                borderRadius: "6px",
                                fontSize: "50px",
                                whiteSpace: "nowrap",

                            }}
                        >

                            { body.name }

                        </div>

                    </Html>

                ) }

            </mesh>

        );

    };

    return (

        <Canvas camera={{ position: [200, 120, 200] }}>

            <Stars
                radius = {300} //size of starfield
                depth = {60}
                count = {2000}
                factor = {4} //size of stars
                saturation = {0}
                fade
                speed = {0}
            />

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

                        <OrbitPath body={body} bodyMap={bodyMap} />
                        <Planet_Moon 

                            body = { body } 
                            distance = { distance }
                            bodyMap={bodyMap}
                            hoveredBody = {hoveredBody}
                            setHoveredBody = {setHoveredBody}
                            
                        />

                    </React.Fragment>

                );
            })}
        </Canvas>

        );
};

export default Visualizer;