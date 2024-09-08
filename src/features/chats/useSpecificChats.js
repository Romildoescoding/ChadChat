import { useQuery } from "@tanstack/react-query";
import { getSpecificChats as getSpecificChatsApi } from "../../services/apiChats";

export function useSpecificChats({ senderId, receiverID }) {
  const { data: specificChats, isLoading } = useQuery({
    queryKey: ["chats"],
    queryFn: () => getSpecificChatsApi({ senderId, receiverID }),
    onSuccess: () => {
      console.log("CHATS fetched successfully");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { specificChats, isLoading };
}
