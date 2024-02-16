export enum OrderStatus {
    placed = "placed",
    purchasingMaterials = "purchasingMaterials",
    manufacturing = "manufacturing",
    delivering = "delivering",
    completed = "completed",
}

export interface IOrder {
    id: number;
    capacity: number;
    power: number;
    charger: number;
    isAutoLighter: boolean;
    usbQuantity: number;
    typecQuantity: number;
    outletQuantity: number;
    armor: boolean;
    price: number;
    status: OrderStatus;
    readyPupsVersion?: number;
    createdAt: Date;
}

export interface IOrdersResponse {
    data?: IOrder[];
    error?: string;
}

export interface ICreateOrderPayload {
    id: number;
    capacity: number;
    power: number;
    charger: number;
    isAutoLighter: boolean;
    usbQuantity: number;
    typecQuantity: number;
    outletQuantity: number;
    armor: boolean;
    price: number;
    status: OrderStatus;
    readyPupsVersion?: number;
}
