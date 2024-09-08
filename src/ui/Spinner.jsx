import { createPortal } from "react-dom";

function Spinner() {
  return createPortal(
    <div className=" bg-darkgray absolute top-0 z-20 flex h-screen w-screen items-center justify-center">
      <div className="loader"></div>
    </div>,
    document.body,
  );
}

export default Spinner;
/* HTML: <div class="loader"></div> */
