'use server';

import { createAdminClient } from "@/config/appwrite";
import checkAuth from "./checkAuth";
import { ID } from "node-appwrite";
import { revalidatePath } from "next/cache";

async function createRoom(previousState, formData) {
    try {
        const { user, isAuthenticated } = await checkAuth();

        console.log("Auth check:", { isAuthenticated, user }); // temporary debug log

        if (!isAuthenticated) {
            return { error: "You must be logged in to create a room" };
        }

        const adminClient = await createAdminClient();
        const databases = adminClient.getDatabases();

        const newRoom = await databases.createDocument(
            process.env.APPWRITE_PROJECT_DATABASE,
            process.env.APPWRITE_PROJECT_TABLE_ROOMS,
            ID.unique(),
            {
                user_id: user.id,
                name: formData.get('name'),
                description: formData.get('description'),
                sqft: formData.get('sqft'),
                capacity: formData.get('capacity'),
                location: formData.get('location'),
                address: formData.get('address'),
                availability: formData.get('availability'),
                price_per_hour: formData.get('price_per_hour'),
                amenities: formData.get('amenities'),
                image: "/images/rooms/room-1.jpg"
            }
        );

        revalidatePath('/', 'layout');
        return { success: true };

    } catch (error) {
        console.log(error);
        const errorMessage = error?.response?.message || 'An unexpected error occurred';
        return { error: errorMessage };
    }
}

export default createRoom;