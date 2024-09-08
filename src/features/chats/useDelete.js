import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteMessage as deleteMessageApi } from "../../services/apiChats";
export function useDelete() {
  const queryClient = useQueryClient();
  const { mutate: deleteMessage, isLoading } = useMutation({
    mutationFn: deleteMessageApi,
    onSuccess: () => {
      console.log("Delete Successful");
      queryClient.invalidateQueries(["chats"]);
    },
    onError: (error) => {
      console.log(
        "ERROR is -------------------------------------------" + error.message,
      );
    },
  });
  return { deleteMessage, isLoading };
}
