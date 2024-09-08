import { HiEllipsisVertical, HiOutlineClock } from "react-icons/hi2";
import { formatTime, getDate } from "../../services/helpers";
import Modal from "../../ui/Modal";
import { useEffect, useState } from "react";
import MiniModal from "../../ui/MiniModal";

function Message({
  id,
  text,
  image,
  isSender,
  receiverName,
  senderName,
  time,
  isLast,
}) {
  const [showModal, setShowModal] = useState("");
  const [showMenu, setShowMenu] = useState("");

  // word-wrap: break-word; /* For older browsers */
  // overflow-wrap: break-word; /* For newer browsers */
  // white-space: pre-line; /* Preserve line breaks */

  if (image)
    return (
      <div
        className="relative my-2 flex h-auto w-[100%]"
        id={isLast ? "last-message" : ""}
      >
        {showModal && (
          <Modal
            image={image}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        )}
        {isSender ? (
          <div className=" flex h-full w-full justify-end text-light">
            <div
              onClick={(e) => {
                if (e.target?.closest("button")?.classList.contains("button"))
                  setShowMenu({ id, text });
                else setShowModal(image);
              }}
              className={`${isSender ? "rounded-br-none" : ""} relative h-auto w-auto rounded-xl bg-transparent p-5`}
              id={showMenu === id ? "modal-parent" : ""}
            >
              {/* ---------------------------- MODAL ---------------------------- */}
              {showMenu && (
                <MiniModal text={text} setShowMenu={setShowMenu} id={id} />
              )}
              {/* Options menu button*/}
              <button
                className={` button absolute ${text ? "right-[-20px] top-1" : "right-0 top-10"} bg-transparent `}
                onClick={() => setShowMenu({ id, text })}
              >
                <HiEllipsisVertical size={24} color="white" />
              </button>
              <span className="absolute right-2 top-2 flex items-center gap-1 text-xs font-semibold ">
                <HiOutlineClock size={15} />
                {formatTime(time)}
              </span>

              <img
                src={image}
                alt="image"
                className=" m-1 h-80 w-auto cursor-pointer rounded-2xl shadow-lg shadow-black"
              />

              <span className=" absolute bottom-2 right-2 text-xs font-semibold ">
                {getDate(time)}
              </span>
            </div>

            <div className=" flex w-auto items-end justify-end px-2">
              {isSender ? senderName : receiverName}
            </div>
          </div>
        ) : (
          <div className=" flex h-full w-full justify-start text-light">
            <div className="  flex w-auto items-end justify-start px-2">
              {isSender ? senderName : receiverName}
            </div>
            <div
              onClick={(e) => {
                if (e.target?.closest("button")?.classList.contains("button"))
                  setShowMenu({ id, text });
                else setShowModal(image);
              }}
              className={`${isSender ? "" : "rounded-bl-none"} relative h-auto w-auto rounded-xl bg-transparent p-5`}
            >
              {/* ---------------------------- MODAL ---------------------------- */}
              {showMenu && (
                <MiniModal text={text} setShowMenu={setShowMenu} id={id} />
              )}
              {/* Options menu button*/}
              <button
                className={` button absolute ${text ? "right-[-20px] top-1" : "right-0 top-10"} bg-transparent `}
                onClick={() => setShowMenu({ id, text })}
              >
                <HiEllipsisVertical size={24} color="white" />
              </button>
              <span className="absolute right-2 top-2 flex items-center gap-1 text-xs font-semibold">
                <HiOutlineClock size={15} />
                {formatTime(time)}
              </span>
              <img
                src={image}
                alt="image"
                className="m-1 h-80 w-auto cursor-pointer rounded-2xl shadow-lg shadow-black"
              />
              <span className=" absolute bottom-2 right-2 text-xs font-semibold ">
                {getDate(time)}
              </span>
            </div>
          </div>
        )}
      </div>
    );
  return (
    <div className={` relative my-4 flex h-auto w-[100%] rounded-xl`}>
      {isSender ? (
        <div className={`${isSender ? " justify-end" : ""} flex w-full`}>
          <div
            className={`${isSender ? "rounded-br-none" : ""} relative h-auto w-auto min-w-[250px] max-w-[600px] rounded-xl bg-lightgray p-5 font-medium text-light`}
          >
            {/* ---------------------------- MODAL ---------------------------- */}
            {showMenu && (
              <MiniModal text={text} setShowMenu={setShowMenu} id={id} />
            )}
            {/* Options menu button*/}
            <button
              className={` button absolute ${text ? "right-[-20px] top-1" : "right-0 top-10"} bg-transparent `}
              onClick={() => setShowMenu({ id, text })}
            >
              <HiEllipsisVertical size={24} color="white" />
            </button>
            <span className="absolute right-2 top-2 flex items-center gap-1 text-xs font-semibold">
              <HiOutlineClock size={15} />
              {formatTime(time)}
            </span>
            {text}
            <span className=" absolute bottom-2 right-2 text-xs font-semibold">
              {getDate(time)}
            </span>
          </div>
          <div className=" flex w-auto items-end justify-end px-2 text-light">
            {isSender ? senderName : receiverName}
          </div>
        </div>
      ) : (
        <div className={`${isSender ? " justify-start" : ""} flex w-full `}>
          <div className=" flex w-auto items-end justify-start px-2 text-light">
            {isSender ? senderName : receiverName}
          </div>
          <div
            className={`${isSender ? "" : "rounded-bl-none"} relative h-auto w-auto min-w-[250px] max-w-[600px] rounded-xl bg-turqoise p-5 font-medium text-dimgray`}
          >
            {/* ---------------------------- MODAL ---------------------------- */}
            {showMenu && (
              <MiniModal text={text} setShowMenu={setShowMenu} id={id} />
            )}
            {/* Options menu button*/}
            <button
              className={` button absolute ${text ? "right-[-20px] top-1" : "right-0 top-10"} bg-transparent `}
              onClick={() => setShowMenu({ id, text })}
            >
              <HiEllipsisVertical size={24} color="white" />
            </button>
            <span className="absolute right-2 top-2 flex items-center gap-1 text-xs font-semibold text-lightgray">
              <HiOutlineClock size={15} />
              {formatTime(time)}
            </span>
            {text}
            <span className=" absolute bottom-2 right-2 text-xs font-semibold text-lightgray">
              {getDate(time)}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Message;
