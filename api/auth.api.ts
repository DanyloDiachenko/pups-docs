import { API_URL } from "./apiUrl";
import { IAuthPayload, IAuthResponse } from "../interfaces/auth.interface";

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
};
