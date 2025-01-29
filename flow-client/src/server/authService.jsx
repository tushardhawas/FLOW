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

    console.log("inside fetchcurrent");

    if (!response.ok) {
      // Handle different error types
      if (response.status === 401) {
        console.warn("User not authenticated");
        return null; // Not logged in, return null
      } else {
        throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
      }
    }

    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    // Handle fetch/network errors
    if (error.name === "TypeError" || error.message.includes("Failed to fetch")) {
      throw new Error("Server is down or unreachable");
    }
    
    console.error("Error fetching user:", error.message);
    throw error; // Let React Query handle retries if needed
  }
};
