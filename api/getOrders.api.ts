import { API_URL } from "./apiUrl";
import { IOrdersResponse } from "@/interfaces/orders.interface";
import { getServerCookie } from "@/helpers/getServerCookie.helper";

export const GetOrdersApi = {
    async getOrders(): Promise<IOrdersResponse> {
        const token = getServerCookie("token");

        try {
            const response = await fetch(`${API_URL}/users/orders`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token || ""}`,
                },
            });

            if (response.ok) {
                return await response.json();
            } else {
                const responseData = await response.json();

                throw new Error(responseData.message);
            }
        } catch (error: any) {
            console.log(error);

            return { error: error.message ? error.message : "" };
        }
    },
};
