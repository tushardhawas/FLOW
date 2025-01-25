// frontend/services/authService.js

export const login = async (data) => {
    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Login failed");
    }
  
    return response.json();  // Return success data
  };
  