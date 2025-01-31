import { useMutation } from "@tanstack/react-query";
import { workspaceService } from "@/server/workspaceService";
import queryClient from "@/queryClient";
const useCreateWorkspace = () => {
  const mutation = useMutation({
    mutationFn: workspaceService,
    onError: (error) => {
      console.error("fetching workspace failed:", error);
    },
    onSuccess: (data) => {
      console.log("fetched workspace successful:", data);
    },
  });

  return mutation;
};

export default useCreateWorkspace;
