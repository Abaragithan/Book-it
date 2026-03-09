'use server';

import { createSessionClient } from "@/config/appwrite";
import { cookies } from "next/headers";


async function checkAuth () {

    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get('appwrite-session');

    if (!sessionCookie) {
        return {
            isAuthenticated: false,
        };
    }

    try {

        const { getAccount } = await createSessionClient(sessionCookie.value);

        const account = getAccount();
        const user = await account.get();
        return {
            isAuthenticated: true,
            user: {
                name: user.name,
                email: user.email,
                id: user.$id,
            },
        };
    } catch (error) {
        return {
            isAuthenticated: false,
        };
    
    }

}

export default checkAuth;