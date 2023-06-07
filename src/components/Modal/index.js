import { useRef } from "react";
import { ComponentLayOut, BG, ModalInner } from "./style.js"

const Modal = ({ modalOpen, setModalOpen, innerContents }) => {
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
                <ModalInner>
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