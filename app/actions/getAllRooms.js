'use server';

import { createAdminClient } from "@/config/appwrite";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


async function getAllRooms() {
    try
    {
        const adminClient = await createAdminClient();
        const databases = adminClient.getDatabases();

        const {documents:rooms} = await databases.listDocuments(
            process.env.APPWRITE_PROJECT_DATABASE,
            process.env.APPWRITE_PROJECT_TABLE_ROOMS
        );

       // revalidatePath('/', 'layout')

        return rooms;
    }
    catch (error)
    {
        console.error("Error fetching rooms:", error);
        redirect("/error");
    }
}

export default getAllRooms;