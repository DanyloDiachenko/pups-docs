export enum OrderStatus {
    Placed = "Створена",
    MaterialsPurchased = "Закупівля матераілів",
    InProduction = "Виготовлення",
    InDelivery = "Доставка",
    Completed = "Завершений",
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
