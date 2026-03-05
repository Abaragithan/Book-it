'use server';

import { createSessionClient } from "@/config/appwrite";
import { cookies } from "next/headers";


async function destroySession() {
    
    try {
        
        const cookieStore = await cookies();
        const sessionCookie = cookieStore.get('appwrite-session');
        if(!sessionCookie) {
            return {error: "No Session Cookie Found"};
        }

        const { getAccount } = await createSessionClient(sessionCookie.value);
        const account = getAccount();

        // delete current session
        await account.deleteSession('current');

        // clear session cookie
        cookieStore.delete('appwrite-session');

        return { success: true };

    } catch (error) {
        console.log("Authentication Error", error);
        
        return { error: "Error destroying session" };
    }

   
    
}

export default destroySession;