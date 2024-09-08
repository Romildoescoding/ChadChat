import { useNavigate } from "react-router-dom";
import { getChats, getSpecificChats } from "../../services/apiChats";
import { useChats } from "./useChats";
import { useUsers } from "./useUsers";
import { useUser } from "../authentication/useUser";
import { useAllChats } from "../../hooks/useAllChats";
import { formatTime } from "../../services/helpers";
import { HiOutlinePhoto } from "react-icons/hi2";

function Chat({ username, avatar, email: emailToSearch, id }) {
  const navigate = useNavigate();
  const { senderId, senderName, receiverId, receiverName, messages } =
    useAllChats(emailToSearch);

  const recentChatTime = messages?.at(-1)
    ? formatTime(messages?.at(-1)?.created_at)
    : "";
  // If image : Image
  //If message : If message.length > 25 : message.slice(0,25)+'...'
  //If !message : Tap to have a conversation
  const recentMessage = messages?.at(-1)?.image ? (
    <span className=" flex items-center gap-1">
      <HiOutlinePhoto size={20} />
      Image
    </span>
  ) : messages?.at(-1)?.message ? (
    messages?.at(-1)?.message?.length > 25 ? (
      messages?.at(-1)?.message?.slice(0, 25) + "..."
    ) : (
      messages?.at(-1)?.message
    )
  ) : (
    "Tap to have a conversation"
  );

  function handleChatClick() {
    navigate(`/chats/${emailToSearch}`);
  }

  return (
    <div
      onClick={handleChatClick}
      className=" mt-1 flex h-16 w-[100%] cursor-pointer items-center gap-7 rounded-xl border-gray-300 px-4 text-gray-100 shadow-black hover:bg-darkgray "
    >
      <img
        src={avatar || "/default-chad.png"}
        className=" h-10 w-10 rounded-full"
      />
      <div className=" flex w-full flex-col">
        <div className="flex w-full justify-between">
          <span className="text-sm font-bold">{username}</span>
          <span className=" text-xs font-semibold">{recentChatTime}</span>
        </div>
        <div className=" text-silver">{recentMessage}</div>
      </div>
    </div>
  );
}

export default Chat;
