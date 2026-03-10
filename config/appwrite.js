import { Client , Databases, Account, Storage } from 'node-appwrite';

const createAdminClient = async () => {
    const client = new Client()
        .setEndpoint(process.env.APPWRITE_ENDPOINT)
        .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID)
        .setKey(process.env.NEXT_APPWRITE_KEY);

    return {
        getAccount() {
            return new Account(client);
        },
        getDatabases() {
            return new Databases(client);
        },
        getStorage() {
            return new Storage(client);
        }
    };
}


const createSessionClient = async (session ) => {
    const client = new Client()
        .setEndpoint(process.env.APPWRITE_ENDPOINT)
        .setProject(process.env.APPWRITE_PROJECT_ID);

    if (session) {
        client.setSession(session);
    }

    return {
        getAccount() {
            return new Account(client);
        },
        getDatabases() {
            return new Databases(client);
        }
    };
}

export { createAdminClient, createSessionClient };