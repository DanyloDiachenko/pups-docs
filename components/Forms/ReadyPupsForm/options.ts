export interface IOption {
    id: string;
    label: string;
    value: string | number | boolean;
    price: number;
}

export interface IOptionsObject {
    capacity: IOption[];
    power: IOption[];
    charger: IOption[];
    isAutoLighter: IOption[];
    usbQuantity: IOption[];
    typecQuantity: IOption[];
    outletQuantity: IOption[];
    armor: IOption[];
}

export const initialPupsOptions: IOption[] = [
    {
        id: "pups1",
        label: "«PUPS» v.1",
        value: 1,
        price: 6249,
    },
    {
        id: "pups1.5",
        label: "«PUPS» v.1.5",
        value: 1.5,
        price: 6451,
    },
    {
        id: "pups2",
        label: "«PUPS» v.2",
        value: 2,
        price: 7889,
    },
];
