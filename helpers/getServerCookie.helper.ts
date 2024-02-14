import { cookies } from "next/headers";

export const getServerCookie = (name: string) => {
    const cookieStore = cookies();
    const cookieValue = cookieStore.get(name);

    return cookieValue?.value;
};
