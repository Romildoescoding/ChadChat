import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export function useUser() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    staleTime: Infinity,
  });
  // console.log(user.user_metadata.username);

  return {
    isLoading,
    user,
    isAuthenticated: user?.role === "authenticated",
  };
}
