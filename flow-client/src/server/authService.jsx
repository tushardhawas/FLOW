// frontend/services/authService.js

export const login = async (data) => {
  const response = await fetch("http://localhost:5000/api/login", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Login failed");
  }
  return response.json();
};

export const logout = async () => {
  const response = await fetch("http://localhost:5000/api/logout", {
    method: "POST",
    credentials: "include",
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "logout failed");
  }
  return await response.json();
};

export async function signup(data) {
  const response = await fetch("http://localhost:5000/api/register", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Failed to sign up");
  }
  return await response.json();
}
// authService.js (for fetching user data)

// authService.jsx
export const fetchCurrentUser = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/current", {
      method: "GET",
      credentials: "include", // Ensures cookies are sent
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to fetch user");
    }

    return await response.json();
  } catch (error) {
    // Handle both fetch errors and server-specific errors
    if (error.name === "TypeError" || error.message === "Failed to fetch") {
      throw new Error("Server down");
    }
    throw new Error(error.message || "An unknown error occurred");
  }
};
