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

export const logoutController = async (req, res) => {
  // Access the account object from the request (set in sessionMiddleware)
  const account = req.account;

  try {
    // Remove the session cookie by setting it with an expired date
    res.cookie("sessionId", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      expires: new Date(0),  // Expire the cookie immediately
      sameSite: "Strict",
    });

    // Delete the current session from Appwrite
    await account.deleteSession("current");

    return res.json({ success: true, message: "Logout successful!" });
  } catch (error) {
    console.error("Logout error:", error.message);
    return res.status(500).json({ success: false, message: "Logout failed." });
  }
};
