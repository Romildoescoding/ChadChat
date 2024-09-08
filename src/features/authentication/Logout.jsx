import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLogout } from "./useLogout";
import MiniSpinner from "../../ui/MiniSpinner";
import {
  HiArrowLeftOnRectangle,
  HiArrowRightOnRectangle,
} from "react-icons/hi2";

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <button
      onClick={() => logout()}
      className="bg-turqoise hover:text-turqoise hover:bg-darkgray border-turqoise flex h-10 w-10 items-center justify-center rounded-md transition-all duration-75 hover:border-[2px]"
    >
      {isLoading ? <MiniSpinner /> : <HiArrowRightOnRectangle size={25} />}
    </button>
  );
}

export default Logout;
