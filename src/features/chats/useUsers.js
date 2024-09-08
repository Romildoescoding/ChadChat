import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../services/apiChats";

export function useUsers() {
  const { data: users, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
  // console.log(users);

  return { users, isLoading };
}
