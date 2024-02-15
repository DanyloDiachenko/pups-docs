import { API_URL } from "./apiUrl";
import { IOrdersResponse } from "@/interfaces/orders.interface";
import { getCookie } from "@/helpers/cookies.helper";

export const DeleteOrderApi = {
    async deleteOrder(orderId: number): Promise<IOrdersResponse> {
        const token = getCookie("token");

        try {
            const response = await fetch(`${API_URL}/users/delete-order`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token || ""}`,
                },
                body: JSON.stringify({ orderId: orderId }),
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
