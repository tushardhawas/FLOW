import { useQuery } from "@tanstack/react-query";
import { fetchCurrentUser } from "@/server/authService";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const useCurrentUser = () => {
  console.log("indie current");

  return useQuery({
    queryKey: ["currentUser"],
    queryFn: fetchCurrentUser,
    retry: false,
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
    refetchOnWindowFocus: false, // 👈 Prevents refetch on window focus
  
  });
};

export default useCurrentUser;
