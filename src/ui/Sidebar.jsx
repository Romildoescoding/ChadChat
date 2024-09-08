import { useUser } from "../features/authentication/useUser";
import Chats from "../features/chats/Chats";
import { useUsers } from "../features/chats/useUsers";
import Spinner from "./Spinner";

function Sidebar() {
  const { users, isLoading: isLoading1 } = useUsers();
  const { user: currentUser, isLoading: isLoading2 } = useUser();

  if (isLoading1 || isLoading2) return <Spinner />;
  return (
    <div
      className="bg-dimgray z-30 float-left flex
  h-[100%] w-[50%] flex-col overflow-x-hidden overflow-y-scroll px-1 py-3 shadow-xl shadow-black"
    >
      <Chats
        users={users}
        isLoading1={isLoading1}
        isLoading2={isLoading1}
        currentUser={currentUser}
      />
    </div>
  );
}

export default Sidebar;
