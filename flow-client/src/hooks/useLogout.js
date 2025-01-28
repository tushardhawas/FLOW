import { useMutation } from "@tanstack/react-query";
import { logout } from "@/server/authService";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const navigate = useNavigate(); // Only works inside hooks or components

  return useMutation({
    mutationFn: logout,
    onError: (error) => {
      console.error("Logout failed:", error);
    },
    onSuccess: (data) => {
      console.log("Logout successful:", data);
      navigate("/auth/signin"); // Redirect to homepage or login page
    },
  });
};

export default useLogout;
