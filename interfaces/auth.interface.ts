export interface IAuthPayload {
    email: string;
    password: string;
}

export interface IAuthResponse {
    token?: string;
    error?: string;
}

export interface IAuthChangePasswordPayload {
    password: string;
}

export interface IGetEmailResponse {
    email?: string;
    error?: string;
}