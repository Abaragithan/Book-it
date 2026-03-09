'use server';

import { createAdminClient } from "@/config/appwrite";
import { ID } from "node-appwrite";


async function createUser(previousState, formData) {

    const email = formData.get('email');
    const name = formData.get('name');
    const password = formData.get('password');
    const ConfirmPassword = formData.get('confirm-password');


    if(!name || !password || !email ) {
        return {
            error:'please fill in the fields'
        }
    }

    if (password.lenght < 8) {
        return {
            error:'password shuld be atleast 8 charector long'
        }
    }

    if (password !== ConfirmPassword) {
        return {
            error:'passwords do not match'
        }
    }

    // get account instance
    const { getAccount } = await createAdminClient();
    const account = getAccount();

    try {

        const user = await account.create(ID.unique(), email, password, name);
        
        return {
            success:true
        }
        
    } catch (error) {
        console.log("Registration error ", error);
        return {
            error: "could not register user"
        }
        
    }


    


    
}


export default createUser;