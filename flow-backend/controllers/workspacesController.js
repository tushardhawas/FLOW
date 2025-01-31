import { DATABASE_ID, WORKSPACES_ID } from "../config.js";
import { ID } from "node-appwrite";
export const workspacesController = async (req, res) => {
  const databases = req.databases;
  const user = req.user; // `req.user` should already be populated by sessionMiddleware
  const { name } = req.body;

  if (!user) {
    return res.status(401).json({ message: "User not authenticated" });
  }

  try {
    const workspace = await databases.createDocument(
      DATABASE_ID,
      WORKSPACES_ID,
      ID.unique(),
      {
        name,
        userId: user.$id,
      }
    );
    
    return res.json({ data: workspace });
  } catch (error) {
    return res.status(500).json({ message: "Failed to create workspace", error: error.message });
  }
};
