import { API_URL } from "./apiUrl";
import {
    IOrdersResponse,
    ICreateOrderPayload,
} from "@/interfaces/orders.interface";
import { getCookie } from "@/helpers/cookies.helper";

export const CreateOrderApi = {
    async createOrder(
        createOrderPayload: ICreateOrderPayload,
    ): Promise<IOrdersResponse> {
        const token = getCookie("token");

        try {
            const response = await fetch(`${API_URL}/users/create-order`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token || ""}`,
                },
                body: JSON.stringify(createOrderPayload),
            });

            if (response.ok) {
                return await response.json();
            } else {
                const responseData = await response.json();

                throw new Error(responseData.message);
            }
        } catch (error: any) {
            return { error: error.message ? error.message : "" };
        }
    },
};
