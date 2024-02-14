export enum OrderStatus {
    Placed = "placed",
    MaterialsPurchased = "purchasingMaterials",
    InProduction = "manufacturing",
    InDelivery = "delivering",
    Completed = "completed",
}

export interface IOrder {
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
    readyPupsVersion: number | null;
}

export interface IOrdersResponse {
    data?: IOrder[];
    error?: string;
}
