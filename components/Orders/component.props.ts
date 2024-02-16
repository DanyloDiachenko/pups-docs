import { IOrder } from "@/interfaces/orders.interface";

export interface OrdersProps {
    orders: IOrder[];
    language: string;
    strings: {
        profile: {
            myOrders: {
                table: {
                    type: string;
                    typeCustom: string;
                    capacity: string;
                    capacityAdd: string;
                    power: string;
                    powerAdd: string;
                    usbQuantity: string;
                    typecQuantity: string;
                    isAutoLighter: string;
                    isAutoLighterAdd: string;
                    status: {
                        title: string;
                        placed: string;
                        purchasingMaterials: string;
                        manufacturing: string;
                        delivering: string;
                        completed: string;
                    };
                    price: string;
                    created: string;
                    createdAdd: string;
                    delete: string;
                    descriptionWeSee: string;
                    descriptionNoOrders: string;
                    descriptionLinkOrder: string;
                };
            };
        };
        common: {
            yes: string;
            no: string;
        };
    };
}
