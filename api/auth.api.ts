import { API_URL } from "./apiUrl";
import {
    IAuthPayload,
    IAuthResponse,
    IAuthChangePasswordPayload,
} from "../interfaces/auth.interface";
import { getCookie } from "@/helpers/cookies.helper";

export const AuthApi = {
    async login({ email, password }: IAuthPayload): Promise<IAuthResponse> {
        try {
            const response = await fetch(`${API_URL}/users/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
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

    async register({ email, password }: IAuthPayload): Promise<IAuthResponse> {
        try {
            const response = await fetch(`${API_URL}/users/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
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

    async changePassword({
        password,
    }: IAuthChangePasswordPayload): Promise<IAuthResponse> {
        const token = getCookie("token");

        try {
            const response = await fetch(`${API_URL}/users/update-password`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    password,
                }),
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
