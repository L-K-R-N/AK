export interface ICountry {
    name: ICountryName;
    capital?: string[];
    population: number;
    timezones: string[];
    flags: ICountryFlag;
    status?: string;
    area: number;
}


interface ICountryName {
    common: string;
    official: string;
}

interface ICountryFlag {
    svg: string;
    alt: string;
}