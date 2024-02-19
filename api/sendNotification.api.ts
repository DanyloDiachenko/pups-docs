import { API_URL } from "./apiUrl";
import {
    INotificationPayload,
    INotificationResponse,
} from "../interfaces/notification.interface";

export const NotifcationsApi = {
    async sendNotifcation({
        name,
        email,
        subject,
        message,
    }: INotificationPayload): Promise<INotificationResponse> {
        try {
            const response = await fetch(`${API_URL}/notifications/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    subject,
                    message,
                }),
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
