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
        value: "1",
        price: 6249,
    },
    {
        id: "pups1.5",
        label: "«PUPS» v.1.5",
        value: "1.5",
        price: 6451,
    },
    {
        id: "pups2",
        label: "«PUPS» v.2",
        value: "2",
        price: 7889,
    },
];

export const initialOptions: IOptionsObject = {
    capacity: [
        {
            id: "capacity40000",
            label: "40000 mAh",
            value: 40000,
            price: 3000,
        },
        {
            id: "capacity50000",
            label: "50000 mAh",
            value: 50000,
            price: 3750,
        },
        {
            id: "capacity60000",
            label: "60000 mAh",
            value: 60000,
            price: 4500,
        },
        {
            id: "capacity70000",
            label: "70000 mAh",
            value: 70000,
            price: 5250,
        },
    ],
    power: [
        {
            id: "inverter200",
            label: "200",
            value: 200,
            price: 440,
        },
        {
            id: "inverter250",
            label: "250",
            value: 250,
            price: 518,
        },
        {
            id: "inverter300",
            label: "300",
            value: 300,
            price: 590,
        },
        {
            id: "inverter400",
            label: "400",
            value: 400,
            price: 740,
        },
    ],
    charger: [
        {
            id: "charger5",
            label: "5",
            value: 5,
            price: 520,
        },
        {
            id: "charger10",
            label: "10",
            value: 10,
            price: 920,
        },
    ],
    isAutoLighter: [
        {
            id: "cigaretteno",
            label: "",
            value: false,
            price: 0,
        },
        {
            id: "cigaretteyes",
            label: "",
            value: true,
            price: 76,
        },
    ],
    usbQuantity: [
        {
            id: "usb0",
            label: "0",
            value: 0,
            price: 0,
        },
        {
            id: "usb1",
            label: "1",
            value: 1,
            price: 120,
        },
        {
            id: "usb2",
            label: "2",
            value: 2,
            price: 205,
        },
        {
            id: "usb3",
            label: "3",
            value: 3,
            price: 325,
        },
        {
            id: "usb4",
            label: "4",
            value: 4,
            price: 410,
        },
    ],
    typecQuantity: [
        {
            id: "typec0",
            label: "0",
            value: 1,
            price: 0,
        },
        {
            id: "typec1",
            label: "1",
            value: 2,
            price: 150,
        },
        {
            id: "typec2",
            label: "2",
            value: 3,
            price: 270,
        },
        {
            id: "typec3",
            label: "3",
            value: 4,
            price: 320,
        },
        {
            id: "typec4",
            label: "4",
            value: 4,
            price: 540,
        },
    ],
    outletQuantity: [
        {
            id: "rozette0",
            label: "0",
            value: 0,
            price: 0,
        },
        {
            id: "rozette1",
            label: "1",
            value: 1,
            price: 50,
        },
        {
            id: "rozette2",
            label: "2",
            value: 2,
            price: 100,
        },
    ],
    armor: [
        {
            id: "armorno",
            label: "",
            value: false,
            price: 0,
        },
        {
            id: "armoryes",
            label: "",
            value: true,
            price: 1200,
        },
    ],
};
