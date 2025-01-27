// frontend/services/authService.js

export const login = async (data) => {
    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      credentials: "include", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    if (!response.ok) {const error = await response.json();
      throw new Error(error.message || "Login failed");
    }
    return response.json();  
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
  