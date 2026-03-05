'use server';

import { createAdminClient } from "@/config/appwrite";
import { redirect } from "next/dist/server/api-utils";

async function getSingleRoom(id) {

    try
    {
        const adminClient = await createAdminClient();
        const databases = adminClient.getDatabases();

        const room = await databases.getDocument(
            process.env.APPWRITE_PROJECT_DATABASE,
            process.env.APPWRITE_PROJECT_TABLE_ROOMS,
            id
        );

       // revalidatePath('/', 'layout')

        return room;
    }
    catch (error)
    {
        console.error("Error fetching room:", error);
        redirect("/error");
    }
}

export default getSingleRoom;