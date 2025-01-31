
export const workspaceService = async (data) => {
  const response = await fetch("http://localhost:5000/workspaces", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  
  if (!response.ok) {
    const errorText = await response.text(); // Read as text to debug
    console.error("Error Response:", errorText);
    throw new Error(errorText || "Fetching workspace failed");
  }
  
  return response.json();
  
};
