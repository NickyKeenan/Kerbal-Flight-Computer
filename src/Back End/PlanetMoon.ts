// PlanetMoon.ts
//Class file containing the planet/moon objects that will be used in the
//calculations for the manuever computer.
//Contains:
    //name
    //id
    //float r2
    //float planetRadius
    //float orbitalInclination
    //float pressure
    //boolean hasOxygen
    //boolean hasAtmosphere
    //float orbitalEccentricity
    //float siderealOrbitPeriod
    //float surfaceGravity
    //float atmosphericHeight
    //float semiMajorAxis
    //float periapsis
    //float apoapsis
    //float minimumTemperature
    //float maximumTemperature
    //float soiExitVelocity

export class PlanetMoon {
    name!: string;
    id!: number;
    r2!: number;
    planetRadius!: number;
    orbitalInclination!: number;
    hasOxygen!: boolean;
    atmosphere!: number;
    atmosphericHeight!: number;
    orbitalEccentricity!: number;
    siderealOrbitPeriod!: number;
    surfaceGravity!: number;
    semiMajorAxis!: number;
    periapsis!: number;
    apoapsis!: number;
    soiExitVelocity!: number;
    synchronousOrbit!: number;
    color!: string;

    //constructor
    constructor( data: {

        name: string;
        id: number;
        r2: number;
        planetRadius: number;
        orbitalInclination: number;
        hasOxygen: boolean;
        atmosphere: number;
        atmosphericHeight: number;
        orbitalEccentricity: number;
        siderealOrbitPeriod: number;
        surfaceGravity: number;
        semiMajorAxis: number;
        periapsis: number;
        apoapsis: number;
        soiExitVelocity: number;
        synchronousOrbit: number;
        color: string;

    } ) {
        
        Object.assign( this, data );

    }

}