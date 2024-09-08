import { useUser } from "../features/authentication/useUser";
import { useChats } from "../features/chats/useChats";
import { useUsers } from "../features/chats/useUsers";
import { useParams } from "react-router-dom";

export function useAllChats(emailToSearch) {
  const { id: email } = useParams();
  const { user: currentUser, isLoading: isLoading1 } = useUser();
  const { users, isLoading: isLoading2 } = useUsers();

  //Sender
  const senderId = users?.filter(
    (user) => user?.email === currentUser?.user_metadata.email,
  )?.[0]?.id;

  const senderName = currentUser?.user_metadata.username;

  //Receiver
  let receiver;
  if (emailToSearch) {
    receiver = users?.filter((user) => user?.email === emailToSearch)?.[0];
  } else {
    receiver = users?.filter((user) => user?.email === email)?.[0];
  }

  const receiverName = receiver?.username;
  const receiverId = receiver?.id;

  const { chats, isLoading } = useChats({
    senderId,
    recieverID: receiverId,
  });

  // receiverID.eq.${senderId}
  const ids = [senderId, receiverId];

  const messages = chats?.filter(
    (chat) => ids.includes(chat.receiverID) && ids.includes(chat.senderId),
  );

  messages?.sort((a, b) => {
    // Convert strings to Date objects and then compare
    return new Date(a.created_at) - new Date(b.created_at);
  });

  return { senderId, senderName, receiverId, receiverName, messages };
}
