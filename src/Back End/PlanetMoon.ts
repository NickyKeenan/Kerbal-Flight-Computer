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

    //variables
    name: string;
    id: number;
    r2: number;
    planetRadius: number;
    orbitalInclination: number;
    pressure: number;
    hasOxygen: boolean;
    hasAtmosphere: boolean;
    orbitalEccentricity: number;
    siderealOrbitPeriod: number;
    surfaceGravity: number;
    atmosphericHeight: number;
    semiMajorAxis: number;
    periapsis: number;
    apoapsis: number;
    minimumTemperature: number;
    maximumTemperature: number;
    soiExitVelocity: number;

    //constructor
    constructor(name: string, id: number, r2: number, planetRadius: number, orbitalInclination: number, pressure: number, hasOxygen: boolean, hasAtmosphere: boolean, orbitalEccentricity: number, siderealOrbitPeriod: number, surfaceGravity: number, atmosphericHeight: number, semiMajorAxis: number, periapsis: number, apoapsis: number, minimumTemperature: number, maximumTemperature: number, soiExitVelocity: number) {
        this.name = name;
        this.id = id;
        this.r2 = r2;
        this.planetRadius = planetRadius;
        this.orbitalInclination = orbitalInclination;
        this.pressure = pressure;
        this.hasOxygen = hasOxygen;
        this.hasAtmosphere = hasAtmosphere;
        this.orbitalEccentricity = orbitalEccentricity;
        this.siderealOrbitPeriod = siderealOrbitPeriod;
        this.surfaceGravity = surfaceGravity;
        this.atmosphericHeight = atmosphericHeight;
        this.semiMajorAxis = semiMajorAxis;
        this.periapsis = periapsis;
        this.apoapsis = apoapsis;
        this.minimumTemperature = minimumTemperature;
        this.maximumTemperature = maximumTemperature;
        this.soiExitVelocity = soiExitVelocity;
    }

    //getters and setters
    getName(): string {
        return this.name;
    }

    getId(): number {
        return this.id;
    }

    getR2(): number {
        return this.r2;
    }

    getPlanetRadius(): number {
        return this.planetRadius;
    }

    getOrbitalInclination(): number {
        return this.orbitalInclination;
    }

    getPressure(): number {
        return this.pressure;
    }

    getHasOxygen(): boolean {
        return this.hasOxygen;
    }

    getHasAtmosphere(): boolean {
        return this.hasAtmosphere;
    }

    getOrbitalEccentricity(): number {
        return this.orbitalEccentricity;
    }

    getSiderealOrbitPeriod(): number {
        return this.siderealOrbitPeriod;
    }

    getSurfaceGravity(): number {
        return this.surfaceGravity;
    }

    getAtmosphericHeight(): number {
        return this.atmosphericHeight;
    }

    getSemiMajorAxis(): number {
        return this.semiMajorAxis;
    }

    getPeriapsis(): number {
        return this.periapsis;
    }

    getApoapsis(): number {
        return this.apoapsis;
    }

    getMinimumTemperature(): number {
        return this.minimumTemperature;
    }

    getMaximumTemperature(): number {
        return this.maximumTemperature;
    }

    getSoiExitVelocity(): number {
        return this.soiExitVelocity;
    }

    //setters
    setName(name: string): void {
        this.name = name;
    }

    setId(id: number): void {
        this.id = id;
    }

    setR2(r2: number): void {
        this.r2 = r2;
    }

    setPlanetRadius(planetRadius: number): void {
        this.planetRadius = planetRadius;
    }

    setOrbitalInclination(orbitalInclination: number): void {
        this.orbitalInclination = orbitalInclination;
    }

    setPressure(pressure: number): void {
        this.pressure = pressure;
    }

    setHasOxygen(hasOxygen: boolean): void {
        this.hasOxygen = hasOxygen;
    }

    setHasAtmosphere(hasAtmosphere: boolean): void {
        this.hasAtmosphere = hasAtmosphere;
    }

    setOrbitalEccentricity(orbitalEccentricity: number): void {
        this.orbitalEccentricity = orbitalEccentricity;
    }

    setSiderealOrbitPeriod(siderealOrbitPeriod: number): void {
        this.siderealOrbitPeriod = siderealOrbitPeriod;
    }

    setSurfaceGravity(surfaceGravity: number): void {
        this.surfaceGravity = surfaceGravity;
    }

    setAtmosphericHeight(atmosphericHeight: number): void {
        this.atmosphericHeight = atmosphericHeight;
    }

    setSemiMajorAxis(semiMajorAxis: number): void {
        this.semiMajorAxis = semiMajorAxis;
    }

    setPeriapsis(periapsis: number): void {
        this.periapsis = periapsis;
    }

    setApoapsis(apoapsis: number): void {
        this.apoapsis = apoapsis;
    }

    setMinimumTemperature(minimumTemperature: number): void {
        this.minimumTemperature = minimumTemperature;
    }

    setMaximumTemperature(maximumTemperature: number): void {
        this.maximumTemperature = maximumTemperature;
    }

    setSoiExitVelocity(soiExitVelocity: number): void {
        this.soiExitVelocity = soiExitVelocity;
    }

}