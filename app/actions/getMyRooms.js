'use server';

import { createSessionClient } from "@/config/appwrite";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Query } from "node-appwrite";


async function getMyRooms() {

    const sessionCookie = (await cookies()).get('appwrite-session');

    if (!sessionCookie) {
        redirect('/login');
    }
    try
    {
        const { getAccount, getDatabases } = await createSessionClient(sessionCookie.value);

        const databases = getDatabases();
        const user = await getAccount().get();
        const userId = user.$id;

        const {documents:rooms} = await databases.listDocuments(
            process.env.APPWRITE_PROJECT_DATABASE,
            process.env.APPWRITE_PROJECT_TABLE_ROOMS,
            [Query.equal('user_id',userId)]
        );

        return rooms;
    }
    catch (error)
    {
        console.error("Failed to get user rooms ", error);
        redirect("/error");
    }
}

export default getMyRooms;