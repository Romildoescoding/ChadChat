import { useQuery } from "@tanstack/react-query";
import { getChats as getChatsApi } from "../../services/apiChats";

export function useChats({ senderId, receiverID }) {
  const { data: chats, isLoading } = useQuery({
    queryKey: ["chats"],
    queryFn: () => getChatsApi({ senderId, receiverID }),
    onSuccess: () => {
      console.log("CHATS fetched successfully");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { chats, isLoading };
}
