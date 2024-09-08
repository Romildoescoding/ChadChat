import { createPortal } from "react-dom";
import useOutsideClick from "../hooks/useOutsideClick";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function Modal({ image, showModal, setShowModal }) {
  const ref = useOutsideClick(() => setShowModal(""));
  return createPortal(
    <div className=" absolute top-0 z-[1000] grid h-screen w-screen place-items-center backdrop-blur-md">
      <div
        className=" relative h-auto w-auto bg-darkgray p-6 shadow-md"
        ref={ref}
      >
        <button
          onClick={() => setShowModal("")}
          className=" absolute right-2  top-2 z-50 flex h-10 w-10 place-items-center items-center justify-center rounded-full bg-turqoise p-1 text-[25px] font-bold transition-all duration-300 hover:bg-teal-500"
        >
          &times;
        </button>
        <TransformWrapper maxScale={3} minScale={1}>
          <TransformComponent>
            <img src={image} alt="image" className=" h-[500px] w-auto" />
          </TransformComponent>
        </TransformWrapper>
      </div>
    </div>,
    document.body,
  );
}

export default Modal;
