import useOutsideClick from "../hooks/useOutsideClick";
import { HiClipboard, HiTrash } from "react-icons/hi2";
import { copyToClipBoard } from "../services/helpers";
import { useDelete } from "../features/chats/useDelete";

function MiniModal({ text, setShowMenu, id }) {
  console.log(id);

  const { deleteMessage, isLoading } = useDelete();
  function handleDelete(e) {
    e.stopPropagation();
    // console.log(id);
    deleteMessage({ id });
  }
  const ref = useOutsideClick(() => setShowMenu(""));
  return (
    <div
      className={` absolute right-0 top-10  ${text ? "" : ""} z-[1000] bg-lightgray/50 ${text ? "h-24" : "h-12"} w-48 rounded-xl p-1 text-white backdrop-blur-md backdrop-brightness-200`}
      id="mini-modal"
      ref={ref}
    >
      <button
        onClick={handleDelete}
        className={`flex ${text ? "h-[50%]" : "h-full"} w-full items-center justify-center gap-2 rounded-xl hover:bg-gray-200/20`}
      >
        Delete <HiTrash />
      </button>
      {text && (
        <button
          onClick={() => {
            console.log(text);
            copyToClipBoard(text);
            setShowMenu("");
          }}
          className="flex h-[50%] w-full items-center justify-center gap-2 rounded-xl hover:bg-gray-200/20"
        >
          Copy <HiClipboard />
        </button>
      )}
    </div>
  );
}

export default MiniModal;
