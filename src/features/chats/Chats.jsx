import { HiMagnifyingGlass } from "react-icons/hi2";
import Chat from "./Chat";
import { useState } from "react";
import { getSpecificChats } from "../../services/apiChats";
import { useAllChats } from "../../hooks/useAllChats";
import { useChats } from "./useChats";

//Data format recieved from the users table
// avatar: null
// created_at: "2024-04-02T17:08:03.523034+00:00"
// email: "1234567890@gmail.com"
// id: 4
// password: "1234567890"
// username: "1234567890"

function Chats({ users, currentUser, isLoading1, isLoading2 }) {
  const [searchQuery, setSearchQuery] = useState("");

  const notCurrentUsers = users.filter(
    (user) => user.email !== currentUser.user_metadata.email,
  );

  const filteredUsers1 = notCurrentUsers.filter((user) =>
    user.username.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // const { chats, isLoading } = useChats({ senderId: currentUser.id });
  // console.log(chats);
  const { chats } = useChats({ senderId: currentUser.id });
  console.log(chats);

  const usersWithTime = filteredUsers1.map((user) => {
    const recentTime = chats?.findLast(function (message) {
      // console.log(message);
      return message.senderId === user.id || message.receiverID === user.id;
    });
    console.log(recentTime?.created_at);
    return { ...user, recentTime: recentTime?.created_at };
  });
  console.log(usersWithTime);

  // chats?.messages.forEach((message)=> )

  // filteredUsers1.map((user) => {
  //   const message = useAllChats(user.email);
  //   return { ...user, recentTime: message?.at(-1).created_at };
  // });

  usersWithTime?.sort((a, b) => {
    // Convert strings to Date objects and then compare
    return new Date(b.recentTime) - new Date(a.recentTime);
  });
  console.log(usersWithTime);

  // const { senderId, senderName, receiverId, receiverName, message } =
  //   useAllChats("all");

  return (
    <>
      <div className="mb-2 flex h-10 w-full items-center justify-center rounded-full bg-darkgray shadow-md shadow-darkgray">
        <input
          value={searchQuery}
          onChange={(e) => {
            console.log(searchQuery);
            setSearchQuery(e.target.value);
          }}
          type="text"
          className="h-9 w-[85%] rounded-full bg-darkgray p-3 text-silver placeholder:text-silver  focus:outline-none"
          placeholder="Search Chats..."
        />
        <div className=" grid h-full w-[15%] place-items-center">
          <HiMagnifyingGlass size={25} color="#bababa" />
        </div>
      </div>
      {usersWithTime.map((user) => (
        <Chat
          key={user.id}
          id={user.id}
          username={user.username}
          avatar={user.avatar}
          email={user.email}
        />
      ))}
    </>
  );
}

export default Chats;
