import { useQuery } from "@tanstack/react-query";
import { fetchCurrentUser } from "@/server/authService";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const useCurrentUser = () => {
  const navigate = useNavigate();

  const queryResult = useQuery({
    queryKey: ["currentUser"],
    queryFn: fetchCurrentUser,
    retry: 2, // Disable retries for unauthorized access
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes

  });

  const { error } = queryResult;

  // Handle redirection in a useEffect
  useEffect(() => {
    if (error?.message === "Unauthorized") {
      console.warn("Unauthorized access detected. Redirecting to login...");
      navigate("/auth/signin", { replace: true });
    }
  }, [error, navigate]);

  return queryResult;
};

export default useCurrentUser;
