export interface INotificationPayload {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export interface INotificationResponse {
    success?: boolean;
    error?: string;
}
