export interface ICountry {
    name: ICountryName;
    capital?: string[];
    population: number;
    timezones: string[];
    flags: ICountryFlag;
    status?: string;
    area: number;
    maps: IMaps;
    continents: string[];
    region: string;
    car: ICar;
    startOfWeek: string;
    borders: string[];
    coatOfArms: ICoatOfArms;
    cca3: string;
    latlng: number[];
}
interface ICountryFlag {
    svg: string;
    alt: string;
}

interface ICoatOfArms {
    svg: string;
}

interface ICar {
    side: string;
}

interface IMaps {
    googleMaps: string;
}

interface ICountryName {
    common: string;
    official: string;
}
