import { PlanetMoon } from "./PlanetMoon";

//initializes the planets and moons with their respective data from the game. This will be used for the 3D visualizer and the manuever computer calculations.
// name: string;
// id: number;
// r2: number; (meters)
// planetRadius: number; (meters)
// orbitalInclination: number; (degrees)
// hasOxygen: boolean;
// atmosphere: number; (kPa)
// orbitalEccentricity: number;
// siderealOrbitPeriod: number; (seconds)
// surfaceGravity: number; (m/s^2)
// semiMajorAxis: number; (meters)
// periapsis: number; (meters)
// apoapsis: number; (meters)
// soiExitVelocity: number; (m/s)
//synchronousOrbit: number; (km)
//atmosphericHeight: number; (meters)

export const planetsMoons: PlanetMoon[] = [
    new PlanetMoon(
        {
            name: "Kerbol",
            id: 0,
            r2: 0,
            planetRadius: 261600000,
            orbitalInclination: 0,
            hasOxygen: false,
            atmosphere: 0,
            atmosphericHeight: 0,
            orbitalEccentricity: 0,
            siderealOrbitPeriod: 0,
            surfaceGravity: 0.000003711,
            semiMajorAxis: 0,
            periapsis: 0,
            apoapsis: 0,
            soiExitVelocity: 0,
            synchronousOrbit: 0,
            color: "#ffcc00"
        }
    ),

    //planets
    new PlanetMoon(
        {
            name: "Moho",
            id: 1,
            r2: 9646663.0,
            planetRadius: 250000,
            orbitalInclination: 7,
            hasOxygen: false,
            atmosphere: 0,
            atmosphericHeight: 0,
            orbitalEccentricity: .2,
            siderealOrbitPeriod: 2215754.2196843,
            surfaceGravity: 2.698,
            semiMajorAxis: 5263138.304,
            periapsis: 4210510627.5,
            apoapsis: 6315765980.5,
            soiExitVelocity: 1161.4107926294,
            synchronousOrbit: 0,
            color: "#888888"

        }
    ),

    new PlanetMoon(
        {
            name: "Eve",
            id: 2,
            r2: 85109365.0,
            planetRadius: 700000,
            orbitalInclination: 2.1,
            hasOxygen: false,
            atmosphere: 506.625,
            atmosphericHeight: 90000,
            orbitalEccentricity: .01,
            siderealOrbitPeriod: 5657995.146483,
            surfaceGravity: 16.7,
            semiMajorAxis: 9832684544,
            periapsis: 9734357700.8,
            apoapsis: 9931011387.2,
            soiExitVelocity: 4831.956193395,
            synchronousOrbit: 10328.472087012,
            color: "#a84bd6"

        }
    ),
    
    new PlanetMoon(
        {
            name: "Kerbin",
            id: 4,
            r2: 84159286,
            planetRadius: 600000,
            orbitalInclination: 0,
            hasOxygen: true,
            atmosphere: 101.325,
            atmosphericHeight: 70000,
            orbitalEccentricity: 0,
            siderealOrbitPeriod: 9203544.6175013,
            surfaceGravity: 9.81,
            semiMajorAxis: 	13599840256,
            periapsis: 13599840256,
            apoapsis: 13599840256,
            soiExitVelocity: 3431.034829319,
            synchronousOrbit: 2863.3340594888,
            color: "#4da6ff"

        }
    ),
    
    new PlanetMoon(
        {
            name: "Duna",
            id: 7,
            r2: 47921949,
            planetRadius: 320000,
            orbitalInclination: 0.06,
            hasOxygen: false,
            atmosphere: 6.75500,
            atmosphericHeight: 50000,
            orbitalEccentricity: 0.051,
            siderealOrbitPeriod: 17315400.1,
            surfaceGravity: 2.94,
            semiMajorAxis: 20726155264,
            periapsis: 19669121365.3,
            apoapsis: 21783189162.7,
            soiExitVelocity: 1372.413958995,
            synchronousOrbit: 2879.9999101376,
            color: "#c1440e"

        }
    ),
    
    new PlanetMoon(
        {
            name: "Dres",
            id: 9,
            r2: 32832840,
            planetRadius: 138000,
            orbitalInclination: 5,
            hasOxygen: false,
            atmosphere: 0,
            atmosphericHeight: 0,
            orbitalEccentricity: 0.145,
            siderealOrbitPeriod: 47893063.1,
            surfaceGravity: 1.13,
            semiMajorAxis: 40839348203,
            periapsis: 34917642713.6,
            apoapsis: 46761053692.4,
            soiExitVelocity: 558.0048386887,
            synchronousOrbit: 732.24443996802,
            color: "#aaaaaa"

        }
    ),
    
    new PlanetMoon(
        {
            name: "Jool",
            id: 10,
            r2: 2455985200,
            planetRadius: 6000000,
            orbitalInclination: 1.304,
            hasOxygen: false,
            atmosphere: 1519.88,
            atmosphericHeight: 200000,
            orbitalEccentricity: 0.05,
            siderealOrbitPeriod: 104661432.1,
            surfaceGravity: 7.85,
            semiMajorAxis: 	68773560320,
            periapsis: 65334882252.8,
            apoapsis: 72212238387.2,
            soiExitVelocity: 9704.4320494984,
            synchronousOrbit: 15010.461350651,
            color: "#ff9933"

        }
    ),
    
    new PlanetMoon(
        {
            name: "EEloo",
            id: 16,
            r2: 119082940,
            planetRadius: 210000,
            orbitalInclination: 6.15,
            hasOxygen: false,
            atmosphere: 0,
            atmosphericHeight: 0,
            orbitalEccentricity: 0.26,
            siderealOrbitPeriod: 156992048.4,
            surfaceGravity: 1.69,
            semiMajorAxis: 	90118820000,
            periapsis: 66687926800,
            apoapsis: 113549713200,
            soiExitVelocity: 841.82802523268,
            synchronousOrbit: 683.69089065809,
            color: "gray"

        }
    ),

    //moons
    //moons will all be gray for now
    new PlanetMoon(
        {
            name: "Gilly",
            id: 3,
            r2: 126123.27,
            planetRadius: 13000,
            orbitalInclination: 12,
            hasOxygen: false,
            atmosphere: 0,
            atmosphericHeight: 0,
            orbitalEccentricity: .55,
            siderealOrbitPeriod: 388587.4,
            surfaceGravity: .049,
            semiMajorAxis: 31500000,
            periapsis: 14174999.6,
            apoapsis: 48825000.4,
            soiExitVelocity: 35.711342336781,
            synchronousOrbit: 42.13815091369,
            color: "gray"
        }
    ),
    
    new PlanetMoon(
        {
            name: "Mun",
            id: 5,
            r2: 2429559.1,
            planetRadius: 200000,
            orbitalInclination: 0,
            hasOxygen: false,
            atmosphere: 0,
            atmosphericHeight: 0,
            orbitalEccentricity: 0,
            siderealOrbitPeriod: 138984.4,
            surfaceGravity: 1.63,
            semiMajorAxis: 12000000,
            periapsis: 12000000,
            apoapsis: 12000000,
            soiExitVelocity: 807.08362342932,
            synchronousOrbit: 0,
            color: "gray"
        }
    ),
    
    new PlanetMoon(
        {
            name: "Minmus",
            id: 6,
            r2: 2247428.4,
            planetRadius: 60000,
            orbitalInclination: 6,
            hasOxygen: false,
            atmosphere: 0,
            atmosphericHeight: 0,
            orbitalEccentricity: 0,
            siderealOrbitPeriod: 1077310.5,
            surfaceGravity: 0.491,
            semiMajorAxis: 47000000,
            periapsis: 47000000,
            apoapsis: 47000000,
            soiExitVelocity: 242.61080123746,
            synchronousOrbit: 357.9408652496,
            color: "gray"
        }
    ),
    
    new PlanetMoon(
        {
            name: "Ike",
            id: 8,
            r2: 1049598.9,
            planetRadius: 130000,
            orbitalInclination: 0.2,
            hasOxygen: false,
            atmosphere: 0,
            atmosphericHeight: 0,
            orbitalEccentricity: 0,
            siderealOrbitPeriod: 65517.9,
            surfaceGravity: 1.1,
            semiMajorAxis: 3200000,
            periapsis: 3104000,
            apoapsis: 3296000,
            soiExitVelocity: 534.47844560618,
            synchronousOrbit: 0,
            color: "gray"
        }
    ),
    
    new PlanetMoon(
        {
            name: "Laythe",
            id: 11,
            r2: 3723645.8,
            planetRadius: 500000,
            orbitalInclination: 0,
            hasOxygen: true,
            atmosphere: 60.7950,
            atmosphericHeight: 50000,
            orbitalEccentricity: 0,
            siderealOrbitPeriod: 52980.9,
            surfaceGravity: 7.85,
            semiMajorAxis: 27184000,
            periapsis: 27184000,
            apoapsis: 27184000,
            soiExitVelocity: 2801.4282280552,
            synchronousOrbit: 0,
            color: "gray"
        }
    ),
    
    new PlanetMoon(
        {
            name: "Vall",
            id: 12,
            r2: 2406401.4,
            planetRadius: 300000,
            orbitalInclination: 0,
            hasOxygen: false,
            atmosphere: 0,
            atmosphericHeight: 0,
            orbitalEccentricity: 0,
            siderealOrbitPeriod: 105962.1,
            surfaceGravity: 2.31,
            semiMajorAxis: 43152000,
            periapsis: 43152000,
            apoapsis: 43152000,
            soiExitVelocity: 1176.0994840963,
            synchronousOrbit: 0,
            color: "gray"
        }
    ),
    
    new PlanetMoon(
        {
            name: "Tylo",
            id: 13,
            r2: 10856518.0,
            planetRadius: 600000,
            orbitalInclination: .025,
            hasOxygen: false,
            atmosphere: 0,
            atmosphericHeight: 0,
            orbitalEccentricity: 0,
            siderealOrbitPeriod: 211926.4,
            surfaceGravity: 7.85,
            semiMajorAxis: 68500000,
            periapsis: 68500000,
            apoapsis: 68500000,
            soiExitVelocity: 3068.8108674751,
            synchronousOrbit: 0,
            color: "gray"
        }
    ),
    
    new PlanetMoon(
        {
            name: "Bop",
            id: 14,
            r2: 1221060.9,
            planetRadius: 65000,
            orbitalInclination: 15,
            hasOxygen: false,
            atmosphere: 0,
            atmosphericHeight: 0,
            orbitalEccentricity: .235,
            siderealOrbitPeriod: 544507.4,
            surfaceGravity: .589,
            semiMajorAxis: 128500000,
            periapsis: 98302500.1,
            apoapsis: 158697499.9,
            soiExitVelocity: 276.61886828214,
            synchronousOrbit: 0,
            color: "gray"
        }
    ),
    
    new PlanetMoon(
        {
            name: "Pol",
            id: 15,
            r2: 1042138.9,
            planetRadius: 44000,
            orbitalInclination: 4.25,
            hasOxygen: false,
            atmosphere: 0,
            atmosphericHeight: 0,
            orbitalEccentricity: 0.171,
            siderealOrbitPeriod: 901902.6,
            surfaceGravity: .373,
            semiMajorAxis: 179890000,
            periapsis: 149155793.5,
            apoapsis: 210624206.5,
            soiExitVelocity: 181.12051236676,
            synchronousOrbit: 0,
            color: "gray"
        }
    ),

];