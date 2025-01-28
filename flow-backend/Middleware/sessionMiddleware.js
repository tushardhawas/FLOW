import { Account, Databases, Client, Storage, Users } from "node-appwrite";

export const sessionMiddleware = async (req, res, next) => {
  try {
    // Initialize Appwrite client
    const client = new Client()
      .setEndpoint(process.env.APPRIGHT_ENDPOINT)
      .setProject(process.env.APPRIGHT_PROJECT);

    // Get session from cookies
    const session = req.cookies.sessionId;

    if (!session) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    client.setSession(session);

    // Create Appwrite service instances
    const account = new Account(client);
    const databases = new Databases(client);
    const storage = new Storage(client);

    // Fetch authenticated user
    const user = await account.get();

    // Attach instances to the request object for later use
    req.account = account;
    req.databases = databases;
    req.storage = storage;
    req.user = user;

    next();
  } catch (error) {
    console.error("Session middleware error:", error.message);
    return res.status(401).json({ error: "Invalid session or unauthorized access" });
  }
};
