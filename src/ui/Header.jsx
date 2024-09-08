import { Link } from "react-router-dom";
import Logout from "../features/authentication/Logout";
import { useUser } from "../features/authentication/useUser";
import { useUsers } from "../features/chats/useUsers";
import { HiArrowLongRight } from "react-icons/hi2";

function Header() {
  const { user: currentUser } = useUser();
  const { users } = useUsers();

  const avatar = users?.filter(
    (user) => user?.email === currentUser?.user_metadata.email,
  )[0].avatar;

  return (
    <div className="z-10 flex h-[10%] w-screen items-center justify-between rounded-3xl rounded-tl-none rounded-tr-none bg-darkgray px-5  shadow-black">
      <div className=" h-16 w-auto">
        <Link to="/dashboard">
          <img src="/logo-2.png" className=" h-16 w-auto" />
        </Link>
      </div>
      <div className=" flex w-[25%] items-center justify-end gap-5">
        <Logout />

        <div className="flex h-full w-[50%] cursor-pointer items-center justify-center gap-2 rounded-full bg-turqoise p-1 text-darkgray transition-all hover:border-[2px] hover:border-turqoise hover:bg-darkgray hover:text-turqoise">
          <img src={avatar} className=" h-10 w-10 rounded-full" />
          <div className="text-xl font-semibold">
            {currentUser.user_metadata.username}
          </div>
          <HiArrowLongRight size={40} />
        </div>
      </div>
    </div>
  );
}

export default Header;
