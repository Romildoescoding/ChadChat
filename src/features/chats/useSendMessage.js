import { useMutation, useQueryClient } from "@tanstack/react-query";
import { sendMessage as sendMessageApi } from "../../services/apiChats";

export function useSendMessage() {
  const queryClient = useQueryClient();
  const { mutate: sendMessage, isLoading } = useMutation({
    mutationFn: sendMessageApi,
    onSuccess: () => {
      console.log("Insertion successful");
      queryClient.invalidateQueries(["chats"]);
    },
    onError: (error) => {
      console.log(
        "ERROR is -------------------------------------------" + error.message,
      );
    },
  });

  return { sendMessage, isLoading };
}
