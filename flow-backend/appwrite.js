// appwrite.js
import { Client, Account, Users, Storage, Databases } from "node-appwrite";
import dotenv from "dotenv";

dotenv.config();

export async function createAdminClient() {
  const client = new Client()
    .setEndpoint(process.env.APPRIGHT_ENDPOINT)
    .setProject(process.env.APPRIGHT_PROJECT)
    .setKey(process.env.APPRIGHT_KEY);

  return {
    get account() {
      return new Account(client);
    },
  };
}
