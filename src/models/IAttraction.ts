export interface IAttraction {
    id: number;
    title: string;
    description: string;
    address: IAddress;
}

export interface IAddress {
    country: string;
    city: string;
    
}