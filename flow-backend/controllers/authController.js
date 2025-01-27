// controllers.js
import { ID } from "node-appwrite";
import { createAdminClient } from "../appwrite.js";


export const loginController = async (req, res) => {
  const { email, password } = req.body;
  const { account } = await createAdminClient();

  const session = await account.createEmailPasswordSession(email, password);

  res.cookie("sessionId", session.secret, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 24 * 60 * 60 * 1000, // 1 day expiration
    sameSite: "Strict",
  });

  return res.json({ success: true, message: "Login successful!" });
};

export const registerController = async (req, res) => {
  const { name, email, password } = req.body;
  const { account } = await createAdminClient();

  await account.create(ID.unique(), email, password, name);

  const session = await account.createEmailPasswordSession(email, password);
  console.log(session);

  // Set session ID as a cookie
  res.cookie("sessionId", session.secret, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 24 * 60 * 60 * 1000,
    sameSite: "Strict",
  });

  return res.status(200).json({
    success: true,
    message: "User registered and logged in successfully.",
  });
};
