import { Client, Databases, Account } from "appwrite";
import dotenv from "dotenv";


dotenv.config();
console.log(process.env.APPRIGHT_ENDPOINT);
// Initialize Appwrite Client
const client = new Client();

client.setEndpoint(process.env.APPRIGHT_ENDPOINT).setProject( process.env.APPRIGHT_PROJECT);

export const account = new Account(client);
export const databases = new Databases(client);