import { useParams } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import { useUsers } from "../features/chats/useUsers";
import Spinner from "../ui/Spinner";
import { useChats } from "../features/chats/useChats";
import Message from "../features/chats/Message";
import { useEffect, useState } from "react";
import { HiOutlinePhoto, HiPaperAirplane } from "react-icons/hi2";
import { useSendMessage } from "../features/chats/useSendMessage";
import { isFilePath } from "../services/helpers";
import Modal from "../ui/Modal";
import MiniSpinner from "../ui/MiniSpinner";
import { useAllChats } from "../hooks/useAllChats";

function ChatArea() {
  //Sending a new message
  const [newMessage, setNewMessage] = useState();
  const [newImage, setNewImage] = useState();
  // const { id: email } = useParams();

  const { sendMessage, isLoading: isLoading3 } = useSendMessage();

  const { senderId, senderName, receiverId, receiverName, messages } =
    useAllChats();

  // console.log(senderId, senderName, receiverId, receiverName, messages);

  //SENDING MESSAGES
  function handleSend() {
    // if (!newMessage) return;
    sendMessage(
      {
        image: newImage,
        senderId,
        receiverID: receiverId,
        message: newMessage,
      },
      { onSettled: () => setNewMessage("") },
    );
  }

  useEffect(
    function () {
      document.querySelector("#last-message")?.scrollIntoView();
    },
    [messages],
  );

  // if (isLoading1 || isLoading2 || isLoading || isLoading3) return <Spinner />;

  return (
    <div className="h-full w-full">
      <div className="h-[88%] w-full overflow-scroll bg-dimgray px-1 py-10">
        {/* {senderId} is messaging to {receiverId} */}
        {messages?.map((message, index) => (
          <Message
            id={message.id}
            key={message.id}
            text={message.message}
            isSender={message.senderId === senderId}
            receiverName={receiverName}
            senderName={senderName}
            time={message.created_at}
            image={message.image}
            isLast={index === messages.length - 1}
          />
        ))}
      </div>

      {/* //Div for inputs */}
      <div className=" flex h-[12%] items-center justify-center gap-1 rounded-t-2xl bg-darkgray">
        {/* Input for image */}
        <label
          htmlFor="image"
          className=" grid h-10 w-10 cursor-pointer place-items-center rounded-md bg-turqoise p-2"
        >
          <HiOutlinePhoto size={24} />
        </label>
        <input
          id="image"
          type="file"
          onChange={(e) => {
            setNewImage(e.target.files[0]);
            setNewMessage("");
          }}
          className=" hidden h-[70%] w-10 rounded-md p-2 focus:outline-none"
        />

        {/* Input for message */}

        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className=" h-[70%] w-[80%] rounded-full bg-dimgray p-2 text-silver placeholder:text-silver focus:outline-none"
          placeholder="Type a message.."
          disabled={newImage}
        />
        <button
          className=" grid h-10 w-10 place-items-center rounded-md bg-turqoise"
          onClick={handleSend}
        >
          {isLoading3 ? <MiniSpinner /> : <HiPaperAirplane size={25} />}
        </button>
      </div>
    </div>
  );
}

export default ChatArea;
