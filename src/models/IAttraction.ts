import { IAddress } from "./IForm";

export interface IAttraction {
    id: number;
    title: string;
    description: string;
    address: IAddress;
    src: string;
}

