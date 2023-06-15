import { useRef } from "react";
import { BG, ComponentLayOut, ModalInner } from "./style.js";

const Modal = ({ modalOpen, setModalOpen, innerContents, width }) => {
  const ModalBG = useRef();
  return (
    <>
      {
        modalOpen ?
          (
            <ComponentLayOut>
              <BG ref={ModalBG} onClick={(e) => {
                if (ModalBG.current === e.target) {
                  setModalOpen(false);
                }
              }}>
                <ModalInner width={width}>
                  {innerContents}
                </ModalInner>
              </BG>
            </ComponentLayOut>
          )
          :
          null
      }
    </>
  )
}

export default Modal;