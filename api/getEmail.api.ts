import { API_URL } from "./apiUrl";
import { getServerCookie } from "@/helpers/getServerCookie.helper";
import { IGetEmailResponse } from "@/interfaces/auth.interface";

export const GetEmailApi = {
    async getEmail(): Promise<IGetEmailResponse> {
        const token = getServerCookie("token");

        try {
            const response = await fetch(`${API_URL}/users/get-email`, {
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
            return { error: error.message ? error.message : "" };
        }
    },
};
